import React from "react";
import Notes from "./Notes";
import HomeNot from "./HomeNot";

const Home = () => {
  return (
    <>
      <div>
        {!localStorage.getItem("token") && <HomeNot/>}
        <div className="container">
          {localStorage.getItem("token") && <Notes/>}
        </div>
      </div>
    </>
  );
};

export default Home;