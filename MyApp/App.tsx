/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
// @ts-ignore
import RNUpiPayment from 'react-native-upi-payment';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const paymentfunction = () => {
    // Your payment logic goes here
    //Alert.alert('Payment function called');
    // Replace this with your actual payment logic
    RNUpiPayment.initializePayment(
      {
        vpa: 'bm6780735@okhdfcbank', // or can be john@ybl or mobileNo@upi
        payeeName: 'Mohan',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn',
      },
      successCallback,
      failureCallback
      

    );
    function successCallback(data) {
      // do whatever with the data
      console.log(data);
    }
    
    function failureCallback(data) {
      // do whatever with the data
      console.log(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <TouchableOpacity style={styles.button} onPress={()=>paymentfunction()}><Text>Click here</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor:'blue',
    padding:20,
  }
});

export default App;
