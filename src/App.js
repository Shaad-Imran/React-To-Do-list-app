import "./App.css";
import { useState } from "react";
import ToDolist from "./components/ToDolist";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const additem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={additem}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemValue, index) => {
              return (
                <ToDolist
                  text={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
