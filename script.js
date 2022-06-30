var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var occupation = document.getElementById("occupation").value;
  var why = document.getElementById("why").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I am a(n) " + occupation + ". I wish to join the cause for Education First. I want to do this beacause, " + why + ". I am a social activist who stands for children's rights. Education is a human right!";
}


//resources variables
var khanA = document.getElementById("khanA");
var youT = doucment.getElementById("youT");
var unicef = document.getElementById("unicef");
var eduFund = document.getElementById("eduFund");

khanA.addEventListener("click", khanA);
youT.addEventListener("click", youT);
unicef.addEventListener("click", unicef);
eduFund.addEventListener("click", eduFund);

function khanA(){
  window.open("https://www.khanacademy.org/");
}


function youT(){
  window.open("https://www.youtube.com/");
}

function unicef(){
  window.open("https://www.unicef.org/education");
}

function eduFund(){
  window.open("https://www.educationfund.org/");
}
