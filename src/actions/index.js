let counter = 0

export const editIntro = (image, description) => ({
    type: 'EDIT_INTRO',
    image: image,
    description: description
  })

export const addPost = (title, image, description) => ({
    type: 'ADD_POST',
    id: counter++,
    title: title,
    image: image,
    description: description
  })

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id: id
})

export const editPost = (id, title, image, description) => ({
    type: 'EDIT_POST',
    id: id,
    title: title,
    image: image,
    description: description
  })

