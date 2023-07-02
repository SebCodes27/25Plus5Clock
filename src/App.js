import './App.css';
import React from 'react';
import { incCount, decCount, nineTen, subTen, nineOne, subOne, timer, reset, active } from "./reducersAndActions/counterAction";
import { incBreak, decBreak, timerBreak, resetBreak} from "./reducersAndActions/breakAction";
import { connect } from "react-redux";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: 'off',
      bagel: 'off',
      paused: 'off',
    }
    this.incrementCount.bind(this);
    this.decrementCount.bind(this);
    this.incrementBreak.bind(this);
    this.decrementBreak.bind(this);
    this.startTimer.bind(this);
    this.beginTimer.bind(this);
    this.stopTimer.bind(this);
    this.reset.bind(this);
    this.active.bind(this);
    this.startStop.bind(this);
    this.playAudio.bind(this);
  }
  incrementCount() {
    if (this.props.minute === 60) {
      return;
    }
    this.props.incCount()
    this.setState({
      happy: 'off',
      bagel: 'off',
    })
  }
  decrementCount() {
    if (this.props.minute === 0) {
      return;
    }
    this.props.decCount()
    this.setState({
      happy: 'off',
      bagel: 'off',
    })
  }
  incrementBreak() {
    if (this.props.breakDisplay === 60) {
      return;
    }
    this.props.incBreak()
    this.setState({
      happy: 'off',
      bagel: 'off',
    })
  }
  decrementBreak() {
    if (this.props.breakDisplay === 0) {
      return;
    }
    this.props.decBreak()
    this.setState({
      happy: 'off',
      bagel: 'off',
    })
  }
  startStop() {
    if ((this.props.count > 0 || this.props.tenSec > 0 || this.state.oneSec > 0) && this.state.bagel === 'off') {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    this.setState({
      paused: 'off',
    })
    if (this.props.oneSec > 0) {
      this.subOne()
  } else {
      this.nineOne()
    if (this.props.tenSec > 0) {
        this.subTen()
    } else {
        this.nineTen()
      if (this.props.count > 0) {
          this.beginTimer()
      }
    }
  }}
  beginTimer() {
    if (this.props.activeValue === 1) {
    this.props.timer()
    } else {
      this.props.timerBreak()
    }
    setTimeout(() => {
      this.setState({
        happy: 'on',
        bagel: 'on',
      })
    }, 20);
  }
  subOne() {
    this.props.subOne()
    setTimeout(() => {
      this.setState({
        happy: 'on',
        bagel: 'on',
      })
    }, 20);
  }
  nineOne() {
    this.props.nineOne()
    setTimeout(() => {
      this.setState({
        happy: 'on',
        bagel: 'on',
      })
    }, 20);
  }
  subTen() {
    this.props.subTen()
  }
  nineTen() {
    this.props.nineTen()
  }
  stopTimer() {
    this.setState({
      happy: 'off',
      paused: 'on',
    })
  
    setTimeout(() => {
      this.setState({
        bagel: 'off'
      })
    }, 500);
  }
  reset() {
    let x = document.getElementById('beep');
    x.load();
    this.props.reset()
    this.props.resetBreak()
    this.setState({
      happy: 'off',
      bagel: 'off',
      paused: 'on',
    })
  }
  playAudio() {
    let x = document.getElementById('beep');
    x.play();
  }
  active() {
    this.props.active()
  }
  componentDidUpdate() {
    if (this.props.count === 0 && this.props.tenSec === 0 && this.props.oneSec === 0) {
      this.playAudio();
      setTimeout(() => {
        this.active()
      }, 1000);
    }
    
    if (this.state.paused === 'on') {
      return;
    }

    setTimeout(() => {
      if ((this.props.count > 0 || this.props.tenSec > 0 || this.props.oneSec > 0) && this.state.happy === 'on') {
        setTimeout(() => {
          if (this.props.oneSec > 0) {
            this.subOne()
        } else {
            this.nineOne()
          if (this.props.tenSec > 0) {
              this.subTen()
          } else {
              this.nineTen()
            if (this.props.count > 0) {
                this.beginTimer()
            }
          }
        }
        }, 500);
        this.setState({
          happy: 'off',
        })
        /*setTimeout(() => {
          this.beginTimer()
        }, 500);*/
      } 
    }, 500);
  }
  render() {
    return(
      <div className='outerBox container-fluid'>

        <audio id='beep'>
            <source src='https://docs.google.com/uc?export=download&id=1VAu0dWklsqAzutHt0wGLUxwRyOvwkRio' type='audio/mpeg'/>
        </audio>

        <div className='innerBox center well'>

          <div className='topHalf well text-center'>

            <div className='well-sm'>

              <button id='start_stop' className='btn-success btn-lg'
                onClick={() => {
                this.startStop()
              }}
              >Begin/Pause</button>

              {/* <button className='btn-danger btn-lg'
                disabled={this.props.count > 0 ? false: true}
                onClick={() => 
                this.stopTimer()
              }
            >Stop</button> */}

              <button id='reset' className='btn-info btn-lg'
                onClick={() => {
                this.reset()
              }}
              >Reset</button>

            </div>

            <div className='well-sm'>

              <p id='timer-label' className='text-info font-size'>{this.props.text}: <span id='time-left'>{this.props.count}:{this.props.tenSec}{this.props.oneSec}</span></p><br/>

            </div>

          </div>

          <div className='botHalf well row'>

            <div className='col-xs-6'>

              <div className='left-well well'>

                <p id='session-label' className='text-muted font-size'>Session Time: <span id='session-length'>{this.props.minute}</span></p><br/>

                <div className='btn-group btn-group-vertical'>

                  <button id='session-increment' className='btn-success btn-width'
                    onClick={() => 
                    this.incrementCount()
                  }
                  >Add Time</button><br/>

                  <button id='session-decrement' className='btn-danger btn-width'
                    disabled={this.props.count > 0 ? false: true}
                    onClick={() => {
                    this.decrementCount();
                    }}
                    >Subtract Time
                  </button>

                </div>

              </div>

            </div>

            <div className='col-xs-6'>

              <div className='right-well well'>

                <p id='break-label' className='text-muted font-size'>Break Time: <span id='break-label'>{this.props.breakDisplay}</span></p><br/>
                
                <div className='btn-group btn-group-vertical'>

                  <button id='break-increment' className='btn-success btn-width'
                    onClick={() => 
                    this.incrementBreak()
                  }
                  >Add Time</button><br/>

                  <button id='break-decrement' className='btn-danger btn-width'
                    disabled={this.props.count > 0 ? false: true}
                    onClick={() => {
                    this.decrementBreak();
                    }}
                  >Subtract Time</button><br/>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    )
  }
  }

const mapStateToProps = state => {
  if (state.counter.active === 1) {
  return {
    minute: state.counter.minute,
    tenSec: state.counter.tenSec,
    oneSec: state.counter.oneSec,
    count: state.counter.count,
    breakDisplay: state.counter.minuteBr,
    activeValue: state.counter.active,
    text: state.counter.text,
  }
} else {
  return {
    minute: state.counter.minute,
    tenSec: state.counter.tenSec,
    oneSec: state.counter.oneSec,
    count: state.counter.countBr,
    breakDisplay: state.counter.minuteBr,
    activeValue: state.counter.active,
    text: state.break.text,
  }
}
}

const mapDispatchToProps = dispatch => {
  return {
    incCount: () => dispatch(incCount()),
    decCount: () => dispatch(decCount()),
    nineTen: () => dispatch(nineTen()),
    subTen: () => dispatch(subTen()),
    nineOne: () => dispatch(nineOne()),
    subOne: () => dispatch(subOne()),
    timer: () => dispatch(timer()),
    reset: () => dispatch(reset()),
    incBreak: () => dispatch(incBreak()),
    decBreak: () => dispatch(decBreak()),
    timerBreak: () => dispatch(timerBreak()),
    resetBreak: () => dispatch(resetBreak()),
    active: () => dispatch(active()),
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Display)

class App extends React.Component {
  render() {
  return (
    <Container/>
  );
}
}

export default App;
