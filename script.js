 /* variables: A B
    axiom: A
    rules: (A => AB), (B => A)

    variables: F+-[]
    axiom: F
    rules: F => FF+[+F-F-F]-[-F+F+F]
    
    */

    var angle;
    var axiom = "F";
    var sentence = axiom;
    var len = window.innerHeight * 0.3;

    var rules = [];

    /*
      rules[0] = {
        a: "A",
        b: "ABC"
      }

      rules[1] = {
         a: "B",
         b: "A"
      } 
    */

    rules[0] = {
      a: "F",
      b: "FF+[+F-F-F]-[-F+F+F]"
    }

    function generate() {
      len *= 0.5;
      var nextSentence = "";

      for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;

        for(var j = 0; j < rules.length; j++) {
          if(current == rules[j].a) {
            found = true;
            nextSentence += rules[j].b;            
            break;
          }          
        }

        if(!found) {
          nextSentence += current;
        }
      }

      sentence = nextSentence;
      /* createP(sentence); */
      turtle();

    }

    function turtle() {
      background(51);
      resetMatrix();
      translate(width / 2, height);
      stroke(255, 100);

      for(var i = 0; i < sentence.length; i++) {
        
        var current = sentence.charAt(i);

        if(current == "F") {
          line(0, 0, 0, -len);
          translate(0, -len);
        }
        else if(current == "+") {
          rotate(angle);
        }
        else if(current == "-") {
          rotate(-angle);
        }
        else if(current == "\[") {
          push();
        }
        else if(current == "]") {
          pop();
        }
      }
    }

    function setup() {
      /* clearCa */
      createCanvas(windowWidth, windowHeight);
      angle = radians(25);
      background(51);      
      /* // noCanvas(); */
      /* createP(axiom); */
      /* turtle(); */

      /* var button = createButton("generate"); */
      /* button.mousePressed(generate); */
      generate();
      generate();
      generate();
      generate();
      generate();
      noLoop();
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

    /* function re() */
    /* window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      resizeCanvas(windowWidth, windowHeight);            
    }) */