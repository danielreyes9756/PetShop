
$(document).ready(function() {

    getXMLRacer();

    function getXMLRacer() {
        $.ajax({
            url: "xml/products.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $('#item').empty()
                $('#contenedor1').empty()
                $(xml).find("product").each(function () {
                    let id = $(this).find('id').text()
                    let name = $(this).find('name').text()
                    let description = $(this).find('description').text()
                    let img = $(this).find('img').text()
                    let price = $(this).find('price').text()
                    if(window.location.href.substring(window.location.href.lastIndexOf('#')+1) === id){
                        let htmlRep=
                            '<div class="polaroid"><img src="' + img + '">'+
                                '<div class="caption">' + price + '$/u</div>'+
                            '</div>'
                        $('#item').append(htmlRep);
                        htmlRep=
                            '<h3><strong class="w3-padding-32" style="font-size:3vw">' + name + '</strong></h3>' +
                            '<br>' +
                            '<p>' + description + '</p>' +
                            '<br>' +
                            '<label>Units: </label>\n' +
                            '<input class="unidades" type="number" name="">' +
                            '<br>' +
                            '<button>Buy</button>' +
                            '<br>'
                        $('#contenedor1').append(htmlRep);
                    }
                });
            }
        });
    }
});

