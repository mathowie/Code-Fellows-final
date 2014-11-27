// load jquery
	$(document).ready(function(){

// random number generator to select a floor for the answer
	var $answer;
	$answer = Math.floor(Math.random() * 100) + 1

// make click to display random number and change showbuilding class to display
	$( ".randomnumber" ).click(function() {
	$(".randomnumber").html($answer);
	$(".showbuilding").show();
});

// change text to represent building levels
	$(".answer").html($answer);

// make building proper number of floors, which is 20px * $answer
	var buildingheight = 20 * $answer;
	$(".building").css("height", buildingheight);

// create shuffled array of length $answer
for (var a=[],i=0;i<$answer;++i) a[i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

// shuffle the arrays twice so we can compare them later separately
a = shuffle(a);
b = shuffle(a);

console.log(a)

// display the shuffled array contents in the code block on the page
  var el = $.map(a, function(val, i) {
  	return " " + val + ", ";
	});
	    
	$(".arrayoutput").html(el.join(""));



// bubble sort the array to count comparisons/swaps

var sort = function (list) {
 
    var comparisons = 0,
        swaps = 0,
        endIndex = 0,
        len = list.length - 1;
 
    for (var i = 0; i < len; i++) {
 
        for (var j = 0, swapping, endIndex = len - i; j < endIndex; j++) {
            comparisons++;
 
            if (list[j] > list[j + 1]) {
         
                swapping = list[j];
 
                list[j] = list[j + 1];
                list[j + 1] = swapping;
 
                swaps++;
            };
        };
    }
 
    console.log("--Bubble Sort--");
    console.log("Comparisons: " + comparisons);
    console.log("Swaps: " + swaps);
    console.log("Total steps " + (comparisons+swaps));

		// display total number of steps for bubble sort in the browser
			$(".bubblesteps").html(comparisons+swaps);

    return list;

};

// bubble sort the randomized array of length $answer
	sort(a);

// create merge sort of our array

var comparisons = 0,
	swaps = 0; 
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
 
    return merge(mergeSort(left), mergeSort(right));

}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
            swaps++;
        } else {
            result.push(right.shift());
        }
        comparisons++
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

// merge sort our array 
		console.log(mergeSort(b));

		console.log("--Merge Sort--");
		console.log("Comparisons: " + comparisons);
		console.log("Swaps: " + swaps);
		console.log("Total steps " + (comparisons+swaps));

// display total number of steps for bubble sort in the browser
		$(".mergesteps").html(comparisons+swaps);


});


