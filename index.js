function encode(input,output) {
  var string = document.getElementById(input).value;
  var words = string.split(" ");
  var answer = "";
  var temp = "";
  for (var i = 0; i < words.length; i += 1) {
      temp = words[i].slice(1);
        if (typeof temp === 'undefined' || typeof words[i][0] === 'undefined') {
          alert('alert');
          break;
        } else {
          answer = answer + (temp.toLowerCase()+words[i][0].toLowerCase()+"ay") + " ";
        }
   }
    return answer;
 }