import { createStore } from 'redux'
import { noteReducer } from '../reducer/noteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const Store = createStore(noteReducer, composeWithDevTools())