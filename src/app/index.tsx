import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints((previous) => previous + 1);
  };

  const resetPoints = () => {
    Alert.alert("Reset Points", "Do you want to reset your points to zero?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Reset",
        style: "destructive",
        onPress: () => setPoints(0),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarBorder}>
          <Image
            source={require("../../assets/images/thimira.jpg")}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.profileName}>Thimira</Text>
        <Text style={styles.profileSubtitle}>Personal Profile</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="person-outline" size={22} color="#60A5FA" />
          </View>

          <View style={styles.infoText}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Thimira</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="mail-outline" size={22} color="#60A5FA" />
          </View>

          <View style={styles.infoText}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>thimiranimsara@gmail.com</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="star-outline" size={22} color="#FBBF24" />
          </View>

          <View style={styles.infoText}>
            <Text style={styles.label}>Points</Text>
            <Text style={styles.points}>{points}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.hint}>Tap + to earn a point</Text>

      <TouchableOpacity style={styles.resetButton} onPress={resetPoints}>
        <Ionicons name="refresh-outline" size={18} color="#A1A1AA" />
        <Text style={styles.resetText}>Reset Points</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={addPoint}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },
  profileSection: {
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 30,
  },
  avatarBorder: {
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 3,
    borderColor: "#60A5FA",
    padding: 4,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 68,
    resizeMode: "cover",
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 18,
  },
  profileSubtitle: {
    color: "#94A3B8",
    fontSize: 14,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#1E293B",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  infoText: {
    flex: 1,
  },
  label: {
    color: "#94A3B8",
    fontSize: 13,
    marginBottom: 5,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  points: {
    color: "#FBBF24",
    fontSize: 22,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 4,
  },
  hint: {
    textAlign: "center",
    color: "#94A3B8",
    marginTop: 24,
    fontSize: 14,
  },
  resetButton: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 8,
  },
  resetText: {
    color: "#A1A1AA",
    fontSize: 14,
  },
  floatingButton: {
    position: "absolute",
    right: 25,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
});
