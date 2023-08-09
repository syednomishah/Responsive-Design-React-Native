import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header} />

      {/* main */}
      <View style={styles.main}>
        <View style={styles.section1} />
        <View style={styles.section2}>
          <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   gap: 4,
  },
  header: {
    flex: 1,
    backgroundColor: 'tomato'
  },
  main: {
    flex: 4,
    gap: 4,
    display: 'flex', 
    // flexDirection: 'row'
  },
  section1: {
    flex: 1,
    backgroundColor: 'orange'
  },
  section2: {
    padding: 10,
    flex: 3,
    backgroundColor: 'skyblue'
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightgreen'
  },
  content: {
    fontSize: hp(2)
  }
});
