import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { useState } from "react";
import { MyContext } from "./MyContext";
import Calculator from "./Calculator";
import Product from "./Product";
import Shop from "./ShopingApp";
import ShopingApp from "./ShopingApp";
import StoreApp from "./StoreApp";
import Teacher from "./Teacher";
import Form from "./Form";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoApp from "./TodoApp/TodoApp";
import Parent from "./useCallback/Parent";

function App() {
  const [text, setText] = useState("");
  const user = {
    name: "admin",
    isLoggedIn: false,
  };

  return (
    <>
      <MyContext.Provider value={{ text, setText, user }}>
        {/* <MyComponent data={user}/> */}
        {/* <Calculator/> */}
        {/* <Product/> */}
      </MyContext.Provider>
      {/* <ShopingApp /> */}
      {/* <StoreApp /> */}
      <Teacher/>
      <Form/>
      {/* <Todo/> */}
      {/* <TodoList/> */}
      <TodoApp/>
      <Parent/>
    </>
  );
}

export default App;
