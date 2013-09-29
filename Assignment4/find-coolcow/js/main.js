var one = document.getElementsByClassName("one").item(0);

one.addEventListener("click", function(event){
	one.classList.toggle("is-clicked");
},false);



var two = document.getElementsByClassName("two").item(0);

two.addEventListener("dblclick", function(event){
	two.classList.toggle("is-clicked");
},false);


var three = document.getElementsByClassName("three").item(0);

three.addEventListener("mouseover", function(event){
	three.classList.toggle("is-clicked");
},false);


var four = document.getElementsByClassName("four").item(0);

four.addEventListener("dblclick", function(event){
	four.classList.toggle("is-clicked");
},false);


var five = document.getElementsByClassName("five").item(0);

five.addEventListener("dblclick", function(event){
	five.classList.toggle("is-clicked");
},false);


var six = document.getElementsByClassName("six").item(0);

six.addEventListener("mouseover", function(event){
	six.classList.add("is-clicked");
},false);


var seven = document.getElementsByClassName("seven").item(0);

seven.addEventListener("click", function(event){
	seven.classList.toggle("is-clicked");
},false);

var eight = document.getElementsByClassName("eight").item(0);

eight.addEventListener("dblclick", function(event){
	eight.classList.add("is-clicked");

	var cowfound = document.getElementById("cowfound");
  cowfound.classList.add("is-active");

},false);

var nine = document.getElementsByClassName("nine").item(0);

nine.addEventListener("click", function(event){
	nine.classList.toggle("is-clicked");
},false);

var ten = document.getElementsByClassName("ten").item(0);

ten.addEventListener("click", function(event){
	ten.classList.toggle("is-clicked");
},false);