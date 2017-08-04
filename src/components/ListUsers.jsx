import React,{Component} from 'react';
import Item from './Item';
import {getData} from '../utils/API';
import HeaderListUsers from './HeaderListUsers'




class ListUsers extends Component{
  constructor(props){
    super(props);
    this.state={users:[]}
    this.handleClick=this.handleClick.bind(this);
    this.refresh=this.refresh.bind(this);
  }

  getUsers(){
    getData().then(users=>{
      this.setState({users:users});
    });
  }

  handleClick(){
    this.getUsers();
  }

  componentDidMount(){
    console.log("COMPONENT DID MOUNT");
    this.getUsers();
  }

  refresh(){
    console.log("REFRESH");
    this.getUsers();
  }

  render() {
    let {users}=this.state;
    return (
      <div>
        <HeaderListUsers refresh={this.refresh}/>
        <section className="container-users">
          {
            users.map((user,i)=>{
              return <Item key={user._id} id={user._id} {...user} handleClick={this.handleClick}/>
            })
          }
        </section>
      </div>
    );
  }
}


export default ListUsers;
