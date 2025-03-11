const runtime = (typeof browser !== 'undefined') ? browser : chrome;
const check = setInterval(() => {
    if (getWindowParam("chatbot-manager-search-activated") == "true") {
        clearInterval(check);
        document.querySelector('.success').classList.add('active');
        setTimeout(() => {
            runtime.management.uninstallSelf();
        }, 4000);
    }
}, 50);
function getWindowParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}