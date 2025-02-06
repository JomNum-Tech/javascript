// Using var
function exampleVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}

// Using let
function exampleLet() {
  let y = 1;
  if (true) {
    let y = 2; // Different variable, block-scoped
    console.log(y); // 2
  }
  console.log(y); // 1
}

exampleVar();
exampleLet();