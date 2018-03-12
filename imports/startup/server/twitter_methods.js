import { Meteor } from 'meteor/meteor';
import Twit from './twitterConfig';
import Followers from '../../api/followers';
let limit = 1
let next_cursor = -1
let check_flag = 0
Meteor.methods({
  async "get_api_data"(handler){
    let res;
    let follower = []
    try{
      res =  await Twit.get('followers/list', { screen_name: handler , count : 200 ,cursor : next_cursor});
      console.log(res.caseless.dict['x-rate-limit-remaining']);
      res.data.users.forEach(function(user){
        follower.push({
          "followername":user.name,
          "follower_count":user.followers_count,
          "friends_count":user.friends_count
        })
      })
      return follower;
    }
    catch(err){
      throw new Meteor.Error('400',"err");
    }
  }
  //   async "get_api_data"(handler){
  //     let follower = []
  //     while(limit > 0)
  //     {
  //       await Twit.get('followers/list', { screen_name: handler , count : 200 ,cursor : next_cursor},  function (err, data, response) {
  //       console.log(response);
  //         if(data && data.users){
  //           data.users.forEach(function(user){
  //             follower.push({
  //               "followername":user.name,
  //               "follower_count":user.followers_count,
  //               "friends_count":user.friends_count
  //             })
  //           })
  //           check_flag = 1
  //           next_cursor = data.next_cursor
  //           limit = response.caseless.dict['x-rate-limit-remaining']
  //          console.log("limit",limit);
  //         }
  //         else
  //           limit=0;
  //       });
  //     }
  // if(check_flag === 1) {
  //     Meteor.call("follower.insert",handler,follower,(err,res)=>{
  //       if(err)
  //       console.log(err);
  //       else {
  //         console.log(res);
  //       }
  //     })
  // }
  //   }
});
// T.get('followers/list', { screen_name: 'kohliakanshaa' , count : 200 ,cursor : next_cursor},  function (err, data, response) {
// 		console.log(response)
// 		if(data.users){
// 			data.users.forEach(function(user){
// 				writer.write([user.name,user.followers_count,user.friends_count])
// 			})
// 		}
// 		if(response.caseless.dict['x-rate-limit-remaining']>0){
// 			next_cursor = data.next_cursor
// 			fecthing_details()
// 		}
// 		else{
// 			if(next_cursor==0)
// 			   writer.end()
// 		   else
// 		   {
// 		   	  var time = new Date().getTime()
// 		   	  var timestamp = response.caseless.dict['x-rate-limit-reset']
// 		   	  console.log(timestamp*1000)
// 		   	  console.log(time)
// 		   	  console.log((timestamp*1000)-time)
//               setTimeout(fecthing_details,(timestamp*1000)-time);
// 		   }
// 		}
// 	})
