import { Compass, Chrome as Home, Map, Plus, Rss } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "./ThemedView";

function TabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBarContainer}>
      <ThemedView style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const isCenter = index === 2; // Plus button in center

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = () => {
            const iconColor = isFocused
              ? "#ffffff"
              : "rgba(255, 255, 255, 0.7)";
            const iconSize = isCenter ? 28 : 24;

            switch (route.name) {
              case "index":
                return <Home size={iconSize} color={iconColor} />;
              case "explore":
                return <Compass size={iconSize} color={iconColor} />;
              case "add":
                return (
                  <Plus size={iconSize} color={iconColor} strokeWidth={3} />
                );
              case "favorites":
                return <Map size={iconSize} color={iconColor} />;
              case "profile":
                return <Rss size={iconSize} color={iconColor} />;
              default:
                return <Home size={iconSize} color={iconColor} />;
            }
          };

          if (isCenter) {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.centerButton}
                activeOpacity={0.8}
              >
                <View style={styles.centerButtonInner}>{getIcon()}</View>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tabItem, isFocused && styles.tabItemFocused]}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>{getIcon()}</View>
            </TouchableOpacity>
          );
        })}
      </ThemedView>
    </View>
  );
}
export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // paddingBottom: 34, // Safe area for iPhone
    paddingTop: 0,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tabItemFocused: {
    transform: [{ scale: 1.1 }],
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    position: "relative",
    top: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  centerButtonInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
});
