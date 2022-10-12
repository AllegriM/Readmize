import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const markdown = `# Hello
A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
* Lists
* [ ] todo
* [x] done

A table:
| a | b |
| - | - |
`;

  const [markdownText, setMarkdownText] = useState<string>(markdown);

  const writeMarkdownText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  const copyToClipboard = () => {
    console.log(navigator);
    navigator.clipboard.writeText(markdownText);
  };

  return (
    <div className="flex min-h-screen gap-x-8">
      {/* <div className="text-white bg-green-500 p-1 rounded-md absolute">
        Copied!
      </div> */}
      {/* <h1 className="font-bold text-3xl">Create ReadMe</h1> */}
      <div className="relative w-1/2 p-2">
        <p className="font-bold border-solid border-b-2 border-gray-300">
          Markdown
        </p>
        <button
          onClick={copyToClipboard}
          className="absolute top-16 right-6 border-solid border-2 border-gray-400 p-2 rounded-md"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
          </svg>
        </button>
        <textarea
          onChange={(e) => writeMarkdownText(e)}
          className="mt-4 bg-white max-h-[95%] h-full resize-none p-2 w-full"
          value={markdownText}
          name=""
          id=""
        ></textarea>
      </div>
      <div className="w-1/2 p-2">
        <p className="font-bold border-solid border-b-2 border-gray-300">
          Preview
        </p>
        <ReactMarkdown
          className="mt-4 max-h-[95%] h-full overflow-auto markdown-body"
          remarkPlugins={[remarkGfm]}
        >
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
