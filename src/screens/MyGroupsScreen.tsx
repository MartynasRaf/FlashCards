import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import SearchBar from '../components/SearchBar';
import EnumButton from '../components/EnumButton';
import MyFlashCard from '../components/MyFlashCard';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const MyGroupsScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        value={searchPhrase}
        setValue={setSearchPhrase}
      />
      <EnumButton
        enumChanged={change => {}}
        enumList={['recent', 'popular']}
        style={styles.enumButton}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.cardsContainer}>
        <MyFlashCard />
        <MyFlashCard />
        <MyFlashCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  searchBar: {
    marginTop: 20,
  },
  enumButton: {
    backgroundColor: '#FFB5B5',
    width: 70,
    alignItems: 'center',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: '12%',
    marginTop: 15,
    padding: 5,
  },
  cardsContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default MyGroupsScreen;
