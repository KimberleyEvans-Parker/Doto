import React from "react";

// const Points = (state = initialState) => {
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

        console.log(this.state.points);
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <span>{this.state.points}</span>
                    <button
                        style={{ display: "none" }}
                        onClick={change => {
                            this.changePoints(change);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Points;
