chrome.runtime.onInstalled.addListener(function () {
  var contextMenus = new ContextMenus();

  contextMenus.create({
    title: 'To Repos',
    contexts: ['all'],
    type: 'normal',
    id: 'to_repos',
    onclick: toRepos
  })
})

  // info
  //   {editable: false, frameId: 0, menuItemId: "to_repos", pageUrl: "chrome://extensions/"}
  //   editable: false
  //   frameId: 0
  //   menuItemId: "to_repos"
  //   pageUrl: "chrome://extensions/"
  //   __proto__: Object
  // Tab
  //   {active: true, audible: false, autoDiscardable: true, discarded: false, favIconUrl: "", …}
  //   active: true
  //   audible: false
  //   autoDiscardable: true
  //   discarded: false
  //   favIconUrl: ""
  //   height: 937
  //   highlighted: true
  //   id: 296
  //   incognito: false
  //   index: 55
  //   mutedInfo: {muted: false}
  //   pinned: false
  //   selected: true
  //   status: "complete"
  //   title: "拡張機能"
  //   url: "chrome://extensions/"
  //   width: 1920
  //   windowId: 191
  //   __proto__: Object
function toRepos (info, tab) {
  console.log(info)
  console.log(tab)
}

var ContextMenus = function () {
    var items = this.items = {};

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        items[info.menuItemId].onclick(info, tab);
    });
};

ContextMenus.prototype = {
    create: function (properties) {
        this.items[properties.id] = {
            onclick: properties.onclick
        };

        properties.onclick = null;
        chrome.contextMenus.create(properties);
    }
};