import React from 'react';

class ThemedParty extends React.Component {
  render() {
    const themedChildren = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return (
      <div class="themed-party">
        {themedChildren}
      </div>
    );
  }
 }


export default ThemedParty;
