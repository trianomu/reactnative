import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NotificationCard, { Notification } from '../components/NotificationCard';

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Reimbursement',
    description: 'Your submission "Lorem ipsum dolor sit..." with a total cost 50.000 has been processed. Please check your BRIMO application',
    date: 'Today',
    status: 'success',
    icon: require('../../assets/reimbursement.png'),
    isRead: true,
  },
  {
    id: '2',
    title: 'Reimbursement',
    description: 'Your submission "description" has been rejected, please click for details.',
    date: '2022-10-05',
    status: 'error',
    icon: require('../../assets/reimbursement.png'),
    isRead: true,
  },
  {
    id: '3',
    title: 'Reimbursement',
    description: 'Your submission will be processed according to the reimbursement schedule. Please wait.',
    date: 'Yesterday',
    status: 'info',
    icon: require('../../assets/reimbursement.png'),
    isRead: true,
  },
  {
    id: '4',
    title: 'Overtime',
    description: 'Your submission has been approved by the Superior.',
    date: '2022-10-06',
    status: 'success',
    icon: require('../../assets/overtime.png'),
    isRead: false,
  },
  {
    id: '5',
    title: 'Overtime',
    description: 'Your submission has been rejected, please confirm to your Superior.',
    date: 'Yesterday',
    status: 'error',
    icon: require('../../assets/overtime.png'),
    isRead: true,
  },
  {
    id: '6',
    title: 'Overtime',
    description: 'Your submission is being reviewed to the Superior for approval process, please wait.',
    date: '2022-10-06',
    status: 'info',
    icon: require('../../assets/overtime.png'),
    isRead: false,
  },
  {
    id: '7',
    title: 'Sickness',
    description: 'Your submission has been approved by the Superior.',
    date: '2022-10-07',
    status: 'success',
    icon: require('../../assets/sickness.png'),
    isRead: false,
  },
  {
    id: '8',
    title: 'Sickness',
    description: 'Your submission has been rejected please confirm with your Superior.',
    date: 'Yesterday',
    status: 'error',
    icon: require('../../assets/sickness.png'),
    isRead: true,
  },
  {
    id: '0',
    title: 'Sickness',
    description: 'Your submission is being reviewed by to the Superior for the approval process, please wait.',
    date: '2022-10-07',
    status: 'info',
    icon: require('../../assets/sickness.png'),
    isRead: false,
  },
  {
    id: '10',
    title: 'Reimbursement',
    description: 'Your submission "Another reimbursement" with a total cost 25.000 has been processed. Please check your BRIMO application',
    date: 'Today',
    status: 'success',
    icon: require('../../assets/reimbursement.png'),
    isRead: false,
  },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#000',
  },
});
