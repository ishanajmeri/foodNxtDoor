import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
/**
 * SafeAreaInsertView is a wrapper component that applies safe area insets
 * to its children, ensuring that content is not obscured by device notches,
 * status bars, or other UI elements.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the view.
 * @returns {JSX.Element} A view with safe area insets applied.
 */
export default function SafeAreaInsertView({
  children,
}: {
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </View>
  );
}
