
document.getElementById('input').addEventListener('change', function(e) {
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var exif = EXIF.readFromBinaryFile(e.target.result);
		var tags = '';
		for (var key in exif) {
			if (key.indexOf('GPS') != -1) {
				tags += '<strong>';
			}
			tags += key + ': ' + JSON.stringify(exif[key]);
			if (key.indexOf('GPS') != -1) {
				tags += '</strong>';
			}
			tags += '\n';
		}
		document.getElementById('exif').innerHTML = tags;
	};
	reader.readAsArrayBuffer(file);
});
