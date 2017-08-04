import React,{Component} from 'react';
import {deleteItem,putItem} from '../utils/API';



class Item extends Component{
  constructor(props){
    super(props);
    this.state={isEdit:false}
    this.delete=this.delete.bind(this);
    this.edit=this.edit.bind(this);
    this.cancel=this.cancel.bind(this);
    this.accept=this.accept.bind(this);
    this.handleIsEdit=this.handleIsEdit.bind(this);
    this.handleEditAction=this.handleEditAction.bind(this);
  }

  delete(e){
    e.preventDefault()
    console.log(this.props.id);
    let id=this.props.id;
    deleteItem(id)
    this.props.handleClick()
  }

  edit(e){
    e.preventDefault();
    this.setState({isEdit:true});
  }

  cancel(e){
    e.preventDefault();
    this.setState({isEdit:false});
  }
  accept(e){
    e.preventDefault();
    let id=this.props.id,
    first_name=this.first_name.value,
    last_name=this.last_name.value,
    age=this.age.value;
    let res=putItem(id,first_name,last_name,age);
    res.then(result=>{
        if(result !== 'OK') console.log("HOLA");
    });
    this.setState({isEdit:false});
    this.props.handleClick()


  }

  handleIsEdit(){
    if(this.state.isEdit){
      return(
        <form className="form form-edit">
          <input ref={input=>{this.first_name=input}} className="input" type="text" defaultValue={this.props.first_name}/>
          <input ref={input=>{this.last_name=input}} className="input" type="text" defaultValue={this.props.last_name}/>
          <input ref={input=>{this.age=input}} type="number" defaultValue={this.props.age}/>
        </form>
      )
    }else{
      return(
        <div className="item__info">
          <p className="item__name">{this.props.first_name} {this.props.last_name}</p>
          <p className="item__age">Age: {this.props.age}</p>
        </div>
      )

    }
  }

  handleEditAction(){
    if(!this.state.isEdit){
      return(
        <div className="item__actions">
          <i className='icon-edit' onClick={this.edit}></i>
          <i className="icon-bin2" onClick={this.delete}></i>
        </div>
      )
    }
    else{
      return(
        <div className="item__actions">
          <i className='icon-checkmark check' onClick={this.accept}></i>
          <i className='icon-cross' onClick={this.cancel}></i>
        </div>
      )
    }

  }

  render() {
    return (
      <div className='item'>
        <div className="item__photo">
          <img className="item__img" src={this.props.photo}/>
        </div>
        {this.handleIsEdit()}
        {this.handleEditAction()}
      </div>
    );
  }
}

export default Item;
