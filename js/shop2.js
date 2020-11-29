$(document).ready(function() {

        $.ajax({
            url: "xml/products.xml",
            cache: false,
            dataType: "xml",
            success: function (xml) {

                $('#banner-text-container').empty()
                $('#autoWidth').empty()
                let htmlRep = '<img src="img/FoodBanner.jpg">'
                console.log("hola")
                $('#banner-text-container').append(htmlRep)
            }});});