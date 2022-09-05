import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Covid from "./views/Covid";
import { Countdown, NewCountdown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    let name = "Tranducmanhx4";

    const onTimesup = () => {
        alert("times up");
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <h3>Hello {name}!</h3>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                <Switch>
                    <Route path="/" exact>
                        <Covid />
                    </Route>
                    <Route path="/timer">
                        <Countdown onTimesup={onTimesup} />
                        <hr />
                        <NewCountdown onTimesup={onTimesup} />
                    </Route>
                    <Route path="/secret">
                        <h3>Hello from secret</h3>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
