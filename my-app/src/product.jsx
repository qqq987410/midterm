import React, { useState } from "react";
import styles from "./App.module.scss";
// import { nanoid } from "nanoid";
// import PropTypes from "prop-types";

function ProductList(props) {
   /*=====================Defined========================== */
   const [product, setProducts] = useState(props.product);

   /*=====================Return========================== */
   return <input className={styles.product} type="text" />;
}
export default ProductList;
