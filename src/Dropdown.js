import React, {Component} from 'react';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened});
  }
  render() {
    console.log( 'isOpened', this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>Dropdown text is here</div>;
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
        <p>This is Dropdown :)</p>
        {dropdownText}
    </div>
    );
  }
}

export default Dropdown;
