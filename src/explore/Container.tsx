import SafeAreaInsertView from "@/components/SafeAreaInsertView";
import { ThemedText } from "@/components/ThemedText";
import { ArrowUpDown } from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ExploreItemContainer from "./Components/ExploreItemContainer";
const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;
const categories = [
  { id: "all", name: "All" },
  { id: "italian", name: "Italian" },
  { id: "japanese", name: "Japanese" },
  { id: "mexican", name: "Mexican" },
  { id: "chinese", name: "Chinese" },
  { id: "indian", name: "Indian" },
];

const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    category: "italian",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "0.5 km",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Sakura Sushi",
    category: "japanese",
    image:
      "https://images.pexels.com/photos/8969288/pexels-photo-8969288.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "0.8 km",
    rating: 4.9,
    widthRatio: 1,
    heightRatio: 2,
  },
  {
    id: 3,
    name: "The Bistro",
    category: "all",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "1.2 km",
    rating: 4.6,
  },
  {
    id: 4,
    name: "El Taco Loco",
    category: "mexican",
    image:
      "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "0.9 km",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Dragon Palace",
    category: "chinese",
    image:
      "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "1.5 km",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Taj Mahal",
    category: "indian",
    image:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "2.1 km",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Pasta Corner",
    category: "italian",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "1.8 km",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Ramen House",
    category: "japanese",
    image:
      "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=800",
    distance: "1.3 km",
    rating: 4.7,
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      selectedCategory === "all" || restaurant.category === selectedCategory
  );

  const CategoryTab = ({
    category,
    isSelected,
    onPress,
  }: {
    category: { id: string; name: string };
    isSelected: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      style={[styles.categoryTab, isSelected && styles.categoryTabActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[styles.categoryText, isSelected && styles.categoryTextActive]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaInsertView>
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Nearby Places</ThemedText>
        <TouchableOpacity style={styles.sortButton} activeOpacity={0.7}>
          <ArrowUpDown size={20} color="#64748B" />
          <Text style={styles.sortText}>Distance</Text>
        </TouchableOpacity>
      </View>
      {/* TODO: handle filter */}
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <CategoryTab
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView> */}

      <ExploreItemContainer items={filteredRestaurants} />
    </SafeAreaInsertView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: "Inter-Bold",
    lineHeight: 32,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  sortText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#64748B",
  },
  categoriesContainer: {
    maxHeight: 60,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  categoryTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 25,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  categoryTabActive: {
    backgroundColor: "#1e293b",
    borderColor: "#1e293b",
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#64748B",
  },
  categoryTextActive: {
    color: "#ffffff",
  },
  restaurantsContainer: {
    flex: 1,
    marginTop: 8,
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
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 16,
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
  restaurantImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
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
