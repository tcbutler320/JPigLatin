function myFunction() {
    var string = document.getElementById("input").value;
    var words = string.split(" ");
    var answer = "";
    var temp = "";
    for (var i = 0; i < words.length; i += 1) {
        temp = words[i].slice(1);
        if(typeof temp === 'undefined' || typeof words[i][0] === 'undefined') {
          document.getElementById("error").innerHTML = "<span style='color: red;'> <p> Enter a phrase with no spaces at the end!</p> </span>";
          break;
        } else {
          answer = answer + (temp.toLowerCase()+words[i][0].toLowerCase()+"ay") + " ";
        }
        document.getElementById("out").innerHTML = answer;
    }
  }