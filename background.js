
// Listen for hotkey from content-script.
// browser.runtime.onMessage.addListener(msg => {
//
//   // Get all tabs.
//   browser.tabs.query({currentWindow: true})
//     .then((tabs, err) => {
//
//       // Get the currently active tab.
//       browser.tabs.query({currentWindow: true, active: true})
//         .then((tab, err) => {
//
//           if (msg.message == 'prevTab') {
//             if (tab[0].index == 0) {
//               browser.tabs.update(tabs[tabs.length - 1].id, {active: true});
//             } else {
//               browser.tabs.update(tabs[tab[0].index - 1].id, {active: true});
//             }
//           } else if (msg.message == 'nextTab') {
//             if (tab[0].index == (tabs.length - 1)) {
//               browser.tabs.update(tabs[0].id, {active: true});
//             } else {
//               browser.tabs.update(tabs[tab[0].index + 1].id, {active: true});
//             }
//           } else if (msg.message == 'omnibar') {
//             console.log('msg.message:', msg.message);
//             browser.windows.update(tab[0].windowId, {focused: true, drawAttention: true});
//           }
//         });
//     });
// });

// Maybe some day the commands will be able to override the default shortcut keys.
browser.commands.onCommand.addListener(function(command) {
  console.log('command:', command);

  // Get all tabs.
  browser.tabs.query({currentWindow: true})
    .then((tabs, err) => {

      // Get the currently active tab.
      browser.tabs.query({currentWindow: true, active: true})
        .then((tab, err) => {

          if (command == "next-tab") {
            if (tab[0].index == (tabs.length - 1)) {
              browser.tabs.update(tabs[0].id, {active: true});
            } else {
              browser.tabs.update(tabs[tab[0].index + 1].id, {active: true});
            }
          } else if (command == 'prev-tab') {
            if (tab[0].index == 0) {
              browser.tabs.update(tabs[tabs.length - 1].id, {active: true});
            } else {
              browser.tabs.update(tabs[tab[0].index - 1].id, {active: true});
            }
          }
        });
  });
});
