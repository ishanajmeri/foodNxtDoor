import { ScrollView, StyleSheet } from "react-native";
import { ResponsiveGrid } from "react-native-flexible-grid";
import ExploreItemCard from "./ExploreItemCard";

const ExploreItemContainer = ({ items }) => {
  return (
    <ScrollView
      style={styles.restaurantsContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.restaurantsContent}
    >
      <ResponsiveGrid
        maxItemsPerColumn={2}
        data={items}
        renderItem={ExploreItemCard}
      />
    </ScrollView>
  );
};

export default ExploreItemContainer;

const styles = StyleSheet.create({
  restaurantsContainer: {
    flex: 1,
    marginTop: 8,
  },
  restaurantsContent: {
    paddingBottom: 100,
  },
  restaurantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
});
