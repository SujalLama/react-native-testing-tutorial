import { Button } from "@components/Button";
import { render, screen } from "@testing-library/react-native";
import { Text, TextInput, View } from "react-native";

describe("Redering Button", () => {
  test("should render button with text Hello", () => {
    const { getByText } = render(<Button name="Hello" />);
    const button = getByText("Hello");

    expect(button).toBeOnTheScreen();
  });

  test("should render what is in View", () => {
    render(
      <View accessibilityRole="button" accessible>
        <Text>Hi</Text>
      </View>,
    );
    const button = screen.queryByText("Hi");

    expect(button).toBeTruthy();
  });

  test("should render input", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        accessibilityLabel="text-input"
        value="HI"
        placeholder="item"
      />,
    );
    expect(getByPlaceholderText("item")).toHaveDisplayValue("HI");
  });
});
