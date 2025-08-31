import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Logo from '../assets/favicon.png';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';


const Contact = () => {
  return (
    <ThemedView style={styles.mainContainer}>
      <Image style={styles.titleMain}/>
      <ThemedText style={styles.titleMain} title="true">Contact</ThemedText>
         <Link href="/" style={styles.link}> <ThemedText>Home</ThemedText></Link>
       <Link href="/about" style={styles.link}><ThemedText>About</ThemedText></Link>
    </ThemedView>
  )
}

export default Contact

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
  img: {
    marginVertical:20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})