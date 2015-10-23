var count_elements = 3,
    current_element = 0,
    width = $("#steps").width(),
    height = 400,
    duration = 500;

var screen1 = $('#screen1');

screen1.width(width * count_elements);

function move_screen1 (x) {
    current_element = (current_element + x) % count_elements;
    if (current_element < 0) {current_element += count_elements;}
    console.log(current_element);
    screen1.animate({
        marginLeft: - width * current_element
    }, duration);
}

var screen2 = $('#screen2');

screen2.width(width * count_elements);

function move_screen2 (x) {
    current_element = (current_element + x) % count_elements;
    if (current_element < 0) {current_element += count_elements;}
    console.log(current_element);
    screen2.animate({
        marginLeft: - width * current_element
    }, duration);
}

var screen3 = $('#screen3');

screen3.width(width * count_elements);

function move_screen3 (x) {
    current_element = (current_element + x) % count_elements;
    if (current_element < 0) {current_element += count_elements;}
    console.log(current_element);
    screen3.animate({
        marginLeft: - width * current_element
    }, duration);
}

$("#prev1").click(function () {
    move_screen1(-1);
})

$("#next1").click(function () {
    move_screen1(1);
})

$("#prev2").click(function () {
    move_screen2(-1);
})

$("#next2").click(function () {
    move_screen2(1);
})

$("#prev3").click(function () {
    move_screen3(-1);
})

$("#next3").click(function () {
    move_screen3(1);
})