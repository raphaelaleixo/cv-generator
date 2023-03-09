import {
  Page,
  Text,
  Document,
  Font,
} from "@react-pdf/renderer";
import styles from '../styles';

Font.register({
  family: "Bitter",
  src: "/pdf-fonts/Bitter-Regular.ttf",
});

Font.registerHyphenationCallback((word) => [word]);

const Letter = ({ paragraphs = [], date, recipient, company }) => {
  return (
    <Document
      title={
        company
          ? `cover-letter_${company}.pdf`
          : "cover-letter.pdf"
      }
    >
      <Page style={styles.page}>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{`Dear ${recipient} at ${company},`}</Text>
        {paragraphs.map((paragraph) => (
          <Text style={styles.text} key={paragraph}>
            {paragraph}
          </Text>
        ))}
        <Text style={styles.text}>Raphael Aleixo</Text>
      </Page>
    </Document>
  );
};

export default Letter;
