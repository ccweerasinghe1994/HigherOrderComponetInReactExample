import React from "react";
import "./styles.css";
import UserProfile from "./user-profile/user-profile.component";

export default function App() {
  return (
    <div className="App">
      <UserProfile name="wchamra" email="wchamamra@yohobed.com" />
    </div>
  );
}
