// I wanted to create a countdown timer, but without a reference or place to start I decided to use a guide, and learn along the way.
// Here is the guide I followed, typing out and understanding the code as I went.
// https://betterprogramming.pub/building-a-simple-countdown-timer-with-react-4ca32763dda7

import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    minutes: 3,
    seconds: 0,
  };

  // componentDidMount and other "methods?" are built in I didn't realize
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {/* Ternaries are a great way to handle edge cases and conditions when displaying */}
        {minutes === 0 && seconds === 0 ? (
          <h1>Time is up!</h1>
        ) : (
          <h1>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    );
  }
}

// things I might add given more time:
// a user input for the start amount of minutes/seconds
// hour functionality
// reset button
