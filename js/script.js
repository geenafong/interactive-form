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
    $("[name='express']").prop('disabled', 'true');
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
     $("[name='express']").removeAttr('disabled');
    }
 });
 $("input[name='express']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-frameworks']").prop('disabled', 'true');
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
     $("[name='js-frameworks']").removeAttr('disabled');
    }
 });
 $("input[name='js-libs']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='node']").prop('disabled', 'true');
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='node']").removeAttr('disabled');
    }
 });
 $("input[name='node']").click(function(){
  if($(this).is(":checked")){
    currentValue = currentValue + 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-libs']").prop('disabled', 'true');
  } else {
    currentValue = currentValue - 100;
    $(".activities p").text("Total: $ " + currentValue);
    $("[name='js-libs']").removeAttr('disabled');
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

  
 
    