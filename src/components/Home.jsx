import Nav from './Nav';
import React,{Component} from 'react';
import ListUsers from './ListUsers';
class Home extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav/>
        <main className="main">
          <ListUsers/>
        </main>
      </div>
    );
  }
}



export default Home;
