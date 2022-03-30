import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabProduitIndefiniScreen({ navigation }) {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>
            Produit inéxistant !
        </Text>
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
    marginTop: 100,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
