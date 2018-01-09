import * as React from 'react';
import '../styles/App.scss';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
// import { observable } from 'mobx';
import { Switch, Route } from 'react-router';
import HomePage from './HomePage';

@observer class App extends React.Component {

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu color="blue" borderless stackable inverted>
            <Container>
              <Menu.Item>
                <img src='https://react.semantic-ui.com/logo.png' className='avatar ui image' />
              </Menu.Item>
              <Menu.Item name='home' exact as={NavLink} to="/" />
              <Menu.Item name='messages' as={NavLink} to="/messages" />
              <Menu.Item name='friends' as={NavLink} to="/friends" />
            </Container>
          </Menu>

          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/messages" exact={true} render={ () => "Messages"} />
            <Route path="/friends" exact={true} render={ () => "Friends"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
