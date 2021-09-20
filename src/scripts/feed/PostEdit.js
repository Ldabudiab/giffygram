

export const PostEdit = (postObject) => {
	return `
	<div class="newPost">
	<h3>Edit This Post</h3>
		<div>
			<input value="${postObject.title}"
				   name="postTitle"
				   class="newPost__input"
				   type="text"
				   placeholder="Title" />
		</div>
		<div>
			<input value="${postObject.imageURL}"
				   name="postURL"
				   class="newPost__input"
				   type="text"
				   placeholder="URL of gif" />
		</div>

    	<textarea name="postDescription"
    	class="newPost__input newPost__description"
    	placeholder="Story behind your gif...">${postObject.description}</textarea>
		
		<input type="hidden" value="${postObject.id}" name="postId">
		<input type="hidden" value="${postObject.timestamp}" name="postTime">	
		<button id="updatePost__${postObject.id}">Update</button>
		<button id="newPost__cancel">Cancel</button>
	</div>
	`
}
