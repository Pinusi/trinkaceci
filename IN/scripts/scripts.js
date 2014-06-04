function includeTweens () {
	console.log("ci sono");
	var controller;
	// init controller
	controller = new ScrollMagic();

	var tween = TweenMax.to("#bottom", 0.5, {autoAlpha:1});

	// build scene
	var scene = new ScrollScene({triggerElement: "#trigger_bottom"})
					.setTween(tween)
					.addTo(controller);

	// show indicators (requires debug extension)
		scene.addIndicators();
}