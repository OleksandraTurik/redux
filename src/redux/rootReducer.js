import {combineReducers} from 'redux'
import {DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from './types'

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state
}

const initialThemeState = {
  disabled: false
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case ENABLE_BUTTONS:
      return {disabled: false}
    case DISABLE_BUTTONS:
      return {disabled: true}
    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})