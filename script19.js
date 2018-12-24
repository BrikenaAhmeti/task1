
$(document).ready(function() {
  $("form").submit(function (e) {
    //stop submit to check for inputs
    e.preventDefault();
     var name = $('#name').val();
    var zip = $('#zip').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var phone=$('#tel').val();
    var web=$('#web').val();
    var message=$('#message').val();
    var city=$('#city').val();


    var valid=true;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var phoneReg=/^[\+]\d{3} \d{3} \d{3}$/;
    $(".error").remove();
     
    if(name =='')
    {
       $('#name').after('<span class="error">This field is required</span>');
       valid=false;
    }
    else if(name.length>51)
    {
       $('#name').after('<span class="error">Maximum length is 50character</span>');
       valid=false;
    }
    else if(email=='')
    {
       $('#email').after('<span class="error">Email is required</span>');
       valid=false;
    }
    else if(!emailReg.test(email))
    {
       $('#email').after('<span class="error">Please write a valid Email </span>');
       valid=false;
    }
    else if(zip=='')
    {
       $('#zip').after('<span class="error">Zip code is required</span>');
       valid=false;
    }
    else if(!isNumeric(zip))
    {
       $('#zip').after('<span class="error">Zip code should contain numbers</span>');
       valid=false;
    }
    else if(zip.length<4 || zip.length>5)
    {
       $('#zip').after('<span class="error">Zip code length should be 4 or 5</span>');
       valid=false;
    }
    else if(city=='')
    {
       $('#city').after('<span class="error">City is required</span>');
       valid=false;
    }
    else if(city.length>15)
    {
       $('#city').after('<span class="error">City field max length is 15</span>');
       valid=false;
    }
    else if(phone=='')
    {
       $('#tel').after('<span class="error">Phone is required</span>');
       valid=false;
    }
    else if(!isNumeric(phone))
    {
       $('#tel').after('<span class="error">Phone field should contain numbers</span>');
       valid=false;
    }
    
});

});