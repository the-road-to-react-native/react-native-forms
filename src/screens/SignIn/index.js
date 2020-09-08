import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignInScreen = ({ onSignIn, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <Button title="Sign In" onPress={onSignIn} />

      <Text>OR</Text>

      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
      <Button
        title="Go to Password Forget"
        onPress={() => navigation.navigate('Password Forget')}
      />
    </View>
  );
};

export default SignInScreen;
