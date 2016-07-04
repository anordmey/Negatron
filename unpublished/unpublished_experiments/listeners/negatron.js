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

function makeLinkIm(imname) {
	return '<img src=\"images/' + imname + '.jpg\"><p align=\"center\"> </p>'
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
		myimages[x] = new Image();
		myimages[x].src = preloading.arguments[x];
	}
}
preloading("images/stanford.png","images/apples_item.jpg","images/balloons_item.jpg","images/bananas_item.jpg","images/bows_item.jpg","images/buckets_item.jpg","images/cakes_item.jpg","images/carrots_item.jpg","images/crayons_item.jpg","images/cars_item.jpg","images/cats_item.jpg","images/cookies_item.jpg","images/daisies_item.jpg","images/dogs_item.jpg","images/donuts_item.jpg","images/fish_item.jpg","images/flowers_item.jpg","images/forks_item.jpg","images/guitars_item.jpg","images/ice cream cones_item.jpg","images/keys_item.jpg","images/kites_item.jpg","images/lollipops_item.jpg","images/mittens_item.jpg","images/pencils_item.jpg","images/phones_item.jpg","images/plants_item.jpg","images/presents_item.jpg","images/purses_item.jpg","images/rainboots_item.jpg","images/scissors_item.jpg","images/shovels_item.jpg","images/umbrellas_item.jpg","images/apples_nothing.jpg","images/balloons_nothing.jpg","images/bananas_nothing.jpg","images/bows_nothing.jpg","images/buckets_nothing.jpg","images/cakes_nothing.jpg","images/carrots_nothing.jpg","images/crayons_nothing.jpg","images/cars_nothing.jpg","images/cats_nothing.jpg","images/cookies_nothing.jpg","images/daisies_nothing.jpg","images/dogs_nothing.jpg","images/donuts_nothing.jpg","images/fish_nothing.jpg","images/flowers_nothing.jpg","images/forks_nothing.jpg","images/guitars_nothing.jpg","images/ice cream cones_nothing.jpg","images/keys_nothing.jpg","images/kites_nothing.jpg","images/lollipops_nothing.jpg","images/mittens_nothing.jpg","images/pencils_nothing.jpg","images/phones_nothing.jpg","images/plants_nothing.jpg","images/presents_nothing.jpg","images/purses_nothing.jpg","images/rainboots_nothing.jpg","images/scissors_nothing.jpg","images/shovels_nothing.jpg","images/umbrellas_nothing.jpg", "images/dress_item.jpg", "images/spots_item.jpg", "images/sweater_item.jpg", "images/blanket_item.jpg", "images/book_item.jpg", "images/collar_item.jpg", "images/hat_item.jpg", "images/house_item.jpg", "images/dress_contextL.jpg", "images/spots_contextL.jpg", "images/sweater_contextL.jpg", "images/blanket_contextL.jpg", "images/book_contextL.jpg", "images/collar_contextL.jpg", "images/hat_contextL.jpg", "images/house_contextL.jpg", "images/dress_contextC.jpg", "images/spots_contextC.jpg", "images/sweater_contextC.jpg", "images/blanket_contextC.jpg", "images/book_contextC.jpg", "images/collar_contextC.jpg", "images/hat_contextC.jpg", "images/house_contextC.jpg", "images/dress_contextR.jpg", "images/spots_contextR.jpg", "images/sweater_contextR.jpg", "images/blanket_contextR.jpg", "images/book_contextR.jpg", "images/collar_contextR.jpg", "images/hat_contextR.jpg", "images/house_contextR.jpg")

// --------------- PARAMETERS OF THE EXPERIMENT ----------------
var practiceItems = ["dress", "spots", "sweater", "blanket", "book", "collar", "hat", "house"]
var practicePerson = ["Lizzie", "Buddy", "John", "Tom", "Laura", "Sparky", "Olivia", "George"]
var practiceQuestion = ["has a green dress", "has blue spots", "has a yellow sweater", "has a pink blanket", "has a green book", "has a purple collar", "has a pink hat", "has an orange house"]
var practicePeople = ["girls", "dogs", "boys", "boys", "girls", "dogs", "girls", "boys"]

var items = ["apples", "balloons", "bananas", "bows", "buckets", "cakes", "carrots", "crayons", "cars", "cats", "cookies", "daisies", "dogs", "donuts", "fish", "flowers", "forks", "guitars", "ice cream cones", "keys", "kites", 	"lollipops", "mittens", "pencils", "phones", "plants", "presents", "purses", "rainboots", "scissors", "shovels", "umbrellas"]
var person = ["Bob", "Nancy", "Josh", "Natalie", "Abby", "Michael", "Katie", "Molly", "Susan", "Jasmine", "Jeff", "David", "Daniel", "Grace", "Sophia", "Lila", "Ethan", "John", "Kevin", "Kyle", "Sam", "Mark", "Alison", "Andrew", "Julia", "Jacob", "Lauren", "Lizzie", "Olivia", "Samantha", "Isabelle", "Alex"]
var people = ["boys", "girls", "boys", "girls", "girls", "boys", "girls", "girls",	"girls", "girls", "boys", "boys", "boys", "girls", "girls", "girls", "boys", "boys", "boys","boys", "boys",	"boys", "girls", "boys", "girls", "boys", "girls", "girls", "girls", "girls", "girls", "boys"]

var text_conditions = {
	"negative": "has no",
	"positive": "has"
}

//picture, sentence type, context condition
var trial_types = shuffle([
	["item", "positive", 0],
	["item", "positive", 0],
	["item", "positive", 1],
	["item", "positive", 1],
	["item", "positive", 2],
	["item", "positive", 2],
	["item", "positive", 3],
	["item", "positive", 3],
	["item", "negative", 0],
	["item", "negative", 0],
	["item", "negative", 1],
	["item", "negative", 1],
	["item", "negative", 2],
	["item", "negative", 2],
	["item", "negative", 3],
	["item", "negative", 3],
	["nothing", "positive", 0],
	["nothing", "positive", 0],
	["nothing", "positive", 1],
	["nothing", "positive", 1],
	["nothing", "positive", 2],
	["nothing", "positive", 2],
	["nothing", "positive", 3],
	["nothing", "positive", 3],
	["nothing", "negative", 0],
	["nothing", "negative", 0],
	["nothing", "negative", 1],
	["nothing", "negative", 1],
	["nothing", "negative", 2],
	["nothing", "negative", 2],
	["nothing", "negative", 3],
	["nothing", "negative", 3]
])

var practiceTrial_order = shuffle([0, 1, 2, 3, 4, 5, 6, 7])
var trial_order = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])

// --------------- EXPERIMENT ----------------------------------------
showSlide("instructions")


$("#pleaseWait").html("Please wait while the experiment loads...")

$(window).load(function() {
	document.getElementById("startButton").disabled = false;
	$("#pleaseWait").html("")
})

var experiment = {
	version: "comprehension",
	practiceTrials: practiceTrial_order,
	trials: trial_order,
	completed: [],
	data: [],
	gender: [],
	age: "",
	nativeLanguage: "",
	about: "",
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

		//shuffle the order that pictures appear in the array
		var picOrder = shuffle(["context1", "context2", "context3", "target"])
		$("#pic1").attr("id", picOrder[0])
		$("#pic2").attr("id", picOrder[1])
		$("#pic3").attr("id", picOrder[2])
		$("#pic4").attr("id", picOrder[3])

		showSlide("stage")

		//pictures appear
		$("#context1").html(makeLinkIm(practiceItems[n] + "_contextL"))
		$("#context2").html(makeLinkIm(practiceItems[n] + "_contextC"))
		$("#context3").html(makeLinkIm(practiceItems[n] + "_contextR"))
		$("#target").html(makeLinkIm(practiceItems[n] + "_item"))

		var practiceQuestion_start = "Look at these " + practicePeople[n] + "! "
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
			$("#target").attr('class', 'selectedPic')
			$("#questionText").html("")
			$("#instructionsText").html("")

			setTimeout(function() {
				//Show sentence
				var practiceQuestion_text = practicePerson[n] + " " + practiceQuestion[n] + "! "
				$("#questionText").html(makeQuestionText(practiceQuestion_text))
				$("#instructionsText").html("(Press Q for FALSE and P for TRUE)")

				//press P or Q to continue; show alert if incorrect
				var already_movedon = 0
				if (practiceItems[n] == "dress" || practiceItems[n] == "blanket" || practiceItems[n] == "collar" || practiceItems[n] == "house") {
					$(document).keydown(function(event) {
						if (event.which == 80 & !already_movedon) {
							alert("Incorrect!  Please try again")
						} else if (event.which == 81 & !already_movedon) {
							already_movedon = 1

							// clear everything
							$("#context1").html("").attr('class', 'defaultPic')
							$("#context2").html("").attr('class', 'defaultPic')
							$("#context3").html("").attr('class', 'defaultPic')
							$("#target").html("").attr('class', 'defaultPic')
							$("#questionText").html("")
							$("#instructionsText").html("")

							//reset pic ids
							$("#" + picOrder[0]).attr("id", "pic1")
							$("#" + picOrder[1]).attr("id", "pic2")
							$("#" + picOrder[2]).attr("id", "pic3")
							$("#" + picOrder[3]).attr("id", "pic4")

							setTimeout(experiment.practice_trial, 500)
						}
					})
				} else {
					$(document).keydown(function(event) {
						if (event.which == 80 & !already_movedon) {
							already_movedon = 1

							// clear everything
							$("#context1").html("").attr('class', 'defaultPic')
							$("#context2").html("").attr('class', 'defaultPic')
							$("#context3").html("").attr('class', 'defaultPic')
							$("#target").html("").attr('class', 'defaultPic')
							$("#questionText").html("")
							$("#instructionsText").html("")

							//reset pic ids
							$("#" + picOrder[0]).attr("id", "pic1")
							$("#" + picOrder[1]).attr("id", "pic2")
							$("#" + picOrder[2]).attr("id", "pic3")
							$("#" + picOrder[3]).attr("id", "pic4")


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

		//keep track of which trials have been done
		experiment.completed.push(n)

		//shuffle the order that pictures appear in the array
		var picOrder = shuffle(["context1", "context2", "context3", "target"])
		$("#pic1").attr("id", picOrder[0])
		$("#pic2").attr("id", picOrder[1])
		$("#pic3").attr("id", picOrder[2])
		$("#pic4").attr("id", picOrder[3])

		var showContext = showContext

		var cond = trial_types[n][2]

		//pictures appear
		if (cond == 0) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_nothing", ""))
			$("#context2").html(makeLinkIm(items[n] + "_nothing", ""))
			$("#context3").html(makeLinkIm(items[n] + "_nothing", ""))
		} else if (cond == 1) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_nothing", ""))
			$("#context3").html(makeLinkIm(items[n] + "_nothing", ""))
		} else if (cond == 2) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_item", ""))
			$("#context3").html(makeLinkIm(items[n] + "_nothing", ""))
		} else if (cond == 3) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_item", ""))
			$("#context3").html(makeLinkIm(items[n] + "_item", ""))
		}

		var test_images = items[n] + "_" + trial_types[n][0]
		$("#target").html(makeLinkIm(test_images, "")).attr('class', 'defaultPic')

		var context_text = "Look at these " + people[n] + "!"

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
			$("#target").attr('class', 'selectedPic')
			$("#questionText").html("")
			$("#instructionsText").html("")

			setTimeout(function() {
				//show sentence
				var question_text = person[n] + " " + text_conditions[trial_types[n][1]] + " " + items[n] + ". "
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

						var answer = 0
						if (trial_types[n][1] == "negative") {
							answer = test_images == items[n] + "_nothing"
						} else {
							answer = test_images == items[n] + "_item"
						}

						var correct = 0
						if (answer == key) {
							correct = 1
						}

						//make a variable "data" which includes all of the information I want to collect for each participant.  
						var data = {
							context_condition: cond,
							item: items[n],
							order: picOrder,
							response: key,
							stimulus: n,
							images: test_images,
							image_condition: trial_types[n][0],
							text_condition: trial_types[n][1],
							correct: correct,
							rt: endTime - startTime
						}

						experiment.data.push(data)

						// clear everything
						$("#context1").html("").attr('class', 'defaultPic')
						$("#context2").html("").attr('class', 'defaultPic')
						$("#context3").html("").attr('class', 'defaultPic')
						$("#target").html("").attr('class', 'defaultPic')
						$("#questionText").html("")
						$("#instructionsText").html("")

						//reset pic ids
						$("#" + picOrder[0]).attr("id", "pic1")
						$("#" + picOrder[1]).attr("id", "pic2")
						$("#" + picOrder[2]).attr("id", "pic3")
						$("#" + picOrder[3]).attr("id", "pic4")


						setTimeout(experiment.next_trial, 500)
					}
				})
			}, 1000)
		}, 4000)
	},

	//Ask for background info and comments:
	background: function() {
		
		//undo spacebar disable
		window.onkeydown = function(e) {}

		$("#gender").trigger("reset")
		$("#age").trigger("reset")
		$("#language").trigger("reset")
		$("#aboutQ").trigger("reset")
		$("#commentQ").trigger("reset")
		showSlide("askInfo");

		$("#endButton").click(function() {
			var gen = $("input:radio[name=genderButton]:checked").val()
			var ag = $("#ageRange").val()
			var lan = $("#nativeLanguage").val()
			var about = $("#aboutQ").val()
			var comm = $("#commentQ").val()

			if (gen == "" | ag == "" | lan == "" | about == "") {
				alert("Please answer all of the questions")
			} else {
				experiment.gender = gen
				experiment.age = ag
				experiment.nativeLanguage = lan
				experiment.about = about
				experiment.comments = comm

				experiment.end()
			}
		})
	},

	// finish & submit results
	end: function() {

		showSlide("finished")

		setTimeout(function() {
			//No data collection in demo mode!
			//turk.submit(experiment)
		}, 1000)
	}
}