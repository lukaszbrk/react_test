import _ from 'lodash'
import React, { Component } from 'react'

class Structure_View extends Component {

  constructor() {

    super();

  }



  render() {


    return (
      //<p>Some text</p>
      <p>{this.props.name}</p>

    );
  }
}


export default Structure_View;


