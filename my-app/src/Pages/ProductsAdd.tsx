import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Product } from "../types/product";

type ProductProps = {
  onAdd: (props: Product) => void;
};
type Inputs = {
  name: string;
  price: number;
};

const ProductsAdd = (props: ProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    props.onAdd(data);
    navigate("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />

        {/* {errors.name && errors.name.type == "required" && <span>Required</span>}
        {errors.name && errors.name.type == "minLength" && (
          <span>Min Length</span>
        )} */}

        <input type="number" {...register("price")} />

        {/* {errors.price && errors.price.type == "required" && (
          <span>Required</span>
        )} */}

        <button>Add</button>
      </form>
    </div>
  );
};

export default ProductsAdd;
