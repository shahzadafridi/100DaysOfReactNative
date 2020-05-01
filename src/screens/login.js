import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,View,Text, Button,TextInput,TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
class UserLogin extends Component {
state = {
  email: '',
  password: ''
}

handleEmail = (text) => {
  this.setState({ email: text })
}
handlePassword = (text) => {
  this.setState({ password: text })
}

login = (email, pass) => {
  alert('email: ' + email + '\n' + 'password: ' + pass)
}

render() {

  return (
      <View style={styles.sectionContainer}>
          <Text style={styles.sectionLable}>Email</Text>
          <TextInput
            style={styles.TextInputStyleClass}
            onChangeText={this.handleEmail}
            placeholder = "Enter your email"/>
          <Text style={styles.passwordLabel}>Password</Text>
          <TextInput
            style={styles.TextInputStyleClass}
            onChangeText={this.handlePassword}
            placeholder = "Enter your password"/>
          <View>
            <Text style={styles.ButtonStyle} onPress={() => this.login(this.state.email,this.state.password)}>Login</Text>
          </View>
          <Text style={styles.registerLabel}>Haven't register yet?</Text>
      </View>

  );
};
}
const styles = StyleSheet.create({
  sectionContainer:{
    paddingTop: 36,
    flex: 1,
    backgroundColor: Colors.white
  },
  passwordLabel:{
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 12,
    marginLeft: 8,
    color: Colors.black,
  },
  registerLabel:{
    fontWeight: 'normal',
    fontSize: 12,
    marginTop: 8,
    marginLeft: 8,
    color: Colors.black,
  },
  sectionLable: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 8,
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  TextInputStyleClass:{
    height: 40,
    borderWidth: 1.2,
    margin: 8,
    borderColor: '#008000',
    borderRadius: 5 ,
    paddingLeft: 8,
    textAlign: 'left',
    fontSize: 14,
  }, 
  ButtonStyle: {
    marginTop: 30,
    fontWeight: 'bold',
    backgroundColor: '#008000',
    color: Colors.white,
    borderRadius: 5,
    margin: 8,
    height: 40,
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 16,
 },
 ButtonText:{
    color: 'white'
 }
});

export default UserLogin;