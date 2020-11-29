$(document).ready(function() {
    var freq = 10000;
    function startAJAX(){
        setTimeout( function (){

                getXMLRacer();
                startAJAX();
            },
            freq
        );
    }
    getXMLRacer();
    startAJAX();
    function getXMLRacer() {
        $.ajax({
            url: "xml/rather.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {

                $('#opinions').empty()
                let htmlRep=
                    '<br>' +
                    '<h3><strong class="w3-padding-32" style="font-size:3vw">Opiniones</strong></h3>'

                $('#opinions').append(htmlRep);
                $(xml).find("user-rather").each(function () {
                    let product = $(this).find('product').text()
                    let name = $(this).find('name').text()
                    let commentary = $(this).find('commentary').text()
                    let starts = $(this).find('starts').text()

                    if(window.location.href.substring(window.location.href.lastIndexOf('#')+1) === product){

                        htmlRep=
                            '<hr>' +
                            '<p>' + name + '</p>' +
                            '<img src="' + starts + '" style= "width: 150px">' +
                            '<br>' +
                            '<br>' +
                            '<p>' + commentary + '</p>'
                        console.log(htmlRep)
                        $('#opinions').append(htmlRep);
                    }
                });
            }
        });
    }
});

