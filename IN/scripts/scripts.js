function includeTweens () {
	console.log("ci sono");
	var controller;
	var scene_1;
	var scene_bottom;
	// init controller
	controller = new ScrollMagic();

	var tween_1 = TweenMax.fromTo("#event_1", 1, {left: -1000,}, {left: -122, repeat: 0, ease: Circ.easeInOut});
	var tween_2 = TweenMax.fromTo("#event_2", 1, {right: -1000,}, {right: -65, repeat: 0, ease: Circ.easeInOut});
	var tween_bottom = TweenMax.to("#bottom", 0.5, {autoAlpha:1});

	

	controller.addScene([
    scene_1 = new ScrollScene({triggerElement: "#trigger_1"}).setTween(tween_1),
    scene_2 = new ScrollScene({triggerElement: "#trigger_2"}).setTween(tween_2),
    scene_bottom = new ScrollScene({triggerElement: "#trigger_bottom"}).setTween(tween_bottom)
]);

	// show indicators (requires debug extension)
	scene_1.addIndicators();
	scene_2.addIndicators();
}