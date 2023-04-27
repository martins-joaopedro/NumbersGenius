import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import { Home } from './src/components/Home'
import { COLORS } from './src/global';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.back,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
