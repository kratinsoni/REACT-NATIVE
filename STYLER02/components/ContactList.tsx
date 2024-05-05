import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const ContactList: React.FC = () => {
  const contacts = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'James Smith',
      email: 'jamessmith@gmail.com',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Mary Johnson',
      email: 'maryjohnson@gmail.com',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.id} style={styles.userCard}>
            <Image source={{uri: contact.imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userEmail}>{contact.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#4C4B4B',
    padding: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ContactList;
