import { Mic, Search } from "lucide-react-native";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {};

export const SearchBar = ({}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View style={styles.searchBar}>
      <Search size={20} color="#9ca3af" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search dishes, places..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#9ca3af"
      />
      <TouchableOpacity style={styles.micButton}>
        <Mic size={20} color="#9ca3af" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  searchIcon: {
    marginRight: 12,
  },
  micButton: {
    padding: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#374151",
  },
});
