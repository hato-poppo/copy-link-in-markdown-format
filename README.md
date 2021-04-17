# Copy Link In Markdown Format

自作Chrome拡張機能

## Purpose

* 記事タイトルとそのURLをマークダウン形式のリンクに変換してクリップボードにコピーする

## Why

* メモを残す際に記事タイトルとURLをマークダウン形式にすることが非常に多かったので、手間を省きたかった
* 探せば誰かが作ってくれているような気がするけど、簡単に作れそうだったので自作した
* マークダウン形式でメモ取ってて（自分みたいに）リンク貼り散らかすタイプの人だと結構便利

## How to use

### 1. リポジトリからソースコードを入手する

```Bash
$ git clone https://github.com/hato-poppo/copy-link-in-markdown-format.git
```

### 2. Chromeの拡張機能画面からソースコード読み込み

「パッケージ化されていない機能を読み込む」でcloneしたディレクトリを指定する

### 3. メニュー表示確認

ブラウザ上で右クリックし、表示されたメニュー内に「記事リンクをコピー」が追加されていればOK

### 4. 動作確認

クリップボードに以下のような形式でコピーされていればOK

```
[hato-poppo/copy-link-in-markdown-format](https://github.com/hato-poppo/copy-link-in-markdown-format)
```

## Notes

* crxファイルを生成し追加出来るようにしたが、この方法ではストアに登録していないと無効化されてしまうらしい
  * ストアに公開するほどのものではないのでちょっと困っている
