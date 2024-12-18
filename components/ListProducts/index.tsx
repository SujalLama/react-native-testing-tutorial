import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function ListProducts() {
  const [data, setData] = useState<{ id: string; title?: string }[]>([]);
  const [error, setError] = useState("");

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((_) => {
        setError("Error while fetching data");
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      {data.map((item) => {
        return (
          <View key={item.id}>
            <Text accessibilityLabel="listItem" accessible>
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
