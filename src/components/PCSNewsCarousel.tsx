// components/PCSNewsCarousel.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PCSNewsCard from './PCSNewsCard';

const cardWidth = Dimensions.get('window').width - 32;

const newsData = [
  {
    title: 'PCS News',
    name: 'Ana Riswati',
    day: 'Senin',
    date: '30 Mei 2021',
    news: 'Kalimat 1 - Lorem impum dolor sit amet ...\nKalimat 2 - Lorem impum dolor sit amet ...\nKalimat 3 - Lorem impum dolor sit amet ...\nKalimat 4 - Lorem impum dolor sit amet ...',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    title: 'PCS News',
    name: 'Budi Santoso',
    day: 'Selasa',
    date: '5 Juni 2021',
    news: 'Update A - Info...\nUpdate B - Tim...\nUpdate C - Info...\nUpdate D - Tim...',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    title: 'PCS News',
    name: 'Citra Lestari',
    day: 'Kamis',
    date: '12 Juli 2021',
    news: 'Event - Pelatihan...\nReminder - Form...\nEvent - Pelatihan...\nReminder - Form...',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const PCSNewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleDotPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PCS News</Text>
      <FlatList
        data={newsData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <PCSNewsCard
            title={item.title}
            name={item.name}
            date={item.date}
            day={item.day}
            news={item.news}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.dotsContainer}>
        {newsData.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default PCSNewsCarousel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    paddingLeft: 6,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF3D00',
  },
});
