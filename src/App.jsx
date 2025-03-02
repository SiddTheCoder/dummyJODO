import React, { useState, useEffect } from "react";
import usePassword from "./hooks/usePassword";
import useRecoveryText from "./hooks/useRecoveryText";

function App() {
  const [name, setName] = useState("");
  const [realName, setRealName] = useState("");
  const [fcount, setFcount] = useState("");
  const [condition, setCondition] = useState(false);

  const password = usePassword();
  const recoveryText = useRecoveryText();

  // Delay updating realName when name changes
  useEffect(() => {
    if (name.trim() === "") return;

    const timer = setTimeout(() => {
      setRealName(name);
    }, 5000);

    return () => clearTimeout(timer); // Clear timeout if name changes quickly
  }, [name]);

  // Delay checking the family number (fcount) after a delay
  useEffect(() => {
    if (fcount.trim() === "") return;

    const timer = setTimeout(() => {
      if (Number(fcount) === 5) {
        if (
          realName.toLowerCase() === "siddhant yadav" ||
          realName.toLowerCase() === "anuz" ||
          realName.toLowerCase() === "parth"
        ) {
          setCondition(true);
        } else {
          setCondition(false);
        }
      }
    }, 10000); // Add delay here

    return () => clearTimeout(timer); // Clean up timeout on fcount change
  }, [fcount, realName]);

  return (
    <div>
      <h1 className="text-4xl absolute top-10">
        A <span className="text-blue-500">DUMMY</span> PRACTICE PROGRAM
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()} // Prevent default form submission
        className="flex flex-col items-center justify-center h-auto gap-5 mt-20"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name or nickname"
          className="bg-slate-700 text-slate-100 rounded-md px-5 py-2 w-100"
        />
        <input
          value={fcount}
          onChange={(e) => setFcount(e.target.value)}
          type="number"
          placeholder="Family Number"
          className="bg-slate-700 text-slate-100 rounded-md px-5 py-2 w-100"
        />
      </form>
      <p className="text-center text-lg mt-5">Thanks For Visiting Me Boss</p>

      {condition && (
        <div className="h-auto w-[90%] mx-auto bg-slate-700 rounded mt-3 p-5 text-center">
          <h1 className="text-2xl">Password</h1>
          <p className="text-lg">{password}</p>
          <h1 className="text-2xl">Recovery Text</h1>
          <p className="text-lg">{recoveryText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
