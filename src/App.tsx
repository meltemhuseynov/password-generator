import { useEffect, useState } from "react";
import "./App.css";
import { AiFillCopy } from "react-icons/ai";

function App() {
  const [inputValue, setInputValue] = useState<any>();
  const [password, setPassword] = useState<string>();
  const [copyAllert, setCopyAllert] = useState<boolean>(false);

  const createPassword = () => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = 14;

    let createdPassword = "";
    for (let i = 0; i < number; i++) {
      const rondomPassword = Math.floor(Math.random() * characters.length);
      createdPassword += characters[rondomPassword];
    }

    setPassword(createdPassword);
  };

  const copyPassword = () => {
    if (password) {
      inputValue;
      navigator.clipboard.writeText(password);
      setCopyAllert(!copyAllert);

      setTimeout(() => {
        setCopyAllert(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <h2>Create Password</h2>
        <div className="inputPassword">
          <input
            type="text"
            placeholder="Click to create button to be passwort"
            readOnly
            value={password}
            onChange={(e) => {
              setInputValue(e.target.select());
            }}
          />
          <button className="copyButton" onClick={() => copyPassword()}>
            <AiFillCopy />
          </button>
        </div>
        <button className="createButton" onClick={() => createPassword()}>
          Create
        </button>
      </div>
      {copyAllert && (
        <div className={copyAllert ? "allertPassword" : "allertPasswordActive"}>
          {password + "   kopyalandı"}
        </div>
      )}
    </>
  );
}

export default App;
