import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>hELLO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    title: { color: 'red'}
});
