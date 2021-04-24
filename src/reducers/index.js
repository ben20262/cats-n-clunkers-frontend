export default function rootReducer(state = { cats: [{id: 9593, make: "GM", serial: "10219956 SK", price: 120}, {id: 9594, make: "GM", serial: "10243261 TC", price: 126}, {id: 19184, make: "Ford", serial: "New Torpedo", price: 287}], loading: false }, action) {

    switch (action.type) {
        case 'LOADING_CATS':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }

}