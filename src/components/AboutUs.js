import React from 'react'

const AboutUs =()=>{
    return (
        <React.Fragment>
      <div className="container" id="aboutUs">
        <div className="row h-100 align-items-center py-5 d-flex justify-content-between">
          <div className="col-lg-4">
            <h5 style={{textDecoration:'underline 2px'}}>About us</h5>
         
            <p className="lead text-muted mb-0 text-wrap" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda aspernatur, maiores culpa reiciendis voluptate vel distinctio delectus, sapiente voluptatum, a nihil minima perferendis labore optio omnis! Repellat, pariatur possimus.</p>
          </div>
          <div className="col-lg-5 d-none d-lg-block"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid"/></div>
        </div>
      </div>
    </React.Fragment>
    )
}
   


export default AboutUs