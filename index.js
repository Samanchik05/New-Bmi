function BMI() {
    var mass = document.getElementById("mass").value;
    var height = document.getElementById("height").value;
    var bmi = mass / (((height / 100) * height) / 100);
    document.getElementById("result").innerHTML = "Sizning BMI natijangiz!" + bmi  ;
  }
  
  function BMI() {
    var height = document.getElementById("height").value;
    var mass = document.getElementById("mass").value;
    var bmi = mass / (((height / 100) * height) / 100);
    var bmii = bmi.toFixed(2);
  
    document.getElementById("result").innerHTML = "Sizning BMI natijangiz!" + bmii;
  }
  
  