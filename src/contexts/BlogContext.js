import { createContext } from "react";

export const BlogContext=createContext();
const BlogContextProvider=({children})=>{

    return( <BlogContext.Provider value={{ currentUser }}>
        {children}
      </BlogContext.Provider>)
}

export default BlogContextProvider