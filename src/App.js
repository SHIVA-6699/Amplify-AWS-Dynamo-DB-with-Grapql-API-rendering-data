import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { createMms, updateMms, deleteMms } from "./graphql/mutations";
import { useState } from "react";
import { getMms, listMms } from "./graphql/queries";
import * as queries from "./graphql/queries";

function App() {
  const [loading, setloading] = useState(false);

  const todos = async () => {
    const todo = { name: "My first todo", email: "Hello world!" };
    setloading(true);
    await API.graphql(graphqlOperation(createMms, { input: todo }));
    setloading(false);

    const todosList = await API.graphql(graphqlOperation(listMms));
    console.log(todosList);

    // Assuming you want to get the first item from the list, change the index accordingly
    const firstTodoId = todosList.data.listMms.items[0].id;

    // Retrieve an individual item based on its id
    const oneTodo = await API.graphql({
      query: queries.getMms,
      variables: { id: firstTodoId },
    });
    console.log(oneTodo);
  };

  return (
    <div className="App">
      {loading && <p>Loading ....</p>}
      <button type="button" onClick={todos}>
        Submit
      </button>
    </div>
  );
}

export default App;
