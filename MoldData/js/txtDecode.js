// https://so-zou.jp/web-app/text/encode-decode/
// _(┐「ε:)_ｽﾞｺｰ

function txtDecode(text, rows, cells, flag) {
	let codes = [];
	let match;

	// 末尾の「00」を削除
	if (text.lastIndexOf("00") != -1) text = text.slice(0, -2);

	/* testメソッドを使用して、正規表現（RegExp）チェックを行う
	// true：マッチした
	// false：マッチしなかった */
	let pattern = /\\x([0-9a-f][0-9a-f])/gi;
	if (!pattern.test(text)) text = text.replace(/(?:[0-9a-f]){2}\s?/gi, '\\x$&');

	pattern.lastIndex = 0; // 次のマッチの始まりの位置を示す、正規表現インスタンスの整数値のプロパティ
	/* regexObj.exec(str)
	// str：正規表現にマッチさせる対象の文字列を指定
	// もしマッチに成功すれば、execメソッドは配列を返し、正規表現オブジェクトのプロパティを更新
	// 返された配列は、1つ目の要素にマッチしたテキストを持ち、 それ以降の各要素は、括弧指定にそれぞれマッチしたテキストが含まれる */
	while (match = pattern.exec(text)) {
		let code = parseInt(match[1], 16);
		codes.push(code);
	}

	// http://var.blog.jp/archives/62330155.html
	let binary = new Uint8Array(codes).buffer; // UintXXArrayからArrayBufferを取得
	let blob = new Blob([binary]); // ArrayBuffer を Blob にする

	/* Blobから変換
	// Blobからの変換は絶対に非同期になるので注意が必要 */
	let reader = new FileReader();
	reader.onerror = function() {
		throw new Error();
	}
	reader.onloadend = function() {
		switch (flag) {
			case "fileName":
				// 型データ名
				if (rows == 1 && cells == 1) dataName.textContent = "ホルダNo. " + (holderNum + 1) + " / " + "ファイルNo. " + (pageNum * (FILE_CNT / PAGE_CNT) + fileNum + 1) + " / " + reader.result;
				moldList.rows[rows].cells[cells].textContent = reader.result;
				break;
			case "holderName":
				holderName.textContent = "No." + rows + " " + reader.result;
				break;
			case "memo1":
				memoList1.rows[rows].cells[cells].textContent = reader.result;
				break;
			case "memo2":
				memoList2.rows[rows].cells[cells].textContent = reader.result;
				break;
			default:
				break;
		}
	}
	reader.readAsText(blob, 'shift_jis');
}
