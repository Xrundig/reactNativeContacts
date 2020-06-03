import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Login',
  }

  state = {
    login: '',
    password: '',
  }

  _login = () =>  {
      //  fetch("http://localhost:8000/", {
      //   method : 'POST',
      //   headers: {'content-type' : 'application/json'},
      //   body: JSON.stringify({login : this.state.login, password : this.state.password})
      // })
      this.props.navigation.navigate('Main');
    }




  handleLogin = login => {
    this.setState({login});
  }

  handlePassword = password => {
    this.setState({password});
  }

  render(){
    return(
      <View style={{flex: 1, alighItems: 'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
        <TextInput
            style={{borderWidth: 1, marginBottom: 20, paddingLeft: 5}}
            value={this.state.login}
            onChangeText={this.handleLogin}
            placeholder="Login"
        />
        <TextInput
            style={{borderWidth: 1, marginBottom: 20, paddingLeft: 5}}
            value={this.state.password}
            onChangeText={this.handlePassword}
            placeholder="Password"
        />
        <Button title="Submit" onPress={this._login} style={{backgroundColor: 'green'}}/>
      </View>
    )
  }
}
