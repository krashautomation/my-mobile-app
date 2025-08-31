import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import ThemedView from '../components/ThemedView'; // themed components
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';


const Home = () => {
  return (
    <ThemedView style={styles.mainContainer}>
    <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.titleMain} title={true}>Reading List App </ThemedText>
      <Spacer height={10} />
    
      <ThemedText style={{marginTop: 10, marginBottom: 30}}>Welcome! Browse the List.</ThemedText>
      <View>
      <ThemedText style={styles.cardMain}>Read the latest popular books. {"\n"}
      Guaranteed to make your brain bigger.         
      </ThemedText>
      </View>
      <Spacer />
      <Link href="/login" style={styles.link}>
      <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemedText>Register</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleMain: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardMain: {
    color: '#111111',
    padding: 15,
    borderRadius: 5,
    border: '1px solid black',
    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#ddd',    
    fontSize:14,
    fontWeight: 'bold'

  },

    link: {
    marginVertical: 10,
    borderBottomWidth: 1, 
    fontSize: 25,
    fontWeight: 'bold'
  }
})

