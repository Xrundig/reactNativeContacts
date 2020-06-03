import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  contact:{
    marginTop: 20,
  },
})


const Row = props => (
    <TouchableOpacity key={props.key} style={styles.contact} onPress={() => {props.onSelectItem(props)}}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </TouchableOpacity>
  )

export default Row
