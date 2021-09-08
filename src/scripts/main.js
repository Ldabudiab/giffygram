import { getPosts, usePostCollection } from "../Data/Datamanger.js"
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

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      showFilteredPosts(yearAsNumber);
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })

  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
  }

const startGiffyGram = () => {
    showNavBar();
    showPostList();
    showFooter();
    
}

startGiffyGram();

