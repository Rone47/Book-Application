import { useState } from "react";
import { View, Alert } from "react-native";
import { useRouter } from "expo-router";
import { API_URL } from "../../constants/api";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";
import styles from "../../assets/styles/create.styles";
import ProfileHeader from "../../components/ProfileHeader";
import LogoutButton from "../../components/LogoutButton";

const [books, setBooks] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [refreshing, setRefreshing] = useState(false);

const router = useRouter();

const { token } = useAuthStore();

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/books/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to fetch user books");

    setBooks(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    Alert.alert("Error", "Failed to load profile data. Pull down to refresh.");
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchData();
}, []);

export default function profile() {
  return (
    <View style={styles.container}>
      <ProfileHeader/>
      <LogoutButton/>
    </View>
  );
}
