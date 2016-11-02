// Dispatches actions
// Increment likes
export function increment(index) {
  console.log('Increment  action ' + index);
    return {
      type: 'INCREMENT_LIKES',
      index
    }
}

// Add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
export function removeComment(postId, index) {
  return {
    type:  'REMOVE_COMMENT',
    postId,
    index
  }
}
