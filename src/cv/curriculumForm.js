import React, { useState, useEffect, useMemo } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Curriculum from "./curriculum";
import { fetchFromSheets, sortExperiences } from "../utils";

const CurriculumForm = ({ company }) => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [summary, setSummary] = useState([]);
  const [intro, setIntro] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [objective, setObjective] = useState('');
  const [showObjective, setShowObjective] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const experienceArray = await fetchFromSheets("experience");
      const summaryArray = await fetchFromSheets("summary");
      const introArray = await fetchFromSheets("intro");
      const contactsArray = await fetchFromSheets("contacts");
      setExperiences(experienceArray);
      setSummary(summaryArray);
      setIntro(introArray);
      setContacts(contactsArray);
    };
    fetchData();
  }, []);

  const setExperience = (e) => {
    const {
      target: { value },
    } = e;
    if (selectedExperiences.includes(value)) {
      setSelectedExperiences(
        selectedExperiences.filter((item) => item !== value)
      );
    } else {
      setSelectedExperiences([...selectedExperiences, value]);
    }
  };

  const filteredExperiences = useMemo(() => {
    return experiences
      .filter((experience) => selectedExperiences.includes(experience.key))
      .sort(sortExperiences);
  }, [selectedExperiences, experiences]);

  const curriculum = (
    <Curriculum
      company={company}
      experiences={filteredExperiences}
      summary={summary}
      intro={intro}
      objective={showObjective ? objective : null}
      contacts={contacts}
    />
  );

  return (
    <>
      <form>
        <div className="formitem">
          <label>Objective:</label>
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
          <div className="checkboxes">
            <input
              type="checkbox"
              id="objective"
              checked={!showObjective}
              onChange={() => setShowObjective(!showObjective)}
            />
            <label htmlFor="objective">Remove this section</label>
          </div>
        </div>
        <div className="formitem">
          <label>Relevant experience:</label>
          <div className="checkboxes">
            {experiences.sort(sortExperiences).map((experience) => {
              return (
                <div key={experience.key}>
                  <input
                    type="checkbox"
                    id={experience.key}
                    value={experience.key}
                    checked={selectedExperiences.includes(experience.key)}
                    onChange={setExperience}
                  />
                  <label htmlFor={experience.key}>{experience.key}</label>
                </div>
              );
            })}
          </div>
        </div>
        <PDFDownloadLink
          className="download"
          document={curriculum}
          fileName={
            company
              ? `cv_${company.toLowerCase()}.pdf`
              : "cv.pdf"
          }
        >
          {({ loading }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </form>
      <div className="frame">
        {experiences.length > 0 ? (
          <PDFViewer showToolbar={false}>{curriculum}</PDFViewer>
        ) : null}
      </div>
    </>
  );
};

export default CurriculumForm;
