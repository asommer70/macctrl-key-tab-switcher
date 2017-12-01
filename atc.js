// Intercept keys for the whole window.
window.addEventListener('keydown', function(e) {
  // meta+h = previous tab.
  // if (e.metaKey && e.keyCode === 72) {
  //   e.preventDefault();
  //   console.log('meta+h...');
  //
  //   browser.runtime.sendMessage({type: "notify-attached-tab", message: "prevTab"});
  // }
  //
  // // meta+l = next tab.
  // if (e.metaKey && e.keyCode === 76) {
  //   e.preventDefault();
  //   console.log('meta+l...');
  //
  //   browser.runtime.sendMessage({type: "notify-attached-tab", message: "nextTab"});
  // }
  //
  // // Ctrl+l to focus the omnibar.
  // // console.log('e:', e);
  // if (e.ctrlKey && e.keyCode === 76) {
  //     e.preventDefault();
  //     console.log('Ctrl+l...');
  //     browser.runtime.sendMessage({type: "notify-attached-tab", message: "omnibar"});
  // }
});
