import React, {
  Component
} from 'react';
import DisplayPanel from './DisplayPanel';
import ButtonPanel from './ButtonPanel';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      last: '',
      curr: '0'
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(btnClicked) {
    let curr = '',
      lastChar;

    switch (btnClicked) {
      case 'ac':
        this.setState({
          last: '',
          curr: '0'
        });
        break;
      case 'back':
        curr = this.state.curr;
        this.setState({
          curr: curr === '0' ? curr : curr.slice(0, -1) || '0'
        });
        break;
      case '=':
        try {
          this.setState({
            last: this.state.curr + '=',
            curr: eval(this.state.curr) + ''
          });
        } catch (e) {
          this.setState({
            last: this.state.curr + '=',
            curr: 'NaN'
          });
        }
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        curr = this.state.curr;
        lastChar = curr.slice(-1);

        if (lastChar.search(/([\/\*\-\+])/g) !== -1)
          curr = curr.slice(0, -1) + btnClicked;
        else
          curr += btnClicked;

        this.setState({
          curr: curr
        });
        break;
      case '.':
        curr = this.state.curr;
        lastChar = curr.slice(-1);

        if (lastChar !== '.') {
          this.setState({
            curr: curr + btnClicked
          });
        }
        break;
      default:
        curr = this.state.curr;
        this.setState({
          curr: curr === '0' ? btnClicked : curr + btnClicked
        });
        break;
    }
  }

  render() {
    var info = {
      curr: this.state.curr,
      last: this.state.last
    }
    return (
      <div className="Calculator column">
        <DisplayPanel info={info}/>
        <ButtonPanel onClick={this.onButtonClick}/>
      </div>
    );
  }
}

export default Calculator;