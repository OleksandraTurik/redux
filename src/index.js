import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import {rootReducer} from './redux/rootReducer'
import {asyncIncrement, decrement, increment} from './redux/actions'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter;
    
    [addBtn, subBtn, asyncBtn].forEach(btn => {
        btn.disabled = state.theme.disabled
    })
})

store.dispatch({ type: 'INIT_APPLICATION' })
