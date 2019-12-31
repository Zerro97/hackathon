import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ViewProfile from "./components/view-profile.component";
import EditPost from "./components/edit-post.component";
import CreatePost from "./components/create-post.component";
import CreateUser from "./components/sign-up.component";
import PostArea from "./components/post-area.component";
import LoginPage from "./components/login.component";


function App() {
  return (
    <Router>
      
      <Navbar />
      <div className="container mt-5">
        <Route path="/edit/:id" render={(props) => <EditPost {...props} data={true} />}/>
        <Route path="/createPost" render={(props) => <CreatePost {...props} data={true} />}/>
        <Route path="/signUp" render={(props) => <CreateUser {...props} data={true} />}/>
        <Route path="/login" render={(props) => <LoginPage {...props} data={true} />}/>
        <Route path="/" exact render={(props) => <PostArea {...props} data={true} />}/>
      </div>
    </Router>
  );
}

export default App;
