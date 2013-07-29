function executeScript (tab) {
	chrome.tabs.executeScript(null, {file: "inject.js"});
}


function main() {
	document.addEventListener('DOMContentLoaded', function () {
    	document.getElementById('alertButton').addEventListener('click', executeScript);
	});
}


main();