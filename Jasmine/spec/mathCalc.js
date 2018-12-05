var exports = module.exports = {};

exports.mathCalc = function() {
	this.currVal = 0;

	this.add = function(v1){
		this.currVal += v1;
		return this.currVal;
	}

	this.addMany = function(args){
		var sum = this.currVal;
		args.forEach(function(e) {
			sum += e;
		})
		this.currVal = sum;
		return this.currVal;
	}
}