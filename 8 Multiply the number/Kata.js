function multiply(number)
{
    var counter = 0;

    if(number >= 0)
        counter =("" + number).length;
    else
        counter =("" + number).length - 1;

    for(var i = 0; i < counter; i++)
        number = number * 5;

    return number
}
