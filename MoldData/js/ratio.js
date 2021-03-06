// ヒータ画面情報
const CLS_ROW = 5; // CLSヒータ行数(標準:5)
const CLS_COL = 6; // CLSヒータ列数(標準:6)
const CLS_CORNER = 1; // CLSコーナヒータ数

// 点火率色設定
let ratio_color = new Array(10);
ratio_color = ["#00FFFF", "#5FFFBF", "#7FFF7F", "#BFFF7F", " #FFFF7F", "#FFFF00", "#FFBF00", "#FF7F00", "#FF3F00", "#FF0000"];

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/ 点火率画面
/ 2017/10作成
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// 点火率画面行列
let ratioUp = document.getElementById("ratioUp");
let ratioCorner = document.getElementById("ratioCorner");
let ratioDown = document.getElementById("ratioDown");
let clsPreheating = document.getElementById("clsPreheating");
let clsOperation = document.getElementById("clsOperation");
makeRatioTable();

function makeRatioTable() {
	let i, j;
	let rows;

	// 上ヒータ
	for (i = 0; i <= RATIO_UP_ROW; i++) {
		// http://javascript123.seesaa.net/article/390980127.html
		// 行追加
		rows = ratioUp.insertRow(-1);
		if (i == 0) {
			rows.appendChild(document.createElement("th")).textContent = " ";
		} else {
			rows.appendChild(document.createElement("th")).textContent = RATIO_UP_ROW_HEADER[i - 1];
		}

		for (j = 0; j < RATIO_UP_COL; j++) {
			// コメント/値セル追加
			if (i == 0) {
				rows.appendChild(document.createElement("th")).textContent = RATIO_UP_COL_HEADER[j];
			} else {
				rows.insertCell(-1).textContent = 0;
			}
		}
	}

	// U字ヒータ
	// U字ヒータの数が変わったらここを編集
	rows = ratioCorner.insertRow(-1);
	for (i = 0; i < RATIO_CORNER; i++) {
		rows.appendChild(document.createElement("th")).textContent = "U字" + i;
	}
	rows = ratioCorner.insertRow(-1);
	for (i = 0; i < RATIO_CORNER; i++) {
		rows.insertCell(-1).textContent = 0;
	}

	// 下ヒータ
	for (i = 0; i <= RATIO_DOWN_ROW; i++) {
		// http://javascript123.seesaa.net/article/390980127.html
		// 行追加
		rows = ratioDown.insertRow(-1);
		if (i == 0) {
			rows.appendChild(document.createElement("th")).textContent = " ";
		} else {
			rows.appendChild(document.createElement("th")).textContent = RATIO_DOWN_ROW_HEADER[i - 1];
		}

		for (j = 0; j < RATIO_DOWN_COL; j++) {
			// コメント/値セル追加
			if (i == 0) {
				rows.appendChild(document.createElement("th")).textContent = RATIO_DOWN_COL_HEADER[j];
			} else {
				rows.insertCell(-1).textContent = 0;
			}
		}
	}
}
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/ CLSヒータ画面
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// CLS予熱
for (i = 0; i < CLS_ROW * 2; i++) { // 行
	// 行追加
	rows = clsPreheating.insertRow(-1);

	for (j = 0; j < CLS_COL; j++) { // 列
		// コメント/値セル追加
		if ((i % 2) == 0) {
			rows.appendChild(document.createElement("th")).textContent = (i / 2) * CLS_COL + j + 1;
		} else {
			rows.insertCell(-1).textContent = 0;
		}
	}
}
// CLS運転
for (i = 0; i < CLS_ROW * 2; i++) { // 行
	// 行追加
	rows = clsOperation.insertRow(-1);

	for (j = 0; j < CLS_COL; j++) { // 列
		// コメント/値セル追加
		if ((i % 2) == 0) {
			rows.appendChild(document.createElement("th")).textContent = (i / 2) * CLS_COL + j + 1;
		} else {
			rows.insertCell(-1).textContent = 0;
		}
	}
}

// CLS予熱/運転温度
// CLS予熱温度
function clsPreheat() {
	let i, j, k, l;

	for (i = 0; i < CLS_ROW; i++) { // 各行
		for (j = 0; j < CLS_COL; j++) { // 各列
			l = parseInt(dataList[holderNum * FILE_CNT + pageNum * (FILE_CNT / PAGE_CNT) + fileNum][CLS_PEHEATING_S + i * CLS_COL + j], 10);
			if (isNaN(l)) l = 0; // 数値でない場合は0
			clsPreheating.rows[i * 2 + 1].cells[j].textContent = (l / 10) + "℃";

			// 点火率色
			k = ratioColor(l / 20);
			clsPreheating.rows[i * 2 + 1].cells[j].style.backgroundColor = ratio_color[k];
		}
	}
}

// CLS運転温度
function clsOpe() {
	let i, j, k, l;

	for (i = 0; i < CLS_ROW; i++) { // 各行
		for (j = 0; j < CLS_COL; j++) { // 各列
			l = parseInt(dataList[holderNum * FILE_CNT + pageNum * (FILE_CNT / PAGE_CNT) + fileNum][CLS_OPERATION_S + i * CLS_COL + j], 10);
			if (isNaN(l)) l = 0; // 数値でない場合は0
			clsOperation.rows[i * 2 + 1].cells[j].textContent = (l / 10) + "℃";

			// 点火率色
			k = ratioColor(l / 20);
			clsOperation.rows[i * 2 + 1].cells[j].style.backgroundColor = ratio_color[k];
		}
	}
}

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/ 上下ヒータ点火率画面
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
function upperHeaterRatio() {
	let i, j, k, l;

	for (i = 0; i < RATIO_UP_ROW; i++) { // 各行
		for (j = 0; j < RATIO_UP_COL; j++) { // 各列
			l = dataList[holderNum * FILE_CNT + pageNum * (FILE_CNT / PAGE_CNT) + fileNum][RATIO_UP_S + UPPER_HEATER_ADD[i * RATIO_UP_COL + j]];
			if (isNaN(l)) l = 0; // 数値でない場合は0
			ratioUp.rows[i + 1].cells[j + 1].textContent = l;

			// 点火率色
			k = ratioColor(l);
			ratioUp.rows[i + 1].cells[j + 1].style.backgroundColor = ratio_color[k];
		}
	}

	// U字ヒータ
	for (i = 0; i < RATIO_CORNER; i++) {
		l = dataList[holderNum * FILE_CNT + pageNum * (FILE_CNT / PAGE_CNT) + fileNum][U_HEATER_ADD[i]];
		if (isNaN(l)) l = 0; // 数値でない場合は0
		ratioCorner.rows[1].cells[i].textContent = l;

		// 点火率色
		k = ratioColor(l);
		ratioCorner.rows[1].cells[i].style.backgroundColor = ratio_color[k];
	}
}

function lowerHeaterRatio() {
	let i, j, k, l;

	for (i = 0; i < RATIO_DOWN_ROW; i++) { // 各行
		for (j = 0; j < RATIO_DOWN_COL; j++) { // 各列
			l = dataList[holderNum * FILE_CNT + pageNum * (FILE_CNT / PAGE_CNT) + fileNum][RAITO_DOWN_S + LOWER_HEATER_ADD[i * RATIO_DOWN_COL + j]];
			if (isNaN(l)) l = 0; // 数値でない場合は0
			ratioDown.rows[i + 1].cells[j + 1].textContent = l;

			// 点火率色
			k = ratioColor(l);
			ratioDown.rows[i + 1].cells[j + 1].style.backgroundColor = ratio_color[k];
		}
	}
}

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/ 点火率色(1~100を10段階に変換)
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
function ratioColor(e) {
	let i;

	e = parseInt(e, 10);
	i = 0;
	if (e == 0) {
		i = 0;
	} else if (1 <= e && e <= 100) {
		i = Math.ceil(e / 10) - 1;
	}

	return i;
}

// 表示切替
let dispChangeButtons = document.getElementsByName("dispayChange");
for (i = 0; i < dispChangeButtons.length; i++) {
	dispChangeButtons[i].addEventListener('click', showBlock, false);
}
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/ 表示/非表示切替
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
function showBlock(e) {
	let i = e.target.id.slice(0, -6);
	let j = document.getElementById(i).style.display;

	(j == "" || j == "block") ? document.getElementById(i).style.display = "none": document.getElementById(i).style.display = "block";
}
