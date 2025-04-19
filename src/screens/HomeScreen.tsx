import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ActivityCard from '../components/ActivityCard';
import PCSNews from '../components/PCSNewsCarousel';
import OnlineUsers from '../components/OnlineUser';
import BottomTab from '../components/BottomTab';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.greetingText}>Hi, Good Morning!</Text>
        <ProfileCard />
        <ActivityCard />
        <PCSNews />
        <OnlineUsers />
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greetingText: {
   fontWeight:'bold',
   marginTop:8
  },
  content: {
    paddingHorizontal: 16,
  },
});
