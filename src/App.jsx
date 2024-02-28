import React, { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const toUpperCaseHandler = (userText) => {
    setConvertedText(userText.toUpperCase());
    if (text !== "") {
      toast.success("Converted To Upper Case");
      setText("");
    } else {
      toast.error("No text to convert");
    }
  };
  const toLowerCaseHandler = (userText) => {
    setConvertedText(userText.toLowerCase());
    if (text !== "") {
      toast.success("Converted To Lower Case");
      setText("");
    } else {
      toast.error("No text to convert");
    }
  };
  const CopyText = (data) => {
    navigator.clipboard.writeText(data);
    toast.success("Text copied to Clipboard");
  };

  return (
    <main>
      <Toaster />

      {/* Take Input From User  */}
      <section className="user-input-section">
        <h1>Text Converter</h1>
        <textarea
          name="text"
          id=""
          placeholder="Enter the text you want to convert..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="user-btns">
          <button onClick={() => toUpperCaseHandler(text)}>
            Convert to Upper Case
          </button>
          <button onClick={() => toLowerCaseHandler(text)}>
            Convert to Lower Case
          </button>
        </div>
      </section>

      {/* Result Given to User  */}
      <section className="result">
        <h2>Converted Text</h2>
        {convertedText !== "" ? (
          <p>
            {convertedText}
            <button onClick={() => CopyText(convertedText)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-copy"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                />
              </svg>
            </button>
          </p>
        ) : (
          <p></p>
        )}
      </section>
    </main>
  );
};

export default App;
