import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabTwoScreen({ navigation }) {

  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  function handleSearch(text) {
    setSearch(text)
    console.log(text);
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setMasterDataSource(data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  const onPressRecipe = (item) => {
    navigation.navigate('TabRecettes', {data: item})
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={ () => onPressRecipe(item) } >
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.strMealThumb }} />
        <Text style={styles.categoriesName}>{item.strMeal}</Text>
        <Text style={styles.categoriesInfo}>{item.strCategory}, {item.strArea}</Text>
      </View>
    </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={handleSearch}
          placeholder="Rechercher..."
          value={search}
          containerStyle={{ backgroundColor: 'black'}}
        />
        <FlatList
          data={masterDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photos: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    justifyContent: 'center'
  },  
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
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
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});
