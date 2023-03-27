function ValidateEmail(input)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!input.value.match(mailformat))
    {
        input.setCustomValidity('You have entered an invalid email address!');
    }
    else
    {
        input.setCustomValidity('');
    }
}