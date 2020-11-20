import React, { useState } from "react";
import styles from "./App.module.scss";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import List from "./list";

function App(props) {
   /*=====================Defined========================== */
   const [isAddListOpen, setInit] = useState(false);
   const [title, setTitle] = useState("");
   const [tasks, setTasks] = useState(props.tasks);
   const closeList = (
      <div className={styles.outer}>
         <button className={styles.addListBtn} onClick={initAddListHandler}>
            + Add List
         </button>
      </div>
   );
   const openList = (
      <div className={styles.container}>
         <div className={styles.outer}>
            <input className={styles.titleInput} type="text" value={title} onChange={titleChangeHandler} />
            <div className={styles.btn}>
               <button className={styles.addListBtn} onClick={AddListHandler}>
                  + Add List
               </button>
               <button className={styles.cancelBtn} onClick={cancelHandler}>
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
   const taskList = tasks.map((task) => (
      <List id={task.id} title={task.title} completed={task.completed} key={task.id} />
   ));
   /*=====================Return========================== */
   // return <div className={styles.container}>{isAddListOpen ? openList : closeList}</div>;
   return (
      <div>
         {taskList}
         {isAddListOpen ? openList : closeList}
      </div>
   );

   /*=====================Event========================== */
   function initAddListHandler() {
      setInit(true);
   }
   function titleChangeHandler(e) {
      console.log(e.target.value);
      setTitle(e.target.value);
   }
   function AddListHandler() {
      if (title.length > 0) {
         console.log(title);
         console.log(tasks);
         const newTask = { id: "todo-" + nanoid(), title: title, completed: false };
         setTasks([...tasks, newTask]);
         setTitle("");
         return taskList;
      }
   }
   function cancelHandler() {
      setInit(false);
   }
}

App.propTypes = {
   tasks: PropTypes.array,
};

// export { AddListHandler };

// return (
//    <div className={styles.container}>
//       <div className={styles.outer}>
//          <input className={styles.titleInput} type="text" value={title} onChange={handleChange} />
//          {/* title */}
//          <div className={styles.titleDiv}></div>
//          {/* tasks */}
//          <ul className={styles.ul}>
//             <li className={styles.li}>
//                <input className={styles.item} type="text" />
//             </li>
//             <li className={styles.li}>
//                <input className={styles.item} type="text" />
//             </li>
//          </ul>
//          <div className={styles.btn}>
//             <button className={styles.addListBtn} onClick={handleSubmit}>
//                + Add List
//             </button>
//             <button className={styles.cancelBtn}>Cancel</button>
//          </div>
//       </div>
//    </div>
// );
export default App;
