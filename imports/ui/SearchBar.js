import React,{ Component } from 'react';
import ReactDOM  from 'react-dom';
import Followers from '../api/followers';
import Table from './Table';
//import Twit from '../startup/server/twitterConfig';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      value :"",
      data : ""
    }
  }

  search(){
    Meteor.call("find_follower",this.state.value,(err,res)=>{
      if(err)
      console.log(err);
      else{
        console.log(res);
        if(res){
          this.setState({
            data:res
          })
        }
        else {
          Meteor.call("get_api_data",this.state.value,(err,res)=>{
console.log("hello");
            if(err)
            console.log(err);
            else {
              console.log("yo",res);
              Meteor.call("follower.insert",this.state.value,res,(err,res)=>{
                    if(err)
                    console.log(err);
                    else {
                      console.log(res);
                    }
                  })
              Meteor.call("find_follower",this.state.value,(err,res)=>{
                if(err)
                console.log(err);
                else{
                  if(res){
                    this.setState({
                      data:res
                    })
                  }
                }
              });
            }
          })
        }

      }
    })
  }

  onchange(event){
    this.setState({
      value:event.target.value
    })

  }

  render(){
    return(
      <div>
      <input className="form-control"
      value={this.state.value}
      name="search-bar"
      placeholder="enter your query"
      onChange={this.onchange.bind(this)}
      />
      <button className="btn btn-default" type="submit" onClick = {this.search.bind(this)}><i className="glyphicon glyphicon-search"></i></button>
      <Table data={this.state.data}/>
      </div>

    )
  }
}
