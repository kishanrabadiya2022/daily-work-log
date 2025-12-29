import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Login = () => {
    const router = useRouter();
    const onLogin = () => {
      router.push("./signup");
    };
  return (
    <View style={{ flex: 1 }}>
       <Image source={require('@/assets/images/login.jpeg')} style={{ width: 100, height: 100, alignSelf: 'center' }} resizeMode="cover" />
       <View style={{ padding: 20 ,gap:20}}>
           <TextInput placeholder="Email" style={styles.input} />
           <TextInput placeholder="password" style={styles.input} secureTextEntry />
           </View>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      
        </View> 
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Login;