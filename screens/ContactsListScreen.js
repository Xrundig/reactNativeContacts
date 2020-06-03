import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux'

import ContactsList from '../ContactsList'
import contacts, {compareNames} from '../contact.js'
import store from '../redux/store'


class ContactsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (<Button title="Add" onPress={() => {navigation.navigate("AddContact")}} />),
  })




  render(){
    const contacts = this.props.contacts
    return(
      <View style={styles.container}>
        <ContactsList
          contacts={contacts}
          onSelectItem = {contact => {
            this.props.navigation.navigate("ContactDetails", {
              phone: contact.phone,
              name: contact.name,
            });
          }}
        />
      </View>
    )
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
const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(mapStateToProps)(ContactsListScreen)
