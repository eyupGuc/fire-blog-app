import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import { BlogContext } from "../contexts/BlogContext";
import { useState } from "react";
const initialValues = { title: "", imageUrl: "", content: "" };
const AppRouter = () => {
  const [addBlog, setAddBlog] = useState(initialValues);
  // console.log(addBlog.title)
  return (
    <BlogContext.Provider value={{addBlog,setAddBlog}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
          <Route path="/newBlog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route>
          <Route path="/updateBlog" element={<PrivateRouter />}>
            <Route path="" element={<UpdateBlog />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default AppRouter;
