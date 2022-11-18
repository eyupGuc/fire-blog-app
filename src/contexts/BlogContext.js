import { useContext, useState } from "react";
import { createContext } from "react";
const initialValues = { title: "", imageUrl: "", content: ""};

export const BlogContext = createContext();
// const BlogContextProvider = ({ children }) => {
//   const [ addBlog, setAddBlog ] = useState(initialValues);
//   const values={addBlog,setAddBlog}

//   return (
//     <BlogContext.Provider value={values} >
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export const useBlogContext=()=>{
//     return useContext(BlogContext);
// };
// export default BlogContextProvider;
