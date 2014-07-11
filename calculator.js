window.onload = function(){

		var one = document.getElementById("one")
		var two = document.getElementById("two")
		var three = document.getElementById("three")
		var four = document.getElementById("four")
		var five = document.getElementById("five")
		var six = document.getElementById("six")
		var seven = document.getElementById("seven")
		var eight = document.getElementById("eight")
		var nine = document.getElementById("nine")
		var zero = document.getElementById("zero")
		var plus = document.getElementById("+")
		var minus = document.getElementById("-")
		var times = document.getElementById("*")
		var divide = document.getElementById("/")
		var clear = document.getElementById("CLR")
		var enter = document.getElementById("ENT")


		var display = document.getElementById("result_display_value");
		var operator = document.getElementById('operator_display')
		var numbers = "";
		//var integers = parseFloat(numbers)
		//var array = [];


		enter.onclick = function(event){
			operator.innerHTML = ""; 
			display.innerHTML = eval(numbers) ;
			// console.log(array);
		}

		plus.onclick = function(event){
			numbers = numbers + plus.innerHTML;
			operator.innerHTML = plus.innerHTML;
			//display.innerHTML = "";
			//numbers = "";
			}

		minus.onclick = function(event){
			operator.innerHTML = minus.innerHTML;
			numbers = numbers + minus.innerHTML;
			//display.innerHTML = "";
			}

		times.onclick = function(event){
			operator.innerHTML = times.innerHTML;
			numbers = numbers + times.innerHTML;
			//display.innerHTML = "";
			}

		divide.onclick = function(event){
			operator.innerHTML = divide.innerHTML;
			numbers = numbers + divide.innerHTML;
			//display.innerHTML = "";
			}

		one.onclick = function(event){
			numbers = numbers + one.innerHTML;
			display.innerHTML = numbers;
			console.log(numbers)
			}

		two.onclick = function(event){
			numbers += two.innerHTML;
			display.innerHTML = numbers;
			}

		three.onclick = function(event){
			numbers += three.innerHTML;
			display.innerHTML = numbers;
			}

		four.onclick = function(event){
			numbers += four.innerHTML;
			display.innerHTML = numbers;
			}

		five.onclick = function(event){
			numbers += five.innerHTML;
			display.innerHTML = numbers;
			}
		six.onclick = function(event){
			numbers += six.innerHTML;
			display.innerHTML = numbers;
			}
		seven.onclick = function(event){
			numbers += seven.innerHTML;
			display.innerHTML = numbers;
			}
		eight.onclick = function(event){
			numbers += eight.innerHTML;
			display.innerHTML = numbers;
			}
		nine.onclick = function(event){
			numbers += nine.innerHTML;
			display.innerHTML = numbers;
			}

		zero.onclick = function(event){
			numbers += zero.innerHTML;
			display.innerHTML = numbers;
			}

		clear.onclick = function(event){
			operator.innerHTML = "";
			display.innerHTML = "";
			numbers = "";
			array = [];
			}
}
 





