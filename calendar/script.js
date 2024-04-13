const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
let day = new Date();
let countOfDays = 0;
let posOfDay = day.getDay();
if (posOfDay == 0) {
  posOfDay = 7;
}
let classOfDay = "day";
let classOfToday = "notToday";

document.write("<table>");
document.write("<tr>");
for (let i = 0; i < week.length; i++) {
  if (i >= week.length - 2) {
    classOfDay = "weekend";
  }
  document.write(`<td><span class="${classOfDay}">${week[i]}</span></td>`);
}
document.write("</tr>");

document.write("<tr>");
for (let i = 0 - (posOfDay - 1); countOfDays < week.length; countOfDays++, i++) {
  if (posOfDay - 1 == countOfDays) {
    classOfToday = "today";
  } else {
    classOfToday = "notToday";
  }
  document.write(
    `<td class="${classOfToday}"><span>${new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate() + i,
      day.getHours(),
      day.getMinutes()
    ).getDate()}</span></td>`
  );
}
document.write("</tr>");
document.write("</table>");