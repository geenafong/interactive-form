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
const $shirtColor = $('#color').val();
const $shirtDes = $('#design').val();


// const $secureLinks = $('a[href^="https://"]'); -- selects all links with http (^starts with)
// $('input[name^="add"]')- returns any names that begin with "add"