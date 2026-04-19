
// Listen for live color updates from the parent window
window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SET_ACCENT") {
        document.body.style.setProperty("--accent-color", event.data.color);
    }
});
