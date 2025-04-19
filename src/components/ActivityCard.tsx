import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6Icons from 'react-native-vector-icons/FontAwesome6';

const ActivityCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Today's Activity</Text>
      <View style={styles.row}>
        <View style={styles.item}>
        {/* <Ionicons name="time-outline" size={24} color="#FF3D00" style={[styles.icon, { transform: [{ scaleX: -1 }] }]} /> */}
        <MaterialCommunityIcons name="clock-time-nine-outline" size={26} color="#FF3D00" />
          <Text style={styles.time}>08:30</Text>
          <Text style={styles.label}>Check In</Text>
        </View>
        <View style={styles.item}>
        <FontAwesome6Icons name="clock-rotate-left" size={20} color="#FF3D00" style={[styles.icon, { transform: [{ scaleX: -1 }] }]}/>
          <Text style={styles.timeProgress}>03:00:00</Text>
          <Text style={styles.label}>Working Hours</Text>
        </View>
        <View style={styles.item}>
        <MaterialCommunityIcons name="clock-time-six-outline" size={26} color="#FF3D00" />
          <Text style={styles.time}>--:--</Text>
          <Text style={styles.label}>Check Out</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#FFEFE8',
    // borderRadius: 10,
    paddingLeft: 4,
    paddingVertical:12,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    margin:5,
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginBottom: 4,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  timeProgress: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F82C17',
  },
  label: {
    fontSize: 12,
    color: '#111',
  },
});
