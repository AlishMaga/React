import React from "react";

const Card = () => {
  return (
    <div className="w-90 h-full bg-amber-400 rounded-4xl  bg-[url('https://plus.unsplash.com/premium_photo-1675272833807-fb6d8293210c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974')] bg-cover bg-center relative">
      <span className="p-4 py-1.5 bg-amber-50 rounded-full text-2xl absolute top-10 left-10">
        1
      </span>

      <div className="flex text-amber-50 flex-col absolute bottom-10 px-10 text-xl gap-15">
        <p>
          Prime customers, that have access to bank credit and are satisfied
          eith the current product
        </p>
        <div className="flex gap-5">
          <button className="p-2 bg-blue-700 rounded-2xl  px-5">
            Satisfied
          </button>
          <button className="p-3 px-5 bg-blue-700 rounded-2xl">-</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
