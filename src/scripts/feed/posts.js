
export const Post = (postObject) => {
  const userPost = JSON.parse(sessionStorage.getItem("user"))
    if (userPost.id === postObject.user.id){
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p>${postObject.description}</p>
      <div class="buttons">
      <h4>Posted By: ${postObject.user.name}</h4>
        <button id="edit--${postObject.id}">Edit</button>
        <button id="delete--${postObject.id}">Delete</button>
      </div>
      </section>
    `
    } else {
      return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p>${postObject.description}</p>
      <div class="buttons">
      <h4>Posted By: ${postObject.user.name}</h4>
    `
    }
}