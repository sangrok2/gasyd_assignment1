module.exports = function (robot) {
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  })

  robot.hear(/sfsfsdfs/, function (res) {
    return res.send("Delete")
  })

  robot.hear(/What's your favorite food?/, function(res) {
   return res.send("I'm a robot--I don't eat food!")
  })
  robot.hear(/Hi Hubot! My name is (.*)/i, function(msg) {
    var name;
    name = msg.match[1];
    if (name == "Hubot"){
      return msg.send("You're not Hubot--I'm Hubot!");
    } else {
      return msg.reply("Nice to meet you, " + name + "!");
    }
  });

  robot.hear(/add (.*) and (.*)/i, function(msg) {
   var a;
   var b;
   a = parseInt(msg.match[1]);
   b = parseInt(msg.match[2]);
   c = a + b
   return msg.reply(a + " plus " + b + " = " + c);
 });
 robot.hear(/what is your favorite (.*)/, function(msg) {
   var fav;
   fav = msg.match[1];
   console.log(fav);
   switch (fav) {
     case "food":
       return msg.reply("I'm a robot--I don't eat food!");
       break;
     case "band":
       return msg.reply("It's gotta be Daft Punk!");
       break;
     case "programming language":
       return msg.reply("Javascript, of course!");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's yours?");
   }
 });
}
