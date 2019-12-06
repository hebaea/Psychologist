$(document).ready(function(){
    /* scroll to top*/
    $(function(){
      var scrollButton = $("#scroll-up");
      $(window).scroll(function(){
        $(this).scrollTop()>=500?scrollButton.show():scrollButton.hide();
      });
      scrollButton.click(function(){
        $("html,body").animate({scrollTop:0 },600);
      });
    });
    /*calculate text area*/
    $(function(){
      "use strict";
      var maxText = $('textarea').attr('maxlength') , ourMessage = $('.message');
      ourMessage.html('<span>'+ maxText + '</span> characters remaining.');
      $('textarea').keyup(function(){
        var textLength = $(this).val().length,
        remChars = maxText-textLength ;
        ourMessage.html('<span>'+ remChars +'</span> characters remaining.');
      });
                });

   /*say ok */
    function sayDone(){
        'use strict';
        alert("message was sent");
    }
    
    });

