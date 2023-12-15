import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import supersub from 'remark-supersub';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
const CodeBlock = ({ value }) => {

    return (
        <code className='overflow-y-auto min-h-8 flex flex-row p-3 px-1 text-base bg-black text-white rounded-md'>{value}</code>
    );
};

const TypingEffect = ({ text, bot }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, [text, currentIndex]);

    const components = {
        code: ({ node, inline, children, ...props }) => {

            const className = inline ? 'inline-code' : 'block-code';
            // Pass children (content) as value prop to CodeBlock component
            return <CodeBlock value={children} {...props} />;
        },
        blockquote: ({ node, children }) => <blockquote>{children}</blockquote>,

        heading: ({ level, children }) => {

            if (level === 2) {
                return <h2>{children}</h2>;
            }
            return <h1>{children}</h1>;
        },

    };




  // Assuming 'bot' is a boolean variable determining which content to display

if (bot === true) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath, supersub, remarkBreaks]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={components}
            className='text-base text-slate-900 font-sora'
        >
            {displayedText}
        </ReactMarkdown>
    );
} else {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath, supersub, remarkBreaks]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={components}
            className='text-base text-slate-900 font-sora'
        >
            {text}
        </ReactMarkdown>
    );
}


};

export default TypingEffect;
