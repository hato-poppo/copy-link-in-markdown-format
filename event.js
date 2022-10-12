'use strict';

{
  // 右クリックメニューの追加
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'copy-link',
      title: 'ページリンクを取得'
    });
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({currentWindow: true, active: true},
      (tabs) => {
        const tab = tabs[0];
        generateLinkText(tab).then((text) => copyToClipboard(tab, text)).catch(onError);
      })
  });

  const generateLinkText = (tab) => {
    return new Promise((resolve) => {
      resolve(`[${tab.title}](${tab.url})`);
    });
  }

  const copyToClipboard = (tab, text) => {
    const injectFunction = (text) => {
      navigator.clipboard.writeText(text);
    }

    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: injectFunction,
      args: [text]
    });
  }

  const onError = (e) => {
    console.log(`[copy-link-in-markdown-format]【ERROR】: ${e}`);
  }
}
