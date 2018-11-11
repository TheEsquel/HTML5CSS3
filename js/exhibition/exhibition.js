class Exhibition {

    constructor(id){
        this.id = id;
    }

    render(key, objectJSON){    // генерируем  секции выставок

        //  забираем из переданного объекта все данные
        let sectionID = 'section'+ key,
            year = objectJSON.year,
            text = objectJSON.text,
            picture = objectJSON.pictures;

    // создаем элементы  секций
        let $exhibitionWrapper = $('#exhibitionWrapper');
    // сама секция
        let $exhibitionSection = $('<section />', {
           class: 'exhibitionSection'
        });
        $exhibitionSection.attr('id', sectionID);
    // год  выставки
        let $exhibitionYear = $('<span />', {
            text: year,
            class: "exhibitionYear"
        });
    // текст
        let $exhibitionText = $('<p />', {
           text: text,
           class: "exhibitionText"
        });
    //  создание изображения
        let $exhibitionPictures = $('<div />',{
           class: "exhibitionPictures"
        });
        for(key in picture){
            let urlPrev = picture[key].urlPrev;
            let $pictureElement = $('<img />',{
               src: urlPrev,
               class: "pictureItem",
               'data-id': key
            });

    //  навешиваем открытие всплывающей картинки
            $('.pictureItem').on('click', function () {
                let id = $(this).attr('data-id');
                console.log(key
                );
                let imageSrc = picture[id].url;
                $('body').append(`<div class="popup"><div class="popupBG"></div><img src="${imageSrc}" alt="" class="popupImage"></div>`)
                $('.popup').fadeIn(500);

            });

            $pictureElement.appendTo($exhibitionPictures);
        }

        //  выводим  элементы на страницу
        $exhibitionSection.append($exhibitionYear);
        $exhibitionSection.append($exhibitionText);
        $exhibitionSection.append($exhibitionPictures);
        $exhibitionSection.appendTo($exhibitionWrapper);

    }
}