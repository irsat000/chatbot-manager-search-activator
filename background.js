const runtime = (typeof browser !== 'undefined') ? browser : chrome;
runtime.runtime.onInstalled.addListener(() => {
    runtime.tabs.create({
        url: runtime.runtime.getURL("options.html")
            + "?chatbot-manager-search-activated=false"
    });
});