"use strict";
const btnCalc = document.querySelector("#btn-calc");
const inputDate = document.querySelector("#input-date");
inputDate.addEventListener("input", () => inputDate.classList.remove("error"));
btnCalc.addEventListener("click", () => { createResults(inputDate); });
const createResults = (inputElement) => {
    if (inputElement.value === "")
        return;
    const currentDate = new Date();
    const birthDate = new Date(inputElement.value);
    if (birthDate > currentDate) {
        inputDate.classList.add("error");
        return;
    }
    const results = {
        birthday: formatDate(birthDate),
        seconds: `${calcSeconds(currentDate, birthDate)} segundos`,
        minutes: `${calcMinutes(currentDate, birthDate)} minutos`,
        hours: `${calcHours(currentDate, birthDate)} horas`,
        days: `${calcDays(currentDate, birthDate)} dias`,
        weeks: `${calcWeeks(currentDate, birthDate)} semanas`,
        months: `${calcMonths(currentDate, birthDate)} meses`,
        years: `${calcYears(currentDate, birthDate)} anos`,
        timeLived: calcTimeLived(currentDate, birthDate),
    };
    renderResults(results);
};
const formatDate = (date) => {
    const day = ((date.getDate() + 1).toString()).padStart(2, "0");
    const month = ((date.getMonth() + 1).toString()).padStart(2, "0");
    return `Desde seu nascimento em ${day}/${month}/${date.getFullYear()} se passaram`;
};
const calcSeconds = (date1, date2) => Math.floor((date1.getTime() - date2.getTime()) / 1000);
const calcMinutes = (date1, date2) => Math.floor(calcSeconds(date1, date2) / 60);
const calcHours = (date1, date2) => Math.floor(calcMinutes(date1, date2) / 60);
const calcDays = (date1, date2) => Math.floor(calcHours(date1, date2) / 24);
const calcWeeks = (date1, date2) => Math.floor(calcDays(date1, date2) / 7);
const calcMonths = (date1, date2) => Math.floor(calcDays(date1, date2) * 30);
const calcYears = (date1, date2) => date1.getFullYear() - date2.getFullYear();
const calcTimeLived = (date1, date2) => {
    const years = calcYears(date1, date2);
    const months = date1.getMonth() - date2.getMonth();
    const days = date1.getDate() > date2.getDate() ? date1.getDate() - date2.getDate() : date2.getDate() - date1.getDate();
    return `Você tem ${years} anos, ${months} meses e ${days} dias de vida!`;
};
const renderResults = (results) => {
    const containerResults = document.querySelector(".container-results");
    containerResults.innerHTML = "";
    let i;
    for (i in results) {
        const text = document.createElement("p");
        text.innerText = results[i];
        containerResults.appendChild(text);
    }
    containerResults.classList.remove("hide");
};
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${entry.target.dataset.animate}`, 'played');
        }
    });
}, { rootMargin: '-80px' });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
