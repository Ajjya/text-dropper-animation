jQuery(function($){
	function Dropper(el, interval, animation){
		this.el = el;
		this.interval = interval;
		this.animation = animation;

		this.init = function(){
			var obj = this;
			$el = $(obj.el);

			if(!obj.animation) obj.animation = {};
			if(!obj.animation.name) obj.animation.name = 'dropper_slide_down';
			if(!obj.animation.duration) obj.duration = '1s';
			if(!obj.animation.timing) obj.timing = 'ease';

			$el.children().each(function(index){
				$(this).addClass('hidden_drop');
				this.style.animation = animation.name + " " + animation.duration + " " + animation.timing;
			});

			var time = 0;
			$el.children().each(function(index){
				var $cur_el = $(this);
				setTimeout(function() {
					$el.find('p').eq(index - 1).removeClass('visible_drop');
					$cur_el.addClass('visible_drop');
				}, time);
				time += obj.interval;
			});
		}
	}

	window.Dropper = Dropper;
})

