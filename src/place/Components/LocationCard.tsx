import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MapPin } from "lucide-react-native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const LocationCard = () => {
  return (
    <ThemedView style={styles.section}>
      <ThemedText style={styles.sectionTitle}>Location</ThemedText>
      <ThemedView style={styles.mapContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
          }}
          style={styles.mapImage}
        />
        <TouchableOpacity style={styles.directionsButton} activeOpacity={0.8}>
          <MapPin size={16} color="#3b82f6" />
          <ThemedText style={styles.directionsText}>Get Directions</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedText style={styles.address}>
        123 Madison Avenue, New York, NY 10001
      </ThemedText>
    </ThemedView>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#1e293b",
    marginBottom: 16,
  },
  mapContainer: {
    position: "relative",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  directionsButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  directionsText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#3b82f6",
  },
  address: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#64748b",
    lineHeight: 20,
  },
});
