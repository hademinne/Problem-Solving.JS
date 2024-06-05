//challenge 08

//Jenny s secret message: jenny has written a function that returns a greeting for a user. however she is in love with johnny  and would like to greet him slightly different . she added a special case to her function but she made a mistake.

function greet(name) {
  return name === "Johnny" ? "Hello, my Love!" : "Hello, " + name + "!";
}

console.log(greet("hademinne"));
console.log(greet("Johnny"));
