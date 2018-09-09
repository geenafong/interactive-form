//set focus on the first text field
$(':input:enabled:visible:first').focus();

//"Job Role" section
//Add placeholder text of "Your Job Role" in "other-title"
$('#other-title').attr("placeholder", "Your Job Role");
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

    } else if ($('#design option:selected').text() === 'Select Theme') {
      $shirtColor.hide();
    }
  });
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

let currentValue= 0;
$(".activities").append("<p></p>");

//register for activities section
//statement to highlight “register for activities section” on select or click
//to add the appropriate amount to total for those that are conditional 
$("input[name='js-frameworks']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='express']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
     $("[name='express']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });
 $("input[name='express']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-frameworks']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
     $("[name='js-frameworks']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });
 $("input[name='js-libs']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='node']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='node']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });
 $("input[name='node']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-libs']").prop('disabled', 'true').parent().css({"color":"gray"});
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-libs']").removeAttr('disabled').parent().css({"color":"black"});
    }
 });

//to add the appropriate amount to total for those that are not conditional
 $("input[name='build-tools']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    } 
  });
  $("input[name='npm']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    }
  });
  $("input[name='all']").click(function(){
    if($(this).is(":checked")){
    currentValue = currentValue + 200;
    $(".activities p").text("Total: $ " + currentValue);
  } else {
    currentValue = currentValue - 200;
    $(".activities p").text("Total: $ " + currentValue);
   }
  });
  
//  Payment Info
$('#payment').val('credit card');
$("p").eq(1).hide();
$("p").eq(2).hide();

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

$(".container").append("<p></p>");
$(".container").submit(function(){
  let isFormValid = true;
  event.preventDefault();
  $("#name:input").each(function(){
    if ($.trim($(this).val()).length == 0){
    $(':button').attr('disabled', false);
    $(this).addClass("highlight").css("border", "1px solid red");
    isFormValid = false;
    $(".container p").text("Please enter your name.");
  }
    else{
     $(':button').attr('disabled',true);
     $(this).removeClass("highlight");
     $(this).css("border", "1px solid black");
        }
    });
    return isFormValid;
});


  $(".container").submit(function(){
    let isFormValid = true;
    event.preventDefault();
    $("#mail:input").each(function(){
        if ($.trim($(this).val()).length == 0){
            $(this).addClass("highlight").css("border", "1px solid red");
            isFormValid = false;
        } else{
            $(this).removeClass("highlight");
            $(this).css("border", "1px solid black");
        }
    });
    return isFormValid;
});

  $('#mail').focusout(function(){
    $('#mail').filter(function(){
    var email=$('#mail').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if( !emailReg.test( email ) ) {
     alert('Please enter a valid email.');
     } 
      })
    });
  

  $(".container").submit(function(){
    let isFormValid = true;
    event.preventDefault();
    $(".activities:input").each(function(){
        if ($(".activities").not(":checked")){
            $(this).addClass("highlight").css('color', 'red');
            isFormValid = false;
        }
        else{ 
            $(this).removeClass("highlight").css("color", "black");
        }
    });
    return isFormValid;
});

$(".container").submit(function(){
  let isFormValid = true;
  event.preventDefault();
  $("#cc-num:input").each(function(){
    if ($.trim($(this).val()).length < 13 || ($(this).val()).length > 19){
        $(this).addClass("highlight").css("border", "1px solid red");
        isFormValid = false;
    }
    else{
        $(this).removeClass("highlight");
        
    }
});
return isFormValid;
});
  
    $(".container").submit(function(){
      let isFormValid = true;
      event.preventDefault();
      if ($('#payment option:selected').val() === 'credit card'){ 
    $("#zip:input").each(function(){
      if ($.trim($(this).val()).length < 5 || ($(this).val()).length > 5){
        $(this).addClass("highlight").css("border", "1px solid red");
        
        isFormValid = false;
    } else{
        $(this).removeClass("highlight");
    }
  })
  }
return isFormValid;
});
  
    $(".container").submit(function(){
      let isFormValid = true;
      event.preventDefault();
      if ($('#payment option:selected').val() === 'credit card'){ 
    $("#cvv:input").each(function(){
      if ($.trim($(this).val()).length < 3 || ($(this).val()).length > 3){
        $(this).addClass("highlight").css("border", "1px solid red");
        isFormValid = false;
    }
    else{
        $(this).removeClass("highlight");
    }
  })
  }
return isFormValid;
});

