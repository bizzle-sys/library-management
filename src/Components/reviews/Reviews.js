import React from "react";
import "./reviews.css";
import { Rating } from "../rating/Rating";
export const Reviews = () => {
  return (
    <div className="review d-flex justify-content-between gap-4 border p-4 shadow-lg mb-3 rounded">
      <div className="avatar">
        <div className="name-logo">RM</div>
        <div className="name ms-4">Reeamsh Maharjan </div>
      </div>

      <div className="review-content">
        <h3>Best Book</h3>
        <Rating />
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          delectus exercitationem ea qui. Corporis, incidunt explicabo. Adipisci
          labore nobis harum, aut numquam autem! Dolore consequuntur, doloribus
          a vero illum ducimus.
        </p>
      </div>
    </div>
  );
};
