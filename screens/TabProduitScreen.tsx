import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Images from '../assets/img/index';

export default function TabProduitScreen({ navigation, route }) {
  
  const {data} = route.params;
  console.log("nom :" + data.product.product_name_fr);
  
  const checkNutriscore = () => {
    if (typeof(data.product.nutriscore_data) != "undefined")
    {
      let nutriscoreValue = data.product.nutriscore_data.grade;
      switch(nutriscoreValue) {

        case 'a':
          return Images.nutriscore.a;
          break;
        case 'b':
          return Images.nutriscore.b;
          break;
        case 'c':
          return Images.nutriscore.c;
          break;
        case 'd':
          return Images.nutriscore.d;
          break;
        case 'e':
          return Images.nutriscore.e;
          break;
        default:
          return Images.nutriscore.indispo;
          break;
      }
    }
    return Images.nutriscore.indispo;
  }

  const checkNovascore = () => {
    if (typeof(data.product.nova_group) != "undefined")
    {
      let novascoreValue = data.product.nova_group;
      switch(novascoreValue) {

        case 1:
          return Images.novascore[1];
          break;
        case 2:
          return Images.novascore[2];
          break;
        case 3:
          return Images.novascore[3];
          break;
        case 4:
          return Images.novascore[4];
          break;
        default:
          return Images.nutriscore.indispo;
          break;
      }
    }
    return Images.novascore.indispo;
  }
  
  return (

    <View style={styles.container}>

        <Image
          style={styles.product}
          source={{ uri: data.product.image_url }}
        />

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

        <Text
          style={{margin: 25, fontSize: 15, fontWeight: 'bold'}}  >
            {data.product.product_name_fr}
        </Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center', fontSize: 12}}>Qualitée nutritive</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

        <Image
          source={ checkNovascore() } 
        />

        <Image
        style={{width: 250}}
        source={ checkNutriscore() } 
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  itemStyle: {
    padding: 10,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center'
  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#2cd18a'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  product: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
});