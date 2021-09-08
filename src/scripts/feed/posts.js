import { getUsers } from "../../Data/Datamanger.js"


export const Post = (postObject) => {

    return `
      <section class="post">
        <header>   
            <img class="user__image" src="${postObject.profilePic}" />       
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div><button id="edit--${postObject.id}">Edit</button></div>
      </section>
    `
  }