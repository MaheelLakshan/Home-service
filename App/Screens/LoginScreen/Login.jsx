import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Images from './../../../Constants/Images.js';
import Colors from '../../../Constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../Hooks/WarmUpBrowser.jsx';
import { useOAuth } from '@clerk/clerk-expo';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const onPressed = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: makeRedirectUri('/dashboard', { scheme: 'home-services' }),
      });

      if (createdSessionId) {
        setActive({ session: createdSessionId ?? '' });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <View style={{ alignItems: 'center', backgroundColor: Colors.PRIMARY, height: '100%', width: '100%' }}>
      <View style={{ flexDirection: 'row', borderColor: Colors.WHITE, borderTopLeftRadius: 50, borderTopRightRadius: 50, borderWidth: 7, marginTop: 50, paddingBottom: 40 }}>
        <Image source={Images.loginLogo1} style={styles.loginImage} resizeMode="contain" />
        <Image source={Images.loginLogo2} style={styles.loginImage2} resizeMode="contain" />
      </View>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: Colors.PRIMARY, textAlign: 'center' }}>
          Let's Find
          <Text style={{ fontWeight: 'bold' }}> Professional Cleaning and repair </Text>
          Service
        </Text>
        <Text style={{ fontSize: 14, color: Colors.PRIMARY, textAlign: 'center', marginTop: 20, fontWeight: '500' }}>Best app to find services near you which deliver a professional service</Text>
        <TouchableOpacity style={styles.button} onPress={onPressed}>
          <Text style={{ fontSize: 18, color: Colors.WHITE, textAlign: 'center', fontWeight: 'bold' }}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: '95%',
    left: 70,
    height: 400,
  },
  loginImage2: {
    width: '90%',
    position: 'absolute',
    right: 85,
    height: 400,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    marginTop: 40,
    borderRadius: 99,
  },
});
