var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
    name:{type:String},
    designation:{type:String}
});
module.exports=mongoose.model('data', dataSchema);