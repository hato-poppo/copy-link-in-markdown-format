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
      (tabs) => generateLinkText(tabs).then(copyToClipboard).catch(onError));
  });

  const generateLinkText = (tabs) => {
    const tab = tabs[0]; // Current Window && Active は1つしか存在しないので、最初の要素だけ取得でOK
    return new Promise((resolve) => {
      resolve(`[${tab.title}](${tab.url})`);
    });
  }

  // TODO: もっとイケてる書き方があるはず。
  const copyToClipboard = (text) => {
      var tmpArea = document.createElement("textarea");
      tmpArea.textContent = text;
    
      // bodyタグの子要素としてテキストエリアを配置する
      var bodyElm = document.getElementsByTagName("body")[0];
      bodyElm.appendChild(tmpArea);
    
      // テキストエリアの値を選択
      tmpArea.select();

      // コピーコマンド発行
      document.execCommand('copy');
      // 追加テキストエリアを削除
      bodyElm.removeChild(tmpArea);
  }

  const onError = (e) => {
    console.log(`[copy-link-in-markdown-format]【ERROR】: ${e}`);
  }
}
