var output;  // The value of a textarea where the test can put its output
var success; // true if the test passed
var userCode; // The value of the textarea where the user code is entered.
var instructions; // The innerHTML of the instructions div

var currentPuzzle;

var testPuzzle = {
	"title": "01 Commenting",
	"level": 1,
	"description": "Comment out the line 'success = false;'",
	"template": "success = true;\nsuccess = false;",
	"test": "output.value = success?'Test passed':'Test failed';",
	"solution": "success = true;\n//success = false;"
};

window.onload = function (){
	output = document.getElementById("outputText");
	userCode = document.getElementById("userCode");
	instructions = document.getElementById("instructions");
	
	loadPuzzle(testPuzzle);
}

function loadPuzzle(puzzle){
	currentPuzzle = puzzle;
	output.value = "";
	success = false;
	userCode.value = puzzle.template;
	instructions.innerHTML = puzzle.description;
}
	

function runTest(){
		eval(userCode.value);
		eval(currentPuzzle.test);
}

function cheat(){
	userCode.value = currentPuzzle.solution;
	runTest();
}