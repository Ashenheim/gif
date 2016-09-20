import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeybindController from './KeybindController';


export default class KeybindContainer extends Component {
    static childContextTypes = {
        addKeybind: PropTypes.func,
        removeKeybind: PropTypes.func,
    }
    static defaultProps = {
        as: 'div',
    }

    state = {
        controller: new KeybindController(),
    }

    componentWillUnmount() {
        this.state.controller.destroy();
    }

    getChildContext = () => ({
        addKeybind: this.state.controller.addKeybind,
        removeKeybind: this.state.controller.removeKeybind,
    });

    render() {
        return <this.props.as {...this.props} />;
    }
}
