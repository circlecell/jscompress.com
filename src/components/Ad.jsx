import React from 'react';

export default class Ad extends React.Component {
  render() {
    return (
      <ins className="adsbygoogle"
        style={{ display: 'inline-block', width: this.props.width + 'px', height: this.props.height + 'px'}}
        data-ad-client="ca-pub-3241315962888840"
        data-ad-slot="0991193574"></ins>
    );
  }

  componentDidMount() {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch(e) {
      if (typeof console !== 'undefined') {
        console.log('Aw man! You are using an ad blocker :(');
      }
    }
  }
}
