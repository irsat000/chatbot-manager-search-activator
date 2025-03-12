const runtime = (typeof browser !== 'undefined') ? browser : chrome;
let check = setInterval(() => {
    const isActive = getWindowParam("chatbot-manager-search-activated")
    if (isActive == "true") {
        clearInterval(check);
        check = null;
        document.querySelector('.success').classList.add('active');
        setTimeout(() => runtime.management.uninstallSelf(), 4000);
    }
    else if (isActive == "already-active") {
        clearInterval(check);
        check = null;
        document.querySelector('.already-active').classList.add('active');
        setTimeout(() => runtime.management.uninstallSelf(), 4000);
    }
}, 50);
setTimeout(() => {
    if (!check) return;
    clearInterval(check);
    document.querySelector('.timed-out').classList.add('active');
    setTimeout(() => runtime.management.uninstallSelf(), 10_000);
}, 10_000);
function getWindowParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}