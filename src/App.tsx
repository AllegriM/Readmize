import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const markdown = `
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

  return (
    <div className="flex min-h-screen p-2 gap-x-8">
      {/* <h1 className="font-bold text-3xl">Create ReadMe</h1> */}
      <div className="w-1/2">
        <p className="font-bold border-solid border-b-2 border-gray-300">
          Markdown
        </p>
        <textarea
          onChange={(e) => writeMarkdownText(e)}
          className="mt-4 bg-white max-h-[95%] h-full resize-none p-2 w-full"
          value={markdownText}
          name=""
          id=""
        ></textarea>
      </div>
      <div className="w-1/2">
        <p className="font-bold border-solid border-b-2 border-gray-300">
          Preview
        </p>
        <ReactMarkdown className="mt-4 markdown" remarkPlugins={[remarkGfm]}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
