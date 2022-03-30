
import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabRecettesScreen({ navigation, route }) {
  
  const {data} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoRecipeContainer}>
      <Image style={styles.categoriesPhoto} source={{ uri: data.strMealThumb }} />
     <Text style={styles.infoRecipeName}>{data.strMeal}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight >
            <Text style={styles.category}>Catégorie : {data.strCategory.toUpperCase()}</Text>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 80, textAlign: 'center', fontSize: 13}}>Instructions</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{data.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 10,
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'white',
    fontSize: 13,
    textAlign: 'center'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
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
  }
});