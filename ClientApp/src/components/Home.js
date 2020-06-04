import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <h1>Loyalty goes a long way.</h1>
        <p>Unified Montreal is a Montreal based car club whose members typically drive modified cars. The group consist of imports, euro and domestic vehicles to exemplify "unity" within the car scene in Montreal.</p>
        <ul>
          <li>Find us on <a href='https://www.facebook.com/unifiedmtl/'>Facebook</a></li>
          <li>and <a href='https://www.instagram.com/unified_mtl/'>Instagram</a> </li>
        </ul>
        <p></p>
        <p>contact <code>unified.montreal@gmail(dot)com</code> to get in touch with us</p>
      </>
    );
  }
}
