const initialState = {
  theme: true
}
  
  export function themeReducer(state = initialState, action) {
    switch(action.type){
      case "SET_THEME": 
        return {...state, theme: !state.theme }
      default: 
        return state;
    }
  }