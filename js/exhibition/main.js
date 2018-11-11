$(function () {
   //  получил  секцию  для вступления
   let $exhibitionTextsElements = $('.exhibitionText');

   // аяксом берем текст из txt
    $.ajax({

        type: 'get',
        url: './json/exhibition.json',
        dataType: 'json',
        context: this,
        success: function (data) {
            for(key in data){
            let $exhibition = new Exhibition(key);
                $exhibition.render(key, data[key]);
            }
        },
        error: function (error) {
            console.log(error);
        }

    });


    
});