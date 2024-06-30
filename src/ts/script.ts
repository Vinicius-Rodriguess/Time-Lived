const btnCalc = document.querySelector("#btn-calc") as HTMLButtonElement
const inputDate = document.querySelector("#input-date") as HTMLInputElement

btnCalc.addEventListener("click", () => createResults(inputDate))

interface IResults {
    seconds: string
    minutes: string
    hours: string
    days: string
    weeks: string
    years: string
    months: string
    timeLived: string
    birthday: string
}

const createResults = (inputElement: HTMLInputElement): void => {
    if (inputElement.value === "") return

    const currentDate = new Date()
    const birthDate = new Date(inputElement.value)

    const results: IResults = {
        birthday: formatDate(birthDate),
        seconds: `${calcSeconds(currentDate, birthDate)} segundos`,
        minutes: `${calcMinutes(currentDate, birthDate)} minutos`,
        hours: `${calcHours(currentDate, birthDate)} horas`,
        days: `${calcDays(currentDate, birthDate)} dias`,
        weeks: `${calcWeeks(currentDate, birthDate)} semanas`,
        months: `${calcMonths(currentDate, birthDate)} meses`,
        years: `${calcYears(currentDate, birthDate)} anos`, 
        timeLived: calcTimeLived(currentDate, birthDate),
    }

    renderResults(results)
}

const formatDate = (date: Date): string => {
    const day = ((date.getDate()+1).toString()).padStart(2, "0")
    const month = ((date.getMonth() + 1).toString()).padStart(2, "0")
    return `Desde seu nascimento em ${day}/${month}/${date.getFullYear()} se passaram`
}

type DateFunction = (date1: Date, date2: Date) => number

const calcSeconds: DateFunction = (date1, date2) => Math.floor((date1.getTime() - date2.getTime()) / 1000)

const calcMinutes: DateFunction = (date1, date2) => Math.floor(calcSeconds(date1, date2) / 60)

const calcHours: DateFunction = (date1, date2) => Math.floor(calcMinutes(date1, date2) / 60)

const calcDays: DateFunction = (date1, date2) => Math.floor(calcHours(date1, date2) / 24)

const calcWeeks: DateFunction = (date1, date2) => Math.floor(calcDays(date1, date2) / 7)

const calcMonths: DateFunction = (date1, date2) => Math.floor(calcDays(date1, date2) * 30)

const calcYears: DateFunction = (date1, date2) => date1.getFullYear() - date2.getFullYear()

const calcTimeLived = (date1: Date, date2: Date): string => {
    const years = calcYears(date1, date2)
    const months = date1.getMonth() - date2.getMonth()
    const days = date1.getDate() - date2.getDate()
    return `Você tem ${years} anos, ${months} meses e ${days} dias de vida!`
}

const renderResults = (results: any): void => {
    const containerResults = document.querySelector(".container-results") as HTMLDivElement
    containerResults.innerHTML = ""

    for (let i in results) {
        const text = document.createElement("p")
        text.innerText = results[i]
        containerResults.appendChild(text)
    }

    containerResults.classList.remove("hide")
}
