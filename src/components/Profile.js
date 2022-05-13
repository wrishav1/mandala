import React from "react";
import AuthService from "../services/auth.service";


const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  if (props.match.path === "/confirm/:confirmationCode") {
    AuthService.verifyUser(props.match.params.confirmationCode)
  }

  return (
    <div className="container">
      <header className="jumbotron">
      <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
              </header>
              <p>
              <strong>Firstname:</strong> {currentUser.firstname} 
      </p>
      <p>
        <strong>Lastname:</strong> {currentUser.lastname} 
      </p>
      <p>
        <strong>Username:</strong> {currentUser.username} 
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Status:</strong> {currentUser.status}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <p>
        <strong>Unique Id:</strong> {currentUser.id}
      </p>
    </div>
  );
};

export default Profile;
