var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReflectionSchema = mongoose.Schema({
  feelings: {type: Array},
  feelingsWhy: {type: String},
  drugAlcoholIntake: {type: Boolean},
  medication: {type: Boolean},
  sleep: {type: Number},
  dream: {type: Boolean},
  whatDream: {type: String},
  exercise: {type: Number},
  food: {type: Number},
  spnsrMntrConnect: {type: Boolean},
  groupMeet: {type: Number},
  commntyService: {type: Boolean},
  stressors: {type: Array},
  selfishDishonest: {type: Boolean},
  howSelfshDishnt: {type: String},
  tomorrowGoal: {type: String},
  dailyGoal: {type: Boolean},
  gratitude: {type: String},
  peerSupport: {type: Boolean},
  counselor: {type: Boolean},
  // reflectionDate: {type: String},
  // reflectionTime: {type: String},
  reflectionDate: {type: Date, default: Date.now},
  // memberID: {type: Schema.ObjectId, ref: 'Registration'} //references Registration Schema
});


module.exports = mongoose.model('reflection', ReflectionSchema);