var htmlAddNewButton = '<label for="field3">    <span>Answer</span>    <input type="text" name="field3" required="true" />   </label>'
var arrayOfQuests = new Array


$(document).ready(function() {

    class questionnaire {
        constructor(name, question, answers, time, data) {
            this.name = name;
            this.question = question;
            this.answers = answers;
            this.time = time;
            this.data = data;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }

        check() {
            alert(this.name + " " + this.question + " " + this.answers + " " + this.time + " " + this.data);
        }

        dataString() {
            var dateTime = this.data.getDate() + "/" +
                (this.data.getMonth() + 1) + "/" +
                this.data.getFullYear() + " @ " +
                this.data.getHours() + ":" +
                this.data.getMinutes() + ":" +
                this.data.getSeconds();

            return (dateTime);
        }

        checkProgress() {
            var min = this.data.getMinutes();
            var hou = this.data.getHours();
            var fullTimeInMinutes = hou * 60 + min + this.time;

            var dateNow = new Date();
            var hoursNow = dateNow.getHours();
            var minutesNow = dateNow.getMinutes();
            var hoursM = hoursNow * 60 + minutesNow;

            if (fullTimeInMinutes > hoursM) {
                return (true);
            } else {
                return (false);
            }
        }

    }

    function adjust_textarea(h) {
        h.style.height = "30px";
        h.style.height = (h.scrollHeight) + "px";
    }

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
        var currentDate = new Date();
        condiction = (isNumeric(classTime));

        if (className.length != 0 && classQuestion.length != 0 && classAnswer.length != 0 && condiction === true) {
            var questionnaireClass = new questionnaire(className, classQuestion, classAnswer, classTime, currentDate);
            $(".questionnaireName").val(space);
            $(".questionnaireQuestion").val(space);
            $(".questionnaireAnswer").val(space);
            $(".questionnaireTime").val(space);
            arrayOfQuests.push(questionnaireClass);

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

    $('.btnNewQuest').on('click', function() {
        $(".inputsPossition").attr("style", "visibility: visible");
        $(".history").attr("style", "visibility: hidden");
    });

    $('.btnInProgress').on('click', function() {
        $(".inputsPossition").attr("style", "visibility: hidden");
        $(".history").attr("style", "visibility: visible");
        $('.theadClass').html(" ");

        var check = false;

        for (var i = 0; i < arrayOfQuests.length; i++) {
            var condiction = arrayOfQuests[i].checkProgress();
            if (condiction) {
                var table = '  <tr> <td><strong>' + arrayOfQuests[i].name + '</strong></td><td>' + arrayOfQuests[i].dataString() + ' || Duration: (' + arrayOfQuests[i].time + ')' + '</td><td>' + arrayOfQuests[i].question + '</td></tr>';
                $('.theadClass').append(table);
                check = true;
            }
        }
        if (check === false) {
            $('.theadClass').append('  <tr> <td><strong>No questionnaire in progress</strong></td><td>');
        }

    });

    $('.btnHistory').on('click', function() {
        $(".inputsPossition").attr("style", "visibility: hidden");
        $(".history").attr("style", "visibility: visible");
        $('.theadClass').html(" ");
        if (arrayOfQuests.length == 0) {
            $('.theadClass').append('  <tr> <td><strong>Nothing to show in history</strong></td><td>');
        } else {
            for (var i = 0; i < arrayOfQuests.length; i++) {
                var table = '  <tr> <td><strong>' + arrayOfQuests[i].name + '</strong></td><td>' + arrayOfQuests[i].dataString() + ' || Duration: (' + arrayOfQuests[i].time + 'min)' + '</td><td>' + arrayOfQuests[i].question + '</td></tr>';
                $('.theadClass').append(table);
            }
        }

    });

});
