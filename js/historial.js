$(document).ready(function() {
    var freq = 1000;
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
                $('#customers').empty()
                let htmlRep =
                    '<tr>' +
                    '<th></th>' +
                    '<th>Name</th>' +
                    '<th>Quantity</th>' +
                    '<th>Price</th>' +
                    '<th>Date</th>' +
                    '<th></th>' +
                    '</tr>'

                $(xml).find("history").each(function () {
                    let name = $(this).find('name').text()
                    let price = $(this).find('price').text()
                    let image = $(this).find('img').text()
                    let date = $(this).find('date').text()
                    let units = $(this).find('units').text()
                    let product = $(this).find('product').text()
                    let total = parseInt(price) * parseInt(units);
                    htmlRep +=
                        '<tr>' +
                        '<td><img src=" ' + image + '"></td>' +
                        '<td>' + name + '</td>' +
                        '<td>' + units + '</td>' +
                        '<td>' + total + '$</td>' +
                        '<td>' + date + '</td>' +
                        '<td><button onclick="goToLink('+product+')">Info</button></td>'+
                        '</tr>'

                });
                $('#customers').append(htmlRep);
            }
        });
    }
});

function goToLink(id) {
    window.location.assign('ObjectPage.html#'+id);
}