import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, changeStep] = useState(1);
  const handelPrevios = () => {
    if (step > 1) {
      changeStep((prev) => prev - 1);
    }
  };
  const handelNext = () => {
    if (step < 3) {
      changeStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {"Step " + step + " : " + messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelPrevios}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
