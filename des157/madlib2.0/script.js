(function () {
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        processData(formData);
    });



    function processData(formData) {
        var emptyFields = 0;
        const words = [];
        for (var eachWord of formData) {
            if (eachWord.value) {
                words.push(eachWord.value);
                eachWord.value = "";
            } else {
                emptyFields++;
            }
        }
        if (emptyFields > 0) {
            madlib.innerHTML = 'Please fill out the fields!!';
        } else {
            makeMadlib(words);
        }
    }

    function makeMadlib(wordsArray) {
        const myText = `${wordsArray[0]}, the ${wordsArray[1]} and
        ${wordsArray[2]} cat was ${wordsArray[3]} on a ${wordsArray[4]} day with a ${wordsArray[5]}`;

        madlib.innerHTML = myText;
    }

})();