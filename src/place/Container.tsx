import { useRouter } from "expo-router";
import {
  ArrowLeft,
  ChartBar as BarChart3,
  Camera,
  Clock,
  DollarSign,
  Heart,
  Phone,
  Share2,
  Star,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCard from "./Components/LocationCard";

const { width } = Dimensions.get("window");

export default function RestaurantDetailsScreen() {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);

  const signatureDishes = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: "$24.99",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
      mustTry: true,
    },
    {
      id: 2,
      name: "Seafood Risotto",
      price: "$29.99",
      image:
        "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800",
      mustTry: false,
    },
  ];

  const photos = [
    "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const DishCard = ({ dish }: { dish: (typeof signatureDishes)[0] }) => (
    <View style={styles.dishCard}>
      <Image source={{ uri: dish.image }} style={styles.dishImage} />
      {dish.mustTry && (
        <View style={styles.mustTryBadge}>
          <Text style={styles.mustTryText}>Must Try</Text>
        </View>
      )}
      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.dishPrice}>{dish.price}</Text>
      </View>
    </View>
  );

  const PhotoGrid = () => (
    <View style={styles.photoGrid}>
      {photos.map((photo, index) => (
        <TouchableOpacity
          key={index}
          style={styles.photoItem}
          activeOpacity={0.8}
        >
          <Image source={{ uri: photo }} style={styles.photoImage} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <ArrowLeft size={24} color="#1e293b" />
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setIsFavorited(!isFavorited)}
            activeOpacity={0.7}
          >
            <Heart
              size={20}
              color={isFavorited ? "#ef4444" : "#64748b"}
              fill={isFavorited ? "#ef4444" : "transparent"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Share2 size={20} color="#64748b" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>La Cucina Elegante</Text>
              <Text style={styles.cuisineType}>Italian Cuisine</Text>
              <View style={styles.metaInfo}>
                <View style={styles.ratingContainer}>
                  <Star size={16} color="#fbbf24" fill="#fbbf24" />
                  <Text style={styles.rating}>4.8 (2.3k)</Text>
                </View>
                <Text style={styles.distance}>• 0.3 mi</Text>
              </View>
              <View style={styles.statusRow}>
                <View style={styles.statusItem}>
                  <Clock size={14} color="#10b981" />
                  <Text style={styles.statusText}>Open now</Text>
                </View>
                <View style={styles.priceContainer}>
                  <DollarSign size={14} color="#64748b" />
                  <DollarSign size={14} color="#64748b" />
                  <DollarSign size={14} color="#e2e8f0" />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.callButton} activeOpacity={0.8}>
              <Phone size={18} color="#ffffff" />
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Rewards Section */}
        <View style={styles.rewardsSection}>
          <View style={styles.rewardsHeader}>
            <View style={styles.rewardsIcon}>
              <BarChart3 size={16} color="#8b5cf6" />
            </View>
            <Text style={styles.rewardsTitle}>Rewards & Challenges</Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressLabel}>Visit Progress</Text>
            <Text style={styles.progressValue}>4/5 visits</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "80%" }]} />
          </View>
          <View style={styles.rewardBanner}>
            <Text style={styles.rewardText}>
              One more visit for a free dessert! 🍰
            </Text>
          </View>
        </View>

        {/* Signature Dishes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Signature Dishes</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dishesContainer}
          >
            {signatureDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </ScrollView>
        </View>

        {/* Location */}
        <LocationCard />

        {/* Community Engagement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Engagement</Text>
          <View style={styles.engagementButtons}>
            <TouchableOpacity
              style={styles.engagementButton}
              activeOpacity={0.7}
            >
              <Camera size={20} color="#64748b" />
              <Text style={styles.engagementText}>Share Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.engagementButton}
              activeOpacity={0.7}
            >
              <BarChart3 size={20} color="#64748b" />
              <Text style={styles.engagementText}>Food Poll</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reviews & Photos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reviews & Photos</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <PhotoGrid />

          {/* Sample Review */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                style={styles.reviewerAvatar}
              />
              <View style={styles.reviewerInfo}>
                <Text style={styles.reviewerName}>Emily Thompson</Text>
                <View style={styles.reviewRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>
              "Absolutely amazing experience! The truffle pasta was divine and
              the service was impeccable. Will definitely be coming back!"
            </Text>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  heroSection: {
    position: "relative",
    height: 300,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
  },
  restaurantInfo: {
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 28,
    fontFamily: "Inter-Bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  cuisineType: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#ffffff",
  },
  distance: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#e5e7eb",
    marginLeft: 8,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#10b981",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  callButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#ffffff",
  },
  rewardsSection: {
    backgroundColor: "#faf5ff",
    margin: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e9d5ff",
  },
  rewardsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  rewardsIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#8b5cf6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  rewardsTitle: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    color: "#581c87",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#7c3aed",
  },
  progressValue: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: "#581c87",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e9d5ff",
    borderRadius: 3,
    marginBottom: 12,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#8b5cf6",
    borderRadius: 3,
  },
  rewardBanner: {
    backgroundColor: "#fef3c7",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fde68a",
  },
  rewardText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#92400e",
    textAlign: "center",
  },
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
  seeAllText: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#3b82f6",
  },
  dishesContainer: {
    paddingRight: 20,
  },
  dishCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  dishImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  mustTryBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#ef4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  mustTryText: {
    fontSize: 10,
    fontFamily: "Inter-SemiBold",
    color: "#ffffff",
  },
  dishInfo: {
    padding: 12,
  },
  dishName: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: "#1e293b",
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#3b82f6",
  },
  engagementButtons: {
    flexDirection: "row",
    gap: 16,
  },
  engagementButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  engagementText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: "Inter-Medium",
    color: "#64748b",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  photoItem: {
    width: (width - 56) / 2,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  reviewCard: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    color: "#1e293b",
    marginBottom: 4,
  },
  reviewRating: {
    flexDirection: "row",
    gap: 2,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#475569",
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 120,
  },
});
