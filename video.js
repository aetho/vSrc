let srcList = document.getElementById('srcList');

const scriptCode =
	`(function () {
		let videos = document.querySelectorAll('video');
		let vidArray =
			Array.from(videos).map(function (video) {
				let vid = {
					src: video.src,
					poster: video.poster
				};
				return vid;
			});
		return vidArray;
	})();`;

function setUp(array) {
	for (let vid of array) {
		let newListItem = document.createElement('li');
		newListItem.classList = ['srcListItem']

		let newImg = document.createElement('img');
		newImg.src = vid.poster;

		newListItem.appendChild(newImg);

		let newAnchor = document.createElement('a');
		newAnchor.href = vid.src;
		newAnchor.innerHTML = (vid.src.length > 80) ? vid.src.slice(0, 90) + '...' : vid.src;
		newAnchor.title = document

		newListItem.appendChild(newAnchor);

		srcList.append(newListItem);
	}
};

chrome.tabs.executeScript({
	code: scriptCode
}, function (result) {
	console.log(result);
	setUp(result[0]);
});