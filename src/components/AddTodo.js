import { useState } from "react";
import React from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));

    setInput("");
  };

  return <form onSubmit={addTodoHandler}></form>;
}

export default AddTodo;
