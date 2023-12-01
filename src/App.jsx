import React, { useState } from "react";
import "./App.css";
import List from "./Components/List";
import BodyHeading from "./Components/BodyHeading";

const App = () => {
  const [data, setData] = useState([]);
  const [inputBox, setInputBox] = useState("");
  const [editId, setEditId] = useState(0);

  const taskNumber = data.length;

  const addTask = () => {
    if (editId > 0) {
      const editData = data;
      editData[editId - 1] = inputBox;
      setData(editData);
      setInputBox("");
      setEditId(0);
    } else {
      if (inputBox) {
        setData([...data, inputBox]);
        setInputBox("");
      }
    }
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1>Todo List</h1>

        <div className="input-container">
          <input
            type="text"
            id="inputBox"
            placeholder="Enter your task"
            value={inputBox}
            onChange={(e) => setInputBox(e.target.value)}
          />
          <button onClick={addTask} data-testid="addButton">
            {editId ? "Edit" : "Add Task"}
          </button>
        </div>

        <BodyHeading inCompleteTask={data.length} />

        <div className="task-list" id="task-list">
          {data.length > 0 ? <h3>My tasks:</h3> : null}
          {/* <div className="task-list" data-testid="input-test"> */}
            {data?.map((value, index) => {
              return (
                <List
                  value={value}
                  key={index}
                  data={data}
                  setData={setData}
                  index={index}
                  input={inputBox}
                  setInput={setInputBox}
                  editId={editId}
                  setEditId={setEditId}
                />
              );
            })}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
