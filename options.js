const runtime = (typeof browser !== 'undefined') ? browser : chrome;
const check = setInterval(() => {
    if (getWindowParam("chatbot-manager-search-activated") == "true") {
        clearInterval(check);
        document.querySelector('h1').textContent = "Activated successfully!! Automatically removing the extension in 3 seconds..."
        setTimeout(() => {
            runtime.management.uninstallSelf();
        }, 3000);
    }
}, 50);
function getWindowParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}