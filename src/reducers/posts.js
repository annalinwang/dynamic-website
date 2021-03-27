const defaultState = []

const posts = (state = defaultState, action) => {
    //destructuring your action union of addTodo and toggleTodo… because in addTodo, you know type, id, text
	const {type, id, title, image, description}  = action 

	switch (type) {
		case 'ADD_POST':
			return [
                //we are defining the attributes to state
				...state, { id, title, image, description }
			];

        case 'EDIT_POST':
            //destructuring your action union
            return state.map(posts => {
                if (posts.id === id) {
                    return { id, title, image, description }
                }
                return posts
            })
        
        case 'DELETE_POST': {
            const { id } = action
            return state.filter(post => post.id !== id)
        }

        default:
            return state
	}
}
export default posts