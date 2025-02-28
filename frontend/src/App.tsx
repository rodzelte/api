import { useEffect, useState } from "react";
import { getTasks } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then((data) => {
        console.log("Tasks:", data);
        setTasks(data.tasks || data.getTasks);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <div>
        <h1>Tasks</h1>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title || task.name || JSON.stringify(task)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default App;
