import SafeAreaInsertView from "@/components/SafeAreaInsertView";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FeatureCard } from "./Components/FeatureCard";
import FoodCategories from "./Components/FoodCategories";
import { SearchBar } from "./Components/SearchBar";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaInsertView>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedView style={styles.searchContainer}>
            <SearchBar />
            {/* <TouchableOpacity style={styles.notificationButton}>
              <Bell size={24} color="#374151" />
              <ThemedView style={styles.notificationBadge}>
                <Text style={styles.notificationCount}>3</Text>
              </ThemedView>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Welcome Back!</Text>
            <Text style={styles.heroSubtitle}>
              Discover 15 new street food spots today
            </Text>
          </View>
        </View>

        {/* Food Categories Section */}
        <FoodCategories />

        {/* Featured Restaurant Card */}
        <FeatureCard />
      </ScrollView>
    </SafeAreaInsertView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 8 : 20,
    paddingBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#374151",
  },
  micButton: {
    padding: 4,
  },
  notificationButton: {
    position: "relative",
    padding: 8,
  },
  notificationBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#f59e0b",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationCount: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "#ffffff",
  },
  profileButton: {
    borderRadius: 25,
    overflow: "hidden",
  },
  profileImage: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
  },
  heroSection: {
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    overflow: "hidden",
    height: 200,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  heroContent: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontFamily: "Inter-Bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#e5e7eb",
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    color: "#111827",
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
    width: (width - 72) / 4,
    alignItems: "center",
    marginBottom: 20,
  },

  featuredSection: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  featuredCard: {
    backgroundColor: "#fef7ed",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredContent: {
    padding: 24,
  },
  featuredActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredInfo: {
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 28,
    fontFamily: "Inter-Bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  featuredDescription: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#6b7280",
    lineHeight: 24,
    marginBottom: 20,
  },
  signatureDish: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  dishImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  dishInfo: {
    flex: 1,
  },
  dishLabel: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
    color: "#9ca3af",
    marginBottom: 2,
  },
  dishName: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#1f2937",
  },
  exploreButton: {
    backgroundColor: "#f59e0b",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  exploreButtonText: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#ffffff",
  },
  timerSection: {
    alignItems: "center",
  },
  timerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timerLabel: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#6b7280",
    marginLeft: 6,
  },
  timerDisplay: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  timerText: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "#f59e0b",
    letterSpacing: 1,
  },
  featuredImageContainer: {
    height: 200,
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
