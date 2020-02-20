
exports.min = function min (array) {
	if(array === undefined || array.length === 0) {
		return 0;
	}
	var value = Math.min(...array);
	return value;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
		return 0;
	}
	var value = Math.max(...array);
	return value;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
		return 0;
	}
	var average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  return average(array);
}
