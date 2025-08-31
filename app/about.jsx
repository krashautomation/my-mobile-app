import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Logo from '../assets/favicon.png';
import { Colors } from "../constants/Colors";
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';



const About = () => {

      const colorScheme = useColorScheme();
      const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={[styles.mainContainer, {backgroundColor: theme.background}]}>
      <Image style={styles.titleMain}/>
      <Text style={styles.titleMain}> <ThemedText>About</ThemedText></Text>
       <Link href="/" style={styles.link}> <ThemedText>Home</ThemedText></Link>
       <Link href="/contact" style={styles.link}> <ThemedText>Contact</ThemedText></Link>
    </ThemedView>
  )
}

export default About

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