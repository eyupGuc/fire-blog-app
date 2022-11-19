import {
  getDatabase,
  push,
  set,
  ref,
  onValue,
  update,
  remove,
} from "firebase/database";
import {  useEffect } from "react";
import { useState } from "react";

import app from "./firebase";

export const AddBlog = (addBlog, navigate,currentUser) => {
  try {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog/");
    const newBlogRef = push(blogRef);

    set(newBlogRef, {
      title: addBlog.title,
      imageUrl: addBlog.imageUrl,
      content: addBlog.content,
      email:currentUser.email
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const useBlogFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog/");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];
      for (let id in data) {
        blogArray.push({ id, ...data[id] });
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

export const EditAndUpdateBlog = async(addBlog, navigate) => {
  try {
    const db = getDatabase(app);

    const updates = {};
    updates["blog/" + addBlog.id] = addBlog;

    await update(ref(db), updates);
     navigate(-1)
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBlog = (id, navigate) => {
  const db = getDatabase(app);
  remove(ref(db, "blog/" + id));
  navigate("/");
};
