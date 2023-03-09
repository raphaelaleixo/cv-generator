import React, { useState } from "react";
import CurriculumForm from "./cv/curriculumForm";
import CoverLetterForm from "./letter/letterForm";

function App() {
  const [mode, setMode] = useState("cv");
  const [company, setCompany] = useState("");

  return (
    <div className="app">
      <div className="wrapper">
        <header>
          <h1>Job Hunt</h1>
          <div>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="For which company?"
            />
          </div>
          <div className="checkboxes">
            <div>
              <input
                type="radio"
                id="cv"
                onChange={() => setMode("cv")}
                checked={mode === "cv"}
              />
              <label htmlFor="cv">CV</label>
            </div>
            <div>
              <input
                type="radio"
                id="letter"
                onChange={() => setMode("letter")}
                checked={mode === "letter"}
              />
              <label htmlFor="letter">Cover Letter</label>
            </div>
          </div>
        </header>
        {mode === "cv" ? (
          <CurriculumForm company={company} />
        ) : (
          <CoverLetterForm company={company} />
        )}
      </div>
    </div>
  );
}

export default App;
