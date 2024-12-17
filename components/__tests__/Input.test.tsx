import { Input } from "@components/Input";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("Text Input Render", () => {
  test("should render HI in the text input value", () => {
    const onEventMock = jest.fn();
    render(
      <Input
        accessibilityLabel="text-input"
        placeholder="item"
        onChangeText={onEventMock}
      />,
    );
    const input = screen.getByLabelText("text-input");

    fireEvent(input, "onChangeText", "HI");
    expect(onEventMock).toHaveBeenCalledWith("HI");
  });
});
