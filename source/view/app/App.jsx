import React, { Component } from 'react';
import { Keybind, Gif, FilterBox } from 'Components';
import transformGifsList from 'core/transforms/transform-gifs-list';


const getFilteredGifs = (filterString, gifsArray) => {
    if (filterString) {
        const regexp = new RegExp(filterString.split('').join('.*'), 'gi');
        return gifsArray.filter(gif => gif.name.match(regexp));
    } else {
        return gifsArray;
    }
};

export default class App extends Component {
    state = {
        gifs: [],
        filter: '',
    }

    componentDidMount = async () => {
        const gifs = await fetch('./gifs.json')
            .then(b => b.json())
            .then(transformGifsList);

        this.setState({ gifs });
    }

    changeFilter = (filter) => this.setState({ filter });

    render() {
        const { filter, gifs } = this.state;
        return (
            <Keybind.Container>
                <FilterBox value={filter} handler={this.changeFilter} />
                <Gif.Container>
                    {getFilteredGifs(filter, gifs).map(gif => {
                        return <Gif.Item key={gif.key} {...gif} />
                    })}
                </Gif.Container>
            </Keybind.Container>
        )
    }
}
