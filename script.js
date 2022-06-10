var myApp = angular.module("myApp", ['ngMessages']);

var myJobs = ["Software Developer", "Full-Stack Web Developer", "iOS App Developer", "Game Developer"];
var bubbleMessages = ["GitHub", "LinkedIn", "Instagram", "SoundCloud"];
var courseList = {
    Algorhithms: 
    ["CSE 2331: Data Structures and Algorithms",
    "CSE 2321: Discrete Mathematics and Structures",
    "STAT 3470: Introduction to Probability and Statistics for Engineers"], 
    Programming: 
    ["CSE 3901: Project: Design, Development & Documentation of Web Applications",
    "CSE 2421: Introduction to Low-Level Programming & Computer Organization",
    "CSE 2231: Software Development and Design",
    "CSE 2221: Software Components"],
    Engineering:
    ["ENGR 2367: American Attitudes About Technology",
    "ENGR 1282H: Fundamentals of Engineering for Honors 2",
    "ENGR 1281H: Fundamentals of Engineering for Honors 1"],
    Hardware: 
    ["CSE 2431: Introduction to Operating Systems",
    "ECE 2060: Introduction to Digital Logic"]
};

myApp.controller('mainController', ['$scope', '$interval',
function($scope, $interval) {
    $scope.job = "Aspiring " + myJobs[0];
    $scope.bubbleMessage = bubbleMessages[0];
    $scope.courseList = courseList;

    $scope.findCategory = function(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    };

    var index = 0;
    $interval(function changeJob() {
        index++;

        if (index == myJobs.length) {
            index = 0;
        }

        $scope.job = "Aspiring " + myJobs[index];
    }, 1300);

    $interval(function changeBubbleMessage() {
        index++;

        if (index == bubbleMessages.length) {
            index = 0;
        }

        $scope.bubbleMessage = bubbleMessages[index];
    }, 1800);
}]);

function func(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: "smooth"});
}


// gets the whole function as string
console.log(x.toString());

// gets parameter
console.log(angular.injector().annotate(x));