import React from 'react';
import { createRootNavigator } from './router';
import { isSignedIn } from './auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      username: '62564463215',
      password: '6256'
    };
  }

  async componentDidMount() {
    const res = await isSignedIn();
    this.setState({ signedIn: res, checkedSignIn: true });
      
    // isSignedIn()
    //   .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    //   .catch(err => alert('An error occurred'));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
