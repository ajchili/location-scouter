import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

export interface Props {}

export interface State {
  initialAuthCheckCompleted: boolean;
  user: firebase.User | null;
}

export class Navigator extends Component<Props, State> {
  private unsubscribe?: firebase.Unsubscribe;

  constructor(props: Props) {
    super(props);
    this.state = {
      initialAuthCheckCompleted: false,
      user: null,
    };
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: firebase.User | null) => {
        const { initialAuthCheckCompleted } = this.state;
        let newState: any = { user };
        if (initialAuthCheckCompleted === false) {
          newState.initialAuthCheckCompleted = true;
        }
        this.setState(newState);
      });
  }

  componentWillUnmount() {
    if (this.unsubscribe !== undefined) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <Router>
        <Switch></Switch>
      </Router>
    );
  }
}
