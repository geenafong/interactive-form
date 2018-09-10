//set focus on the first text field
$(':input:enabled:visible:first').focus();

//"Job Role" section
//hide other job role section
$('#other-title').hide();
//when other is clicked, show the text box
$('#title').change(function(){
    if($(this).val() == "other"){
        $('#other-title').show();
    } else {
        $('#other-title').hide(); 
    }
});

//"T-Shirt Info" section
//select the t-shirt color element
const $shirtColor = $('#colors-js-puns');
const $shirtDes = $('#design');
//when the theme changes to JS PUNS, only the appropriate shirt colors show
$shirtColor.hide();
$shirtDes.change( function() {
    if ($('#design option:selected').text() === 'Theme - JS Puns') {
      $shirtColor.show();
      $('#color').val('cornflowerblue');
      $('#color option[value = cornflowerblue]').show();
      $('#color option[value = darkslategrey]').show();
      $('#color option[value = gold]').show();
      $('#color option[value = tomato]').hide();
      $('#color option[value = steelblue]').hide();
      $('#color option[value = dimgrey]').hide();
    //if SELECT THEME is selected, this function hides all of the shirt colors
    } else if ($('#design option:selected').text() === 'Select Theme') {
      $shirtColor.hide();
    }
  });
//when the theme changes to HEART JS, only the appropriate shirt colors show
$shirtDes.change( function() {
    if ($('#design option:selected').val() === 'heart js') {
     $shirtColor.show();
      $('#color').val('tomato');
      $('#color option[value = cornflowerblue]').hide();
      $('#color option[value = darkslategrey]').hide();
      $('#color option[value = gold]').hide();
      $('#color option[value = tomato]').show();
      $('#color option[value = steelblue]').show();
      $('#color option[value = dimgrey]').show();
    } 
  });

//Register for activities section
//Sets current value to 0 and appends a paragraph for the total to be added
let currentValue= 0;
$(".activities").append("<p></p>");

//For when JS FRAMEWORKS is checked
$("input[name='js-frameworks']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    //turns the time that conflicts to gray
    $("[name='express']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    //subtracts $100 from the total if JS FRAMEWORKS is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    //allows for the conflicting activity to be chosen if JS FRAMEWORKS is unselected
     $("[name='express']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });
 //For when EXPRESS is checked
 $("input[name='express']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    //turns the time that conflicts to gray
    $("[name='js-frameworks']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    //subtracts $100 from the total if EXPRESS is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    //allows for the conflicting activity to be chosen if EXPRESS is unselected
     $("[name='js-frameworks']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });

 //For when JS LIBS is checked
 $("input[name='js-libs']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    //turns the time that conflicts to gray
    $("[name='node']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    //subtracts $100 from the total if JS LIBS is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    //allows for the conflicting activity to be chosen if JS LIBS is unselected
    $("[name='node']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });

 //For when NODE is checked
 $("input[name='node']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    //turns the time that conflicts to gray
    $("[name='js-libs']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    //subtracts $100 from the total if NODE is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    //allows for the conflicting activity to be chosen if NODE is unselected
    $("[name='js-libs']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });

//To add the appropriate amount to total for those that are not conditional
//For when BUILD TOOLS is checked
$("input[name='build-tools']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    //subtracts $100 from the total if BUILD TOOLS is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    } 
  });
  //For when NPM is checked
  $("input[name='npm']").click(function(){
  if($(this).is(":checked")){
    //adds $100 to the total and updates the total
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    //subtracts $100 from the total if NPM is unselected
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    }
  });
  //For when MAIN is checked
  $("input[name='all']").click(function(){
    if($(this).is(":checked")){
    //adds $200 to the total and updates the total
    currentValue = currentValue + 200;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    //subtracts $200 from the total if MAIN is unselected
    currentValue = currentValue - 200;
    $(".activities p").text("Total: $ " + currentValue);
   }
  });
  
//  Payment Info
//Makes credit card the value that shows when the page is loaded while hiding all of the other info
$('#payment').val('credit card');
$("p").eq(1).hide();
$("p").eq(2).hide();
//When credit card is selected, show the credit card information and hides the bitcoin and paypal information
$('#payment').change(function(){
  if ($('#payment option:selected').val() === 'credit card'){
    $(".credit-card").show();
    $(".col-6 col").show();
    $(".col-3 col").show();
    $("#exp-month").show();
    $("#exp-year").show();
    $("p").eq(1).hide();
    $("p").eq(2).hide();
  }
});

//When paypal is selected, show the paypal information and hides the creditcard and bitcoin information
$('#payment').change(function(){
  if ($('#payment option:selected').val() === 'paypal'){
  $(".credit-card").hide();
  $(".col-6 col").hide();
  $(".col-3 col").hide();
  $("#exp-month").hide();
  $("#exp-year").hide();
  $("p").eq(1).show();
  $("p").eq(2).hide();
  }
});

//When bitcoin is selected, show the bitcoin information and hides the creditcard and paypal information
$('#payment').change(function(){
  if ($('#payment option:selected').val() === 'bitcoin'){
  $(".credit-card").hide();
  $(".col-6 col").hide();
  $(".col-3 col").hide();
  $("#exp-month").hide();
  $("#exp-year").hide();
  $("p").eq(1).hide();
  $("p").eq(2).show(); 
  }
});

//When Select Method is selected, hides all of the information
$('#payment').change(function(){
  if ($('#payment option:selected').val() === 'select_method'){
  $(".credit-card").hide();
  $(".col-6 col").hide();
  $(".col-3 col").hide();
  $("#exp-month").hide();
  $("#exp-year").hide();
  $("p").eq(1).hide();
  $("p").eq(2).hide();
  }
});

//Append spans to alert the user the reason why the form is not submitting
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("form").append("<span></span>");
$("#mail").prev().append("<p></p>");

//For the NAME input
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  $("#name:input").each(function(){
    if ($.trim($(this).val()).length == 0){
      //if this section is not filled out, the input field is highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      //the form is not submitted
      isFormValid = false;
      //enters a span at the bottom of the button stating why the form will not submit
      $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "block").css("color", "red");
  }
    else{
     //if fixed, the box is unhighlighted and error message is removed
     $(this).removeClass("highlight").css("border", "none");
     //("<span></span>").remove();
     $("form span:nth-of-type(1n)").text("Please enter your name.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
//For the EMAIL input
  $(".container").submit(function(){
    //variable to help check if the form can be submitted
    let isFormValid = true;
    $("#mail:input").each(function(){
        if ($.trim($(this).val()).length == 0){
            //if this section is not filled out, the input field is highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "block").css("color", "red");
        } else{
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("border", "none");
            //$("<span></span>").remove();
            $("form span:nth-of-type(2n)").text("Please enter a valid email.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});

//Only allows a valid EMAIL address to be entered
  $('#mail').keyup(function(){
    $('#mail').filter(function(){
    var email=$('#mail').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if( !emailReg.test( email ) ) {
      $("label p").text('Please enter a valid email.').css("display", "block").css("color", "red");
     } else {
      $("label p").text('Please enter a valid email.').css("display", "none");
     }
    });
  });
  
  //For the ACTIVITIES input
  $(".container").submit(function(){
    //variable to help check if the form can be submitted
    let isFormValid = true;
    $(".activities").each(function(){
        if ($(".activities input:checked").length < 1){
           //if this section is not checked, the name is highlighted
            $(this).addClass("highlight").css("display", "block").css('color', 'red');
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(3n)").text("Please choose at least one activity.").css("display", "block").css("color", "red");
        }
        else {
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("display", "block").css('color', 'black');
            //$("<span></span>").remove();
            $("form span:nth-of-type(3n)").text("Please choose at least one activity.").css("display", "none").css("color", "red");

        }
    });
    return isFormValid;
});
//For the CREDIT CARD NUMBER input
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  if ($('#payment option:eq(1)').is(':selected')){ 
  $("#cc-num:input").each(function(){
    if ($.trim($(this).val()).length < 13 || !$.isNumeric($(this).val())) {
        //if this section is not filled out with only 13-16 characters and is not a number, the input field is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        isFormValid = false;
        //enters a span at the bottom of the button stating why the form will not submit
        $("form span:nth-of-type(4n)").text("Please make sure your credit card number is at least 13 digits long.").css("display", "block").css("color", "red");
    } else if (($(this).val()).length > 16 || !$.isNumeric($(this).val())) {
      //if this section is not filled out with only 13-16 characters and is not a number, the input field is highlighted
      $(this).addClass("highlight").css("border", "1px solid red");
      isFormValid = false;
      //enters a span at the bottom of the button stating why the form will not submit
      $("form span:nth-of-type(4n)").text("Please make sure your credit card number is 16 or fewer digits long.").css("display", "block").css("color", "red");
  }
    else{
        //if fixed, the box is unhighlighted and error message is removed
        $(this).removeClass("highlight").css("border", "none");
        //$("<span></span>").remove();
        $("form span:nth-of-type(4n)").text("Please enter a valid credit card number. Make sure it is 13-16 digits long.").css("display", "none").css("color", "red");
    }
  });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //For the CREDIT CARD ZIP CODE input
    $(".container").submit(function(){
      //variable to help check if the form can be submitted
      let isFormValid = true;
      if ($('#payment option:eq(1)').is(':selected')){ 
    $("#zip:input").each(function(){
      if ($.trim($(this).val()).length < 5 || ($(this).val()).length > 5 || !$.isNumeric($(this).val())){
        //if this section is not filled out and is not 5 digits long, the input field is highlighted
        $(this).addClass("highlight").css("border", "1px solid red");
        //enters a span at the bottom of the button stating why the form will not submit
        $("form span:nth-of-type(5n)").text("Please enter a valid zip code.").css("display", "block").css("color", "red");
        isFormValid = false;
    } else{
        //if fixed, the box is unhighlighted and error message is removed
        $(this).removeClass("highlight").css("border", "none");
        //$("<span></span>").remove();
        $("form span:nth-of-type(5n)").text("Please enter a valid zip code.").css("display", "none").css("color", "red");
      }
    });
  } else {
    isFormValid = true;
  }
return isFormValid;
});
    //For the CREDIT CARD CVV input
    $(".container").submit(function(){
      //variable to help check if the form can be submitted
      let isFormValid = true;
      if ($('#payment option:eq(1)').is(':selected')){ 
        $("#cvv:input").each(function(){
          if ($.trim($(this).val()).length < 3 || ($(this).val()).length > 3 || !$.isNumeric($(this).val())){
            //if this section is not filled out and 3 digits long, the input field is highlighted
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
            //enters a span at the bottom of the button stating why the form will not submit
            $("form span:nth-of-type(6n)").text("Please enter a valid cvv.").css("display", "block").css("color", "red");
          } else {
            //if fixed, the box is unhighlighted and error message is removed
            $(this).removeClass("highlight").css("border", "none");
            //$("<span></span>").remove();
            $("form span:nth-of-type(6n)").text("Please enter a valid cvv.").css("display", "none").css("color", "red");
          }
        });
      } else {
        isFormValid = true;
      }
return isFormValid;
    });
//For the SELECT PAYMENT input(to not allow the page to submit if this is selected)
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
  if ($('#payment option:eq(0)').is(':selected')){ 
    $('#payment').addClass("highlight").css("border", "1px solid red");
    isFormValid = false;
    //enters a span at the bottom of the button stating why the form will not submit
    $("form span:nth-of-type(7n)").text("Please enter a source of payment.").css("display", "block").css("color", "red");
  } else {
     //if fixed, the box is unhighlighted and error message is removed
     $("form span:nth-of-type(7n)").text("Please enter a source of payment.").css("display", "none").css("color", "red");
     isFormValid = true;
  }
  return isFormValid;
});

//If the page is submitted and there is an error, and then the user changes his or her payment option, it deletes the previous information submitted
$(".container").submit(function(){
  //variable to help check if the form can be submitted
  let isFormValid = true;
    $('#payment').change(function(){
     $('#cvv:input').removeClass("highlight").css("border", "none");
     $('#zip:input').removeClass("highlight").css("border", "none");
     $('#cc-num:input').removeClass("highlight").css("border", "none");
     $('#payment').removeClass("highlight").css("border", "none");
     isFormValid = true;
  })
  return isFormValid;
});
 