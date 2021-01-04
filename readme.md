# JPigLatin 🐷
JPigLatin is a simple javaScript  package for generating pig latin from plain text. You can see package on [npm](https://www.npmjs.com/package/jpiglatin), [github](https://github.com/tcbutler320/JPigLatin), or see the web application on [JPig.org](https://jpig.org)


# Installation

1) Via CDN

`<script src="https://unpkg.com/jpiglatin@1.0.0/index.js"></script>`

2) Via NPM

`npm i jPigLatin -save`

# Use 

1) Include jPigLatin in page source  

`<script src="https://unpkg.com/jpiglatin@1.0.0/index.js"></script>`

2) Create two fields, one for user input and one for output
   
```html
<span id="input">This is a test</span>
<span id="output"></span>
```

3) Use javascript to get pass input to jPigLatin `encode()` function. Set input and output ElementID's with local variables.

```javascript
<script>
    function displayPigLatin(){
        var input = "input";
        var output = "output";
        document.getElementById(output).innerHTML = encode(input,output);
    }
</script>
```

4) Use an event loader to execute function

```html
<button onclick="displayPigLatin()">Translate</button>
```  

# Contributing 
Feel free to make a pull request for features 


