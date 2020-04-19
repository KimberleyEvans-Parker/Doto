import React from "react";
import streakImage from "./images/streak.png";

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

    resetPoints() {
        this.setState({
            points: 0,
        });
        console.log("RESET", this.state.points);
    }

    updateStreak() {
        const currentDateTime = new Date();
        let latestDate = null;

        // find the last, previous uncompleted task
        this.props.tasks.forEach(task => {
            if (task.endDate < currentDateTime) {
                if (!task.isComplete) {
                    if (!latestDate && latestDate < task.startDate) {
                        latestDate = task.endDate;
                    }
                }
            }
        });

        // Steak = sum the values of every task completed since then
        this.resetPoints();
        this.props.tasks.forEach(task => {
            if (!currentDateTime || task.endDate < currentDateTime) {
                if (task.startDate >= latestDate) {
                    this.changePoints(1);
                    console.log("^", task.title);
                }
            }
        });
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateStreak(), 1000);
    }

    render() {
        return (
            <div>
                <h2>Streak</h2>
                <div className="streak-container">
                    <img src={streakImage} width="55em" />
                    <span className="centered">{this.state.points}</span>
                </div>
            </div>
        );
    }
}

export default Points;
