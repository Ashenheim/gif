import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './view/root';


const mountElement = document.getElementById('mount');

const runRender = (RootComponent) => {
    render(
        <RootComponent />,
        mountElement
    );
};

runRender(Root);

OfflinePluginRuntime.install();
