import React,{Component} from 'react';
import Item from './Item';
import {getData} from '../utils/API';


class HeaderListUsers extends Component{
    constructor(props){
      super(props);
      this.refresh=this.refresh.bind(this);
    }

    refresh(e){
      e.preventDefault();
      console.log("REFRESH 2");
      this.props.refresh();
    }

    render() {
      return (
        <div className="header__item">
          <h1 className="main__title">Users</h1>
          <a onClick={this.refresh} href="#" className="spinner"><i className="icon-spinner"></i> Refresh</a>
        </div>
      );
    }
}

export default HeaderListUsers;
