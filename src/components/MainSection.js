import React from "react";
import CategoryDropDown from './CategotyDropDown'
const MainSection = () => {
  return (
    <div>
      <section id="hero" >
        <div className="container mt-1 mt-m-5 p-4" style={{height:'500px'}}>
          <div className="row mt-0 mt-md-5">
            <div className="col-12 col-sm-12 col-md-4">
              <h1>
                Food
                <br />
                Recipes
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
            <CategoryDropDown />
            </div>
            <div className="col-12 col-sm-12 col-md-8 d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                className="img-fluid mt-4 mt-sm-0"
                width="400px"
                height='250px'
                alt="Software Development"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MainSection;
