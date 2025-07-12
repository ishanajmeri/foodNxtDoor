import { ThemedText } from "@/components/ThemedText";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");
const cardWidth = width / 2;

const ExploreItemCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.restaurantCard} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.restaurantInfo}>
          <ThemedText style={styles.restaurantName}>{item.name}</ThemedText>
          <View style={styles.restaurantMeta}>
            <ThemedText style={styles.distance}>{item.distance}</ThemedText>
            <ThemedText style={styles.rating}>★ {item.rating}</ThemedText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreItemCard;
const styles = StyleSheet.create({
  restaurantsContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  restaurantsContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  restaurantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  restaurantCard: {
    width: cardWidth,
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  restaurantInfo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontFamily: "Inter-SemiBold",
    color: "#ffffff",
    marginBottom: 4,
  },
  restaurantMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  distance: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#e2e8f0",
  },
  rating: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    color: "#fbbf24",
  },
});
