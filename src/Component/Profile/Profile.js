import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import Fullname from "./Fullname";
import Adress from "./Adress";

function Profile() {
  return (
    <div>
      <Fullname />
      <Adress />
      <ProfilePhoto />
    </div>
  );
}
export default Profile;
