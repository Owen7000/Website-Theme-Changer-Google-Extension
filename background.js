let colour = '#3aa757'


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ colour });
    console.log('Default background colour set to %cgreen', `color: ${colour}`);
});
