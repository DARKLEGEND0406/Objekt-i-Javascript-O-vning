class Car {
  constructor (car, img, price, model, year){
  this.car = car;
  this.img = img;
  this.price = price;
  this.model = model;
  this.year = year;
}
}


let cars = [new Car("BMW", "./img/images.jpeg", "$10000", "Model 1", 2023),
  new Car("BMW", "./img/download (1).jpeg", "$20000", "Model 2", 2022),
  new Car("BMW", "./img/download (2).jpeg", "$20000", "Model 3", 2022),
  new Car("BMW", "./img/images (1).jpeg", "$25000", "Model 4", 2022),
  new Car("BMW", "./img/images (2).jpeg", "$30000", "Model 5", 2022),
  new Car("BMW", "./img/images (3).jpeg", "$25600", "Model 6", 2022),
  new Car("BMW", "./img/images (4).jpeg", "$12500", "Model 7", 2022),
  new Car("BMW", "./img/images (5).jpeg", "$48500", "Model 8", 2022),
  new Car("BMW", "./img/images (6).jpeg", "$58700", "Model 9", 2022),
  new Car("BMW", "./img/images (7).jpeg", "$17630", "Model 10", 2022),  
]

cars.map((item)=>{

  var carDiv = document.createElement("div");

  var img1 = document.createElement("img");
  img1.src = item.img;

  var carInfoDiv1 = document.createElement("div");

  var carNameP1 = document.createElement("p");
  carNameP1.innerText = item.car;

  var carPriceP1 = document.createElement("p");
  carPriceP1.innerText = item.price;

  var carModelP1 = document.createElement("p");
  carModelP1.innerText = item.model;

  var carYearP1 = document.createElement("p");
  carYearP1.innerText = item.year;

  carInfoDiv1.appendChild(carNameP1);
  carInfoDiv1.appendChild(carPriceP1);
  carInfoDiv1.appendChild(carModelP1);
  carInfoDiv1.appendChild(carYearP1);

  carDiv.appendChild(img1);
  carDiv.appendChild(carInfoDiv1);
  document.body.appendChild(carDiv);
  

})





