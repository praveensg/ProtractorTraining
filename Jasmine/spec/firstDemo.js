module.exports = (function() {
	addFunc = function(v1, v2) {
		return v1 + v2;
	}
	subFunc = function(v1, v2) {
		return v1 - v2;
	}
	square = function(num) {
		return num * num;
	}
	squareRt = function(num) {
		return Math.sqrt(num);
	}
	return{
		addFunc: addFunc,
		subFunc: subFunc,
		square: square,
		squareRt: squareRt
	}
}) ();