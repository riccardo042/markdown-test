import { useState } from 'react';
import { marked } from "marked";

// Default markdown text
const defaultText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine === 'false' && lastLine === 'false') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](www.w.com)
`;

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <>
      <h1>Markdown Previewer</h1>
      <Editor text={text} setText={setText} />
      <Preview text={text} />
    </>
  );
}

// Editor Component
function Editor({ text, setText }) {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <textarea
      id="editor"
      value={text}
      onChange={handleChange}
      rows="15"
      cols="60"
    ></textarea>
  );
}

// Preview Component
function Preview({ text }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    ></div>
  );
}

export default App;