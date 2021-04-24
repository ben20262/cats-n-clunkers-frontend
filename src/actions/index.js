const apiURL = 'URL'

export const fetchCats = () => {
    return dispatch => {
        dispatch({type: 'LOADING_CATS'})
        fetch(`${apiURL}/cats`)
        .then(resp => resp.json())
        .then(cats => dispatch({ type: 'ADD_CATS', cats }))
    }
}