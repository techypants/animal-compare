import React from "react";

export default function Card({ animal }) {
  return (
    <div>
      <div className="border-2 p-2  rounded-xl border-slate-900 m-2">
        <div className="font-semibold underline">{animal?.name}</div>
        {/* {console.log(animal)} */}
        <div className="flex flex-col gap-4 mt-2">
          <p>{animal?.characteristics?.habitat}</p>
          <p>{animal?.characteristics?.diet}</p>
          <p>{animal?.characteristics?.slogan}</p>
          <p>{animal?.characteristics?.color}</p>
          <p>{animal?.characteristics?.lifespan}</p>

          <p className="flex gap-2">
            {animal?.locations?.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </p>
          {/* <p>{animal.characteristics.habitat}</p> */}
        </div>
      </div>
    </div>
  );
}
