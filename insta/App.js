import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaView>
  );
}
