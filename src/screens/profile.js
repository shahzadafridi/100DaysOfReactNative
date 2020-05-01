import * as React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,View,Text,Button,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = ({navigation}) => {
  return (

              <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                User Profile
              </Text>
              <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Login')}
    />
      </View>

  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
