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
                $('#customers').empty()
                let htmlRep =
                    '<tr>' +
                    '<th></th>' +
                    '<th>Name</th>'
                let aux = ""
                if(window.location.href.includes('historial')){
                    aux= "history";
                } else{
                    aux= "cart";
                }
                if(aux=="history"){
                    htmlRep+= '<th>Units</th>'
                } else {
                    htmlRep+= '<th>Quantity</th>'
                }
                htmlRep+='<th>Price</th>'
                if(aux=="history"){
                    htmlRep+= '<th>Date</th>'
                }
                htmlRep+=
                    '<th></th>' +
                    '</tr>'

                $(xml).find(aux).each(function () {
                    let name = $(this).find('name').text()
                    let price = $(this).find('price').text()
                    let image = $(this).find('img').text()
                    let date = "";
                    if(aux === "history") {
                        date = $(this).find('date').text()
                    }
                    let units = $(this).find('units').text()
                    let product = $(this).find('product').text()
                    let total = parseInt(price) * parseInt(units);
                    htmlRep +=
                        '<tr>' +
                        '<td><a href="ObjectPage.html#' + product + '"><img src=" ' + image + '"></a></td>' +
                        '<td>' + name + '</td>' +
                        '<td>' + units + '</td>' +
                        '<td>' + total + '$</td>'
                    if(aux === "history") {
                        htmlRep += '<td id="date">' + date + '</td>'
                    }
                        htmlRep +=
                            '<td><button onclick="goToLink(' + product + ')">Info</button></td>' +
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