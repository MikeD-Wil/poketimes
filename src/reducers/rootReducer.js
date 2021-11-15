
const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an egg', body: 'lorem is broken 1'},
        
       {id: '2', title: 'Charmander Laid an egg', body: 'lorem is broken 2'},
        
       {id: '3', title: 'A Helix Fossil was Found', body: 'lorem is brok 3'}       
    ]
}

const rootReducer = (state = initState, action) => {
    console.log( action );
    if ( action.type === 'DELETE_POST' ) {
        let newPosts = state.posts.filter( post => {
            return post.id !== action.id
        } );
        return {
            ...state,
            posts: newPosts
        }
    }
  return state;
}

export default rootReducer