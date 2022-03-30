import Search from '../components/comps/Search';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';


import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('En attente de scan...');
  const [masterDataSource, setMasterDataSource] = useState();

  var jsonData = [];

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  const checkProduct = () => {
    // console.log(masterDataSource);
    if (typeof(jsonData) != "undefined")
    {
      if (typeof(jsonData.product) != "undefined"){
          setText(jsonData.product.product_name_fr);
      }
      else{
        setText("Produit inconnu");  
      }
    }else{
      setText("Produit inconnu");
    }
  }

  const checkProductFound = () => {
    if (typeof(masterDataSource) != "undefined")
    {
      if (typeof(masterDataSource.product) != "undefined")
      {
        // console.log('true');
        setText(text);
        return true;
      }else{
        // console.log('false');
        return false;
      }
    }
  } 
  
  const redirection = (choix) => {
    // console.log("master : " + masterDataSource);
    if(typeof(masterDataSource) != "undefined"){
      if(choix === '1') {
        navigation.navigate('TabProduit', {data: masterDataSource});
      }else{
        navigation.navigate('TabInconnu');
      }
    }
  }

  // Demande de permission camera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // Ce qui se passe lorsque l'on scanne le code barre
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    console.log('Type: ' + type + '\nData: ' + data);
    await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    .then(async (response) => await response.json())
    .then( (responseJson) => {
      console.log("responseJson : "+responseJson);
      jsonData = responseJson;
      setMasterDataSource(responseJson);
      console.log("masterData : " + jsonData + "\nCode : "+data);
      checkProduct();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  // Verification des permission et retourne un affichage
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  // Retourne la vue
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext} onPress= {
        () => {
          let productFound = checkProductFound() ?
          redirection('1'):
          redirection('2');
        }
      } >{text}  
      </Text>

      {scanned && <Button title={'Scanner de nouveau ?'} onPress={() => setScanned(false)} color='green' />}
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
