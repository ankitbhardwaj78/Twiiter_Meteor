import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export default Followers = new Mongo.Collection("followers");
Meteor.methods({
  "find_follower"(name){
    return Followers.findOne({name});
  },
  "follower.insert"(name,followers){
   return Followers.insert({name,followers})
  }
});
