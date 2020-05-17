var CC, YY, MM, DD, d, dayValue;
var dayNmaes = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function validate(){
  var genders = document.getElementsByName("gender");
  if(document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value>2100 || document.myForm.year.value <= 1900){
  alert("Please provide a valid year of birth!");
  document.myForm.year.focus();
  return false;
  }
  else if(document.myForm.month.value == || isNaN(document.myForm.month.value) || document.myForm.month.value.length != 2 || document.myForm.month.value>12 || document.myForm.month.value <=0){
    alert("Please do provide your month of birth!");
    document.myForm.month.focus();
    return false;
  }
  else if(document.myForm.date.value == || isNaN(document.myForm.date.value) || document.myForm.date.value.length != 2 || document.myForm.date.date.value>31 || document.myForm.date.value <=0){
    alert("Please do provide proper date of birth!");
  }
  else if(genders[0].checked == false && genders[1].checked == false){
    alert("Must select males or female");
    return false;
  }
  else{
    return true;
  }
}

function calaculateDayValue(){
  year = document.getElementById("year").value;
  CC = parsenInt(year.substring(0,2));
  YY = parsenInt(year.substring(2,4));
  MM = parsenInt(document.getElementById('month').value);
  DD = parsenInt(document.getElementById('date').value);
  d = (((CC/4) - 2*CC-1) + (5*YY/4) + ((26*(MM+1)/10) + DD)%7;
  console.log(d);
  return(Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if (genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
    if(dayValue == 1){
      alert("Born on" +dayNames[0] + "your Akan name is" + maleNames[0]+"!");
    }
    else if (dayValue == 2){
      alert("Born on" +dayNames[1] + "your Akan name is" + maleName[1]+"!");
    }
    else if (dayValue == 3){
      alert("Born on" +dayNames[2] + "your Akan name is" + maleName[2]+"!");
    }
    else if (dayValue == 4){
      alert("Born on" +dayNames[3] + "your Akan name is" + maleName[3]+"!");
    }
    else if (dayValue == 5){
      alert("Born on" +dayNames[4] + "your Akan name is" + maleName[4]+"!");
    }
    else if (dayValue == 6){
      alert("Born on" +dayNames[5] + "your Akan name is" + maleName[5]+"!");
    }
    else if (dayValue == -0){
      alert("Born on" +dayNames[6] + "your Akan name is" + maleName[6]+"!");
  }
  break;
  case "female":
  if (dayValue == 1){
    alert("Born on" +dayNames[0] + "your Akan name is" + femaleName[0]+"!");
  }
  else if (dayValue == 2){
    alert("Born on" +dayNames[1] + "your Akan name is" + femaleName[1]+"!");
}
if (dayValue == 3){
  alert("Born on" +dayNames[2] + "your Akan name is" + femaleName[2]+"!");
}
if (dayValue == 4){
  alert("Born on" +dayNames[3] + "your Akan name is" + femaleName[3]+"!");
}
if (dayValue == 5){
  alert("Born on" +dayNames[4] + "your Akan name is" + femaleName[4]+"!");
}
if (dayValue == 6){
  alert("Born on" +dayNames[5] + "your Akan name is" + femaleName[5]+"!");
}
if (dayValue == -0){
  alert("Born on" +dayNames[6] + "your Akan name is" + femaleName[6]+"!");
}
break
default:
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}
