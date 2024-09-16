import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-VariableFont_wght.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-static/Outfit-Bold.ttf'),
    'Outfit-Light': require('./assets/fonts/Outfit-static/Outfit-Light.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-static/Outfit-Medium.ttf'),
    'Outfit-Regular': require('./assets/fonts/Outfit-static/Outfit-Regular.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-static/Outfit-SemiBold.ttf'),
    'Outfit-Thin': require('./assets/fonts/Outfit-static/Outfit-Thin.ttf'),
    'PlaypenSans': require('./assets/fonts/PlaypenSans-VariableFont_wght.ttf'),
  });
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_Z2VudGxlLW11dHQtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const tokenCache = {
  async saveToken(key, value) {
    let res = await SecureStore.setItemAsync(key, value);
    return res;
  },

  async getToken(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
      // alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      // alert('No values stored under that key.');
      console.log('No values stored under that key.');
    }
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
