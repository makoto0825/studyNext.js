"use client";
import React from "react";
// import { useActionState } from "react";
import { useFormState } from "react-dom";
import { putcart } from "./functions";

const FormCop = () => {
  const [state, dispatch] = useFormState(putcart, null);
  return (
    <form
      className="bg-white w-1/3 text-center m-auto mt-20 p-5"
      action={dispatch}
    >
      <h1 className="font-bold">Shopping cart</h1>
      <input type="hidden" name="itemID" value={"1"} />
      <button className="bg-teal-400 w-3/4 p-2 text-white m-5" type="submit">
        ADD TO CART
      </button>
      {state && <p className="text-green-500">{state}</p>}
    </form>
  );
};

export default FormCop;
