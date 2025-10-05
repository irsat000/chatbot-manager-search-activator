const runtime = (typeof browser !== 'undefined') ? browser : chrome;

let activated = false;

(async () => {
    // Other extension changes url, backwards compatible
    const isActive = getWindowParam("chatbot-manager-search-activated")
    if (isActive === "true") {
        success();
        return;
    }

    // Send message to other extensions
    // Chrome only
    const isTest = false;
    const caiToolsId = isTest ? "opllbpelobhiddiaaadladjbjjngjpng" : "nbhhncgkhacdaaccjbbadkpdiljedlje";
    const chatbotManagerId = isTest ? "cdbapfadnmcolbgejhpddkjopplpcfgn" : "apnhcckmbmofaneogehcfnghabafpeej";

    const res1 = await runtime.runtime.sendMessage(caiToolsId, { task: "unlock_char_search" }).catch(() => { });
    const res2 = await runtime.runtime.sendMessage(chatbotManagerId, { task: "unlock_char_search" }).catch(() => { });

    if (res1?.success || res2?.success) {
        success();
    }
})();


function success() {
    activated = true;
    document.querySelector('.success').classList.add('active');
    // Update url to prevent another trigger
    const url = new URL(window.location.href);
    url.searchParams.delete("chatbot-manager-search-activated");
    history.replaceState(null, "", url.toString());
    setTimeout(() => runtime.management.uninstallSelf(), 3_000);
}

setTimeout(() => {
    if (activated) { return };
    document.querySelector('.timed-out').classList.add('active');
    setTimeout(() => runtime.management.uninstallSelf(), 10_000);
}, 10_000);


function getWindowParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}




// Unused for now
/*function alreadyActive() {
    activated = true;
    document.querySelector('.already-active').classList.add('active');

    setTimeout(() => runtime.management.uninstallSelf(), 3000);
}*/