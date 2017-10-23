import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react';


class SideNav extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
      <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='uncover'
          width='very wide'
          direction='right'
          visible={visible}
          icon='labeled'
          vertical
          inverted
        >
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    );
  }
}


export default SideNav;
