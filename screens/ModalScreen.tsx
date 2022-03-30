import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {

  const fetchData =  async() => {
      await fetch('https://www.lotfitouil.fr/nutritoolsmonapi/')
       .then(async (response) => await response.json())
       .then( (responseJson) => {
        console.log("jsonData here => " + responseJson[0]);
        console.log(responseJson[0]['note']);
       })
       .catch((error) => {
         console.error(error);
       });
     };   
     fetchData();

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Nutritools, Lotfi Touil</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.desc}>
        Nutritools est une application mobile sur le theme de la nutrition. 
        Vous souhaitez connaitre la qualite nutritive de votre produit, c'est simple !
        Scannez votre produit dans l'onglet 'Scan' et vous y trouverez sa classification NOVA et nutriscore :) 
        Vous cherchez une recette pour votre prochain repas ? Dirigez-vous vers l'onglet Recettes et trouvez-y votre festin !</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.desc}>
        Nutritools a été développé par Lotfi TOUIL, dans le cadre d'un projet universitaire en DUT Informatique. (IUT de Montreuil, université paris 8)</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 15,
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});