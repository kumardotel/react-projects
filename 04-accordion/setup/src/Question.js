import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [plus, setPlus] = useState(true);

  const changeIconPlus = () => {
    setPlus(!plus);
  };
  const changeIconMinus = () => {
    setPlus(!plus);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {plus ? (
          <button className="btn" onClick={changeIconPlus}>
            <AiOutlinePlus />
          </button>
        ) : (
          <button className="btn" onClick={changeIconMinus}>
            <AiOutlineMinus />
          </button>
        )}
      </header>

      <p>{plus ? null : info}</p>
    </article>
  );
};

export default Question;
