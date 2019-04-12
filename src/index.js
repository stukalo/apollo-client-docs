import React from 'react';
import { render } from 'react-dom';
import App from './components';
import './style.less';
import { ApolloProvider } from "react-apollo";
import client from './graphql';

render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);