import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileCard = () => {
  return (
    <LinearGradient
    colors={['#FF4500', '#A80070']} // Red to Red-Purple (Crimson to DarkMagenta)
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    {/* <View style={styles.card}> */}
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>Tabay</Text>
          <Text style={styles.job}>UI/UX Designer</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.memberText}>Member since</Text>
          <Text style={styles.date}>01 Juni 2021</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.location}>Kantor Sahid</Text>
        </View>
      </View>
    {/* </View> */}
    </LinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
    marginVertical: 12,
  },
  card: {
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 10,
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  job: {
    color: '#ddd',
  },
  locationText: {
    marginTop:10,
    fontSize: 12,
    color: '#ddd',
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  dateBox: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  memberText: {
    fontSize: 10,
    color: '#ddd',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
