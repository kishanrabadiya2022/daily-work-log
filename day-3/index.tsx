import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              This is React Native Modal
            </Text>

            <Button
              title="Close Modal"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    height: 200,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

//React Native Modal kya hota hai? (Simple words)

// Modal ek popup screen hoti hai jo:

// current screen ke upar open hoti hai

// background ko block / dim kar deti hai

// close hone par wapas wahi screen dikhati hai

// 👉 Example:

// Login popup

// Confirmation dialog

// Bottom sheet

// 🔹 React Native me Modal ka basic flow

// Ek state banti hai (true / false)

// Button dabane par state true

// Modal show hota hai

// Close button / background press → state false
