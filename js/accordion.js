$(document).ready(function(){
    $(".accordion").click(function() {
        $(this).next().slideToggle("slow");

        var text = $(this).text();
        
        if (text.charAt(0) === "\u25B8")
        {
            text = "\u25BE " + text.substr(2);
        }
        else if (text.charAt(0) === "\u25BE")
        {
            text = "\u25B8 " + text.substr(2);
        }
        
        $(this).text(text);
    });
});