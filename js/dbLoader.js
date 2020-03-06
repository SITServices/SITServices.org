'using strict'

function readFromNewsDb(){
const reader = require('g-sheets-api');

const readerOptions = {
	sheetId: '2PACX-1vRagckVrp2L-Blfoo5toZefRjMP09jsyixiC5CCq9pcyhjCw7Df-uqUOjKq7J8G_OiDO6H9MFbzeUVq',//the news sheets url
	returnAllResults: false
};

reader(readerOptions, results => {
	return results;
});
}

console.log(readFromNewsDb());