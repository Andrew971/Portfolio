import theme from '../Utils/theme'
import Data from '../Utils/Data'

// Initial state of the feature
const initialState = {
    Language: 'En',
    Theme: theme['SkyBlue'],
    modalDisplay: false,
    Modal: "Contact",
    modalSAtatus: null,
    websiteContent: Data['En'],
    sharedContent: Data.sharedContent
};

export function sharedReducer(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_LANG':

            return {
                ...state,
                Language: action.payload,
                websiteContent: Data[action.payload]

            };
        case 'CHANGE_THEME':
            return {
                ...state,
                Theme: theme[action.payload]
            };
        case 'MODAL_DISPLAY':
            return {
                ...state,
                modalDisplay: action.payload.flag,
                Modal: action.payload.type
            };
        case 'MODAL_HIDE':
            return {
                ...state,
                modalDisplay: action.payload,
                modalSAtatus: null
            };
        case 'CONTACT_INFO_RESULT':

            return {
                ...state,
                Modal: action.payload.status
                    ? "Confirmation"
                    : state.Modal,
                modalSAtatus: action.payload.status
            };
        case 'CONTACT_ERROR_NETWORK':
            return {
                ...state,
                modalSAtatus: action.payload.status
            };
        default:
            return state;
    }
}

export function sharedAction(data) {
    switch (data.type) {
        case 'CHANGE_LANG':
            return {type: data.type, payload: data.payload};

        case 'MODAL_DISPLAY':
            return {type: data.type, payload: data.payload};
        case 'MODAL_HIDE':
            return {type: data.type, payload: data.payload};
        default:
            return (console.log('no action with that name'));
    }
}
