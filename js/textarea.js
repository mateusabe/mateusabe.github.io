$(document).ready(function() {
    var text_max = 300;
    $('#textarea_feedback').html(text_max);

    $('#coments').keyup(function() {
        var text_length = $('#coments').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + '/' +text_length);
    });
});