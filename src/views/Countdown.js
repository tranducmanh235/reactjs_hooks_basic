import React, { useEffect, useState } from "react";

class Countdown extends React.Component {
    state = {
        count: 5,
    };

    // run when render() run the first time
    componentDidMount() {
        this.timer = setInterval(() => {
            // let a = this.state.count;
            this.setState({
                count: this.state.count - 1,
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimesup();
            }
        }
    }

    render() {
        return <div></div>;
    }
}

// export default Countdown;

const NewCountdown = ({ onTimesup }) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count === 0) {
            onTimesup();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return <div>{count} hooks</div>;
};

export { NewCountdown, Countdown };
