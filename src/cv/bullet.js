import { View, Text } from "@react-pdf/renderer";
import styles from "../styles";

const Bullet = ({ text }) => (
  <View style={styles.bulletPoint}>
    <Text style={styles.bullet}>·</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

export default Bullet;
