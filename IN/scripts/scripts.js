/*ANDRECECI.Main = function () {
	
	// init controller
	var controller = new ScrollMagic();
	createFadeTween();
};

ANDRECECI.Main.prototype.createFadeTween = function(number) {
	var tween = TweenMax.fromTo("#event_"+ number, 1, {left: -1000,}, {left: -122, repeat: 0, ease: Circ.easeInOut}),
		scene = new ScrollScene({triggerElement: "#trigger_"+ number}).setTween(tween_+ number)
};*/

function includeTweens () {

	// init controller
	var controller = new ScrollMagic();

	//Tweens
	var tween_1 = TweenMax.fromTo("#event_1", 1, {left: -1000,}, {left: -122, repeat: 0, ease: Circ.easeInOut}),
		tween_2 = TweenMax.fromTo("#event_2", 1, {right: -1000,}, {right: -65, repeat: 0, ease: Circ.easeInOut}),
		tween_3 = TweenMax.fromTo("#event_3", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_4 = TweenMax.fromTo("#event_4", 1, {left: -1000,}, {left: -62, repeat: 0, ease: Circ.easeInOut}),
		tween_5 = TweenMax.fromTo("#event_5", 1, {right: -1000,}, {right: -90, repeat: 0, ease: Circ.easeInOut}),
		tween_6 = TweenMax.fromTo("#event_6", 1, {left: -1000,}, {left: -48, repeat: 0, ease: Circ.easeInOut}),
		tween_7 = TweenMax.fromTo("#event_7", 1, {right: -1000,}, {right: -96, repeat: 0, ease: Circ.easeInOut}),
		tween_8 = TweenMax.fromTo("#event_8", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_9 = TweenMax.fromTo("#event_9", 1, {right: -1000,}, {right: -96, repeat: 0, ease: Circ.easeInOut}),
		tween_10 = TweenMax.fromTo("#event_10", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_11 = TweenMax.fromTo("#event_11", 1, {right: -1000,}, {right: -96, repeat: 0, ease: Circ.easeInOut}),
		tween_12 = TweenMax.fromTo("#event_12", 1, {left: -1000,}, {left: -48, repeat: 0, ease: Circ.easeInOut}),
		tween_13 = TweenMax.fromTo("#event_13", 1, {right: -1000,}, {right: -92, repeat: 0, ease: Circ.easeInOut}),
		tween_14 = TweenMax.fromTo("#event_14", 1, {left: -1000,}, {left: -48, repeat: 0, ease: Circ.easeInOut}),
		tween_15 = TweenMax.fromTo("#event_15", 1, {right: -1000,}, {right: -92, repeat: 0, ease: Circ.easeInOut}),
		tween_16 = TweenMax.fromTo("#event_16", 1, {right: -1000,}, {right: -92, repeat: 0, ease: Circ.easeInOut}),
		tween_17 = TweenMax.fromTo("#event_17", 1, {right: -1000,}, {right: -92, repeat: 0, ease: Circ.easeInOut}),
		tween_18 = TweenMax.fromTo("#event_18", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_19 = TweenMax.fromTo("#event_19", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_20 = TweenMax.fromTo("#event_20", 1, {left: -1000,}, {left: -61, repeat: 0, ease: Circ.easeInOut}),
		tween_21 = TweenMax.fromTo("#event_21", 1, {left: -1000,}, {left: -60, repeat: 0, ease: Circ.easeInOut}),
		tween_22 = TweenMax.fromTo("#event_22", 1, {right: -1000,}, {right: -89, repeat: 0, ease: Circ.easeInOut}),
		tween_23 = TweenMax.fromTo("#event_23", 1, {autoAlpha:0}, {autoAlpha:1, repeat: 0, ease: Circ.easeInOut}),
		tween_bottom = TweenMax.to("#bottom", 0.5, {autoAlpha:1});

	//Scenes
	var scene_1 = new ScrollScene({triggerElement: "#trigger_1"}).setTween(tween_1),
		scene_2 = new ScrollScene({triggerElement: "#trigger_2"}).setTween(tween_2),
		scene_3 = new ScrollScene({triggerElement: "#trigger_3"}).setTween(tween_3),
		scene_4 = new ScrollScene({triggerElement: "#trigger_4"}).setTween(tween_4),
		scene_5 = new ScrollScene({triggerElement: "#trigger_5"}).setTween(tween_5),
		scene_6 = new ScrollScene({triggerElement: "#trigger_6"}).setTween(tween_6),
		scene_7 = new ScrollScene({triggerElement: "#trigger_7"}).setTween(tween_7),
		scene_8 = new ScrollScene({triggerElement: "#trigger_8"}).setTween(tween_8),
		scene_9 = new ScrollScene({triggerElement: "#trigger_9"}).setTween(tween_9),
		scene_10 = new ScrollScene({triggerElement: "#trigger_10"}).setTween(tween_10),
		scene_11 = new ScrollScene({triggerElement: "#trigger_11"}).setTween(tween_11),
		scene_12 = new ScrollScene({triggerElement: "#trigger_12"}).setTween(tween_12),
		scene_13 = new ScrollScene({triggerElement: "#trigger_13"}).setTween(tween_13),
		scene_14 = new ScrollScene({triggerElement: "#trigger_14"}).setTween(tween_14),
		scene_15 = new ScrollScene({triggerElement: "#trigger_15"}).setTween(tween_15),
		scene_16 = new ScrollScene({triggerElement: "#trigger_16"}).setTween(tween_16),
		scene_17 = new ScrollScene({triggerElement: "#trigger_17"}).setTween(tween_17),
		scene_18 = new ScrollScene({triggerElement: "#trigger_18"}).setTween(tween_18),
		scene_19 = new ScrollScene({triggerElement: "#trigger_19"}).setTween(tween_19),
		scene_20 = new ScrollScene({triggerElement: "#trigger_20"}).setTween(tween_20),
		scene_21 = new ScrollScene({triggerElement: "#trigger_21"}).setTween(tween_21),
		scene_22 = new ScrollScene({triggerElement: "#trigger_22"}).setTween(tween_22),
		scene_23 = new ScrollScene({triggerElement: "#trigger_23"}).setTween(tween_23),
		scene_bottom = new ScrollScene({triggerElement: "#trigger_bottom"}).setTween(tween_bottom);

    //Add to controller
	controller.addScene
	(
		[
			scene_1, 
			scene_2,
			scene_3,
			scene_4,
			scene_5,
			scene_6,
			scene_7,
			scene_8,
			scene_9,
			scene_10,
			scene_11,
			scene_12,
			scene_13,
			scene_14,
			scene_15,
			scene_16,
			scene_17,
			scene_18,
			scene_19,
			scene_20,
			scene_21,
			scene_22,
			scene_23,
			scene_bottom
		]
	);

	// show indicators (requires debug extension)
	scene_11.addIndicators();
	scene_12.addIndicators();
}