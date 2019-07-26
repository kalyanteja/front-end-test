import React from 'react';
import QueueScreen from './QueueScreen';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import store from '../state';
import { mount } from 'enzyme'  


configure({adapter: new Adapter()});

describe('Queue screen testing', () => {
    it('renders the main component', () => {
        const queueScreen = mount(<QueueScreen store={store}/>);
        expect(queueScreen.find('#main-component').length).toEqual(1);
    });

    it('renders is loading screen ', () => {
        const queueScreen = mount(<QueueScreen store={store}/>);
        expect(queueScreen.find('#loading-message').length).toEqual(1);
    });
})