import "./App.scss";
import AddTasks from "./components/AddTasks";
import TodoList from "./components/TodoList";
import { AppProvider } from "./Helper/Context";

function App() {
    return (
        <AppProvider>
            <h1>To do List</h1>
            <div className="container">
                <AddTasks />
                <TodoList />
            </div>
            <div className="footer"></div>
        </AppProvider>
    );
}

export default App;
