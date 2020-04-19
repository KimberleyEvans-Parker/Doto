import React from "react";

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.state = { points: 0 };
    }

    changePoints(change) {
        console.log(change);
        this.setState({
            points: this.state.points + change,
        });
    }

    // resetPoints() {
    //     this.state.points = 0;
    //     console.log("RESET", this.state.points);
    // }

    render() {
        return (
            <div>
                <span>{this.state.points}</span>
            </div>
        );
    }
}

export default Points;
