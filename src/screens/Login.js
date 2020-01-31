import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Button} from 'react-native-paper';
import {GoogleSigninButton} from 'react-native-google-signin';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';

class LoginOriginal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }
  loginPress = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Chat'))
      .catch(error => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#847FE5" />
        <View style={styles.root}>
          <View style={styles.wrapheader}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1.5, y: 0}}
              colors={['#757EE3', '#A972F4']}>
              <View style={styles.header}>
                <Text style={styles.textheader}>LOGIN</Text>
              </View>
            </LinearGradient>
          </View>
          <ScrollView>
            <View style={styles.wraplogo}>
              <Text style={styles.text}>YoLLO</Text>
              <Icon name="wind" size={22} color="#4a675a" />
            </View>
            <View style={styles.wrapcontent}>
              {this.state.errorMessage && (
                <Text style={styles.texterr}>{this.state.errorMessage}</Text>
              )}
              <View style={styles.wraptextinput}>
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  mode="outlined"
                  style={styles.textInput}
                  onChangeText={email => this.setState({email})}
                  value={this.state.email}
                  theme={{
                    colors: {primary: '#757EE3', underlineColor: 'transparent'},
                  }}
                />
                <TextInput
                  label="Password"
                  mode="outlined"
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={password => this.setState({password})}
                  value={this.state.password}
                  theme={{
                    colors: {primary: '#757EE3', underlineColor: 'transparent'},
                  }}
                />

                <Button
                  mode="outlined"
                  color="#fff"
                  style={styles.btnlogin}
                  onPress={this.loginPress}>
                  LOGIN
                </Button>

                <View style={styles.wrapsignup}>
                  <Text>Don't have an account? </Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.textsignup}> Sign up!</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.textor}>
                  <Text>OR</Text>
                </View>

                <View style={styles.wrapgooglesign}>
                  <GoogleSigninButton
                    style={styles.googleSign}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    // onPress={this.signInGoogle}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  wrapheader: {elevation: 5},
  header: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textheader: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  wraplogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 200,
  },
  textInput: {
    backgroundColor: '#FFF',
    height: 45,
    marginTop: 20,
    color: '#eee',
    marginBottom: 5,
    fontSize: 12,
  },
  wrapcontent: {justifyContent: 'center', alignItems: 'center'},
  wraptextinput: {width: '100%', paddingHorizontal: 20},
  btnlogin: {borderColor: '#757EE3', backgroundColor: '#757EE3', marginTop: 20},
  textor: {alignItems: 'center', marginTop: 20},
  wrapgooglesign: {alignItems: 'center', justifyContent: 'center'},
  googleSign: {
    marginTop: 20,
    width: '100%',
    height: 50,
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    color: '#4a675a',
    fontFamily: 'Holaholo',
  },
  wrapsignup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textsignup: {color: 'orange'},
  texterr: {color: 'red'},
});

const Login = withNavigation(LoginOriginal);

export default Login;
