'use strict';

{
  // 右クリックメニューの追加
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'copy-link',
      title: '記事リンクをコピー'
    });
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener(() => {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
      const link = `[${tabs[0].title}](${tabs[0].url})`;
      copyToClipboard(link);
    });

  });

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
}
