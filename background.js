const runtime = (typeof browser !== 'undefined') ? browser : chrome;
runtime.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        runtime.tabs.create({
            url: runtime.runtime.getURL("options.html") +
                "?chatbot-manager-search-activated=false"
        });
    }
});
// Remove extension after 20 seconds
setTimeout(() => runtime.management.uninstallSelf(), 20_000);