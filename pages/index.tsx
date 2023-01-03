import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToDo, selectItems } from "../slices/todoSlice";

function Hello() {
  // Redux
  const dispatch = useDispatch();

  const items = useSelector(selectItems)
  const [todoItem, setTodoItem] = useState<any>("");
  const [todoList, setTodoList] = useState<any>(items)

  const handleAddToDo = () => {
    if (todoItem) {
      // Redux
      dispatch(addToDo(todoItem))
      setTodoList((prevState: any) => {
        return [...prevState, todoItem];
      });
    }else{
        alert("Please Input Value!!")
    }
  };

  const handleInput = (e: any) => {
    setTodoItem(e.target.value);
  };

  const handleDelete = (index: number) => {
    setTodoList((prevState: any) => {
      return prevState.filter((item: String, i: number) => i != index);
    });
  };

  const deleteButtonStyle = {
    top: "-38px",
    right: "18px",
    position: "relative",
    color: "red",
    fontSize: "2.5rem",
    cursor: "pointer",
  } as const;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-4xl mt-2" style={{borderBottom:"3px solid black"}}>TODO LIST</h1>
        </div>
        <div className="flex flex-col items-center">
          {todoList.map((i: String, index: number) => {
            return (
              <>
                <div className="card" key={index}>
                  <div className="card-text text-center">{i}</div>
                  <div
                    className="flex justify-end text-2xl"
                    style={deleteButtonStyle}
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </div>
                </div>
              </>
            );
          })}

          <input
            type="text"
            className="w-full h-12 border-4 border-cyan-400 mt-2 rounded-md text-2xl"
            placeholder="TYPE TODO"
            value={todoItem}
            onChange={handleInput}
          />
          <button className="bg-indigo-500 button" onClick={handleAddToDo}>
            CLICK ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default Hello;
