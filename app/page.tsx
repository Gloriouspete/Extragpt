'use client'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaCircleUser, FaFile } from "react-icons/fa6";
import { IoSend, IoFileTrayFull } from 'react-icons/io5';
import TypingEffect from './typeeffect.js';
import { handleFileSelection } from './log';
import Log from './log';

export default function Home() {
  const [text, setText] = useState(``)
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [isloading, setIsloading] = useState(false)
  const [content, setContent] = useState('')
  const [check, setCheck] = useState(true)
  const [ischoose, setIschoose] = useState(false)
  const [svgtext, setSvgtext] = useState('fill-black')
  const [messagearray, setMessagearray] = useState<datar[]>([]);
  const [dots, setDots] = useState('...')
  const scrollbottom = () => {

    chatContainerRef.current?.scrollIntoView({ behavior: 'smooth' });

  };
  useEffect(() => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    })
  }, [])
  useEffect(() => {
    scrollbottom()

  }, [messagearray])

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  };
  const gpt = (
    <FaRobot color='' size={25} />
  )
  const person = (
    <FaCircleUser className='fill-indigo-500' size={25} />
  )
  const loader = async (textse:any) => {
    const uniqueid = generateUniqueId();

    const newData: datar = {
      id: uniqueid,
      text: "Loading . . .",
      isAi: true,
      timer: getCurrentTime()
    };

    if (textse === 'yes') {
      setMessagearray(prevArray => [...prevArray, newData]);
    }
    else if (textse === 'no'){
      setMessagearray(prevArray => prevArray.filter(item => item.text !== newData.text));
    }
  };
  interface datar {
    id: string;
    text: string;
    isAi: boolean;
    timer: string;
  };
  function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedTime;
  };


  const setgptMessage = async (text: any) => {
    const textse = 'no'
    await loader(textse)
    const uniqueid = generateUniqueId();

    const newData: datar = {
      id: uniqueid,
      text: text,
      isAi: true,
      timer: getCurrentTime()
    };
 //   setMessagearray(prevArray => [...prevArray.filter(item => item.text !== "Loading . . ."), newData]);
    setMessagearray(prevArray => [...prevArray, newData]);
    console.log(newData,messagearray)
  };

 

  const setMessage = async (text: string) => {
    const uniqueid = generateUniqueId();
    const timer = getCurrentTime()
    if (text === '') {
      return
    }
    else if (isloading) {
      return
    }
    const newData: datar = {
      id: uniqueid,
      text: text,
      isAi: false,
      timer: timer
    };

    // Merge new data with existing array
    setMessagearray(prevArray => [...prevArray, newData]);
    setText('');
    process(text);
  };

  const process = async (text: string) => {
    const textse = 'yes'
   // await loader(textse)
    try {
      const results = "Relation can be defined as the way in which two or more people or things are connected; ```javascript a thing's effect on or relevance to another: questions about the relation between writing and reality ``` | the size of the ##targets bore no relation to their importance.."
      const result = await Log(text);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setgptMessage(result);
      scrollbottom();

    } catch (error) {
      console.log(error);
    }
  };


  const handleFile = async (file: any) => {
    const selectedFile = file[0]; // Get the first selected file

    if (selectedFile) {
      setSvgtext('fill-green-700')
      setContent(`Converting ${selectedFile.name} to text ...`)
      setIschoose(true)
      console.log('Selected file:', selectedFile.name);
      setIsloading(true)
      try {
        const result = await handleFileSelection(file)
        if (result?.success === true) {
          console.log('i received the text', result.data)
          setText((prev) => prev + result.data)
          setIschoose(false)
          setIsloading(false)
        }
        else {
          console.log('oga o')
          // setIschoose(false)
          setIsloading(false)
        }
      }
      catch (error) {
        //  setIschoose(false)
        setIsloading(false)
      }
    }
  }



  return (
    <div className="flex w-screen h-auto min-h-screen flex-col bg-white items-center">
      <div className='w-screen h-full pb-28 overscroll-y-auto'>
        {
          messagearray.map((item, index) => (
            <div className={`w-full h-auto box-border ${item.isAi ? "bg-slate-300" : "bg-slate-50"} overflow-y-auto min-h-8 flex flex-row pt-3 px-1 text-base text-slate-900 my-2`} key={index}>
              <div className={`flex-shrink-0 flex flex-col relative items-end mx-2 py-2`}>
                {item.isAi ? gpt : person}
              </div>
              <div className={`flex-grow h-auto box-border overflow-y-auto min-h-8 flex flex-col py-3 px-1`}>
                <p className='mb-3 font-extrabold font-' >{item.isAi ? 'ExtraGpt' : "You"}</p>
                <TypingEffect text={item.text} bot={item.isAi ? true : false} />
                <div className={item.isAi ? `w-full h-auto px-4 items-center justify-end flex flex-row text-sm font-extrabold` : 'hidden'}>{item.timer}</div>
              </div>

            </div>
          ))
        }
        <div ref={chatContainerRef}></div>

      </div>
      <div className='h-24 w-full border flex flex-col items-center py-2 bottom-0 fixed bg-white'>

        <form className='h-auto w-11/12 shadow shadow-slate-400 flex flex-row px-2 py-3 rounded-xl justify-between' onSubmit={(e) => {
          e.preventDefault(); // Prevents default form submission behavior
          setMessage(text);
        }} >
          <label htmlFor="fileInput">
            <IoFileTrayFull className={svgtext} size={20} />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => handleFile(e.target.files)}
          />
          <textarea
            className='flex-grow border-0 outline-none text-base focus:outline-none h-auto min-h-8 font-sora resize-none overflow-y-auto text-center text-slate-900'
            placeholder='Send a message to ExtraGpt'
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows={1} // Set initial rows to 1
            style={{ maxHeight: '8rem' }} // Set a minimum height
          />
          <IoSend className='fill-indigo-500 m-1' size={20} onClick={() => setMessage(text)} />
        </form>
        <p className='text-sm my-2 text-slate-500'>
          Designed and created by
          <a className='text-sm my-2 text-blue-500' href="https://github.com/gloriouspete"> Glorious</a>
        </p>
      </div>
      {
        ischoose &&
        <div className='fixed flex flex-row h-auto w-auto p-2 mx-2 bottom-24 bg-red-500 rounded-md text-white items-center'>
          <FaFile color='white' size={18} />
          <p className='text-white text-base px-2'>{content}</p>
        </div>
      }
    </div >
  )
}
