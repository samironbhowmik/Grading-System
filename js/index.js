const button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("working");
  const math = parseInt(document.getElementById("math").value);
  const english = parseInt(document.getElementById("eng").value);
  const physics = parseInt(document.getElementById("phy").value);
  const chemistry = parseInt(document.getElementById("chem").value);
  const computer = parseInt(document.getElementById("comp").value);

  if (
    math > 100 ||
    english > 100 ||
    physics > 100 ||
    chemistry > 100 ||
    computer > 100
  ) {
    alert("Please enter marks in range of 100");
  }
  if (
    math < 0 ||
    english < 0 ||
    physics < 0 ||
    chemistry < 0 ||
    computer < 0
  ) {
    alert("Please enter marks in range of 100");
  }
  else{
    //total marks
    var total = math+english+physics+chemistry+computer
    document.getElementById("total").innerHTML = "Total Marks: " +total;

    //avg marks
    var average = total/5
    document.getElementById("average").innerHTML = "Your average marks are: " +average

    //grades
    if(average>=90 && average<=100)
    {
        document.getElementById("grade").innerHTML = "Your grade is: A"
    }
    if(average>=80 && average<=89)
    {
        document.getElementById("grade").innerHTML = "Your grade is: B"
    }
    if(average>=70 && average<=79)
    {
        document.getElementById("grade").innerHTML = "Your grade is: C"
    }
    if(average>=60 && average<=69)
    {
        document.getElementById("grade").innerHTML = "Your grade is: D"
    }
    if(average<=60)
    {
        document.getElementById("grade").innerHTML = "Your grade is: F"
    }


    // cheking if marks is in any subject is less than 35 then fail
    if(math<=35 || english<=35 || physics<=35 || chemistry<=35 || computer<=35)
    {
        document.getElementById("grade").innerHTML = "Your grade is F"
    }

    // if blank
    // if(math===0 || physics===0 || english===0 || computer===0 || chemistry===0)
    // {
    //     document.getElementById("grade").innerHTML = "Your grade is F"
    // }

  }
});
