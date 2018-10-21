import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Message, Button, Input, Container, Header } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const registerObserver = observer(class Register extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      username: '',
      usernameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    });
  }

  onSubmit = async () => {
    Object.assign(this, {
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const {username, email, password} = this;

    const response = await this.props.mutate({
      variables: {username, email, password},
    });

    const {ok, errors} = response.data.register;

    if (ok) {
      this.props.history.push('/');
    } else {
      errors.forEach(({path, message}) => {
        this[`${path}Error`] = message;
      });
    }
  };

    onChange = e => {
      const { name, value } = e.target;
      // name = "email";
      this[name] = value;
    };

    render() {
      const { username, email, password, usernameError, emailError, passwordError } = this;

      return (
        <Container text>
          <Header as="h2">Register</Header>
          <Input
            error={!!usernameError}
            name="username"
            onChange={this.onChange}
            value={username}
            placeholder="Username"
            fluid
          />
          <Input
            error={!!emailError}
            name="email"
            onChange={this.onChange}
            value={email}
            placeholder="Email"
            fluid 
          />
          <Input
            error={!!passwordError}
            name="password"
            onChange={this.onChange}
            value={password}
            type="password"
            placeholder="Password"
            fluid
          />
          <Button onClick={this.onSubmit}>Submit</Button>
          {usernameError || emailError || passwordError ? (
            <Message error header="There was some errors with your submission" list={[usernameError, emailError, passwordError].filter(x => x)} />
          ) : null}
        </Container>
      );
    }
});

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok,
      errors {
        path,
        message,
      }
    }
  }
`;

export default graphql(registerMutation)(registerObserver);