/**
 * origin()
 * 
 * Defines a transform-origin for applicable animations
 * 
 * Parameter:
 * -x (number; percentage)
 * -y (number; percentage)
 */
 	
 	// Note: as of the time this library was built, Safari still requires the -webkit- vendor prefix for transforms
 	//
	shift.fn.origin = function(_x, _y) {
		
		var x = (typeof _x === "number" || _x === 0) ? _x + "%" : Shift.environment["originX"]; // Default transform-originX is 50%
		var y = (typeof _y === "number" || _y === 0) ? _y + "%" : Shift.environment["originY"]; // Default transform-originY is 50%
		
		Shift.loop(this.collection, function() {
			this.style.transformOrigin = x + " " + y;
			this.style.webkitTransformOrigin = x + " " + y;
		});
		
		return this;
	};
