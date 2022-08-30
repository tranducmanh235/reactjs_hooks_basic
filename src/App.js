import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Covid from "./views/Covid";

function App() {
    let name = "Tranducmanhx4";
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Hello World from {name}!</h2>

                <Covid />
            </header>
        </div>
    );
}

export default App;
