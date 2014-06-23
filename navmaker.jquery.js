(function($) {

	var isset;

	isset = function(arg) {
		if (typeof arg != 'undefined' && arg !== null) {
			return true;
		} else {
			return false;
		}
	}

	$.fn.navmaker = function(opts, items) {

		var $target = this,
			NavContainer,
			NavItem,
			NavMaker,
			defaultOpts,
			navMaker;

		(function(){
			
			defaultOpts = {
				containerEl: 'ul',
				itemEl: 'li',
				activeClass: 'active',
				containerAttributes: {},
				globalAttributes: {},
				globalSlack: 0,
			}

			if (isset(opts)) {
				$.each(defaultOpts, function(option, value) {
				
					if (!isset(opts[value])) {
						opts[option] = value;
					};
			
				});
			} else {
				opts = defaultOpts;
			}

		})();

		NavContainer = function() {

			var $element;

			(function() {
				$element = $('<' + opts.containerEl + '>' + '</' + opts.containerEl + '>');
			})();

			debugger;

			this.$element = $element;

		};

		NavItem = function(itemOpts) {

			var defaultOpts = {
					url: '#',
					inner: 'Link',
					attributes: {},
					slack: 0
				},
				$element;
				
			(function() {
				$element = $('<' + opts.itemEl + '>' + '</' + opts.itemEl + '>');

				if (isset(itemOpts)) {
					$.each(defaultOpts, function(option, value) {
					
						if (!isset(itemOpts[value])) {
							opts[option] = value;
						};
				
					});
				} else {
					itemOpts = defaultOpts;
				}

				$element.html(itemOpts.inner);

				debugger;

			})();

			this.$element = $element;
		};

		NavMaker = function(items) {

			var navContainer = new NavContainer,
				navItems = [];

			(function() {

				$.each(items, function(index, itemOpts) {
					debugger;
					navItems.push(new NavItem(itemOpts));
					navContainer.$element.append(navItems[index].$element);
				});

				debugger;

				$target.append(navContainer.$element);

			})();

		};

		navMaker = new NavMaker(items);

	};
})(jQuery);