const defaultState = {
	image: `https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg`,
	description: `Hello World`
}

const introduction = (state = defaultState, action) => {
    //destructuring your action union of addTodo and toggleTodo… because in addTodo, you know type, id, text
	const {type, image, description}  = action 

	switch (type) {
        case 'EDIT_INTRO':
            return { image, description };
        
        default:
            return state
	}
}
export default introduction