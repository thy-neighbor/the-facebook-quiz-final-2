'use strict';

// Main Control Function used to activate all of the click functions
function mainFunction(){
  //Start
  renderStartPage();  //empties renders the first page
  startPageStartButton(); //onclick start quiz event 
  /********************************************************************/
  //Question
  questionPageSubmitButton();//question form submit button
  //questionPageUpdate();//update question page with next question
  //questionCountUpdate();// returns current question number
  //correctCountUpdate();//returns number of questions user got right
  //shuffleIndexArray();//randomize index array array full of number order
  //IDEA: for the first element of my global arrays, the value of current question will be kept
  //********************************************************************/

  //Feedback
  feedbackPageContinueButton();

  //Final
  finalPageRestartButton();

}
//JQuery initializer
$(mainFunction);

/*************************************************************************
 * START PAGE FUNCTIONS
 * 
 * renderStartPage() - renders the first page
 * 
 * startPageStartButton() - onClick event for start button, goes to first 
 *                          question by calling `questionPageUpdate()`
 * 
 * 
 * *************************************************************************/


function renderStartPage(){
  //console.log('`renderStartPage` ran');
  $('main').empty();
  $('main').html('      <!--START PAGE-->'+
      '<section class="start-page" role="region">'+
        '<div class="row">'+
          '<div class="col-12">'+
          '<h2>Welcome to the Facebook Social Marketing Quiz Challenge!!\n</h2>'+
          '<p>Note: Keep In mind that leaving a question blank is not allowed<p>'+
            '<form role="form" id="start-form">'+
              '<button class="start-button" type="submit">Start Quiz</button>'+
            '</form>'+
          '</div>'+
        '</div>'+
      '</section>');
}
//$("main").on('submit','.question-form',
function startPageStartButton(){
  $('main').on('submit','#start-form',function(event){
    event.preventDefault();
    //console.log('`StartPageButton` Clicccccckkkkkeedd');
    //now we load the first question with
    questionPageUpdate();
  });
}

/******************************************************************************
* QUESTIONS PAGE 

global var:
      quesArray[]  -[0,{question},{answers[{choice},{correct}]}];
                -first element is the correct answers number

      indexArray[]  -first element is the question number,other:holding the number order
                     array is for random question order implementation

Functions:
      shuffleArrayIndex() - shuffles index array for different order every restart

      questionPageUpdate() - updates questions, increments question number by 
                             calling questionCountUpdate()

      questionCountUpdate() - adds 1 to the first element of index array

      correctCountUpdate()  - adds 1 to the first element of question array

      questionPageSubmitButton() - retrieves answer and implements the feedback 
                                   page using renderFeedbackPage(), increments
                                   correct count if correct else vice versa
* *****************************************************************************
* */

const indexArray=[0,1,2,3,4,5,6,7,8,9,10];  //first element is count
const quesArray=[0,
//question 1//////////////////////////////////////
{question:'What is the name for Facebook\'s ranking algorithm?', answers:[{choice:'Like Rank',correct:'false'},{choice:'Face Rank',correct:'false'},{choice:'Page Rank',correct:'false'},{choice:'Edge Rank',correct:'true'}]},
//question 2//////////////////////////////////////////
{question:"Which of the following is NOT considered in Facebook's engagement metric?", answers:[{choice:'Share',correct:false},{choice:'Comments',correct:false},{choice:'Likes',correct:false},{choice:'Views',correct:true}]},
//question 3//////////////////////////////////////
{question:"True or False? Auto-posting to Facebook has been shown to decrease likes and comments by?", answers:[{choice:'20%',correct:false},{choice:'45%',correct:false},{choice:'60%',correct:false},{choice:'70%',correct:true}]},
//question 4////////////////////////////////////////
{question:"What is the accepted ratio of content & engagement to sales messages?", answers:[{choice:'50-50',correct:false},{choice:'25-75',correct:false},{choice:'80-20',correct:true},{choice:'20-80',correct:false}]},
//question 5////////////////////////////////////////
{question:'In "Page Insights", the "Total Reach" metric stands for:', answers:[{choice:'The number of unique people who are friends with your fans, including your current fans',correct:false},{choice:'The number of unique users who have encountered any content associated with your page (including ads or sponsored stories pointing to your page) in the last seven days',correct:true},{choice:'The number of unique users who have encountered any content associated with your page since its launch',correct:false},{choice:'The number of unique users who have encountered any content associated with your page (not including ads or sponsored stories pointing to your page) in the last month',correct:false}]},
//question 6 //////////////////////////////////////
{question:"How are Facebook ads paid for?", answers:[{choice:'Keyword bids',correct:false},{choice:'Demographic bids',correct:false},{choice:'Cost-per-like',correct:false},{choice:'CPC & CPM',correct:true}]},
//question 7 ////////////////////////////////////
{question:"What's 'frequency' a measurement of?", answers:[{choice:'The amount of people your ad reaches',correct:false},{choice:'The amount of times a Facebook user sees your individual ad',correct:true},{choice:'The amount of people that share your ad',correct:false},{choice:'Another word for impressions',correct:false}]},
//question 8//////////////////////////////////////
{question:"What does CTR stand for?", answers:[{choice:'Client/Thought Relation',correct:false},{choice:'Click Through Rate',correct:true},{choice:'Cost Times Response',correct:false},{choice:'Cost Through Recession',correct:false}]},
//question 9 ////////////////////////////////////
{question:"What does NFO stand for?", answers:[{choice:'Network/Feed Organization',correct:false},{choice:'Novel Feature Orientation',correct:false},{choice:'News Feed Optimization',correct:true},{choice:'Cost Through Recession',correct:false}]},
//question 10 ////////////////////////////////////
{question:"What search revolutionizing feature has Facebook recently released?", answers:[{choice:'Graph Search',correct:true},{choice:'Edge Search',correct:false},{choice:'Friend Search',correct:false},{choice:'Glass Door Search',correct:false}]},

];


//randomize index array array full of number order
function shuffleIndexArray(){
// extra not needed but implement this later

}

function questionPageUpdate(){
  
  let correctCount=quesArray[0];
  let quesCount=questionCountUpdate();
  let currQues; //current question in array
  currQues=quesArray[indexArray[indexArray[0]]]; //returns the random question using random index array
  let theQuestion=currQues.question;
  //answers
  let theAnswers=currQues.answers;
  let aZero=theAnswers[0];
  let aOne=theAnswers[1];
  let aTwo=theAnswers[2];
  let aThree=theAnswers[3];
  //for loop through answers
/*
  if(quesCount===1){
    shuffleIndexArray();
  }
 */ 

  $('main').empty();
  $('main').html('<!--QUESTION PAGE-->'+
      '<section class="Question-body" role="region">'+
        '<div class="row">'+
          '<div class="col-12">'+
            '<form class="question-form" role="form" >'+
              '<fieldset>'+
              '<legend>'+
                '<h2>'+
                  '<span class="js-question-count">Question <span '+ 'class="js-question-number">'+`${quesCount}`+'</span> of 10</span>'+
                '</h2>'+
                '</legend>'+
                '<h3 class="js-question-ask">'+`${theQuestion}`+'</h3>'+
                '<ul class="radio">'+
                '<li>'+
                '<label class="js-color-shade" for="'+`${aZero.choice}`+'">'+
                '<input class="answer" type="radio" name="choice" value="'+`${aZero.correct}`+'" required/>'+`${aZero.choice}`+'</label>'+
                '<br>'+
                '</li>'+
                '<li>'+
                '<label class="js-color-shade" for="'+`${aOne.choice}`+'">'+
                '<input class="answer" type="radio" name="choice" value="'+`${aOne.correct}`+'"/>'+`${aOne.choice}`+'</label>'+
                '<br>'+
                '</li>'+
                '<li>'+
                '<label class="js-color-shade" for="'+`${aTwo.choice}`+'">'+
                '<input class="answer" type="radio" name="choice" value="'+`${aTwo.correct}`+'"/>'+`${aTwo.choice}`+'</label>'+
                '<br>'+
                '</li>'+
                '<li>'+
                '<label class="js-color-shade" for="'+`${aThree.choice}`+'">'+
                '<input class="answer" type="radio" name="choice" value="'+`${aThree.correct}`+'"/>'+`${aThree.choice}`+'</label>'+
                '<br>'+
                '</li>'+
                '</ul>'+
                '<button type="submit">Submit</button>'+
              '</fieldset>'+
            '</form>'+
            '<span class="js-correct-count">Correct: <span '+ 'class="js-number-correct">'+`${correctCount}`+'</span> of 10</span>'+
          '</div>'+
        '</div>'+
      '</section>');
}


// returns current question number
function questionCountUpdate(){
  let count=indexArray[0]+1;
  indexArray[0]=count;

  if(count<0||count>10){
    console.log('`questionCountUpdate` failed');
    return -1;
  }

  return(count);

}

//correctCountUpdate();//returns number of questions user got right
function correctCountUpdate(){
  let count=quesArray[0]+1;
  quesArray[0]=count;

  if(count<0||count>10){
    console.log('`correctCountUpdate` failed');
    return -1;
  }

  return(count);
}

//questionPageSubmitButton();//question form submit button
function questionPageSubmitButton(){
  $("main").on('submit','.question-form','button',function(event){
    event.preventDefault();
    console.log('`questionPageSubmitButton` ran');
    //console.log($(this).html());

    let radios=$(".answer:checked");
    let userSelected=$(".answer:checked").parent();
    //
    //console.log($(radios).val());
    
/*
    $(".js-color-shade").addClass('red');
    $('.answer[value="true"]').parent().removeClass('red');
    $('.answer[value="true"]').parent().addClass('green');
*/
    //$("this:.").addClass('red');
    //console.log($(this).html());
    
    if($(radios).val()==='true'){
      renderFeedbackPage(true,$(this).children().children(),userSelected); 
      quesArray[0]=quesArray[0]+1;  //increment correct value
    }
    else{
      renderFeedbackPage(false,$(this).children().children());
    }   
  
  });

}

/*************************************************************************************
* FEEDBACK PAGE FUNCTIONS

Functions()
    renderFeedbackPage(Bool,Form Element,userSelected)- takes bool= true if user answer is correct
                                          pass in submission form from onlick form event
                                          pass in user choice
                                          renders feedback page
    
      feedbackPageContinueButton() - onClick submission event calls questionPageUpdate() to
                                     render next question, if at end of quiz renders final page 

* *********************************************************************************************
* */

function renderFeedbackPage(correctBool,clickedFieldset,userSelected){
  let correctAnswer=$('.answer[value="true"]').parent().text();

  //console.log(`${clickedFieldset}`);

  $('main').empty();

  if(correctBool===true){
    $('main').html('<div class="row">'+
          '<div class="col-12"><h2>You chose the <span class="js-selection-right-or-wrong green ">CORRECT</span> answer</h2>'+'<h2 class="green bottom-border">Correct Answer: '+`${correctAnswer}`+'</h2></div></div>');

  }else if(correctBool===false){
    $('main').html('<div class="row">'+
          '<div class="col-12"><h2>You chose the <span class="js-selection-right-or-wrong red ">WRONG</span> answer</h2>'+'<h2 class="green bottom-border">Correct Answer: '+`${correctAnswer}`+'</h2></div></div>');

  }else{
    console.log('`renderFeedbackPage` Bool Error')
  }


  $('main div.col-12').append(clickedFieldset);
  
  $(".js-color-shade").addClass('red');
  $('.answer[value="true"]').parent().removeClass('red');
  $('.answer[value="true"]').parent().addClass('green');
  $('main button').remove();

  //console.log($('.answer[value="true"]').parent().text());

  $('main .col-12').append(' <p class="bottom-border"></p><form role="form" id="feedback-form">'+
          '<button class="continue-button" type="submit"> Continue </button>'+
        '</form>');

  
 // $('main').append('</div></div>');
  //console.log($('main').html());
  
}

function feedbackPageContinueButton(){
  $("main").on('submit','#feedback-form', function(event){
    event.preventDefault();
    //console.log('`feedbackPageContinueButton` ran');
    if(indexArray[0]===10){
      renderFinalPage();
      console.log('`RenderFinalPage` here');
    }else{
      questionPageUpdate();
    }
    
  });
}

/**********************************************************************************
* FINAL PAGE FUNCTIONS

Functions()
    renderFinalPage() - renders final page with correct answers number

    finalPageRestartButton() - onClick submission event to restart quiz, reloads
                               webpage

* *******************************************************************************/
function renderFinalPage(){

  
  $('main').empty();
  $('main').html('      <!--FINAL PAGE-->'+
      '<section class="final-page" role="region">'+
        '<div class="row">'+
          '<div class="col-12">'+
            '<h2>You are done with the Quiz!!!<br>'+'<br>'+
              '<span>Correct: <span'+ '>'+`${quesArray[0]}`+'</span> of 10</span>'+
            '</h2>'+
            '<form class="final-form" role="form">'+
              '<button class="final-reset-button" type="submit">Restart</button>'+
            '</form>'+
          '</div>'+
        '</div>'+
      '</section>');
}

function finalPageRestartButton(){
  $('main').on('submit','.final-form',function(event){
    event.preventDefault();
    //console.log('`finalPageRestartButton` ran');
    //location.reload(); //restarts
    quesArray[0]=0;
    indexArray[0]=0;
    questionPageUpdate();
  });
}