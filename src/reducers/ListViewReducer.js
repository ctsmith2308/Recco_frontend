import {
  GRAB_FOODIES,
  LIST_USERS,
  ADD_FOODIE_TO_STATE,
  REVIEWS_LIST,
 } from '../actions/types'

const INITIAL_STATE = {
  users:null,
  currentFoodieId: null,
  myFoodies:[],
  foodieReviewList:null,
  reviewList:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LIST_USERS:
      return { ...state, users:action.payload }
    case ADD_FOODIE_TO_STATE:
      return { ...state, myFoodies: [...state.myFoodies, action.payload ] }
    case GRAB_FOODIES:
      return { ...state, myFoodies: action.payload }
    case REVIEWS_LIST:
      return { ...state , reviewList: action.payload }
    default:
      return state
  }
}


// router.get('/:id', function(req, res, next){
//   knex('friends')
//   .where('friends.user_id', req.params.id)
//   .join('dashboard','friends.friend_id','dashboard.user_id')
//   .join('photos','photos.user_id','dashboard.user_id')
//   .select('dashboard.user_id','dashboard.bio','dashboard.username','image_url')
//   .then((response)=>{
//     console.log(response);
//     res.send(response)
//   })
// })
