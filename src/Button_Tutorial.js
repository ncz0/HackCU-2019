import React, { Component } from 'react';
import Button from 'reactstrap/es/Button';
import Input from 'reactstrap/es/Input';

export default class Button_Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "default",
            button_color: "secondary",
            message: "",
            button_text: "I am a Button! Edit Me!"
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.update_button_text = this.update_button_text.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <h3>BUTTONS</h3>
                <div id={"buttonCustom"}>
                    <Button style={{width: '50%', marginRight: '10px'}} color={this.state.button_color}>{this.state.button_text}</Button>
                    <Input style={{width: '50%'}} type="text" placeholder="Enter a name for your button..." onChange={this.update_button_text}/>
                </div>
                <br></br>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio" value="red" checked={this.state.selectedOption === 'red'} onChange={this.handleOptionChange} />
                            RED
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="green" checked={this.state.selectedOption === 'green'} onChange={this.handleOptionChange}/>
                            GREEN
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="blue" checked={this.state.selectedOption === 'blue'} onChange={this.handleOptionChange}/>
                            BLUE
                        </label>
                    </div>
                    <br></br>
                    <p>This is what the code looks like:</p>
                    <div id="seeCode">
                        {this.state.message}
                    </div>
                </form>
            </div>
        );
    }

    reset() {
        this.setState(
            {
                selectedOption: "default",
                button_color: "secondary",
                message: "",
                button_text: "I am a Button! Edit Me!"
            }
        );
    }

    update_button_text(event) {
        this.setState({button_text: event.target.value}) ;
    }

    handleOptionChange(changeEvent) {
        let color = "";
        let message = "";
        switch(changeEvent.target.value) {
            case "red":
                color = "danger";
                message = `<Button color='danger'>${this.state.button_text}</Button>`;
                break;
            case "green":
                color = "success";
                message = `<Button color='success'>${this.state.button_text}</Button>`;
                break;
            case "blue":
                color = "primary";
                message = `<Button color='primary'>${this.state.button_text}</Button>`;
                break;
            default:
                color = "secondary";
        }
        this.setState({
            selectedOption: changeEvent.target.value,
            button_color: color,
            message: message
        });
    }
}