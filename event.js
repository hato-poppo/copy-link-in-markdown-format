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
  chrome.contextMenus.onClicked.addListener(item => {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
      const title = tabs[0].title;
      const url = tabs[0].url;
      const link = `[${title}](${url})`;
  
      console.log(link);
  
      // テキストエリアを用意する
      var copyFrom = document.createElement("textarea");
      // テキストエリアへ値をセット
      copyFrom.textContent = link;
    
      // bodyタグの要素を取得
      var bodyElm = document.getElementsByTagName("body")[0];
      // 子要素にテキストエリアを配置
      bodyElm.appendChild(copyFrom);
    
      // テキストエリアの値を選択
      copyFrom.select();
      
      // コピーコマンド発行
      document.execCommand('copy');
      // 追加テキストエリアを削除
      bodyElm.removeChild(copyFrom);
    });

  });
}
// https://webllica.com/copy-text-to-clipboard/
// https://qiita.com/plumfield56/items/e98c247888d82a79c7ea
// https://belltree.life/chrome-extension-tutorial/
// https://liginc.co.jp/web/tool/browser/163575
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query