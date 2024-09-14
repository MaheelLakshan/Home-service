import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_Z2VudGxlLW11dHQtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View style={styles.container}>
        <SignedIn>
          <UserDetails />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

function UserDetails() {
  const { user } = useUser(); // Use the useUser hook to get user details

  return (
    <>
      <Text>Hello {user?.emailAddresses[0]?.emailAddress}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
