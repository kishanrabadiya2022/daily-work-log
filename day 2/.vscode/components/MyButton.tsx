import { Text, TouchableOpacity } from 'react-native';


const MyButton = ({tittle, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      onPress={onPress}

      <Text style={styles.text}>{tittle}</Text>
    </TouchableOpacity>
  );
};  

export default MyButton; 
const styles = StyleSheet.create({
    button: {
      backgroundColor: 'orange',
      paddingHorizontal: 40,
      paddingVertical: 15,
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
});
