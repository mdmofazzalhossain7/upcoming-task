import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Announcements,
  CreatePost,
  Home,
  Login,
  Profile,
  Tasks,
  ViewImage,
} from "./pages";
import { Topbar, Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/image/:id" element={<ViewImage />} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;
