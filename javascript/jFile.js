/**
 * Created by Chewie on 1/29/2016.
 */

var the_return = (function() {

    var input_array = [];
    var holder = '';


    function add_to_array_displayscreen(x){

        switch (x) {
            case '/':
            case 'x':
            case '-':
            case '+':
                input_array.push(holder);
                holder = '';
                input_array.push(x);
                document.getElementById('screen').innerHTML =x;
                break;
            case '=':
                input_array.push(holder);
                holder = '';
                input_array.push(x);
                document.getElementById('screen').innerHTML =x;
                break;
            default:
                holder += x;
                document.getElementById('screen').innerHTML = holder;
                break;
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
                    document.getElementById('screen').innerHTML = value;
                    input_array = [];
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

    function clear(){
        holder = holder.substring(0, holder.length -1);
        document.getElementById('screen').innerHTML = holder;
    }

    function all_clear(){
        holder = "";
        input_array = [];

        document.getElementById('screen').innerHTML = '0';

    }

    return{
        value : some_function,
        display : add_to_array_displayscreen,
        clear: clear,
        all_clear: all_clear

    }



})();





