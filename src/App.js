import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Covid from "./views/Covid";
import { Countdown, NewCountdown } from "./views/Countdown";

function App() {
    let name = "Tranducmanhx4";

    const onTimesup = () => {
        alert("times up");
    };

    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <Countdown onTimesup={onTimesup} />
                <NewCountdown onTimesup={onTimesup} />

                <h2>Hello World from {name}!</h2>

                <Covid />
            </header>
        </div>
    );
}

export default App;
