import { Pressable, PressableProps, Text } from "react-native";
interface ButtonProps extends PressableProps {
  name: string;
}
export function Button({ name, ...rest }: ButtonProps) {
  return (
    <Pressable {...rest} accessibilityRole="button">
      <Text testID="button">{name}</Text>
    </Pressable>
  );
}
