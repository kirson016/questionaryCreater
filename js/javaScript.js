var htmlAddNewButton = '<label for="field3">    <span>Answer</span>    <input type="text" name="field3" required="true" />   </label>';
var arrayOfQuests = new Array


$(document).ready(function() {

    class questionnaire {
        constructor(name, question, answers, time) {
            this.name = name;
            this.question = question;
            this.answers = answers;
            this.time = time;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
        check() {
            alert(this.name + " " + this.question + " " + this.answers + " " + this.time);
        }
    }

    function adjust_textarea(h) {
        h.style.height = "30px";
        h.style.height = (h.scrollHeight) + "px";
    }

    // $('.addAnserButton').on('click', function() {
    //     $('.newAnswer').after(htmlAddNewButton);
    // });

    $('.btnNewQuest').on('click', function() {
        $(".inputsPossition").css("visibility", "visible");
    });

    $('.createQuestionnaire').on('click', function() {
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        var className = $(".questionnaireName").val();
        var classQuestion = $(".questionnaireQuestion").val();
        var classAnswer = $(".questionnaireAnswer").val();
        var classTime = parseInt($(".questionnaireTime").val());
        var space = " ";
        condiction = (isNumeric(classTime));

        if (className.length != 0 && classQuestion.length != 0 && classAnswer.length != 0 && condiction === true) {
            var questionnaireClass = new questionnaire(className, classQuestion, classAnswer, classTime);
            $(".questionnaireName").val(space);
            $(".questionnaireQuestion").val(space);
            $(".questionnaireAnswer").val(space);
            $(".questionnaireTime").val(space);
            arrayOfQuests.push(questionnaireClass);

            var hours;
            var minutes;
            var date = function() {
                var currentDate = new Date();
                var dateTime = "Now: " + currentDate.getDate() + "/" +
                    (currentDate.getMonth() + 1) + "/" +
                    currentDate.getFullYear() + " @ " +
                    currentDate.getHours() + ":" +
                    currentDate.getMinutes() + ":" +
                    currentDate.getSeconds();
                hours = currentDate.getHours();
                minutes = currentDate.getMinutes();
                alert(dateTime);
            }
            var asd = function() {
                var hoursM = hours * 60 + minutes;
                var hoursMm = hours * 60 + minutes + classTime;
                



                var value = 3.25;
                var fractionalPart = last % 1;
                var integralPart = last - fractionalPart;



                alert(hoursM + " " + hoursMm + " " + last+" "+integralPart);
            }
            date();
            asd();


        } else {
            alert("You need type something in input or type number in Time input");
        }
    });

    $('.addAnserButton').on('click', function() {
        for (var i = 0; i < arrayOfQuests.length; i++) {
            var x = arrayOfQuests[i].name;
            alert(x + " " + arrayOfQuests[i].question + " " + arrayOfQuests[i].answers + " " + arrayOfQuests[i].time);
        }

    });

    // $('.btnNewQuest').on('click', function() {
    //     $(".inputsPossition").attr("style", "visibility: visible");
    //     $(".btnInProgress'").attr("style", "visibility: hidden");
    //     $(".btnHistory'").attr("style", "visibility: hidden");
    // });
    //
    // $('.btnInProgress').on('click', function() {
    //   $(".main-buttons").attr("style", "visibility: hidden");
    //   $(".btnInProgress'").attr("style", "visibility: visible");
    //   $(".btnHistory'").attr("style", "visibility: hidden")
    //
    // });
    //
    // $('.btnHistory').on('click', function() {
    //   $(".btnNewQuest").attr("style", "visibility: hidden");
    //   $(".btnInProgress'").attr("style", "visibility: hidden");
    //   $(".btnHistory'").attr("style", "visibility: visible")
    //
    // });

});
