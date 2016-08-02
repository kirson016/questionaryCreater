var htmlAddNewButton = '<label for="field3">    <span>Answer</span>    <input type="text" name="field3" required="true" />   </label>';
var arrayOfQuests = new Array


$(document).ready(function() {

    class questionnaire {
        constructor(name, question, answers) {
            this.name = name;
            this.question = question;
            this.answers = answers;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
        check() {
            alert(this.name + " " + this.question + " " + this.answers);
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
        var className = $(".questionnaireName").val();
        var classQuestion = $(".questionnaireQuestion").val();
        var classAnswer = $(".questionnaireAnswer").val();
        var space = " ";
        if (className != 0 || classQuestion != 0 || classAnswer != 0) {
          var questionnaireClass = new questionnaire(className, classQuestion, classAnswer);
            $(".questionnaireName").val(space);
            $(".questionnaireQuestion").val(space);
            $(".questionnaireAnswer").val(space);
            alert(questionnaireClass.name)
              arrayOfQuests.push(questionnaireClass);
        } else {
            alert("You need type something in input");
        }

    });

    $('.addAnserButton').on('click', function() {
        for (var i = 0; i < arrayOfQuests.length; i++) {
          var x = arrayOfQuests[i].name;
          alert(x + " " + arrayOfQuests[i].question + " " + arrayOfQuests[i].answers);
        }
    });

});
