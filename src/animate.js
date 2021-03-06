/**
 * animate()
 * 
 * Applies several CSS styles to the target DOM elements
 * 
 * Parameters:
 * -properties (object containing CSS key-value pairs)
 * -duration (optional... number in seconds, not a string)
 * -easing (optional... string)
 * -complete (optional... callback fired after transitionend)
 */
 	
	shift.fn.animate = function(_properties, _duration, _easing, _complete) {
		
		var timer, styles, callback, easing, collection;
		
		collection = this.collection;
		easing = Shift.easingMap(_easing); // Default easing is "ease"
		timer = Shift.timer(_duration); // Default duration is "0.5s"
		
		if (typeof _properties === "object") {
			
			// Add all applicable styles to the element per user-definition
			//
			Shift.loop(collection, function() {
				
				this.style.transition = "all " + timer + " " + easing;
				
				for (styles in _properties) {
					
					this.style[styles] = _properties[styles];
					
					// Takes care of transform vendor-prefixing automatically for the end user
					//
					if (styles === "transform") this.style.webkitTransform = _properties[styles];
					
				}
				
			});
			
			// Resets and completions...
			//
			callback = function() {
				Shift.callback(collection, _complete, callback);
			};
			
			collection[collection.length - 1].addEventListener("transitionend", callback, false);
			
		}
		
		return this;
	};
