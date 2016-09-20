import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class KeyBindElement extends Component {
    static contextTypes = {
        addKeybind: PropTypes.func,
        removeKeybind: PropTypes.func,
    }

    static defaultProps = {
        as: 'div'
    }

    componentDidMount = () => this.context.addKeybind(
        this.props.keybind,
        this.props.keybindHandler,
    );

    componentWillUnmount = () => this.context.removeKeybind(
        this.props.keybind,
        this.props.keybindHandler,
    );

    render() {
        const {
            keybind,
            keybindHandler,
            ...rest,
        } = this.props;

        return (
            <this.props.as {...rest} />
        );
    }
}
