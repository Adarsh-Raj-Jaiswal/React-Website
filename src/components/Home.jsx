import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in the children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            possimus maxime veniam tenetur sunt aut? Quis, minima voluptatem
            cumque quos dolor quo iure reprehenderit beatae, repudiandae ad,
            deserunt atque pariatur eaque nostrum? Maiores possimus aliquid
            tempore cum earum? Nulla fugit dolorum officia, eaque saepe, magnam
            voluptates vitae iusto doloribus porro, ex laboriosam. Asperiores
            officiis eligendi, odio necessitatibus odit eveniet placeat,
            incidunt tempore possimus doloremque inventore saepe, sit alias
            cumque facere laboriosam nobis! Debitis quas in tempora repudiandae
            neque, perferendis iure a? A, veritatis vitae reiciendis dolores,
            maxime explicabo quaerat harum porro incidunt totam corrupti, quod
            sunt accusantium fugiat dolorem excepturi?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
