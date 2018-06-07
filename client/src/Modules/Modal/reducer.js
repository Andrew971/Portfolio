
// Initial state of the feature
const initialState = {

};

export function contactReducer(state = initialState, action) {
  switch (action.type) {
      case 'CHANGE_LANG':
          return  {
              ...state,
              Language: action.payload
          };
  

      default:
          return state;
  }
}

export function contactAction(data) {
  switch (data.type) {
      case 'SEND_CONTACT_INFO':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
