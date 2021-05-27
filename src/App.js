import "./App.css";
import AddTasks from "./components/AddTasks";
import TodoList from "./components/TodoList";
import { AppProvider } from "./Helper/Context";

function App() {
    return (
        <AppProvider>
            <div>
                <AddTasks />
                <TodoList />
            </div>
        </AppProvider>
    );
}

export default App;
