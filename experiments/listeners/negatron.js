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
preloading("images/apples_context1_item.jpg","images/apples_context1_nothing.jpg","images/apples_context2_item.jpg","images/apples_context2_nothing.jpg","images/apples_context3_item.jpg","images/apples_context3_nothing.jpg","images/apples_item.jpg","images/apples_nothing.jpg","images/balloons_context1_item.jpg","images/balloons_context1_nothing.jpg","images/balloons_context2_item.jpg","images/balloons_context2_nothing.jpg","images/balloons_context3_item.jpg","images/balloons_context3_nothing.jpg","images/balloons_item.jpg","images/balloons_nothing.jpg","images/bananas_context1_item.jpg","images/bananas_context1_nothing.jpg","images/bananas_context2_item.jpg","images/bananas_context2_nothing.jpg","images/bananas_context3_item.jpg","images/bananas_context3_nothing.jpg","images/bananas_item.jpg","images/bananas_nothing.jpg","images/beach balls_item.jpg","images/beach balls_nothing.jpg","images/bears_item.jpg","images/bears_nothing.jpg","images/bird.png","images/blanket_contextC.jpg","images/blanket_contextL.jpg","images/blanket_contextR.jpg","images/blanket_item.jpg","images/boat.png","images/book_contextC.jpg","images/book_contextL.jpg","images/book_contextR.jpg","images/book_item.jpg","images/bows_context1_item.jpg","images/bows_context1_nothing.jpg","images/bows_context2_item.jpg","images/bows_context2_nothing.jpg","images/bows_context3_item.jpg","images/bows_context3_nothing.jpg","images/bows_item.jpg","images/bows_nothing.jpg","images/broccoli.png","images/buckets_context1_item.jpg","images/buckets_context1_nothing.jpg","images/buckets_context2_item.jpg","images/buckets_context2_nothing.jpg","images/buckets_context3_item.jpg","images/buckets_context3_nothing.jpg","images/buckets_item.jpg","images/buckets_nothing.jpg","images/bunny.png","images/bus.png","images/cakes_context1_item.jpg","images/cakes_context1_nothing.jpg","images/cakes_context2_item.jpg","images/cakes_context2_nothing.jpg","images/cakes_context3_item.jpg","images/cakes_context3_nothing.jpg","images/cakes_item.jpg","images/cakes_nothing.jpg","images/carrots_context1_item.jpg","images/carrots_context1_nothing.jpg","images/carrots_context2_item.jpg","images/carrots_context2_nothing.jpg","images/carrots_context3_item.jpg","images/carrots_context3_nothing.jpg","images/carrots_item.jpg","images/carrots_nothing.jpg","images/cars_context1_item.jpg","images/cars_context1_nothing.jpg","images/cars_context2_item.jpg","images/cars_context2_nothing.jpg","images/cars_context3_item.jpg","images/cars_context3_nothing.jpg","images/cars_item.jpg","images/cars_nothing.jpg","images/cats_context1_item.jpg","images/cats_context1_nothing.jpg","images/cats_context2_item.jpg","images/cats_context2_nothing.jpg","images/cats_context3_item.jpg","images/cats_context3_nothing.jpg","images/cats_item.jpg","images/cats_nothing.jpg","images/collar_contextC.jpg","images/collar_contextL.jpg","images/collar_contextR.jpg","images/collar_item.jpg","images/cookies_context1_item.jpg","images/cookies_context1_nothing.jpg","images/cookies_context2_item.jpg","images/cookies_context2_nothing.jpg","images/cookies_context3_item.jpg","images/cookies_context3_nothing.jpg","images/cookies_item.jpg","images/cookies_nothing.jpg","images/cow.png","images/crayons_context1_item.jpg","images/crayons_context1_nothing.jpg","images/crayons_context2_item.jpg","images/crayons_context2_nothing.jpg","images/crayons_context3_item.jpg","images/crayons_context3_nothing.jpg","images/crayons_item.jpg","images/crayons_nothing.jpg","images/cup.png","images/daisies_context1_item.jpg","images/daisies_context1_nothing.jpg","images/daisies_context2_item.jpg","images/daisies_context2_nothing.jpg","images/daisies_context3_item.jpg","images/daisies_context3_nothing.jpg","images/daisies_item.jpg","images/daisies_nothing.jpg","images/dogs_context1_item.jpg","images/dogs_context1_nothing.jpg","images/dogs_context2_item.jpg","images/dogs_context2_nothing.jpg","images/dogs_context3_item.jpg","images/dogs_context3_nothing.jpg","images/dogs_item.jpg","images/dogs_nothing.jpg","images/donuts_context1_item.jpg","images/donuts_context1_nothing.jpg","images/donuts_context2_item.jpg","images/donuts_context2_nothing.jpg","images/donuts_context3_item.jpg","images/donuts_context3_nothing.jpg","images/donuts_item.jpg","images/donuts_nothing.jpg","images/dress_contextC.jpg","images/dress_contextL.jpg","images/dress_contextR.jpg","images/dress_item.jpg","images/elephant.png","images/fish_context1_item.jpg","images/fish_context1_nothing.jpg","images/fish_context2_item.jpg","images/fish_context2_nothing.jpg","images/fish_context3_item.jpg","images/fish_context3_nothing.jpg","images/fish_item.jpg","images/fish_nothing.jpg","images/flowers_context1_item.jpg","images/flowers_context1_nothing.jpg","images/flowers_context2_item.jpg","images/flowers_context2_nothing.jpg","images/flowers_context3_item.jpg","images/flowers_context3_nothing.jpg","images/flowers_item.jpg","images/flowers_nothing.jpg","images/forks_context1_item.jpg","images/forks_context1_nothing.jpg","images/forks_context2_item.jpg","images/forks_context2_nothing.jpg","images/forks_context3_item.jpg","images/forks_context3_nothing.jpg","images/forks_item.jpg","images/forks_nothing.jpg","images/guitars_context1_item.jpg","images/guitars_context1_nothing.jpg","images/guitars_context2_item.jpg","images/guitars_context2_nothing.jpg","images/guitars_context3_item.jpg","images/guitars_context3_nothing.jpg","images/guitars_item.jpg","images/guitars_nothing.jpg","images/hat_contextC.jpg","images/hat_contextL.jpg","images/hat_contextR.jpg","images/hat_item.jpg","images/house_contextC.jpg","images/house_contextL.jpg","images/house_contextR.jpg","images/house_item.jpg","images/ice cream cones_context1_item.jpg","images/ice cream cones_context1_nothing.jpg","images/ice cream cones_context2_item.jpg","images/ice cream cones_context2_nothing.jpg","images/ice cream cones_context3_item.jpg","images/ice cream cones_context3_nothing.jpg","images/ice cream cones_item.jpg","images/ice cream cones_nothing.jpg","images/keys_context1_item.jpg","images/keys_context1_nothing.jpg","images/keys_context2_item.jpg","images/keys_context2_nothing.jpg","images/keys_context3_item.jpg","images/keys_context3_nothing.jpg","images/keys_item.jpg","images/keys_nothing.jpg","images/kites_context1_item.jpg","images/kites_context1_nothing.jpg","images/kites_context2_item.jpg","images/kites_context2_nothing.jpg","images/kites_context3_item.jpg","images/kites_context3_nothing.jpg","images/kites_item.jpg","images/kites_nothing.jpg","images/list.txt","images/lollipops_context1_item.jpg","images/lollipops_context1_nothing.jpg","images/lollipops_context2_item.jpg","images/lollipops_context2_nothing.jpg","images/lollipops_context3_item.jpg","images/lollipops_context3_nothing.jpg","images/lollipops_item.jpg","images/lollipops_nothing.jpg","images/mittens_context1_item.jpg","images/mittens_context1_nothing.jpg","images/mittens_context2_item.jpg","images/mittens_context2_nothing.jpg","images/mittens_context3_item.jpg","images/mittens_context3_nothing.jpg","images/mittens_item.jpg","images/mittens_nothing.jpg","images/oranges_context1_nothing.jpg","images/oranges_context2_nothing.jpg","images/oranges_context3_nothing.jpg","images/oranges_item.jpg","images/oranges_nothing.jpg","images/pencils_context1_item.jpg","images/pencils_context1_nothing.jpg","images/pencils_context2_item.jpg","images/pencils_context2_nothing.jpg","images/pencils_context3_item.jpg","images/pencils_context3_nothing.jpg","images/pencils_item.jpg","images/pencils_nothing.jpg","images/phones_context1_item.jpg","images/phones_context1_nothing.jpg","images/phones_context2_item.jpg","images/phones_context2_nothing.jpg","images/phones_context3_item.jpg","images/phones_context3_nothing.jpg","images/phones_item.jpg","images/phones_nothing.jpg","images/pictures_item.jpg","images/pictures_nothing.jpg","images/pie slices_item.jpg","images/pie slices_nothing.jpg","images/pieces of pizza_item.jpg","images/pieces of pizza_nothing.jpg","images/plants_context1_item.jpg","images/plants_context1_nothing.jpg","images/plants_context2_item.jpg","images/plants_context2_nothing.jpg","images/plants_context3_item.jpg","images/plants_context3_nothing.jpg","images/plants_item.jpg","images/plants_nothing.jpg","images/presents_context1_item.jpg","images/presents_context1_nothing.jpg","images/presents_context2_item.jpg","images/presents_context2_nothing.jpg","images/presents_context3_item.jpg","images/presents_context3_nothing.jpg","images/presents_item.jpg","images/presents_nothing.jpg","images/purses_context1_item.jpg","images/purses_context1_nothing.jpg","images/purses_context2_item.jpg","images/purses_context2_nothing.jpg","images/purses_context3_item.jpg","images/purses_context3_nothing.jpg","images/purses_item.jpg","images/purses_nothing.jpg","images/rainboots_context1_item.jpg","images/rainboots_context1_nothing.jpg","images/rainboots_context2_item.jpg","images/rainboots_context2_nothing.jpg","images/rainboots_context3_item.jpg","images/rainboots_context3_nothing.jpg","images/rainboots_item.jpg","images/rainboots_nothing.jpg","images/sandwiches_item.jpg","images/sandwiches_nothing.jpg","images/scissors_context1_item.jpg","images/scissors_context1_nothing.jpg","images/scissors_context2_item.jpg","images/scissors_context2_nothing.jpg","images/scissors_context3_item.jpg","images/scissors_context3_nothing.jpg","images/scissors_item.jpg","images/scissors_nothing.jpg","images/shovels_context1_item.jpg","images/shovels_context1_nothing.jpg","images/shovels_context2_item.jpg","images/shovels_context2_nothing.jpg","images/shovels_context3_item.jpg","images/shovels_context3_nothing.jpg","images/shovels_item.jpg","images/shovels_nothing.jpg","images/spots_alternate.jpg","images/spots_contextC.jpg","images/spots_contextL.jpg","images/spots_contextR.jpg","images/spots_item.jpg","images/stanford.png","images/sweater_alternate.jpg","images/sweater_contextC.jpg","images/sweater_contextL.jpg","images/sweater_contextR.jpg","images/sweater_item.jpg","images/truck.png","images/umbrellas_context1_item.jpg","images/umbrellas_context1_nothing.jpg","images/umbrellas_context2_item.jpg","images/umbrellas_context2_nothing.jpg","images/umbrellas_context3_item.jpg","images/umbrellas_context3_nothing.jpg","images/umbrellas_item.jpg","images/umbrellas_nothing.jpg")

// --------------- PARAMETERS OF THE EXPERIMENT ----------------
var practiceItems = ["boat", "cup", "broccoli", "bunny", "elephant", "bus", "cow", "bird"]
var practiceQuestion = ["This is a boat.", "This is a spoon.", "This is a banana.", "This is a bunny.", "This is a giraffe.", "This is a bus.", "This is a cow.", "This is a whale."]

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
$("#startButton").attr("disabled", true);

if (turk.previewMode != true) {
	$("#pleaseWait").html("Please wait...");
	$(window).load(function() {
		$("#startButton").attr("disabled", false);
		$("#pleaseWait").html("")
	})
}

var experiment = {
	version: "comprehension",
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

		//shuffle the order that pictures appear in the array
		var picOrder = shuffle(["context1", "context2", "context3", "target"])
		$("#pic1").attr("id", picOrder[0])
		$("#pic2").attr("id", picOrder[1])
		$("#pic3").attr("id", picOrder[2])
		$("#pic4").attr("id", picOrder[3])

		showSlide("stage")

		//pictures appear
		$("#context1").html('<img src=\"images/' + practiceItems[n] + '.png\"><p align=\"center\"> </p>')
		$("#context2").html('<img src=\"images/' + practiceItems[n] + '.png\"><p align=\"center\"> </p>')
		$("#context3").html('<img src=\"images/' + practiceItems[n] + '.png\"><p align=\"center\"> </p>')
		$("#target").html('<img src=\"images/' + practiceItems[n] + '.png\"><p align=\"center\"> </p>')

		var practiceQuestion_start = "Look at these pictures! "
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
				var practiceQuestion_text = practiceQuestion[n]
				$("#questionText").html(makeQuestionText(practiceQuestion_text))
				$("#instructionsText").html("(Press Q for FALSE and P for TRUE)")

				//press P or Q to continue; show alert if incorrect
				var already_movedon = 0
				if (practiceItems[n] == "cup" || practiceItems[n] == "broccoli" || practiceItems[n] == "elephant" || practiceItems[n] == "bird") {
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
			$("#context1").html(makeLinkIm(items[n] + "_context1_nothing", ""))
			$("#context2").html(makeLinkIm(items[n] + "_context2_nothing", ""))
			$("#context3").html(makeLinkIm(items[n] + "_context3_nothing", ""))
		} else if (cond == 1) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_context1_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_context2_nothing", ""))
			$("#context3").html(makeLinkIm(items[n] + "_context3_nothing", ""))
		} else if (cond == 2) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_context1_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_context2_item", ""))
			$("#context3").html(makeLinkIm(items[n] + "_context3_nothing", ""))
		} else if (cond == 3) {
			showSlide("stage")
			$("#context1").html(makeLinkIm(items[n] + "_context1_item", ""))
			$("#context2").html(makeLinkIm(items[n] + "_context2_item", ""))
			$("#context3").html(makeLinkIm(items[n] + "_context3_item", ""))
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
			turk.submit(experiment)
		}, 1000)
	}
}