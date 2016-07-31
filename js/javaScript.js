var htmlAddNewButton = '<label for="field3">    <span>Answer</span>    <input type="text" name="field3" required="true" />   </label>';

$(document).ready(function() {

    function adjust_textarea(h) {
        h.style.height = "30px";
        h.style.height = (h.scrollHeight) + "px";
    }

    $('.addAnserButton').on('click', function() {
        $('.newAnswer').after(htmlAddNewButton);
        alert("aaa");
    });

});
