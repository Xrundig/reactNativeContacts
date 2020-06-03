import React from 'react'
import {TextInput, Button, View, StyleSheet, KeyboardAvoidingView} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
  }
})


export default class AddContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func,
  }

  state = {
    name: '',
    phone: '',
    isValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name || prevState.phone !== this.state.phone ){
      this.validateForm();
    }
  }

  validateForm = () => {
    if(this.state.name.length >= 2 && this.state.phone > 0 && this.state.phone.length < 15){
      return this.setState({isValid: true})
    } else{
      this.setState({isValid: false})
    }

  }

  getHandler = key =>  val => {
      this.setState({ [key]: val})
  }

  // handleNameChange = name => {
  //   this.setState({name});
  // }

  // handlePhoneChange = phone => {
  //   this.setState({phone});
  // }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.block}>
        <TextInput
          value = {this.state.name}
          style={styles.input}
          onChangeText = {this.getHandler('name')}
          placeholder = "Name"
        />
        <TextInput
          value = {this.state.phone}
          style={styles.input}
          onChangeText = {this.getHandler('phone')}
          keyboard= "numeric"
          placeholder = "Phone"
        />

        <Button title='add contact' onPress={this.handleSubmit} disabled={!this.state.isValid}/>
      </KeyboardAvoidingView>
    )
  }
}
