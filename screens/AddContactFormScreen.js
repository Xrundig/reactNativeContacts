import React from 'react'

import AddContactForm from '../AddContactForm'
import store from '../redux/store'
import {addContact} from '../redux/actions'

export default class AddContactFormScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'AddContact',
    headerTintColor: 'green',
  }

  handleSubmit = formState => {
    store.dispatch(addContact(formState));
    this.props.navigation.navigate('Contacts');
  }


  render(){
    return(
      <AddContactForm onSubmit={this.handleSubmit}/>
    )
  }
}
