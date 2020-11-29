
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
            url: "xml/products.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {
                $('#banner-text-container').empty()
                $('#autoWidth').empty()

                let htmlRep = '<img src="img/' + window.location.href.substring(window.location.href.lastIndexOf('#') + 1) + 'Banner.jpg">'
                $('#banner-text-container').append(htmlRep)

                $(xml).find("product").each(function () {
                    let category = $(this).find('category').text()
                    let species = $(this).find('species').text()
                    if (window.location.href.includes(category) && window.location.href.includes(species)) {
                        let name = $(this).find('name').text()
                        let img = $(this).find('img').text()
                        let price = $(this).find('price').text()
                        let id = $(this).find('id').text()
                        htmlRep =
                            '<li class="column">' +
                            '<div class="total">' +
                            '<div class="box">' +
                            '<div class="slider">' +
                            '<img src="' + img + '">' +
                            '</div>' +
                            '</div>' +
                            '<div>' +
                            '<span>' + name + '</span>' +
                            '<br>' +
                            '<span>Price:' + price + '$/u</span>' +
                            '<br>' +
                            '<button onclick="goToLink(' + id + ')">Details</button>' +
                            '<button onclick="window.location.assign(\'carrito.html\')">Add to cart</button>' +
                            '<br><br>' +
                            '</div>' +
                            '</div>' +
                            '</li>'
                        console.log(htmlRep)
                        $('#autoWidth').append(htmlRep);
                    }
                });
            }
        });
    }
});

function goToLink(id) {
    window.location.assign('ObjectPage.html#'+id);
}