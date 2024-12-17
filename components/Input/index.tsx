import { TextInput, TextInputProps } from "react-native";
interface InputProps extends TextInputProps {}
export function Input(props: InputProps) {
  return <TextInput {...props} />;
}
