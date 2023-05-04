// add items to the "Add Items" tab

$(document).ready(function () {
    var items = [
        {
            "name": "Closed Door",
            "image": "models/thumbnails/door_closed.png",
            "model": "models/js/closed-door28x80_baked.js",
            "type": "7"
        },
        {
            "name": "Open Door",
            "image": "models/thumbnails/door_open.png",
            "model": "models/js/open_door.js",
            "type": "7"
        },
        {
            "name": "Window",
            "image": "models/thumbnails/window.png",
            "model": "models/js/whitewindow.js",
            "type": "3"
        },
        {
            "name": "Chair",
            "image": "models/thumbnails/chair.jpg",
            "model": "models/js/gus-churchchair-whiteoak.js",
            "type": "1"
        },
        {
            "name": "Red Chair",
            "image": "models/thumbnails/chair_red.png",
            "model": "models/js/ik-ekero-orange_baked.js",
            "type": "1"
        },
        {
            "name": "Blue Chair",
            "image": "models/thumbnails/chair_blue.png",
            "model": "models/js/ik-ekero-blue_baked.js",
            "type": "1"
        },
        {
            "name": "Shelf",
            "image": "models/thumbnails/shelf.png",
            "model": "models/js/DWR_MATERA_DRESSER2.js",
            "type": "1"
        },
        {
            "name": "Storage",
            "image": "models/thumbnails/storage.jpg",
            "model": "models/js/we-narrow6white_baked.js",
            "type": "1"
        },
        {
            "name": "Bookshelf",
            "image": "models/thumbnails/bookcase.jpg",
            "model": "models/js/cb-kendallbookcasewalnut_baked.js",
            "type": "1"
        },
        {
            "name": "Media Console",
            "image": "models/thumbnails/media.jpg",
            "model": "models/js/cb-clapboard_baked.js",
            "type": "1"
        },
        {
            "name": "Sofa",
            "image": "models/thumbnails/sofa.jpg",
            "model": "models/js/cb-rochelle-gray_baked.js",
            "type": "1"
        },
        {
            "name": "Wooden Trunk",
            "image": "models/thumbnails/trunk.jpg",
            "model": "models/js/cb-tecs_baked.js",
            "type": "1"
        },
        {
            "name": "Floor Lamp",
            "image": "models/thumbnails/lamp.png",
            "model": "models/js/ore-3legged-white_baked.js",
            "type": "1"
        },
        {
            "name": "Coffee Table",
            "image": "models/thumbnails/table_coffee.JPG",
            "model": "models/js/ik-stockholmcoffee-brown.js",
            "type": "1"
        },
        {
            "name": "Side Table",
            "image": "models/thumbnails/table_side.png",
            "model": "models/js/GUSossingtonendtable.js",
            "type": "1"
        },
        {
            "name": "Round Table",
            "image": "models/thumbnails/table_rnd.jpg",
            "model": "models/js/cb-scholartable_baked.js",
            "type": "1"
        },
        {
            "name": "Meeting Table",
            "image": "models/thumbnails/table_rec.png",
            "model": "models/js/BlakeAvenuejoshuatreecheftable.js",
            "type": "1"
        },
        {
            "name": "Poster",
            "image": "models/thumbnails/poster.jpg",
            "model": "models/js/nyc-poster2.js",
            "type": "2"
        },
        {
            "name": "Man",
            "image": "models/thumbnails/man.png",
            "model": "models/js/man.js",
            "type": "1"
        },
        {
            "name": "Woman",
            "image": "models/thumbnails/woman.png",
            "model": "models/js/woman.js",
            "type": "1"
        },
        {
            "name": "Camera",
            "image": "models/thumbnails/camera.png",
            "model": "models/js/camera.js",
            "type": "1"
        },
        {
            "name": "Podium",
            "image": "models/thumbnails/podium.png",
            "model": "models/js/podium.js",
            "type": "1"
        },
        {
            "name": "Array of Chairs (8)",
            "image": "models/thumbnails/arr8.png",
            "model": "models/js/arr8.js",
            "type": "1"
        },
        {
            "name": "Array of Chairs (14)",
            "image": "models/thumbnails/arr14.png",
            "model": "models/js/arr14.js",
            "type": "1"
        },
        /*        {
                   "name" : "",
                   "image" : "models/thumbnails/",
                   "model" : "models/json/",
                   "type" : "1"
                 },
        */
        {
            "name": "Rug",
            "image": "models/thumbnails/rug.png",
            "model": "models/js/cb-blue-block-60x96.js",
            "type": "8"
        }
        /*
        {
           "name" : "",
           "image" : "",
           "model" : "",
           "type" : "1"
         },
         */
    ]

    var itemsDiv = $("#items-wrapper")
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var html = '<div class="col-sm-4">' +
            '<a class="thumbnail add-item" model-name="' +
            item.name +
            '" model-url="' +
            item.model +
            '" model-type="' +
            item.type +
            '"><img src="' +
            item.image +
            '" alt="Add Item"> ' +
            item.name +
            '</a></div>';
        itemsDiv.append(html);
    }
});