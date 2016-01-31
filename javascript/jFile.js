/**
 * Created by Chewie on 1/29/2016.
 */

var the_return = (function() {

    var input_array = [];


    function add_to_array_displayscreen(x){
        input_array.push(x);
        document.getElementById('screen').innerHTML = x;

    }


    function calculate(){
        var value = input_array[0];

        for (var i = 1; i < input_array.length; i=i+2){
            switch (input_array[i]) {
                case '/':
                    value = value / input_array[i + 1];
                    break;
                case 'x':
                    value *= input_array[i + 1];
                    break;
                case '-':
                    value -= input_array[i + 1];
                    break;
                case '+':
                    value += input_array[i + 1];
                    break;
                case '=':
                    input_array = [];
                    document.getElementById('screen').innerHTML = value;
                    return value;
                default:
                    return null;
                    break;
            }

        }
        return value;
    }

    function some_function(){
        add_to_array_displayscreen('=');
        calculate();
    }

    return{
        value : some_function,
        display : add_to_array_displayscreen

    }



})();





