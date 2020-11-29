$(document).ready(function() {

    $.ajax({
        url: "xml/home-page.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            let htmlRep =
                '<ol class="carousel-indicators">'
            let aux="";
            if(window.location.href.includes("home")){
                aux="slider-home"
            } else {
                aux="slider-category"
            }
            let i =0;
            $(xml).find(aux).each(function () {
                let animal = $(this).find('animal').text()
                if((aux === "slider-category" &&  window.location.href.includes(animal)) || aux === "slider-home") {
                    if (i === 0) {
                        htmlRep += '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>'
                    } else {
                        htmlRep += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>'
                    }
                    i++
                }
            });

            htmlRep += '</ol>' +
                '<div class="carousel-inner">'
            i=0;

            $(xml).find(aux).each(function () {
                let img = $(this).find('img').text()
                //let id = $(this).find('id').text()
                let animal = $(this).find('animal').text()
                let link = $(this).find('link').text()
                let category = "";
                if(aux === "slider-category" ) category = $(this).find('category').text()
                console.log(window.location.href.includes(animal))
                if(category === "" || window.location.href.includes(animal)) {
                    if (i === 0) {
                        htmlRep += '<div class="carousel-item active">'
                    } else {
                        htmlRep += '<div class="carousel-item">'
                    }
                    if (aux === "slider-home") {
                        htmlRep += '<a href="' + link + '#' + animal + '"><img src="' + img + '" class="bd-placeholder-img" width="100%" height="100%"></a>'
                    } else {
                        htmlRep += '<a href="' + link + '#' + animal + '#' + category + '"><img src="' + img + '" class="bd-placeholder-img" width="100%" height="100%"></a>'
                    }
                    htmlRep += '</div>'
                    i++
                }
            });

            htmlRep +=
                '</div>'+
                '<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">' +
                '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span>' +
                '</a>' +
                '<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">' +
                '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>'
            console.log(htmlRep)
            $('#myCarousel').append(htmlRep);
        }
    });
});