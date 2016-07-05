/**
 * Created by pankaj on 04/07/16.
 */
//product-details-div-4

$(document).ready(function(){

    url = 'http://localhost:5050/marketplaces/products/ids';
    var response_code = 'none';
    var list_products = 'none';

    $.getJSON('http://localhost:5050/marketplaces/products/ids/list', function(response_json){

        response_code = response_json['code'];
        list_products = response_json['data'];

        for (var i = 0; i < list_products.length; i++){
            if (i == 0){
                console.log(list_products[i]);
                $.getJSON('http://localhost:5050/marketplaces/product/id?id_product='+list_products[i], function(data){
                    console.log(data);
                    $('.products-list-div').html('<div>'+data['name']+'</div>');
                });
            }
            else {
                console.log(list_products[i]);
                $.getJSON('http://localhost:5050/marketplaces/product/id?id_product='+list_products[i], function(data){
                    console.log(data);
                    $('.products-list-div').append('<div>'+data['name']+'</div>');
                });
            }
        }
    });






    /*
    console.log(list_products);


    list_products = window.list_products;

    for (var i = 0; i < window.list_products.length; i++){
        if (i == 0){
            console.log(list_products[i]);
            $.getJSON('http://locahost:5050/marketplaces/product/id?id_product='+list_products[i], function(data){
                console.log(data);
                $('.products-list-div').html('<div>'+data['name']+'</div>');
            });
        }
        else {
            console.log(list_products[i]);
            $.getJSON('http://locahost:5050/marketplaces/product/id?id_product='+list_products[i], function(data){
                console.log(data);
                $('.products-list-div').html('<div>'+data['name']+'</div>');
            });
        }
    }


    $.getJSON('http://locahost:5050/marketplaces/product/id?id_product='+list_products[i], function(data){
        console.log(data);
    });
    */
    $.getJSON('http://localhost:5050/marketplaces/list', function(data) {
        var template = "<h1>{{num}} {{best}}</h1>Blog: {{best_url}}";
        var html = Mustache.render(template, data);
        console.log('get json called');
        $('.product-details-div-4').append(html);
    });

});