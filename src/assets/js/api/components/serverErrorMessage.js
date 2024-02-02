export default function categoryLoader(container, message) {
    const errorElement = document.createElement("div");
    errorElement.className =
        "p-4 bg-slate-700 border border-blue-300 h-fit rounded-md my-auto";
    errorElement.innerHTML = `
            <p class="text-white italic font-bold">${message}</p>
        `;
    container.appendChild(errorElement);
}
