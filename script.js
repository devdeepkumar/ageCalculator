let dobDate = document.getElementById("dateOfBirth");
dobDate.max = new Date().toISOString().split("T")[0];

let currDate = document.getElementById("currentDate");
currDate.max = new Date().toISOString().split("T")[0];

let output = document.getElementById("output");

function calAge() {
  let birthDate = new Date(dobDate.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let todayDate = new Date(currDate.value);

  let todayDay = todayDate.getDate();
  let todayMonth = todayDate.getMonth() + 1;
  let todayYear = todayDate.getFullYear();

  let calDay, calMonth, calYear;

  calYear = todayYear - birthYear;

  if (todayMonth >= birthMonth) {
    calMonth = todayMonth - birthMonth;
  } else {
    calYear--;
    calMonth = 12 + todayMonth - birthMonth;
  }

  if (todayDay >= birthDay) {
    calDay = todayDay - birthDay;
  } else {
    calMonth--;
    calDay = getDateInMonth(birthYear, birthMonth) + todayDay - birthDay;
  }

  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  }

  if (currDate.value == null || currDate.value == "" || currDate.value == NaN) {
    alert("Please Select Date");
    output.innerHTML = "Please Select Date";
  } else {
    output.innerHTML = `You are <span>${calYear}</span> Year, <span>${calMonth}</span> Month, <span>${calDay}</span> Day old .`;
  }
}

function getDateInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
