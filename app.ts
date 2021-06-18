// Завдання: Зробити меню (потрібна взаємодія з користувачем, зробити меню яке буде опитувати за допомогою prompt вікна (prompt треба зробити parseInt бо він завжди повертає string)) в TS.
// Створити інтерфейс IFlat.
// У нас має бути class Flat  який буде імплементовувати інтерфейс IFlat
// Тре зробити вивід на екран всіх квартири (printFlat).
// Робимо масив квартир.
// IFlat:
// 1. Floor – field поле
// 2. neighbordsInfo = method – інфо про сусідів

// class Flat : IFlat
// 1. Этажность
// 2. Количество комнат
// 3. Общая площадь
// 4. Дата будівництва
// 5. Район
// 6. Ціна
// Функція- Вивести інформацію про квартиру
// Функція - Опис квартири

// Зробити масив квартир
// Вивести на екран всі квартири.

// Задачі які тре зробити:
// = Додавання квартри:  push() – в масиві 0 і ми добавляємо по одній квартирі
// = Видалення квартри
// = Редагування квартири
// = Зробити вибірку:  Вивід квартир по району (ходити по масиву квартир)
// = Зробити вибірку:  Сортування по ціні (в обох напрмках) (ходити по масиву квартир)


interface IFlat {
    Floor: number;
    neighbordsInfo(): void;
}
class Flat implements IFlat {
    Floor: number;
    NumberOfRooms: number;
    TotalArea: number;
    DateOfConstraction: string;
    Region: string;
    Price: number;
    Neighbors: string;
    Description: string;
    constructor(floor: number, numberOfRooms: number, totalArea: number, dateOfConstraction: string, region: string, price: number, neighbors: string, description: string) {
        this.Floor = floor;
        this.NumberOfRooms = numberOfRooms;
        this.TotalArea = totalArea;
        this.DateOfConstraction = dateOfConstraction;
        this.Region = region;
        this.Price = price;
        this.Neighbors = neighbors;
        this.Description = description;
    }
    printFlat(): void {
        document.write(`Floor: ${this.Floor}, Number of Rooms: ${this.NumberOfRooms}, Total Area: ${this.TotalArea} sq.m., Date of Constraction: ${this.DateOfConstraction}, Region: ${this.Region}, Price: ${this.Price} $ <br>`)
    }
    neighbordsInfo(): void {
        document.write(`Neighbors: ${this.Neighbors} <br>`)
    }
    getDescription() {
        document.write(`Description: ${this.Description} <br><hr>`)
    }
}

const flat1 = new Flat(19, 3, 65, '23rd of May 2015', "Center", 67000, "Neighbors very qwiet", "Nice view from the bedroom window on the park");
const flat2 = new Flat(4, 5, 90, '15th of November 2018', "South", 150000, "Neighbors are amazing", "Perfect apartment for family of 5 people");
const flat3 = new Flat(8, 4, 70, '1st of July 2017', "East", 107000, "Neighbors never at home", "Located in the Royal compound");
const flat4 = new Flat(1, 1, 35, '2nd of September 2019', "Center", 50000, "Neighbors very qwiet", "Amazing studio for 1 person or couple");
const flat5 = new Flat(10, 2, 58, '1st of July 2017', "South", 63000, "Neighbors really crazy", "Great flat for newborn family");

const arr: Flat[] = [flat1, flat2, flat3, flat4, flat5]

// add new flat
let btn = document.querySelector('.add')!;
btn.addEventListener('click', function() {
    let floor: number = parseInt(prompt("Please enter floor"))!;
    let numberOfRooms: number = parseInt(prompt("Please enter number of rooms"))!;
    let totalArea: number = parseInt(prompt("Please enter total area."))!;
    let dateOfConstraction: string = prompt("Please enter the date of constraction.")!;
    let region: string = prompt("Please enter region.")!;
    let price: number = parseInt(prompt("Please enter the price in $"))!;
    let neighbors: string = prompt("Please enter info about neighbors")!;
    let description: string = prompt("Please enter flat's description")!;

    let addflat = new Flat(floor, numberOfRooms, totalArea, dateOfConstraction, region, price, neighbors, description);

    arr.forEach(flat => {
        flat.printFlat();
        flat.neighbordsInfo();
        flat.getDescription();
    })
    arr.push(addflat);
    addflat.printFlat();
    addflat.neighbordsInfo();
    addflat.getDescription();
    // console.log(arr);
})


// filter btn by Region
let btnFilter = document.querySelector('.filter')!;
btnFilter.addEventListener("click", function(){
    let filterByRegion: string = prompt("Please enter the region you like to check flats:\n1-Center\n2-South\n3-East")!;
        if (filterByRegion == "1") {
            let Center : any = arr.filter(function (e) {
                return e.Region == "Center";
            });
            // console.log(Center);
            Center.forEach(flat => {
                flat.printFlat();
                flat.neighbordsInfo();
                flat.getDescription();
            })
        }

        else if (filterByRegion == "2") {
            let South : any = arr.filter(function (e) {
                return e.Region == "South";
            });
            // console.log(Center);
            South.forEach(flat => {
                flat.printFlat();
                flat.neighbordsInfo();
                flat.getDescription();
            })
        }
        else if (filterByRegion == "3") {
            let East : any = arr.filter(function (e) {
                return e.Region == "East";
            });
            // console.log(Center);
            East.forEach(flat => {
                flat.printFlat();
                flat.neighbordsInfo();
                flat.getDescription();
            })
        }
})



// filter btn by Price
let btnFilterUpDown = document.querySelector('.filter_by_price')!;
btnFilterUpDown.addEventListener("click", function(){

    let filterByPrice: string = prompt("Choose how you like to see flat's price:\n1-from Up to Down\n2-from Down to Up")!;
        if (filterByPrice == "1") {
            let priceUp : any = arr.sort(function (a, b) {
                if(a.Price > b.Price)
                    return -1;
                else if(a.Price < b.Price)
                    return 1;
                else
                    return 0;
            });
            //     console.log(priceUp);
            priceUp.forEach(flat => {
                flat.printFlat();
                flat.neighbordsInfo();
                flat.getDescription();
            })
        }
        else if (filterByPrice == "2") {
            let priceDown : any = arr.sort(function (a, b) {
                if(a.Price < b.Price)
                    return -1;
                else if(a.Price > b.Price)
                    return 1;
                else
                    return 0;
            });
            //     console.log(priceUp);
            priceDown.forEach(flat => {
                flat.printFlat();
                flat.neighbordsInfo();
                flat.getDescription();
            })
        }
})

class FlatBlock {
    Flats: Flat[];
    constructor(arr) {
        this.Flats = arr;
    }
    flatDescriptionBlock = () => {
        let container = document.querySelector('.container')!;
        let box = document.createElement('div');
        box.classList.add('box');
        let h2 = document.createElement('h2');
        h2.textContent = `All Flats`;
        let flatInfo = document.createElement('div');
        for (let i = 0; i < this.Flats.length; i++) {
            flatInfo.innerHTML += `<div>Region: ${this.Flats[i].Region};  Floor: ${this.Flats[i].Floor};  Number of Rooms: ${this.Flats[i].NumberOfRooms};  Total Area: ${this.Flats[i].TotalArea}sq.m.;  Date of Constraction: ${this.Flats[i].DateOfConstraction};  Price: ${this.Flats[i].Price} $ 
            <p class="none" id="description"> Description: ${this.Flats[i].Description}</p>
            <p>Neighbors: ${this.Flats[i].Neighbors}</p>

            </div><hr>`;
        }
        box.insertAdjacentElement('beforeend', h2);
        box.insertAdjacentElement('beforeend', flatInfo);
        container.insertAdjacentElement('beforeend', box);
    }
}
const flatGenInfo = new FlatBlock(arr);
flatGenInfo.flatDescriptionBlock();









