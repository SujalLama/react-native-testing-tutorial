import { ListProducts } from "@components/ListProducts";
import { render, screen } from "@testing-library/react-native";

describe("Render List Products", () => {
  it("should fetch all products successfully and render the product List", async () => {
    render(<ListProducts />);

    expect(await screen.findByText("Ram")).toBeOnTheScreen();
    const lists = await screen.findAllByLabelText("listItem");

    lists.forEach((item) => {
      expect(item.children).toHaveLength(1);
    });
  });
});
