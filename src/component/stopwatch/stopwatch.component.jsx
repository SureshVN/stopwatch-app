import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import Timer from "../timer/timer.component";

import "./stopwatch.styles.scss";

class StopWatch extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      isActive: false,
      isResetPressed: false,
    };
  }

  handleStart = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
      isResetPressed: false,
    }));

    this.watch = setInterval(
      () =>
        this.setState({
          time: this.state.time + 10,
        }),
      10
    );
  };

  handleReset = () => {
    this.setState({
      isActive: false,
      time: 0,
      isResetPressed: true,
    });
    clearInterval(this.watch);
  };

  handleStop = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
    clearInterval(this.watch);
  };

  render() {
    const { time, isActive, isResetPressed } = this.state;
    return (
      <div className="stop-watch-container">
        <div className="stop-watch">
          <div className="header">
            <span className="header-text">STOPWATCH</span>
          </div>
          <Timer time={time} />
          <div className="footer">
            {!isActive ? (
              <CustomButton onClick={this.handleStart} isActive={isActive}>
                START
              </CustomButton>
            ) : (
              <CustomButton onClick={this.handleStop} isActive={isActive}>
                STOP
              </CustomButton>
            )}
            <CustomButton
              onClick={this.handleReset}
              isResetPressed={isResetPressed}
              isReset
            >
              RESET
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatch;
