import React, {Component} from 'react';
import Header from './Header';

//  I do not know what I do!!

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header items={menu}/>
      </div>
    );
  }
}

export default App;
