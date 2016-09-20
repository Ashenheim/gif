import React, { Component } from 'react';
import { Keybind } from 'Components';
import styles from './styles.css';


class InputBox extends Component {
    state = {
        active: false,
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.handler(this.inputFilterEle.value);
        this.inputFilterEle.blur();
    }

    toggleBox = () => {
        this.setState((state) => ({
            active: !state.active,
        }));
        this.inputFilterEle.focus();
    };

    onBlur = () => {
        this.setState(() => ({ active: false }));
    }

    render() {
        const { value } = this.props;
        const { active } = this.state;
        return (
            <Keybind.Element
                keybind="shift+p"
                keybindHandler={this.toggleBox}
                as="form"
                onSubmit={this.formSubmitHandler}
            >
                <div className={[styles.container, this.state.active && styles.active].join(' ')}>
                    <input ref={(e) => { this.inputFilterEle = e; }} value={this.props.value} onBlur={this.onBlur} />
                    <button type="submit">filter gifs</button>
                </div>
            </Keybind.Element>
        );
    }
}

export default InputBox;
