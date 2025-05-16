import { View, Text } from "react-native";
import { useAuthStore } from "../store/authStore";
import styles from "../assets/styles/create.styles";
import { Image } from "expo-image";

export default function ProfileHeader() {
  const { user } = useAuthStore();
  return (
    <View style={styles.profile.ProfileHeader}>
      <Image source={{uri: user.profileImage}} style={styles.previewImage}/>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </View>
  );
}
