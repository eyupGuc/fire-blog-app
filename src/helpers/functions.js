import { getDatabase, push, set, ref, onValue } from "firebase/database";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import app from "./firebase";

export const AddBlog = (addBlog, navigate) => {
  
  
  try {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog/");
    const newBlogRef = push(blogRef);

    set(newBlogRef, {
      title: addBlog.title,
      imageUrl: addBlog.imageUrl,
      content: addBlog.content,
      
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};


export const useBlogFetch=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [blogList,setBlogList]=useState();

    useEffect(()=>{
const db=getDatabase(app)
const blogRef=ref(db,"blog/")

onValue(blogRef,(snapshot)=>{
    const data=snapshot.val();
    const blogArray=[];
    for(let id in data){
        blogArray.push({id,...data[id]})
    }
    setBlogList(blogArray)
    setIsLoading(false)
})


    },[])
    return{isLoading,blogList}
}