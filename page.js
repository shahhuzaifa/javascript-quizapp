var questions = [
  {
      question: "Q :What does the acronym HTML stand for? ",
      option1: "Hyper Text markup language",
      option2: "Hyper Link markup language",
      option3: "Hyper Text makeup language",
      correctAns: "Hyper Text markup language"
  },
  {
      question:"Q:  Which keyword is used to declare a variable in JavaScript? ",
      option1: "declare",
      option2:  "v",
      option3:  "var",
      correctAns: "var"
  },
  {
      question:"Q:   What is the purpose of the CSS property 'display: none;'?",
      option1:   " It makes the element semi-transparent",   
      option2: "It hides the element",
      ption3: "It adds a border to the element",
      correctAns: "It hides the element"
  },
  {
      question:"Q :Which Pakistani city is known as the City of Lights? ",
      option1: "Islamabad",
      option2: "Lahore",
      option3: "Karachi",
      correctAns: "Karachi"
  },
  {
      question: "Q: Pakistan shares its longest border with which neighboring country?",
      option1: "India",
      option2: "Afghanistan",
      option3: "China",
      correctAns: "India"
  },
  {
      question: "Q: Pakistan gained independence in which year? ",
      option1: "1945",
      option2: "1960",
      option3: "1947",
      correctAns: "1947"
  }
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("label1");
var opt2 = document.getElementById("label2");
var opt3 = document.getElementById("label3");


var button = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;

setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;

    if (sec < 0) {
        min--;
        sec = 59;

        // Check if time is completed and call nextQuestion
        if (min < 0) {
            min = 1;
            sec = 59;
            nextQuestion();
        }
    }
}, 1000);

function nextQuestion(){

    var getOptions = document.getElementsByName("options");

    for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            // console.log(selectedValue)
            var selectedQues = questions[index - 1]["question"];
            var selectedAns = questions[index-1][`option${selectedValue}`]
            var correctAns = questions[index - 1]["correctAns"]
            if(selectedAns == correctAns){
                score++
            }
        }
        getOptions[i].checked = false
    }

    button.disabled = true
    if (index > questions.length - 1) {
        var percentage = (score / questions.length) * 100;
        if (percentage >= 50) {
            Swal.fire(
                'Good job!',
                `Your percentage is ${percentage.toFixed(2)}`,
                'success'
            );
        } else {
            Swal.fire(
                'Oops!',
                `Try again. Your percentage is below 50 (${percentage.toFixed(2)})`,
                'error'
            );
        }
    } else {
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
   
   
}


function clicked() {
        
            
            button.disabled = false;
            
        }
        
       
