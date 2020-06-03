import {createStore} from 'redux'
import reducer from './reducer'

import {addContact} from './actions'

const store = createStore(reducer);

store.dispatch(addContact({name: 'Jordan Lee', phone: '1233445'}))
store.dispatch(addContact({name: 'Lee Agnue', phone: '532456'}))
store.dispatch(addContact({name: 'Michael Joradan', phone: '12334343445'}))

export default store
