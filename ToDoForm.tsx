interface Props {
  todos: any;
  setTodos: any;
}

const ToDoForm: React.FC<Props> = ({ todos, setTodos }) => {
  const addTodo = (e: any) => {
    e.preventDefault();

    const newTodo = {
      info: e.target.children[0].value ?? "",
      termine: e.target.children[1].checked ?? false,
    };

    let arrTodos = todos.map((data: any) => data);
    arrTodos.push(newTodo);
    setTodos(arrTodos);

    if (!window) return;
    if (!localStorage) return;
    localStorage.setItem("ToDoList", JSON.stringify(arrTodos));
    
  }; 

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        defaultValue=""
        name="info"
        placeholder="Enter your todo"
      />
      <input type="checkbox" name="termine" />
      <input type="submit" value="Ajouter" />
    </form>
  );

  //créer un formulaire avec un nom,un prénom, un téléphone
   
};

export default ToDoForm;
