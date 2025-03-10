import React from "react";
const Home = () => {
  return (
    <>
      <div className="row row-deco row-1">
        <div className="col-md-6 my-auto text-center">
          <h1>Investing in your future.</h1>
          <a href="">Get Involved Today.</a>
        </div>
        <div className="col-md-6 my-auto text-center">
          <img
            src="https://i.pinimg.com/736x/31/c8/a3/31c8a3c4f21665588f2370db41fc047e.jpg"
            alt=""
            width="300px"
          />
        </div>
      </div>

      <div className="row row-deco row-2">
        <div className="col-md-6 my-auto text-center">
          <img src="https://placehold.co/400x400" alt="" />
        </div>
        <div className="col-md-6 my-auto px-5 py-3">
          <h2>Our Mission</h2>
          <p>
            To level out educational disparities and equip youth with money
            management skills, fostering financial confidence and
            responsibility.
          </p>
        </div>
      </div>

      <div className="row row-deco row-3">
        <div className="text-center my-auto">
          <h2 className="mb-5 px-5">
            Become WISEr with WISE and get involved today.
          </h2>
          <div className="row text-start">
            <div className="col-md-6 px-5">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, quisquam delectus deserunt totam quidem qui rem culpa
                deleniti doloribus recusandae tempore voluptatum sit inventore
                consectetur facere et saepe ab? Adipisci.
              </p>
              <a href="">Learn More</a>
            </div>
            <div className="col-md-6 px-5">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quidem deserunt iste impedit quas unde accusamus
                veritatis qui cum! Provident pariatur voluptatum, adipisci earum
                eos ipsa ex temporibus! Repudiandae, fugit.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
