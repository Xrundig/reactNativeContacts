import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, SectionList } from 'react-native';
import {Constants} from 'expo'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from 'react-redux'

// import contacts, {compareNames} from './contact.js'
import Row from './Row.js'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'
import ContactsListScreen from './screens/ContactsListScreen'
import AddContactFormScreen from './screens/AddContactFormScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import LoginScreen from './screens/LoginScreen'
import {fetchUsers} from './api'
import store from './redux/store'

const MainNavigator = createStackNavigator({
  "Contacts" : ContactsListScreen,
  "AddContact" : AddContactFormScreen,
  "ContactDetails" : ContactDetailsScreen,
},{
  initialRouteName : 'Contacts',

});



const AppNavigator = createSwitchNavigator({
  "Main" : MainNavigator,
  "Login" : LoginScreen,
}, {
  initialRouteName : 'Login',
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state={
    contacts: '',
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = async () => {
    fetchUsers().then(result => this.setState({contacts : result}));
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts : [...prevState.contacts, newContact],
    }))
  }

  render() {
    return (
      <Provider store={store} >
        < AppContainer />
      </Provider>
      // screenProps={{addContact: this.addContact, contacts: this.state.contacts}}
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',

  },
  contact: {
    marginTop : 20,
  },
  button: {
    marginTop: 50,
  }
});
