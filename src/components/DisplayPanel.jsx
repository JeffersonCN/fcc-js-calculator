import React, {Component} from 'react';

class DisplayPanel extends Component {
    render() {
        return (
            <div className="DisplayPanel column s2">
                <div className="LastCalc s1">{this.props.info.last.replace("/", '÷').replace('*', '×')}</div>
                <div className="CurrCalc s1">{this.props.info.curr.replace("/", '÷').replace('*', '×')}</div>
            </div>
        );
    }
}

export default DisplayPanel;