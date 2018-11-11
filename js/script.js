window.onload = readTextFile;

function readTextFile (){
    var textFile = new XMLHttpRequest();
    console.log(textFile);
    textFile.open('GET', '../text/intro.txt' , false);
    console.log(textFile.responseText);
    // textFile.onreadystatechange = function () {
    //     if (textFile.readyState === 4){
    //         if (textFile.status === 200 ||  textFile.readyState === 8){
    //             var allText = textFile.responseText;
    //             console.log(allText);
    //         }
    //     }
    // }


}

