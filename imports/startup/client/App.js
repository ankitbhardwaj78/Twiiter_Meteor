import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../../ui/SearchBar';
var Twit=require('twit');
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      twit : ""
    }
  }
  settingtwit(){
    var t = new Twit({
    consumer_key:         'toQ8aXyGvTyRRNwTF7KKzrCGs',
    consumer_secret:      'NMkTwca6R2wis27Lz2dyHiJ4SMG6fwtV84isgim7KWj6OWgYL9',
    access_token:         '759616371822956544-duFkDyAUbsDTrstirLvAhdkHKBHHhj3',
    access_token_secret:  'yjYf0gGpwK0s277gyM1aAgRgCIPi1RKVvwkcwYqVEUmxd',
    app_only_auth : true ,
    timeout_ms: 60*1000 });
    this.setState({
       twit : t
    })
  }
  componentDidMount(){
    this.settingtwit()
  }
 render(){
   return(
     <SearchBar twit = {this.state.twit}/>
   )
 }
}
Meteor.startup(() => {
    ReactDOM.render(<App />,document.querySelector(".render-target"));
});
