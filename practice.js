// let stock = [
//     { id: 1, name: "Ноутбук", price: 50000, count: 5 },
//     { id: 2, name: "Мышка", price: 1500, count: 0 },
//     { id: 3, name: "Клавиатура", price: 3000, count: 10 },
//     { id: 4, name: "Монитор", price: 25000, count: 2 }
// ];


// let input1 = document.getElementById("inp");
// let btn = document.getElementById("myBnt");
// let header = document.getElementById("text");

// function seacher(){
//     let searchas = Number(input1.value);

//     let sr = stock.find(function(item){
//         return item.id === searchas;
//     })

//     if (sr){
//         header.textContent = "Найден товар: " + sr.name + " по цене: " + sr.price + " руб."
//     }
//     else{
//         header.textContent = "Товар по заданому артикулу не найден!"
//     }
    
// }

// btn.addEventListener("click", seacher);

// console.log(12312312);


//----------------------------------
// new task

let stock = [
    { id: 1, name: "Ноутбук", price: 50000, category: "Электроника" },
    { id: 2, name: "Мышка", price: 1500, category: "Периферия" },
    { id: 3, name: "Клавиатура", price: 3000, category: "Периферия" },
    { id: 4, name: "Монитор", price: 25000, category: "Электроника" }
];

let peripheral = stock.filter(function(item){
    return item.category === "Электроника"
});

let filt = peripheral.map(function(item){
    return item.category; // выводим только названия
})

console.log(filt);



