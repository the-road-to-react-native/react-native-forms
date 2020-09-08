import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PasswordChange = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Password Change Screen</Text>
    </View>
  );
};

export default PasswordChange;
