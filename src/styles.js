import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingHorizontal: 80,
    fontFamily: "Bitter",
    fontSize: 8,
    lineHeight: 1.4,
  },
  title: {
    fontSize: 25,
    fontFamily: "Gantari",
  },
  subTitle: {
    fontSize: 10,
    fontFamily: "Gantari",
    textTransform: "uppercase",
    color: "red",
    lineHeight: 1,
    marginTop: -6,
    marginBottom: 8,
  },
  coverIntro: {
    marginVertical: 10,
  },
  job: {
    width: "45%",
  },
  jobTitle: {
    fontFamily: "Gantari",
    fontSize: 9,
    textTransform: "uppercase",
    color: "red",
    lineHeight: 1,
  },
  jobDescription: {
    marginTop: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: "Gantari",
    fontSize: 11,
    textTransform: "uppercase",
    marginTop: 15,
    marginBottom: 5,
  },
  bulletPoint: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bullet: {
    color: "red",
    width: 10,
    fontWeight: "bold",
    fontSize: 12,
    marginTop: -2,
  },
  bulletText: {
    flex: 1,
  },
  text: {
    fontSize: 9,
    marginVertical: 10,
    marginHorizontal: 40,
  }
});

export default styles;
