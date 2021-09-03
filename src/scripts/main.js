import { getPosts, getUsers } from "../Data/Datamanger.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/navbar.js";
import { Footer } from "./nav/Footer.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () =>{

    const footElement = document.querySelector("footer");
    footElement.innerHTML = Footer();
}

const applicationElement = document.querySelector(".giffygram",);

applicationElement.addEventListener("click", event => {
    console.log("what was clicked", event.target)
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

applicationElement.addEventListener("click", event => {
    
	if (event.target.id === "pb-home" ) {
       
       window.location.reload();
    }else if (event.target.id === "directMessageIcon"){
        alert("pen")
    }
		
	
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })

const startGiffyGram = () => {
    showNavBar();
    showPostList();
    showFooter();
    
}

startGiffyGram();

