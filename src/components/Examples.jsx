import React,{Component} from 'react';
import Nav from './Nav';


class Examples extends Component {
  constructor(props) {
    super(props);
    this.state={value:'Please select an animal!'}
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }



  componentDidMount(){

  }

  componentWillUnMount(){
  }

  handleChange(e){
    e.preventDefault()
    this.setState({value:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault()
    alert(`Your favorite animal is a ${this.state.value}`);
  }

  render() {
    return (
      <div>
        <Nav/>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="cow">Cow</option>
              </select>
              <input type="submit" value="submit"/>
            </form>
          </div>
      </div>
    );
  }
}


export default Examples;
