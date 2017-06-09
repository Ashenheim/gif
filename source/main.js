import React, { Component } from 'react';
import { render } from 'react-dom';
import { configureStore } from './core/store';
import Root from './view/root';


const mountElement = document.getElementById('mount');
const store = configureStore();

const runRender = (RootComponent) => {
    render(
        <RootComponent
            store={store}
        />,
        mountElement
    );
};

runRender(Root);
