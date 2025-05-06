import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import {useAuthStore} from '../store/authStore'


export default function Index() {
  const {user, token} =useAuthStore();

  console.log(user,token);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>hELLO</Text>
      <Link href='/(auth)/signup'>Signup</Link>
      <Link href='/(auth)'>Login</Link>
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
