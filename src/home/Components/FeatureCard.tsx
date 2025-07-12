import { ThemedText } from "@/components/ThemedText";
import { Bookmark, Clock, Share } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
type FeatureCardProps = {};

export const FeatureCard = ({}: FeatureCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 14,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");
  return (
    <View style={styles.featuredSection}>
      <View style={styles.featuredCard}>
        <View style={styles.featuredContent}>
          <View style={styles.featuredActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Bookmark size={20} color="#f59e0b" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share size={20} color="#f59e0b" />
            </TouchableOpacity>
          </View>

          <View style={styles.featuredInfo}>
            <ThemedText style={styles.featuredTitle}>
              Le Petit Bistro
            </ThemedText>
            <ThemedText style={styles.featuredDescription}>
              Experience the signature Coq au Vin, crafted with a century-old
              recipe
            </ThemedText>

            <View style={styles.signatureDish}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
                }}
                style={styles.dishImage}
              />
              <View style={styles.dishInfo}>
                <ThemedText style={styles.dishLabel}>Signature Dish</ThemedText>
                <ThemedText style={styles.dishName}>Coq au Vin</ThemedText>
              </View>
            </View>

            <TouchableOpacity style={styles.exploreButton}>
              <ThemedText style={styles.exploreButtonText}>
                Explore Now
              </ThemedText>
            </TouchableOpacity>

            <View style={styles.timerSection}>
              <View style={styles.timerHeader}>
                <Clock size={16} color="#6b7280" />
                <ThemedText style={styles.timerLabel}>
                  Limited offer ends in:
                </ThemedText>
              </View>
              <View style={styles.timerDisplay}>
                <ThemedText style={styles.timerText}>
                  {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                  {formatTime(timeLeft.seconds)}
                </ThemedText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
