import React from "react";
import type { Product } from "../types/product";

type ShowInfoProps = {
  info: Product;
};
const ShowInfo = (props: ShowInfoProps) => {
  return <div>{props.info.name}</div>;
};

export default ShowInfo;
