import React,{useContext} from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { TodoContext } from "../context/todocontext"
import  {REMOVE_TODO} from "../context/action.types"
import "bootstrap/dist/css/bootstrap.min.css";
const Todos =() => {
  const {todos,dispatch} = useContext(TodoContext);
  return(
      <ListGroup className="mt-5 mb-15 items">
          {todos.map(todo => (
              <ListGroupItem key={todo.id}>
                  {todo.todoString}
                  <span 
                  style={{
                      float:"right",
                     
                  }}
                  onClick={() => {
                      dispatch({
                          type:REMOVE_TODO,
                          payload:todo.id
                      });
                  }}
                  >
                      <FaCheckDouble/></span>
              </ListGroupItem>
          ))}
      </ListGroup>
  )
}
export default Todos;