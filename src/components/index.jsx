import React, { PureComponent } from 'react';
import Dogs from './dogs';
import Rates from './rates';

export default class Container extends PureComponent {
    render () {
        return <div>
            <span>Container</span>
            <Rates/>
        </div>;
    }
}