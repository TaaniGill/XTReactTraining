import React, { Component } from 'react';

const Character = ({character}) =>{
  
      const { id, name, status, species, type, gender, origin, location, image, created } = character;
      return (
         <article className="characterCard_Wrapper">
            <div data="card header" className="characterCard_imgwrapper">
               <div className="card-image">
                  <img src={image} alt={name} />
               </div>
               <div className="characterCard_title">
                  <h2 className="characterCard_name">{name}</h2>
                  <p className="characterCard_description">id: {id} - created {created}</p>
               </div>
            </div>
            <div data="card info" className="characterCard_infoWrapper">
               <div className="characterCard_textWrapper">
                  <span>STATUS</span>
                  <p>{status}</p>
               </div>
               <div className="characterCard_textWrapper">
                  <span>SPECIES</span>
                  <p>{species}</p>
               </div>
               <div className="characterCard_textWrapper">
                  <span>GENDER</span>
                  <p>{gender}</p>
               </div>
               <div className="characterCard_textWrapper">
                  <span>ORIGIN</span>
                  <p>{origin}</p>
               </div>
               <div className="characterCard_textWrapper_location">
                  <span>LAST LOCATION</span>
                  <p>{location}</p>
               </div>
            </div>
         </article>
      )
   
}

export default Character;