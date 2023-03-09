import { useMemo, useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Letter from "./letter";

const preDefinedText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis mauris dictum, mollis quam et, luctus tortor. Etiam fringilla elementum tellus, in scelerisque massa. Proin gravida mi eu auctor viverra. Proin laoreet vestibulum scelerisque. Donec vestibulum accumsan blandit. Suspendisse fringilla tincidunt bibendum. Nullam volutpat, massa sed porttitor molestie, ipsum ante bibendum arcu, in porta ex sem vitae lectus. Mauris a mauris luctus, pellentesque risus vitae, iaculis felis. Sed auctor aliquam arcu.

Phasellus lobortis congue vestibulum. Aliquam dapibus sapien nec sem porttitor venenatis. Nullam in congue mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin risus sed enim lobortis, ac sollicitudin odio lobortis. Nunc semper lobortis dui in posuere. In hac habitasse platea dictumst. In hac habitasse platea dictumst. In laoreet ullamcorper est non ornare. Cras non erat blandit, porta tellus a, consequat ante. Etiam eleifend hendrerit nunc id semper. Phasellus ut elementum leo. Nullam nunc ipsum, cursus et lobortis at, mollis eu nisi. Sed consequat non tortor eu bibendum. Nullam ut ultricies diam.

Quisque at erat sed lectus posuere sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit in turpis varius bibendum. Quisque volutpat tellus at lectus imperdiet faucibus. In id augue magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id pellentesque turpis. Pellentesque id cursus nunc, et consectetur nulla. Morbi accumsan finibus luctus. Phasellus urna nisi, ultricies vitae mattis id, convallis feugiat turpis. Aenean eu porttitor dolor.`;

const CoverLetterForm = ({ company }) => {
  const today = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [date, setDate] = useState(today);
  const [recipient, setRecipient] = useState("Software Team Hiring Manager");
  const [letterText, setLetterText] = useState(preDefinedText);

  const paragraphs = useMemo(() => {
    return letterText.split("\n\n");
  }, [letterText]);

  const letter = (
    <Letter
      date={date}
      paragraphs={paragraphs}
      recipient={recipient}
      company={company}
    />
  );

  return (
    <>
      <form>
        <div className="formitem">
          <label>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="formitem">
          <label>To:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        <div className="formitem">
          <label>Text:</label>
          <textarea
            type="text"
            value={letterText}
            onChange={(e) => setLetterText(e.target.value)}
          />
        </div>
        <PDFDownloadLink
          className="download"
          document={letter}
          fileName={
            company
              ? `cover-letter_${company.toLowerCase()}.pdf`
              : "cover-letter.pdf"
          }
        >
          {({ loading }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </form>
      <div className="frame">
        {paragraphs.length > 0 ? (
          <PDFViewer showToolbar={false}>{letter}</PDFViewer>
        ) : null}
      </div>
    </>
  );
};

export default CoverLetterForm;
