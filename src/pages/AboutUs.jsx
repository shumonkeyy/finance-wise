import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="row row-deco row-1">
        <div className="my-auto text-center">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="row row-deco row-3 px-5">
        <div className="col-md-6 my-auto px-5">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            dignissimos consectetur eius illo quibusdam voluptate saepe sed
            pariatur non eos, eum sit aut mollitia similique corrupti excepturi
            vitae voluptatum reprehenderit?
          </p>
        </div>
        <div className="col-md-6 my-auto text-center px-5">
          <img src="https://placehold.co/400x400" alt="" />
        </div>
      </div>

      <div className="row row-deco row-2 px-5 text-center">
        <h2>Meet the WISE Team</h2>
        <h3>Founders</h3>
        <div className="col-md-4 px-3">
          <div class="card">
            <img src="https://placehold.co/200x200" alt="" />
            <div class="card-body">
              <h5 class="card-title">Adam Myat</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-3">
          <div class="card">
            <img src="https://placehold.co/200x200" alt="" />
            <div class="card-body">
              <h5 class="card-title">Gotzon Yiu</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-3">
          <div class="card">
            <img src="https://placehold.co/200x200" alt="" />
            <div class="card-body">
              <h5 class="card-title">Emily Liang</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
