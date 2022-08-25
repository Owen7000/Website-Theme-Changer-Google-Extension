let changeColour = document.getElementById("changeColour")

chrome.storage.sync.get("colour", ({ colour }) => {
    changeColour.style.backgroundColor = colour;
});

changeColour.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackGroundColour,
    });
});

function setPageBackGroundColour() {
    chrome.storage.sync.get("colour", ({ colour }) => {
        // document.body.style.backgroundColor = colour;
        // title = document.getElementsByClassName("app-header-bar app-bar-app-header-bar-common")
        const headerBar = document.querySelector(".app-header-bar")
        const appBar = document.querySelector(".app-bar")
        const appBarButton = document.querySelector(".app-bar button")
        appBar.style.backgroundColor = '#2C3333'
        headerBar.style.backgroundColor = '#395B64'
        appBarButton.style.color = '#E7F6F2'
    });
}