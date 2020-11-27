$(document).ready(function() {

    $.ajax({
        url: "xml/home-page.xml",
        cache: false,
        dataType: "xml",
        success: function (xml) {
            $('#myCarousel').empty()
            let htmlRep =
                '<ol class="carousel-indicators">'

            $(xml).find("id").each(function () {
                if(parseInt($(this).text())==0) {
                    htmlRep += '<li data-target="#myCarousel" data-slide-to="' + $(this).text() + '" class="active"></li>'
                } else{
                    htmlRep += '<li data-target="#myCarousel" data-slide-to="' + $(this).text() + '"></li>'
                }
            });


            htmlRep += '</ol>' +
                '<div class="carousel-inner">'

            $(xml).find("slider").each(function () {
                let img = $(this).find('img').text()
                let id = $(this).find('id').text()
                if(parseInt(id)==0) {
                    htmlRep += '<div class="carousel-item active">'
                } else {
                    htmlRep += '<div class="carousel-item">'
                }
                    htmlRep +=  '<a href="login.html#' + id + '"><img src="' + img + '" class="bd-placeholder-img" width="100%" height="100%"></a>' +
                                '</div>'

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
            $('#myCarousel').append(htmlRep);
        }
    });
});