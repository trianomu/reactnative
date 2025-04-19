import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = () => {
  return (
<View style={styles.container}>
  {/* Kiri */}
  <View style={styles.sideContainer}>
    <View style={styles.item}>
      <MaterialCommunityIcons name="home" size={24} color="#FF3D00" />
      <Text style={styles.labelActive}>Home</Text>
    </View>
    <View style={styles.item}>
      <MaterialCommunityIcons name="calendar-check" size={24} color="#999" />
      <Text style={styles.label}>Attendance</Text>
    </View>
  </View>

  {/* Tengah (logout di tengah layar) */}
  <View style={styles.centerItem}>
    <View style={styles.logoutCircle}>
      <MaterialCommunityIcons name="logout" size={28} color="#fff" />
    </View>
    <Text style={styles.labelActive}>Check Out</Text>
  </View>

  {/* Kanan */}
  <View style={styles.sideContainer}>
    <View style={styles.item}>
      <MaterialCommunityIcons name="text-box" size={24} color="#999" />
      <Text style={styles.label}>Form</Text>
    </View>
    <View style={styles.item}>
      <MaterialCommunityIcons name="cog" size={24} color="#999" />
      <Text style={styles.label}>Setting</Text>
    </View>
  </View>
</View>

  );
};

export default BottomTab;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   centerIcon: {
//     marginTop: -20,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  sideContainer: {
    flexDirection: 'row',
    gap: 38,
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    marginTop:4,
  },
  centerItem: {
    position: 'absolute',
    alignItems: 'center',
    top: -35,
    left: '50%',
    transform: [{ translateX: -8 }], // Setengah dari 64 agar benar-benar center
  },
  logoutCircle: {
    backgroundColor: '#F82C17',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  labelActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F82C17',
    marginTop: 4,
  },
});

