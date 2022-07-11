import React,{useState} from "react"
import { 
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroup,
    Button,
     Form,
     } from "reactstrap";
import {v4} from "uuid";

const TodoForm =({addTodos}) => {
    const[todoString,setTodoString] = useState("");
    const handleSubmit= e => {
        e.prevenDefault()
        if(todoString===""){
            return alert("please fill some value")
        }
        const todo = {
            todoString,
            id:v4()
        }
       
       addTodos(todo)
        setTodoString("")
    }

  return(
      <Form onSubmit={handleSubmit}>
          <FormGroup>
              <InputGroup>
              <Input 
              type="text"
              name="todo"
              id="todo"
              placeholder="enter a todo string"
              value={todoString}
              onChange={e => setTodoString(e.target.value)}/>
              <InputGroupAddon addonType="prepend">
             <Button 
             color="success"

             >Add Todo</Button>
              </InputGroupAddon>
              </InputGroup>
          </FormGroup>
      </Form>
  )
}
export default TodoForm;
