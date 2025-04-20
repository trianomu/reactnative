import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'success' | 'error' | 'info';
  icon: any;
  isRead: boolean;
};

type Props = {
  item: Notification;
};
const targetWords = ['processed', 'approved', 'reviewed', 'rejected', 'paid'];

export default function NotificationCard({ item }: Props) {
  const getStatusIcon = (status: 'success' | 'error' | 'info') => {
    switch (status) {
      case 'success':
        return <Ionicons name="checkmark-circle" size={20} color="green" />;
      case 'error':
        return <Ionicons name="close-circle" size={20} color="red" />;
      case 'info':
        return <Ionicons name="arrow-forward-circle" size={20} color="blue" />;
      default:
        return null;
    }
  };
  const renderDescription = (description: string) => {
    const parts = [];
    let remainingText = description;

    targetWords.forEach((word) => {
      let index = remainingText.toLowerCase().indexOf(word.toLowerCase());
      while (index !== -1) {
        parts.push(remainingText.slice(0, index)); // Add the text before the word
        parts.push(<Text key={`${word}-${index}`} style={{ fontWeight: 'bold' }}>{remainingText.slice(index, index + word.length)}</Text>); // Add the bold word
        remainingText = remainingText.slice(index + word.length); // Update remaining text
        index = remainingText.toLowerCase().indexOf(word.toLowerCase()); // Find the next occurrence
      }
    });
    parts.push(remainingText); // Add any remaining text after the target words

    return <Text>{parts}</Text>;
  }

  return (
    <View       
        style={[
        styles.card,
        { backgroundColor: item.isRead ? '#ffffff' : '#ADD8E6' },
      ]}>
      <View style={styles.iconWrapper}>
        <Image source={item.icon} style={styles.icon} />
        <View style={styles.statusIcon}>{getStatusIcon(item.status)}</View>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.description}>{renderDescription(item.description)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#e3f2fd',
    padding: 16,
    alignItems: 'flex-start',
  },
  iconWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  statusIcon: {
    position: 'absolute',
    bottom: -4,
    right: -6,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 1,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  description: {
    color: '#333',
  },
  date: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 2,
  },
});
