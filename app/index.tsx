import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Hello World
      </Text>
      <Text>
        This is a new line of text.
      </Text>
    </View>
    
  );
};

export default Index;
