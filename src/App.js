import logo from "./logo.svg";
import TodoDialog from "./components/TodoDialog";
import AppToolbar from "./components/AppToolbar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <AppToolbar />
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <TodoDialog />
            </header>
        </div>
    );
}

export default App;
