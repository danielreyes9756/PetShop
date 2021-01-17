$(document).ready(function() {
    let url = window.location.href;

    let id = url.substring(url.lastIndexOf('=') + 1);

    let freq = 1000000;
    function startAJAX(){
        setTimeout( function (){
                getJSONProfessionals();
                startAJAX();
            },
            freq
        );
    }
    getJSONProfessionals();
    startAJAX();
    function getJSONProfessionals() {

        $.ajax({
            url: "http://127.0.0.1:3000/get_professionals",
            success: function (professionals) {

                $('#marketing').empty()
                let htmlRep = '<div class="row">'
                let count = 0;
                professionals.forEach( function (professional){
                    count++;
                    if(count<4){
                        htmlRep += '<div class="col-lg-4">'+
                        '<img class="bd-placeholder-img rounded-circle" width="140" height="140" src="' + professional.image + '" preserveAspectRatio="xMidYMid slice" focusable="false">'+
                            '<h2>' + professional.name +'</h2>'+
                            '<p>' + professional.comment +'</p>'+
                            '</div>'
                    }
                });
                htmlRep += '</div>' +
                    '<hr class="featurette-divider">'

                $('#marketing').append(htmlRep);
            }
        });
    }
});