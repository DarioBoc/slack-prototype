import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
