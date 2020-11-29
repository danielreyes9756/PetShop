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
            url: "xml/historical.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $('#products').empty()
                let i = 0;
                let total=0;
                $(xml).find('cart').each(function () {
                    if($(this).find('users').text() === "1"){ //tmp cambiar por el ususario conectado SESSION o por querry
                        i++;
                    }
                })
                let htmlRep =
                    '<h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>' + i + '</b></span></h4>'
                $(xml).find('cart').each(function () {
                    let name = $(this).find('name').text()
                    let price = $(this).find('price').text()
                    let units = $(this).find('units').text()
                    let product = $(this).find('product').text()
                    let totalUnico = parseInt(price) * parseInt(units)
                    total = totalUnico + total
                    htmlRep =
                        '<p><a href="ObjectPage.html#'+ product + '">' + name + '</a>  x  ' + units +  '<span class="price">' + totalUnico + '$</span></p>'
                    $('#products').append(htmlRep);
                });
                htmlRep =
                    '<hr>'+
                    '<p>Total <span class="price" style="color:black"><b>' + total + '$</b></span></p>'
                $('#products').append(htmlRep);
            }
        });
    }
});

