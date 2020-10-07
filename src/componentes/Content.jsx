import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: '',
      operator: '',
      firstValue: '',
      secondValue: '',
      placeholder: 'Enter first value                                       ',
      flag: false,
    };
  }
  handleNumber = (event) => {
    this.setState({
      output: this.state.output + event.target.value,
    });
  };

  operation = {
    '+': (v1, v2) => v1 + v2,
    '-': (v1, v2) => v1 - v2,
    X: (v1, v2) => v1 * v2,
    '/': (v1, v2) => v1 / v2,
  };

  handleOperation = (event) => {
    this.setState({
      operator: event.target.value,
      firstValue: this.state.output,
      output: '',
      placeholder: 'Enter second value                                       ',
    });
  };

  equal = (event) => {
    let fVal = this.state.firstValue;
    let sVal = this.state.secondValue;
    let opt = this.state.operator;
    this.setState(
      {
        secondValue: this.state.output,
        output: fVal + ' ' + opt + ' ' + sVal,
      },
      () => {
        let fVal = this.state.firstValue;
        let sVal = this.state.secondValue;
        let opt = this.state.operator;
        let result = this.operation[opt](Number(fVal), Number(sVal));
        this.setState({
          output: result,
          placeholder:
            'Enter first value                                       ',
          flag: true,
        });
        if (this.flag) {
          this.setState({
            firstValue: this.state.result,
          });
        }
        console.log(this.state.firstValue, this.state.secondValue);
      }
    );
  };
  allClear = (event) => {
    this.setState({
      output: event.target.value,
    });
  };

  render() {
    return (
      <div className=" container text-center mt-4">
        <div className=" btn-group-vertical ">
          <input
            type="text"
            className=" form-control p-4 mb-2 text-right"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            value={this.state.output}
            placeholder={this.state.placeholder}
            readOnly
          />
          <div
            className=" btn-group btn-group-lg "
            role="group"
            aria-label="..."
          >
            <button
              type="button"
              className="mybutton mycard btn  p-4 mybutton mycard "
              onClick={this.handleNumber}
              value="7"
            >
              7
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="8"
            >
              8
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="9"
            >
              9
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleOperation}
              value="+"
            >
              +
            </button>
          </div>
          <div
            className=" btn-group btn-group-lg"
            role="group"
            aria-label="..."
          >
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="4"
            >
              4
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="5"
            >
              5
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="6"
            >
              6
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleOperation}
              value="-"
            >
              -
            </button>
          </div>
          <div
            className=" btn-group btn-group-lg"
            role="group"
            aria-label="..."
          >
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="1"
            >
              1
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="2"
            >
              2
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="3"
            >
              3
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleOperation}
              value="/"
            >
              /
            </button>
          </div>
          <div
            className=" btn-group btn-group-lg"
            role="group"
            aria-label="..."
          >
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleNumber}
              value="0"
            >
              0
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.allClear}
              value=""
            >
              AC
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.equal}
              value="="
            >
              =
            </button>
            <button
              type="button"
              className="mybutton mycard btn  p-4"
              onClick={this.handleOperation}
              value="X"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
