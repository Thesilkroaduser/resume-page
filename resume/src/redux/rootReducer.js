const initialState = {
  language: ['ru', 'en']
}

export default function rootReducer(state = initialState, action) {
  if (action.type === 'TOGGLE') {
    const newState = [state.language[0], state.language[1]].reverse();
    return {
      language: newState
    }
  }
  return state
}