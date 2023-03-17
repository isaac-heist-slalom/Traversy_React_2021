import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddTask } from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Tasks } from "./components/Tasks";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchTasks } from "./redux/tasksSlice";

function App() {
  const showAddTask = useAppSelector((state) => state.showAddTask.value);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" showAdd={showAddTask} />

        <Route
          path="/"
          exact
          render={(props) => {
            return (
              <>
                {showAddTask && <AddTask />}
                {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
              </>
            );
          }}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
