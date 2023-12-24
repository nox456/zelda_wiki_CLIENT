export default function not_found_message(articles,container) {
    const { message, query } = articles;
    const { value, field } = query;
    const fields = {
        name: "Nombre",
        race: "Raza",
        game: "Juego",
        console: "Consola"
    };
    const elementMessage = document.createElement("div");
    elementMessage.className = "text-white font-bold text-lg";
    elementMessage.innerHTML = `
                <h1>${message}</h1>
                <p>Buscaste por ${fields[field]}: '${value}'</p>
            `;
    container.appendChild(elementMessage);
}
