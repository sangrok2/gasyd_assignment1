/*
function rgbToHex(R, G, B){
  if (R === parseInt(R,10) && R >=0 && R <=255 && G === parseInt(G,10) && G >=0 && G <=255 && B === parseInt(B,10) && B >=0 && B <=255){
      let hexNum =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
      let R1 = parseInt(R/16);
      let R2 = R%16;
      let G1 = parseInt(G/16);
      let G2 = G%16;
      let B1 = parseInt(B/16);
      let B2 = B%16;
    return "#" + hexNum[R1] + hexNum[R2] + hexNum[G1] + hexNum[G2] + hexNum[B1] + hexNum[B2];
  } else {
      return "Please use valid numbers." ;
  };
}

console.log(rgbToHex(34, 23, 25));
*/

module.exports = function (robot) {
  robot.hear(/Convert RGB (.*),(.*),(.*) to Hex/i, function(msg) {
    let R;
    let G;
    let B;
    let rgbColor;
    rgbColor='RGB('+R+','+G+','+B+')';
    console.log('match [1]', msg.match[1]);
    console.log('match [2]', msg.match[2]);
    console.log('match [3]', msg.match[3]);
    R = parseInt(msg.match[1]);
    G = parseInt(msg.match[2]);
    B = parseInt(msg.match[3]);
    if (R === parseInt(R,10) && R >=0 && R <=255 && G === parseInt(G,10) && G >=0 && G <=255 && B === parseInt(B,10) && B >=0 && B <=255){
          let hexNum =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
          let R1 = parseInt(R/16);
          let R2 = R%16;
          let G1 = parseInt(G/16);
          let G2 = G%16;
          let B1 = parseInt(B/16);
          let B2 = B%16;
        return msg.reply("#" + hexNum[R1] + hexNum[R2] + hexNum[G1] + hexNum[G2] + hexNum[B1] + hexNum[B2]);
      } else {
          return msg.reply("Please use valid numbers. http://goo.gl/ddFjZA");
      };
  });
}
