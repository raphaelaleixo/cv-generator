import React from "react";
import JsxParser from "react-jsx-parser";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import styles from "../styles";
import Bullet from "./bullet";

Font.register({
  family: "Bitter",
  fonts: [
    { src: "/fonts/Bitter-Regular.ttf" }, // font-style: normal, font-weight: normal
    { src: "/fonts/Bitter-MediumItalic.ttf", fontStyle: "italic" },
    { src: "/fonts/Bitter-Bold.ttf", fontWeight: "bold" },
  ],
});
Font.register({
  family: "Gantari",
  src: "/fonts/Gantari-Black.ttf",
});

Font.registerHyphenationCallback((word) => [word]);

const replaceText = (text) =>
  text.replace(
    /\*\*(\S(.*?\S)?)\*\*/gm,
    '<Text style={{fontWeight: "bold"}}>$1</Text>'
  );

const Curriculum = ({
  experiences,
  summary,
  intro,
  objective,
  company,
  contacts,
}) => {
  return (
    <Document
      title={
        company
          ? `cv_${company.toLowerCase()}.pdf`
          : "cv.pdf"
      }
    >
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Raphael Aleixo</Text>
          <Text style={styles.subTitle}>
            Product designer + Creative front end developer
          </Text>
          {intro.length ? (
            <Text style={styles.coverIntro}>
              <JsxParser
                bindings={{ styles }}
                components={{ Text }}
                jsx={`<Text>${replaceText(intro[0].intro)}</Text>`}
              />
            </Text>
          ) : null}
          <View>
            {summary.map((item) => (
              <Bullet
                text={
                  <JsxParser
                    bindings={{ styles }}
                    components={{ Text }}
                    jsx={`<Text>${replaceText(item.summary)}</Text>`}
                  />
                }
                key={item.summary}
              />
            ))}
          </View>
          <Text style={styles.sectionTitle}>Contact Info</Text>
          {contacts.map((item) => (
            <Bullet
              key={item.type}
              text={
                <Text>
                  <Text
                    style={{ fontWeight: "bold", marginRight: 5 }}
                  >{`${item.type}: `}</Text>
                  <Text>{item.info}</Text>
                </Text>
              }
            />
          ))}
          {objective ? (
            <>
              <Text style={styles.sectionTitle}>Objective</Text>
              <Text>
                <JsxParser
                  bindings={{ styles }}
                  components={{ Text }}
                  jsx={`<Text>${replaceText(objective)}</Text>`}
                />
              </Text>
            </>
          ) : null}
          <Text style={styles.sectionTitle}>Relevant Experience</Text>
          {experiences.map((experience) => {
            const jobText = replaceText(experience.jobDescription);
            return (
              <View key={experience.key}>
                <Text style={styles.jobTitle}>
                  {`${experience.title} at ${experience.company} (${experience.time})`}
                </Text>
                <JsxParser
                  bindings={{ styles }}
                  components={{ Text }}
                  jsx={`<Text style={styles.jobDescription}>${jobText}</Text>`}
                />
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default Curriculum;
