// Завдання: Зробити меню (потрібна взаємодія з користувачем, зробити меню яке буде опитувати за допомогою prompt вікна (prompt треба зробити parseInt бо він завжди повертає string)) в TS.
// Створити інтерфейс IFlat.
// У нас має бути class Flat  який буде імплементовувати інтерфейс IFlat
// Тре зробити вивід на екран всіх квартири (printFlat).
// Робимо масив квартир.
// IFlat:
// 1. Floor – field поле
// 2. neighbordsInfo = method – інфо про сусідів
var Flat = /** @class */ (function () {
    function Flat(floor, numberOfRooms, totalArea, dateOfConstraction, region, price, neighbors, description) {
        this.Floor = floor;
        this.NumberOfRooms = numberOfRooms;
        this.TotalArea = totalArea;
        this.DateOfConstraction = dateOfConstraction;
        this.Region = region;
        this.Price = price;
        this.Neighbors = neighbors;
        this.Description = description;
    }
    Flat.prototype.printFlat = function () {
        document.write("Floor: " + this.Floor + ", Number of Rooms: " + this.NumberOfRooms + ", Total Area: " + this.TotalArea + " sq.m., Date of Constraction: " + this.DateOfConstraction + ", Region: " + this.Region + ", Price: " + this.Price + " $ <br>");
    };
    Flat.prototype.neighbordsInfo = function () {
        document.write("Neighbors: " + this.Neighbors + " <br>");
    };
    Flat.prototype.getDescription = function () {
        document.write("Description: " + this.Description + " <br><hr>");
    };
    return Flat;
}());
var flat1 = new Flat(19, 3, 65, '23rd of May 2015', "Center", 67000, "Neighbors very qwiet", "Nice view from the bedroom window on the park");
var flat2 = new Flat(4, 5, 90, '15th of November 2018', "South", 150000, "Neighbors are amazing", "Perfect apartment for family of 5 people");
var flat3 = new Flat(8, 4, 70, '1st of July 2017', "East", 107000, "Neighbors never at home", "Located in the Royal compound");
var flat4 = new Flat(1, 1, 35, '2nd of September 2019', "Center", 50000, "Neighbors very qwiet", "Amazing studio for 1 person or couple");
var flat5 = new Flat(10, 2, 58, '1st of July 2017', "South", 63000, "Neighbors really crazy", "Great flat for newborn family");
var arr = [flat1, flat2, flat3, flat4, flat5];
// add new flat
var btn = document.querySelector('.add');
btn.addEventListener('click', function () {
    var floor = parseInt(prompt("Please enter floor"));
    var numberOfRooms = parseInt(prompt("Please enter number of rooms"));
    var totalArea = parseInt(prompt("Please enter total area."));
    var dateOfConstraction = prompt("Please enter the date of constraction.");
    var region = prompt("Please enter region.");
    var price = parseInt(prompt("Please enter the price in $"));
    var neighbors = prompt("Please enter info about neighbors");
    var description = prompt("Please enter flat's description");
    var addflat = new Flat(floor, numberOfRooms, totalArea, dateOfConstraction, region, price, neighbors, description);
    arr.forEach(function (flat) {
        flat.printFlat();
        flat.neighbordsInfo();
        flat.getDescription();
    });
    arr.push(addflat);
    addflat.printFlat();
    addflat.neighbordsInfo();
    addflat.getDescription();
    // console.log(arr);
});
// filter btn by Region
var btnFilter = document.querySelector('.filter');
btnFilter.addEventListener("click", function () {
    var filterByRegion = prompt("Please enter the region you like to check flats:\n1-Center\n2-South\n3-East");
    if (filterByRegion == "1") {
        var Center = arr.filter(function (e) {
            return e.Region == "Center";
        });
        // console.log(Center);
        Center.forEach(function (flat) {
            flat.printFlat();
            flat.neighbordsInfo();
            flat.getDescription();
        });
    }
    else if (filterByRegion == "2") {
        var South = arr.filter(function (e) {
            return e.Region == "South";
        });
        // console.log(Center);
        South.forEach(function (flat) {
            flat.printFlat();
            flat.neighbordsInfo();
            flat.getDescription();
        });
    }
    else if (filterByRegion == "3") {
        var East = arr.filter(function (e) {
            return e.Region == "East";
        });
        // console.log(Center);
        East.forEach(function (flat) {
            flat.printFlat();
            flat.neighbordsInfo();
            flat.getDescription();
        });
    }
});
// filter btn by Price
var btnFilterUpDown = document.querySelector('.filter_by_price');
btnFilterUpDown.addEventListener("click", function () {
    var filterByPrice = prompt("Choose how you like to see flat's price:\n1-from Up to Down\n2-from Down to Up");
    if (filterByPrice == "1") {
        var priceUp = arr.sort(function (a, b) {
            if (a.Price > b.Price)
                return -1;
            else if (a.Price < b.Price)
                return 1;
            else
                return 0;
        });
        //     console.log(priceUp);
        priceUp.forEach(function (flat) {
            flat.printFlat();
            flat.neighbordsInfo();
            flat.getDescription();
        });
    }
    else if (filterByPrice == "2") {
        var priceDown = arr.sort(function (a, b) {
            if (a.Price < b.Price)
                return -1;
            else if (a.Price > b.Price)
                return 1;
            else
                return 0;
        });
        //     console.log(priceUp);
        priceDown.forEach(function (flat) {
            flat.printFlat();
            flat.neighbordsInfo();
            flat.getDescription();
        });
    }
});
var FlatBlock = /** @class */ (function () {
    function FlatBlock(arr) {
        var _this = this;
        this.flatDescriptionBlock = function () {
            var container = document.querySelector('.container');
            var box = document.createElement('div');
            box.classList.add('box');
            var h2 = document.createElement('h2');
            h2.textContent = "All Flats";
            var flatInfo = document.createElement('div');
            for (var i = 0; i < _this.Flats.length; i++) {
                flatInfo.innerHTML += "<div>Region: " + _this.Flats[i].Region + ";  Floor: " + _this.Flats[i].Floor + ";  Number of Rooms: " + _this.Flats[i].NumberOfRooms + ";  Total Area: " + _this.Flats[i].TotalArea + "sq.m.;  Date of Constraction: " + _this.Flats[i].DateOfConstraction + ";  Price: " + _this.Flats[i].Price + " $ \n            <p class=\"none\" id=\"description\"> Description: " + _this.Flats[i].Description + "</p>\n            <p>Neighbors: " + _this.Flats[i].Neighbors + "</p>\n\n            </div><hr>";
            }
            box.insertAdjacentElement('beforeend', h2);
            box.insertAdjacentElement('beforeend', flatInfo);
            container.insertAdjacentElement('beforeend', box);
        };
        this.Flats = arr;
    }
    return FlatBlock;
}());
var flatGenInfo = new FlatBlock(arr);
flatGenInfo.flatDescriptionBlock();
