import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const users = [
  { name: 'John', surname: 'John', uri: 'https://i.pravatar.cc/60?img=1', location:'Sahid' },
  { name: 'Zasan', surname: 'Zasan', uri: 'https://i.pravatar.cc/60?img=2', location:'BSD' },
  { name: 'Sem', surname: 'Sem', uri: 'https://i.pravatar.cc/60?img=3', location:'WFH' },
  { name: 'Winda', surname: 'Winda', uri: 'https://i.pravatar.cc/60?img=4', location:'WFH' },
  { name: 'Naya', surname: 'Naya', uri: 'https://i.pravatar.cc/60?img=5', location:'BSD' },
  { name: 'Adam', surname: 'Adam', uri: 'https://i.pravatar.cc/60?img=6', location:'Sahid' },
  { name: 'Dio', surname: 'Park', uri: 'https://i.pravatar.cc/60?img=7', location:'Sahid' },
  { name: 'Icha', surname: 'Lim', uri: 'https://i.pravatar.cc/60?img=8', location:'BSD' },
  { name: 'Andi', surname: 'Nguyen', uri: 'https://i.pravatar.cc/60?img=9', location:'BSD' },
  { name: 'Yuna', surname: 'Tran', uri: 'https://i.pravatar.cc/60?img=10', location:'WFH' },
  { name: 'Budi', surname: 'Pham', uri: 'https://i.pravatar.cc/60?img=11', location:'BSD' },
];

const OnlineUsers = () => {
  return (
    <View>
      <Text style={styles.title}>Online</Text>
      <View style={styles.card}>
        <View style={styles.avatarStack}>
          {users.slice(0, 8).map((user, index) => (
            <View
              key={index}
              style={[
                styles.avatarWrapper,
                { left: index * 38 }, // Jarak tumpukan
                index !== 0 && styles.overlap,
              ]}
            >
              <Image source={{ uri: user.uri }} style={styles.avatar} />
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.surname}>{user.surname}</Text>
              <Text style={styles.location}>{user.location}</Text>
            </View>
          ))}
          {users.length > 8 && (
              <LinearGradient
              colors={['#FF3D3D', '#A80070']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.avatarWrapper, { left: 8 * 38 }, styles.moreAvatar]}
            >
              <Text style={styles.moreText}>{users.length - 8}</Text>
              <Text style={styles.moreText}>more</Text>
            </LinearGradient>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnlineUsers;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 18,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    height:120,
    marginVertical: 8,
    marginHorizontal: 4,
  
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  
    // Elevation untuk Android
    elevation: 4,
  },
  user: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 12,
    marginTop: 4,
    marginLeft:10,
    fontWeight:'bold'
  },
  surname: {
    fontSize: 10,
    marginLeft: 10,
  },
  location: {
    fontWeight:'bold',
    fontSize: 10,
    marginLeft: 10,
  },
  avatarStack: {
    flexDirection: 'row',
    marginTop: 8,
    // paddingLeft: 4,
    height: 48,
    position: 'relative',
  },
  avatarWrapper: {
    position: 'absolute',
  },
  moreAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    // backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  moreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlap: {
    zIndex: 1,
  },  
});
