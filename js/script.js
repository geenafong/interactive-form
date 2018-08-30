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

$shirtDes.change( function() {
    if ($('#design option:selected').text() === 'Theme - JS Puns') {
      $shirtColor.show();
      $('#color option[value = cornflowerblue]').show();
      $('#color option[value = darkslategrey]').show();
      $('#color option[value = gold]').show();
      $('#color option[value = tomato]').hide();
      $('#color option[value = steelblue]').hide();
      $('#color option[value = dimgrey]').hide();

    } else {
      $('#color').val('tomato');
      $('#color option[value = cornflowerblue]').hide();
      $('#color option[value = darkslategrey]').hide();
      $('#color option[value = gold]').hide();
      $('#color option[value = tomato]').show();
      $('#color option[value = steelblue]').show();
      $('#color option[value = dimgrey]').show();
    }
  });

  $shirtDes.change( function() {
    if ($('#design option:selected').text() === 'Theme - I &#9829; JS') {
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

