﻿(function () {
	// 向页面注入JS
	function injectCustomJs(jsPath) {
		jsPath = jsPath || 'js/inject.js';
		var temp = document.createElement('script');
		temp.setAttribute('type', 'text/javascript');
		// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
		temp.src = chrome.extension.getURL(jsPath);
		// temp.onload = function () {
		// 	// 放在页面不好看，执行完后移除掉
		// 	this.parentNode.removeChild(this);
		// };
		document.head.appendChild(temp);
	}
	injectCustomJs()
	console.log('不能理解怎么办 33sadada3');
})();