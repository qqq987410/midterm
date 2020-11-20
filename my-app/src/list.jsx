import React, { useState } from "react";
import styles from "./App.module.scss";
// import { nanoid } from "nanoid";
// import PropTypes from "prop-types";
import ProductList from "./product";

const PRODUCTS = [
   { id: "product-0", name: "111", done: false },
   { id: "product-1", name: "222", done: false },
];

function List(props) {
   /*=====================Defined========================== */

   const productList = PRODUCTS.map((p) => <ProductList id={p.id} name={p.name} completed={p.completed} key={p.id} />);
   /*=====================Return========================== */
   return (
      <div className={styles.outer}>
         <div>{props.title}</div>
         <div className={styles.productList}>{productList}</div>
         <div className={styles.btn}>
            <button className={styles.addListBtn} onClick={AddCardHandler}>
               Add Card
            </button>
            <button className={styles.cancelBtn}>Cancel</button>
         </div>
      </div>
   );
   /*=====================Event========================== */
   function AddCardHandler() {
      console.log("Second");
   }
}

export default List;
