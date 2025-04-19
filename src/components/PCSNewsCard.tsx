import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const cardWidth = Dimensions.get('window').width - 40;

type Props = {
  title: string;
  name: string;
  date: string; // contoh: "30 Mei 2021"
  day: string;  // contoh: "Senin"
  news: string;
  avatar?: string; // optional: URL/path to avatar
};

const PCSNewsCard = ({ title, name, date, day, news, avatar }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        {/* Avatar + Name */}
        <View style={styles.leftHeader}>
            <Image
            source={{ uri: 'https://i.pravatar.cc/60?img=10' }}
            style={styles.avatar}
            />
            <Text style={styles.name}>{name}</Text>
        </View>

        {/* Day + Date */}
        <View style={styles.rightHeader}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Text style={styles.news}>{news}</Text>
    </View>
  );
};

export default PCSNewsCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF', // putih
        borderRadius: 10,
        padding: 16,
        width: cardWidth,
        height: 140,
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
      
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    fontWeight: 'bold',
    color:'#F82C17',
    fontSize: 16,
  },
  rightHeader: {
    alignItems: 'flex-end',
  },
  day: {
    fontSize: 12,
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#000',
  },
  news: {
    fontSize: 13,
    color: '#000',
  },
});
