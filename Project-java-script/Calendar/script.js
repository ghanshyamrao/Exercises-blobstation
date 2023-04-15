const months = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ],
    de: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    es: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ]
  };
  
  const daysOfWeek = {
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  };
  
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let currentLanguage = "en";
  
  const monthYear = document.querySelector("#month-year");
  const daysOfWeekEl = document.querySelector("#days-of-week");
  const calendarBody = document.querySelector("#calendar-body");
  const languageDropdown = document.querySelector("#language-dropdown");
  
  languageDropdown.addEventListener("change", event => {
    currentLanguage = event.target.value;
    renderCalendar();
  });
  
  document
    .querySelector("#previous-month")
    .addEventListener("click", () => changeMonth("previous"));
  document
    .querySelector("#next-month")
    .addEventListener("click", () => changeMonth("next"));
  document
    .querySelector("#previous-year")
    .addEventListener("click", () => changeYear("previous"));
  document
    .querySelector("#next-year")
    .addEventListener("click", () => changeYear("next"));
  
  renderCalendar();
  
  function changeMonth(direction) {

  
    if (direction === "previous") {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
      } else {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
      }
      renderCalendar();
      
  }




function changeYear(direction) {
  if (direction === "previous") {
    currentYear--;
  } else {
    currentYear++;
  }
  renderCalendar();
}

function renderCalendar() {
  monthYear.innerHTML = `${months[currentLanguage][currentMonth]} ${currentYear}`;

  daysOfWeekEl.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const day = document.createElement("th");
    day.innerHTML = daysOfWeek[currentLanguage][i];
    daysOfWeekEl.appendChild(day);
  }

  calendarBody.innerHTML = "";
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let numberOfDaysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  let currentRow;
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    if (i === 1 || (i + firstDayOfMonth - 1) % 7 === 0) {
      currentRow = document.createElement("tr");
      calendarBody.appendChild(currentRow);
    }
    const day = document.createElement("td");
    day.innerHTML = i;
    currentRow.appendChild(day);
  }
}
