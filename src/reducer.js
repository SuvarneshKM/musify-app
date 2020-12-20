export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQBDKUDaOUx4s4fWMWn9BmzA_Yz8Pi3_XrYZJpLCKZokbp4zaT3rWrYVd6zzZKb3qNCYUoowkCmaMb_u9QpMg2LRXcDKJwrmZGHYtI9WHzdf0uZ3MSmh5_91n_0GHwkTbkQ0cmgQVx2zE5gVqCmLo0rWXtj3Fzy9TWEWZ6d-YxuU-rjDoDbS',
};


const reducer = (state, action) => {
console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };  
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }          
        default:
            return state;    
    }
}

export default reducer;