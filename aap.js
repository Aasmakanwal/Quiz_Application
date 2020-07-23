
var questions = [
    {
      id: 1,
      question: "Who is the founder of Pakistan?",
      answer: "Quaid Azam M.Ali Jinnah",
      options: [
        "Allama Iqbal",
        "Sir Syed Ahmed Khan",
        "Quaid Azam M.Ali Jinnah",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the color of Bnana?",
      answer: "Yellow",
      options: [
        "White",
        "Yellow",
        "Red",
        "Orange"
      ]
    },
    {
      id: 3,
      question: "Urdu was declared national language of Pakistan in:",
      answer: "April 1954",
      options: [
        "April 1950",
        "April 1955",
        "April 1954",
        "April 1952"
      ]
    },
    {
      id: 4,
      question: " Word Urdu means:",
      answer: "Army",
      options: [
        " Believers",
        "A group of students",
        "Army",
        "None of these"
      ]
    },
    {
      id: 5,
      question: "“Sassi Punun” is a love story of:",
      answer: " Sindhi",
      options: [
        "Punjabi",
        "Pushto",
        "Sindhi",
        "Siraiki"
      ]
    },
    {
      id: 6,
      question: "What is the color of Bnana?",
      answer: "Yellow",
      options: [
        "White",
        "Yellow",
        "Red",
        "Orange"
      ]
    },
    {
      id: 7,
      question: "When was the national anthem of Pakistan first played?",
      answer: "13th August 1954",
      options: [
        "14th August 1948",
        "13th August 1954",
        "14th August 1950",
        "23rd March 1949"
      ]
    },
    {
      id: 8,
      question: "“Heer Ranjha” is a love story of:",
      answer: "punjabi",
      options: [
        "Punjabi",
        "Pushto",
        "Sindhi",
        "Siraiki"
      ]
    },
    {
      id: 8,
      question: "How many words are in national anthem?",
      answer: "50",
      options: [
        "16",
        "37",
        "50",
        "67"
      ]
    },
    {
      id: 10,
      question: "Pick out the major Kharif crop in the following:",
      answer: "Cotton",
      options: [
        "Wheat",
        "Barley",
        "Gram",
        "Cotton"
      ]
    }
  ];

 var question_count = 0;

  
  window.onload = function() {
    show(question_count);
  
  };
  function submitForm(e){
    e.preventDefault()
    var nameInput = document.getElementById("input").value
    var userName = document.getElementById("user-name")
    
    if(nameInput == ""){
      alert("Enter your name!")
    }else {
      userName.innerHTML = nameInput
    
   
    var main1 = document.getElementById("main1")
    main1.setAttribute("class" , "hide")
    var main2 = document.getElementById("main2")
    main2.classList.remove("hide")
    var name = document.getElementById("name")
    var set = name.innerHTML = nameInput;
    interval = setInterval(timer, 10)
}
}

var points = 0
  function next() {
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      clearInterval(interval);
      if (points <= 30){
        var main2 = document.getElementById("main2")
        main2.setAttribute("class" , "hide")
        var main4 = document.getElementById("main4")
        main4.classList.remove("hide")
        var userPoint = document.getElementById("point")
        userPoint.innerHTML = points
        var time = document.getElementById("time-taken")
        time.innerHTML = min +" minutes " + sec + " seconds "
      }else {
    
      var main2 = document.getElementById("main2")
      main2.setAttribute("class" , "hide")
      var main3 = document.getElementById("main3")
      main3.classList.remove("hide")
        // user marks
        var userPoint = document.getElementById("point")
       userPoint.innerHTML = points
       var time = document.getElementById("time-taken")
       time.innerHTML = min +" minutes " + sec + " seconds "

      }
      

    }
    var user_answer = document.querySelector("li.options.active")
    // console.log(user_answer)
    user_answer = user_answer.innerHTML
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10
    }
    console.log(points)
  
    question_count++;
    show(question_count);
  }
 

  // Quiz
  function show(count) {
    var question = document.getElementById("quiz-question");
    var [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="options">${first}</li>
    <li class="options">${second}</li>
    <li class="options">${third}</li>
    <li class="options">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.options");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }


// //   TIMER
var sec = 0;
var min = 0;  
var msec = 0;
var minspan = document.getElementById("min")
var secspan = document.getElementById("sec")
var interval;
var formatSec = sec <10 ? `0${sec}`: `${sec}` 
var formatMin = min < 10 ? `0${min}`: `${min}`

function timer(){
    msec++
    if (msec >= 100){
        sec++
        msec = 0 
    }else if (sec >=60){
        min++
        sec = 0 
    }
    var formatSec = sec <10 ? `0${sec}`: `${sec}` 
    var formatMin = min < 10 ? `0${min}`: `${min}`
    document.querySelector("span#min").innerHTML = `${formatMin}`;
    document.querySelector("span#sec").innerHTML = `  ${formatSec}`
}