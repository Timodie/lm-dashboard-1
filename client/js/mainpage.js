$('.dropdown-menu > li').click(function() {
    var $toggle = $(this).parent().siblings('.dropdown-toggle');
    $toggle.html("<div style="float:left">" + $(this).text() + "</div><div style="float:right"><span class="caret"></span></div>")
});
