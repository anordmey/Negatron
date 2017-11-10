//Negatron v20

// --------------- HELPER FUNCTIONS ----------------
function shuffle(array) {
	var tmp, current, top = array.length
	if (top)
		while (--top) {
			current = Math.floor(Math.random() * (top + 1))
			tmp = array[current]
			array[current] = array[top]
			array[top] = tmp
		}
		return array
	}

	function showSlide(id) {
		$(".slide").hide()
		$("#" + id).show()
	}

	function makeQuestionText(q_text) {
		return '<p align=\"center\">' + q_text + '</p>'
	}

//disable the spacebar (prevents it from activating browser shortcuts e.g. "scroll down")
window.onkeydown = function(e) {
	return !(e.keyCode == 32)
}

//preload images: 
var myimages = new Array();

function preloading() {
	for (x = 0; x < preloading.arguments.length; x++) {
		img = "images/" + preloading.arguments[x] + ".png"
		myimages[x] = new Image();
		myimages[x].src = img;
	}
}
preloading("button-gradient", "stanford", "boat", "cup", "barn", "bird", "apple", "balloon", "banana", "bike", "bucket", "bus", "cake", "carrot", "crayon", "car", "cat", "cookie", "cow", "duck", "dog", "donut", "elephant", "fish", "flower", "fork", "frog", "guitar", "horse", "key", "lion", "mitten", "pencil", "phone", "pig", "popsicle", "purse", "strawberry", "shoe", "shirt", "tree", "turtle", "watch", "train", "toothbrush", "tiger", "table", "spoon", "sock", "soccer", "sheep", "scissors", "pretzel", "plane", "shorts", "popcorn", "plate", "penguin", "pear", "party_hat", "monkey", "necklace", "paintbrush", "map", "lamp", "hat", "glasses", "goat", "house", "giraffe", "drum", "fence", "clock", "chicken", "butterfly", "bee", "bell", "chair")

// --------------- PARAMETERS OF THE EXPERIMENT ----------------
var practiceItems = ["boat", "cup", "barn", "bird"]

var practiceQuestion = ["This is a boat.", "This is a pizza.", "This is a zebra.", "This is a bird."]

var items = ["apple", "balloon", "banana", "bee", "bell", "bike", "bucket", "bus", "butterfly", "cake", "car", "carrot", "cat", "chair", "chicken", "clock", "cookie", "cow", "crayon", "dog", "donut", "drum", "duck", "elephant", "fence", "fish", "flower", "fork", "frog", "giraffe", "guitar", "goat", "hat", "horse", "house", "key", "lamp", "lion", "mitten", "monkey", "paintbrush", "pear", "pencil", "penguin", "phone", "pig", "plane", "plate", "popsicle", "pretzel", "purse", "sheep", "shirt", "shoe", "sock", "spoon", "strawberry", "table", "tiger", "toothbrush", "train", "tree", "turtle", "watch"]
var alternatives = ["watch", "turtle", "tree", "train", "toothbrush", "tiger", "table", "strawberry", "spoon", "sock", "shoe", "shirt", "sheep", "purse", "pretzel", "popsicle", "plate", "plane", "pig", "phone", "penguin", "pencil", "pear", "paintbrush", "monkey", "mitten", "lion", "lamp", "key", "house", "horse", "hat", "goat", "guitar", "giraffe", "frog", "fork", "flower", "fish", "fence", "elephant", "duck", "drum", "donut", "dog", "crayon", "cow", "cookie", "clock", "chicken", "chair", "cat", "carrot", "car", "cake", "butterfly", "bus", "bucket", "bike", "bell", "bee", "banana", "balloon", "apple"]

var text_conditions = {
	"negative": "is a",
	"positive": "is not a"
}

//picture, sentence type, context condition
var trial_types = shuffle([
	["item", "positive", 0],
	["item", "positive", 1],
	["item", "positive", 2],
	["item", "positive", 3],
	["item", "positive", 0],
	["item", "positive", 1],
	["item", "positive", 2],
	["item", "positive", 3],
	["item", "positive", 0],
	["item", "positive", 1],
	["item", "positive", 2],
	["item", "positive", 3],
	["item", "positive", 0],
	["item", "positive", 1],
	["item", "positive", 2],
	["item", "positive", 3],
	["item", "negative", 0],
	["item", "negative", 1],
	["item", "negative", 2],
	["item", "negative", 3],
	["item", "negative", 0],
	["item", "negative", 1],
	["item", "negative", 2],
	["item", "negative", 3],
	["item", "negative", 0],
	["item", "negative", 1],
	["item", "negative", 2],
	["item", "negative", 3],
	["item", "negative", 0],
	["item", "negative", 1],
	["item", "negative", 2],
	["item", "negative", 3],
	["alt", "positive", 0],
	["alt", "positive", 1],
	["alt", "positive", 2],
	["alt", "positive", 3],
	["alt", "positive", 0],
	["alt", "positive", 1],
	["alt", "positive", 2],
	["alt", "positive", 3],
	["alt", "positive", 0],
	["alt", "positive", 1],
	["alt", "positive", 2],
	["alt", "positive", 3],
	["alt", "positive", 0],
	["alt", "positive", 1],
	["alt", "positive", 2],
	["alt", "positive", 3],		
	["alt", "negative", 0],
	["alt", "negative", 1],
	["alt", "negative", 2],
	["alt", "negative", 3],
	["alt", "negative", 0],
	["alt", "negative", 1],
	["alt", "negative", 2],
	["alt", "negative", 3],
	["alt", "negative", 0],
	["alt", "negative", 1],
	["alt", "negative", 2],
	["alt", "negative", 3],
	["alt", "negative", 0],
	["alt", "negative", 1],
	["alt", "negative", 2],
	["alt", "negative", 3],
	])

var practiceTrial_order = [0, 1, 2, 3]
var trial_order = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63])

// --------------- EXPERIMENT ----------------------------------------
showSlide("instructions")

$("#pleaseWait").html("Please wait while the experiment loads...")
$("#startButton").attr("disabled", true);

if (turk.previewMode != true) {
	$("#pleaseWait").html("Please wait...");
	$(window).load(function() {
		$("#startButton").attr("disabled", false);
		$("#pleaseWait").html("")
	})
}

var experiment = {
	practiceTrials: practiceTrial_order,
	trials: trial_order,
	completed: [],
	data: [],
	gender: [],
	age: "",
	nativeLanguage: "",
	comments: "",

	//Show practice trials: 
	practice_start: function() {
		showSlide("practiceStart")

		var already_movedon = 0
		$(document).keydown(function(event) {
			if (event.which == 32 & !already_movedon) {
				experiment.practice_keyLeft()
				already_movedon = 1
			}
		})
	},

	practice_keyLeft: function() {
		showSlide("practiceKeyLeft")

		var already_movedon = 0
		$(document).keydown(function(event) {
			if (event.which == 81 & !already_movedon) {
				experiment.practice_keyRight()
				already_movedon = 1
			}
		})
	},

	practice_keyRight: function() {
		showSlide("practiceKeyRight")

		var already_movedon = 0
		$(document).keydown(function(event) {
			if (event.which == 80 & !already_movedon) {
				experiment.practice_trial()
				already_movedon = 1
			}
		})
	},

	practice_trial: function() {
		var n = experiment.practiceTrials.shift()
		if (typeof n == "undefined") {
			return experiment.practice_end()
		}

		$("#progressBar").val(((3 - experiment.practiceTrials.length) / 4) * 100)

		//shuffle the order that pictures appear in the array
		var picOrder = shuffle(["contextT", "contextT", "contextT", "target"])
		$("#pic1").attr("class", picOrder[0])
		$("#pic2").attr("class", picOrder[1])
		$("#pic3").attr("class", picOrder[2])
		$("#pic4").attr("class", picOrder[3])

		showSlide("stage")

		//pictures appear
		var targetPic = "images/" + practiceItems[n] + ".png"

		$(".contextT").attr("src", targetPic)
		$(".target").attr("src", targetPic)

		var practiceQuestion_start = "Look at the pictures."
		$("#questionText").html(makeQuestionText(practiceQuestion_start))
		$("#instructionsText").html("Please wait .")

		//Wait four seconds before showing target character
		setTimeout(function() {
			$("#instructionsText").html("Please wait . .")
		}, 1000)
		setTimeout(function() {
			$("#instructionsText").html("Please wait . . .")
		}, 2000)
		setTimeout(function() {
			$("#instructionsText").html("Please wait . . . .")
		}, 3000)

		setTimeout(function() {
			//red box appears around target
			$(".target").attr('class', 'selectedPic')
			$("#questionText").html("")
			$("#instructionsText").html("")

			setTimeout(function() {
				//Show sentence
				var practiceQuestion_text = practiceQuestion[n]
				$("#questionText").html(makeQuestionText(practiceQuestion_text))
				$("#instructionsText").html("(Press Q for FALSE and P for TRUE)")

				//press P or Q to continue; show alert if incorrect
				var already_movedon = 0
				if (practiceItems[n] == "cup" || practiceItems[n] == "barn") {
					$(document).keydown(function(event) {
						if (event.which == 80 & !already_movedon) {
							alert("Incorrect!  Please try again")
						} else if (event.which == 81 & !already_movedon) {
							already_movedon = 1

							// clear everything
							$("#stage").hide()
							$(".contextT").html("").attr('class', 'defaultPic')
							$(".selectedPic").html("").attr('class', 'defaultPic')
							$("#questionText").html("")
							$("#instructionsText").html("")

							setTimeout(experiment.practice_trial, 500)
						}
					})
				} else {
					$(document).keydown(function(event) {
						if (event.which == 80 & !already_movedon) {
							already_movedon = 1

							// clear everything
							$("#stage").hide()
							$(".context").html("").attr('class', 'defaultPic')
							$(".selectedPic").html("").attr('class', 'defaultPic')
							$("#questionText").html("")
							$("#instructionsText").html("")

							setTimeout(experiment.practice_trial, 500)
						} else if (event.which == 81 & !already_movedon) {
							alert("Incorrect!  Please try again")
						}
					})
				}
			}, 1000)
		}, 4000)
	},

	practice_end: function() {
		showSlide("practiceEnd")
		var already_movedon = 0
		$(document).keydown(function(event) {
			if (event.which == 32 & !already_movedon) {
				experiment.next_trial()
				already_movedon = 1
			}
		})
	},

	next_trial: function() {
		var n = experiment.trials.shift()
		if (typeof n == "undefined") {
			return experiment.background()
		}

		$("#progressBar").val(((63 - experiment.trials.length) / 64) * 100)

		//keep track of which trials have been done
		experiment.completed.push(n)

		//determine proportion target v alternative
		var picOrder

		var cond = trial_types[n][2]

		if (cond == 0) {
			picOrder = ["contextA", "contextA", "contextA", "target"]
		} else if (cond == 1) {
			picOrder = ["contextT", "contextA", "contextA", "target"]
		} else if (cond == 2) {
			picOrder = ["contextT", "contextT", "contextA", "target"]
		} else if (cond == 3) {
			picOrder = ["contextT", "contextT", "contextT", "target"]
		} 

		//shuffle the order that pictures appear in the array
		picOrder = shuffle(picOrder)

		$("#pic1").attr("class", picOrder[0])
		$("#pic2").attr("class", picOrder[1])
		$("#pic3").attr("class", picOrder[2])
		$("#pic4").attr("class", picOrder[3])

		var cond = trial_types[n][2]

		showSlide("stage")

		//pictures appear
		var targetPic = "images/" + items[n] + ".png"
		var altPic = "images/" + alternatives[n] + ".png"

		$(".contextA").attr("src", altPic)
		$(".contextT").attr("src", targetPic)

		if (trial_types[n][0] == "item") {
			$(".target").attr("src", targetPic)
		} else if (trial_types[n][0] == "alt") {
			$(".target").attr("src", altPic)
		}

		var context_text = "Look at the pictures."

		$("#questionText").html(makeQuestionText(context_text))
		$("#instructionsText").html("Please wait .")

		//wait four seconds
		setTimeout(function() {
			$("#instructionsText").html("Please wait . .")
		}, 1000)
		setTimeout(function() {
			$("#instructionsText").html("Please wait . . .")
		}, 2000)
		setTimeout(function() {
			$("#instructionsText").html("Please wait . . . .")
		}, 3000)

		//show the sentence (after a delay)
		setTimeout(function() {
			//red box appears around target
			$(".target").attr('class', 'selectedPic')
			$("#questionText").html("")
			$("#instructionsText").html("")

			setTimeout(function() {
				//show sentence
				var det
				if (items[n] == "apple" || items[n] == "elephant") {
					det = " an "
				} else {
					det = " a "
				}

				var question_text
				if (trial_types[n][1] == "positive") {
					question_text = "This is" + det + items[n] + "."
				} else if (trial_types[n][1] == "negative") {
					question_text = "This is not" + det + items[n] + "."
				}

				$("#questionText").html(makeQuestionText(question_text))
				$("#instructionsText").html("(Press Q for FALSE and P for TRUE)")

				// collect response and log reaction time
				var startTime = (new Date()).getTime()
				$(document).keydown(function(event) {
					var keyCode = event.which
					if (keyCode == 81 || keyCode == 80) {
						$(document).unbind("keydown")
						var endTime = (new Date()).getTime()

						// figure out if they chose true or false
						key = (keyCode == 80) ? true : false

						var answer
						if (trial_types[n][0] == "item" && trial_types[n][1] == "positive") {
							answer = 1
						} else if (trial_types[n][0] == "item" && trial_types[n][1] == "negative") {
							answer = 0
						} else if (trial_types[n][0] == "alt" && trial_types[n][1] == "positive") {
							answer = 0
						} else if (trial_types[n][0] == "alt" && trial_types[n][1] == "negative") {
							answer = 1
						} 

						var correct = 0
						if (answer == key) {
							correct = 1
						}

						//make a variable "data" which includes all of the information I want to collect for each participant.  
						var data = {
							context_condition: cond,
							item: items[n],
							alt: alternatives[n],
							order: picOrder,
							response: key,
							stimulus: n,
							image_condition: trial_types[n][0],
							text_condition: trial_types[n][1],
							sentence: question_text,
							correct: correct,
							rt: endTime - startTime
						}

						experiment.data.push(data)

						// clear everything
						$("#stage").hide()
						$(".contextA").html("").attr('class', 'defaultPic')
						$(".contextT").html("").attr('class', 'defaultPic')
						$(".selectedPic").html("").attr('class', 'defaultPic')
						$("#questionText").html("")
						$("#instructionsText").html("")

						setTimeout(experiment.next_trial, 500)
					}
				})
			}, 1000)
		}, 4000)
	},

	background: function() {
		document.body.style.background = "white";

		//undo spacebar disable
		window.onkeydown = function(e) {}

		$("#gender").trigger("reset");
		$("#age").trigger("reset");
		$("#language").trigger("reset");
		$("#comments").trigger("reset");
		showSlide("askInfo");

		$("#endButton").click(function() {
			var gen = $("input:radio[name=genderButton]:checked").val();
			var ag = $("#ageRange").val();
			var lan = $("#nativeLanguage").val();
			var comm = $("#commentQ").val();

			if (gen == "" | ag == "" | lan == "") {
				alert("Please answer all of the questions");
			} else {

				experiment.gender = gen
				experiment.age = ag
				experiment.nativeLanguage = lan
				experiment.comments = comm

				experiment.end();
			}
		})
	},

	// finish & submit results
	end: function() {

		showSlide("finished")

		setTimeout(function() {
			turk.submit(experiment, true)
		}, 1000)
	}
}