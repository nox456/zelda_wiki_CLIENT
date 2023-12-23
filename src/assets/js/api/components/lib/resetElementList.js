export default function resetAllElements(container,allElements,input) {
    input.addEventListener("change", () => {
        const input_value = input.value;
        if (input_value == "") {
            container.innerHTML = allElements;
        }
    });
}
