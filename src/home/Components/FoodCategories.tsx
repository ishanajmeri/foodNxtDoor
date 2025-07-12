import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");
const foodCategories = [
  {
    id: 1,
    name: "Healthy",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Biryani",
    image:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Pizza",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Haleem",
    image:
      "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Chicken",
    image:
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Cake",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 7,
    name: "Burger",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 8,
    name: "Shawarma",
    image:
      "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];
const FoodCategories = () => {
  const CategoryCard = ({
    category,
  }: {
    category: (typeof foodCategories)[0];
  }) => (
    <TouchableOpacity style={styles.categoryCard} activeOpacity={0.8}>
      <ThemedView style={styles.categoryImageContainer}>
        <Image source={{ uri: category.image }} style={styles.categoryImage} />
      </ThemedView>
      <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.categoriesSection}>
      <ThemedText style={styles.sectionTitle}>
        Eat what makes you happy
      </ThemedText>
      <ThemedView style={styles.categoriesGrid}>
        {foodCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export default FoodCategories;

const styles = StyleSheet.create({
  categoriesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    marginBottom: 24,
    textAlign: "center",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  categoryCard: {
    width: (width - 72) / 5,
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    marginBottom: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    textAlign: "center",
  },
});
