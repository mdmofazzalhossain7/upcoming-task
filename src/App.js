import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Announcements, CreatePost, Home, Profile, Tasks } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default App;
