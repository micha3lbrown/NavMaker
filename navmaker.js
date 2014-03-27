/**==============================================
*	Author: Torrance Davenport
*	Navigation, quick, easy, and lightweight
* 	@OPTIONS: itemElement, navElement, navClass, slack, 
*==============================================*/
var NavMaker = function(options, items)
{
	var methods, navigation = {};
	methods = 
	{
		init: function(options)
		{
			if (options === undefined)
			{
				var options = {};
			}
			
			if (options.navElement)
			{
				navigation.$nav = $('<' + options.navElement + '></' + options.navElement + '>');
			}
			else
			{
				navigation.$nav = $('<ul></ul>');
			}
			if (options.navClass)
			{
				navigation.$nav.addClass(options.navClass);
			}

		},
		buildNav: function()
		{
			var _this = this;
			$.each(items, function(index, navItem)
			{
				var $item = _this.buildItem(navItem), $subNav;
				if ($item.children().length <= 0)
				{
					if (navItem.subNav)
					{
						$subNav = $('<ul></ul>');

						$.each(navItem.subNav, function(index, item) {
							$subNav.append(_this.buildItem(item));
						});
						$item.append('<a href="' + navItem.url + '">' + navItem._title + '</a>');
						$item.append($subNav);
					}
				}
				navigation.$nav.append($item);
			});
		},
		buildItem: function(navItem)
		{
			var $item;
			if (options.itemElement)
			{
				$item = $('<' + options.itemElement + '></' + options.navElement + '>');
			}
			else
			{
				$item = $('<li></li>');
			}

			if (navItem.subNav)
			{
				return $item;
			}

			$item.append('<a href="' + navItem.url + '">' + navItem._title + '</a>');

			if (options.slack)
			{
				location = window.location.pathname.split('/');
				if (location[options.slack] == navItem.url.split('/')[options.slack])
				{
					$item.children(':first').addClass('active');
				}
			}
			else
			{
				if (window.location.pathname == navItem.url)
				{
					$item.children(':first').addClass('active');
				}
			}

			return $item;
		}

	}
	
	methods.init(options);
	methods.buildNav();
	$(options.selector).append(navigation.$nav);
}