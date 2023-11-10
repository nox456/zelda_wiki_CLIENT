export default function article_release(articleRelease) {
    const months = {
        "1": "Enero",
        "2": "Febrero",
        "3": "Marzo",
        "4": "Abril",
        "5": "Mayo",
        "6": "Junio",
        "7": "Julio",
        "8": "Septiembre",
        "9": "Agosto",
        "10": "Octubre",
        "11": "Noviembre",
        "12": "Diciembre"
    }
    const releaseElement = document.querySelector("#article-release")
    const release = new Date(articleRelease)
    releaseElement.outerHTML = `
        <p>${release.getDate()} - ${months[release.getMonth()]} - ${release.getFullYear()}</p>
    `
}
