/**
 * Created by Chewie on 1/29/2016.
 */

var the_return = (function() {

    var input_array = [];
    var value_array = [];
    var holder = '';


    function add_to_array_displayscreen(x){
        input_array = [];

        for (var i = 0; i < input_array.length; i++) {
            switch (x) {
                case '/':
                case 'x':
                case '-':
                case '+':
                    input_array.push(x);
                    document.getElementById('screen').innerHTML = x;
                    break;
                case '=':
                    input_array.push(x);
                    document.getElementById('screen').innerHTML = x;
                    calculate();
                    break;
                default:

                    input_array.push(x);

                    input_array.forEach(function () {

                    });

                    document.getElementById('screen').innerHTML = x;
                    break;
            }
        }



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
                    holder +=x;
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





