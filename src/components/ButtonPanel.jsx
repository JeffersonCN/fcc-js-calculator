import React, {Component} from 'react';

class ButtonPanel extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        let target = event.target;
        target.classList.remove('clicked');
        setTimeout(() => {
            target.classList.add('clicked');
        }, 100);
        this.props.onClick(target.dataset.value);
    }
    render() {
        return (
            <div className="ButtonPanel row s5">
                <div className="column s3">
                    <div className="row s1">
                        <button data-value="ac" onClick={this.onClick} className="s1 btn-op">AC</button>
                        <button data-value="back" onClick={this.onClick} className="s1 btn-op">←</button>
                        <button data-value="/" onClick={this.onClick} className="s1 btn-op">÷</button>
                    </div>
                    <div className="row s1">
                        <button data-value="7" onClick={this.onClick} className="s1">7</button>
                        <button data-value="8" onClick={this.onClick} className="s1">8</button>
                        <button data-value="9" onClick={this.onClick} className="s1">9</button>
                    </div>
                    <div className="row s1">
                        <button data-value="4" onClick={this.onClick} className="s1">4</button>
                        <button data-value="5" onClick={this.onClick} className="s1">5</button>
                        <button data-value="6" onClick={this.onClick} className="s1">6</button>
                    </div>
                    <div className="row s1">
                        <button data-value="1" onClick={this.onClick} className="s1">1</button>
                        <button data-value="2" onClick={this.onClick} className="s1">2</button>
                        <button data-value="3" onClick={this.onClick} className="s1">3</button>
                    </div>
                    <div className="row s1">
                        <button data-value="0" onClick={this.onClick} className="s2">0</button>
                        <button data-value="." onClick={this.onClick} className="s1">.</button>
                    </div>
                </div>
                <div className="column s1">
                    <button data-value="*" onClick={this.onClick} className="s1 btn-op">×</button>
                    <button data-value="-" onClick={this.onClick} className="s1 btn-op">-</button>
                    <button data-value="+" onClick={this.onClick} className="s1 btn-op">+</button>
                    <button data-value="=" onClick={this.onClick} className="s2 btn-equal">=</button>
                </div>
            </div>
        );
    }
}

export default ButtonPanel;