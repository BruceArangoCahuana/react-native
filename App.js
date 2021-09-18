import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button,Alert} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <Text style={styles.color__blanco}>Barsand International</Text>
        <View style={styles.contenedor__imagen}>
          <Image 
            source={require('./assets/doctor.png')} 
            style={styles.imagen}
          />
          
        </View>
        <View style={styles.contenedor__btn}>
          <Button
              title="Ingresar"
              style={styles.btn}
              onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08519c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio:{
    width:'90%',
    height:400,
    backgroundColor: 'white',
    borderRadius:20
  },
  color__blanco:{
    color:'black',
    fontSize:25,
    textAlign:'center',
    marginTop:25,
   
  },
  contenedor__imagen:{
    width:'95%',
    height:200,
    marginTop:50,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor__btn:{
    width:'100%',
    padding:10,
    margin:'auto'
  },
  imagen:{
    width:'100%',
    height:'100%',
    marginBottom:40
  },
  btn:{
    width:'80%',
    marginTop:50,
  }
});
