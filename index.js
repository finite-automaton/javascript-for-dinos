var moment = require("moment");

console.log("Hello from javascript!");
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());

var name = "Rob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);