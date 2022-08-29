var myApp = angular.module("myApp", ['ngMessages']);

var myJobs = ["Software Engineer", "Full-Stack Web Developer", "iOS App Developer", "Game Developer"];
var myPics = ["shay.png", "shay2.png", "shay3.png", "shay4.png"];
var bubbleMessages = ["GitHub", "LinkedIn", "Instagram", "SoundCloud"];
var courseList = {
    "Computer Science": 
    [
    "CSE 3231: Software Engineering Techniques",
    "CSE 3461: Computer Networking and Internet Technologies",
    "CSE 3241: Database Systems",
    "CSE 3901: Design, Development, and Documentation of Web Applications",
    "CSE 2331: Data Structures and Algorithms",
    "CSE 2321: Discrete Mathematics and Structures",
    "CSE 2231: Software Development and Design",
    "CSE 2221: Software Components",
    "Advanced Placement Computer Science A"], 
    "Computer Engineering": 
    ["MATH 2568: Linear Algebra",
    "CSE 2431: Operating Systems",
    "CSE 2421: Low-Level Programming and Computer Organization",
    "ECE 2060: Digital Logic",
    "STAT 3470: Probability and Statistics for Engineers",
    "ENGR 1282H: Fundamentals of Engineering for Honors II",
    "ENGR 1281H: Fundamentals of Engineering for Honors I",
    "MATH 1172: Engineering Calculus II" ]
};

myApp.controller('mainController', ['$scope', '$interval',
function($scope, $interval) {
    $scope.job = "Aspiring " + myJobs[0];
    $scope.bubbleMessage = bubbleMessages[0];
    $scope.courseList = courseList;

    $scope.findCategory = function(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    };
    

    $scope.profilePicture = new Image(100, 100);
    $scope.profilePicture = "shay.png";
    console.log($scope.profilePicture);

    var index = 0;
    $interval(function changeJob() {
        index++;

        if (index == myJobs.length) {
            index = 0;
        }

        $scope.job = "Aspiring " + myJobs[index];
    }, 1300);

    var picIndex = 0;
    $interval(function changePic() {
        picIndex++;

        if (picIndex == myPics.length) {
            picIndex = 0;
        }

        $scope.profilePicture = myPics[picIndex];
        console.log(myPics[picIndex]);
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


