"use client";
import styles from "@/app/style.module.css";
import React, { useState } from "react";
const Page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const sumbithandler = (e) => {
    e.preventDefault();
    if (task !== "" && desc !== "") {
      setmaintask([...maintask, { task, desc }]);
    }

    // console.log(maintask);

    //after clicking to add this will again make the input empty
    settask("");
    setdesc("");
  };

  //this will delete the task
  const deletehandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };

  // these are the tasks that will be keep adding
  let rendertask = <h2>No task available</h2>;
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <div key={i}>
          <h3 className="font-2xl font-semibold">{t.task}</h3>
          <h4 className="font-lg font-medium">{t.desc}</h4>
          <button
            className="bg-red-400 text-white px-4 py-2 rounded font-bold mb-2"
            onClick={() => {
              deletehandler(i);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <h1 className="bg-black text-white text-5xl font-semibold text-center p-5 ">
          Piyush Todo List
        </h1>
        <form className={styles.form} onSubmit={sumbithandler}>
          {/* input for task */}
          <input
            className="text-xl border-zinc-800 border-4  p-2 rounded-md px-4 py-2"
            placeholder="Enter task here"
            value={task}
            onChange={(e) => {
              settask(e.target.value);
              // console.log(e.target.value);
            }}
          ></input>
          {/* input for description */}
          <input
            type="text"
            className="text-xl border-zinc-800 border-4  rounded-md px-4 py-2"
            placeholder="Enter description here"
            value={desc}
            onChange={(e) => {
              /* value inide the input */

              setdesc(e.target.value);
              // console.log(e.target.value);
            }}
          ></input>
          <button className={`${styles.button} text-white bg-black  px-5 py-3 text-xl rounded-md font-semibold`}>
            Add Task
          </button>
        </form>
      </div>
      <div className={styles.div}>
        <h1 className="text-center text-[1.5rem]">TASK</h1>
        <ul>
          <li>{rendertask}</li>
        </ul>
      </div>
    </>
  );
};

export default Page;
