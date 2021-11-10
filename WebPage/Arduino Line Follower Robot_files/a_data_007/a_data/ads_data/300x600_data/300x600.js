(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_atlas_P_", frames: [[0,735,171,128],[0,0,217,309],[0,311,181,216],[0,529,156,204],[0,865,139,125]]},
		{name:"300x600_atlas_NP_", frames: [[0,0,1312,1200],[1314,1133,140,139],[1314,0,261,262],[1314,848,141,141],[1456,991,112,112],[1314,264,230,230],[1314,496,174,174],[1314,672,174,174],[1314,991,140,140]]}
];


// symbols:



(lib.bg_300x6002x = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BusinessAnalyst = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.marketingManager = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.SalesforceechnicalArchitect = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.salesforce_logo = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.salesforceAdministrator = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.salesforceConsultant = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.salesforceDeveloper = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.salesManager = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.serviceManager_image = function() {
	this.spriteSheet = ss["300x600_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.swimming_bear = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.swimming_goat = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.swimming_horse = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trailhead_logo = function() {
	this.spriteSheet = ss["300x600_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.trailhead_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.trailhead_logo();
	this.instance.parent = this;
	this.instance.setTransform(-35,-31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trailhead_logo_1, new cjs.Rectangle(-35,-31,69.5,62.5), null);


(lib.title_subhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{salesforceDeveloper:0,techArchitect:1,marketingManager:2,businessAnalyst:3,salesManager:4,serviceManager:5,salesConsultant:6,salesforceAdmin:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgEATIgCgTIABgBQAKAAAHgEQAGgFAAgHIAAgBQAAgGgFgEQgFgFgHAAQgLAAgLALIgFgGQALgNAQAAQAMgBAHAHQAIAHAAAKIAAAAQAAALgIAGQgGAFgLACIgBANg");
	this.shape.setTransform(60.5,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_1.setTransform(55.1,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgEgFQgFgFgJAAQgGAAgFAFQgGAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNAOAAQAKAAAHAHQAGAHAAAKIAAAng");
	this.shape_2.setTransform(49.2,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334D").s().p("AgcAhIAFgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgJANgOAAQgMAAgJgIQgJgIABgMQAAgNAJgJQAIgHAMgBQAOAAAJANIAAgLIAJAAIAAAyQABAOgJAIQgIAJgPAAQgPAAgNgJgAgOgbQgHAGAAAKIAAAAQAAAJAHAFQAGAGAIAAQAJAAAGgGQAIgFgBgJQABgJgIgHQgGgFgJAAQgIAAgGAFg");
	this.shape_3.setTransform(41.4,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_4.setTransform(36.1,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNANAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_5.setTransform(31.1,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_6.setTransform(21.5,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_7.setTransform(15.6,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334D").s().p("AgeApIAAhQIAJAAIAAANQAJgOAOAAQALAAAJAIQAJAJAAAPQAAAOgJAJQgIAJgMAAQgOAAgJgOIAAAfgAgPgZQgHAHAAAKQAAAKAHAHQAHAGAIAAQAJAAAGgGQAHgHAAgKQAAgLgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_8.setTransform(5.1,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAIAAAEgFQAGgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgHANgNAAQgLAAgHgHg");
	this.shape_9.setTransform(-2.6,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAEgFQAGgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgHANgOAAQgLAAgGgHg");
	this.shape_10.setTransform(-13.4,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_11.setTransform(-20.8,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334D").s().p("AgcAmIAEgIQAEADAFAAQAFAAACgDQADgDADgGIgcg9IAKAAIAWAzIAUgzIAJAAIgaA/QgEAKgDAEQgFAEgHAAQgHAAgHgDg");
	this.shape_12.setTransform(-28.1,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334D").s().p("AgeApIAAhQIAJAAIAAANQAJgOAOAAQALAAAJAIQAJAJAAAPQAAAOgJAJQgIAJgMAAQgOAAgJgOIAAAfgAgPgZQgHAHAAAKQAAAKAHAHQAHAGAIAAQAJAAAGgGQAHgHAAgKQAAgLgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_13.setTransform(-38.8,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_14.setTransform(-46.4,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_15.setTransform(-53.4,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334D").s().p("AARAsIgWgdIgMANIAAAQIgJAAIAAhXIAJAAIAAA8IAggiIAMAAIgbAZIAbAkg");
	this.shape_16.setTransform(-59.9,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHAKABQAGAAADgEQAEgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAFABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgOAAgLgJg");
	this.shape_17.setTransform(115,-7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_18.setTransform(108.6,-7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_19.setTransform(103.6,-8.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334D").s().p("AgSAXQgJgKAAgNIAAAAQAAgMAJgJQAJgLAMAAQAPAAAKAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAIAAQALAAAIgJIAHAFQgLANgPAAQgMAAgJgKg");
	this.shape_20.setTransform(98.8,-7.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgJAAQgHAAgEAFQgGAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAHgNANAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_21.setTransform(91.8,-7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_22.setTransform(84.6,-7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_23.setTransform(79.5,-8.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334D").s().p("AgTAXQgIgKgBgNIAAAAQABgMAIgJQAKgLANAAQANAAALAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAJAAQAKAAAIgJIAHAFQgLANgOAAQgNAAgKgKg");
	this.shape_24.setTransform(74.7,-7.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_25.setTransform(69.7,-8.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334D").s().p("AgJAsIAAg1IgIAAIAAgIIAIAAIAAgGQAAgKAFgGQAEgEAJAAQAFAAAFACIAAAIIgJgCQgKAAAAANIAAAFIATAAIAAAIIgTAAIAAA1g");
	this.shape_26.setTransform(66.3,-8.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334D").s().p("AgJAsIAAg1IgIAAIAAgIIAIAAIAAgGQAAgKAFgGQAEgEAJAAQAGAAAEACIAAAIIgJgCQgKAAAAANIAAAFIATAAIAAAIIgTAAIAAA1g");
	this.shape_27.setTransform(62,-8.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_28.setTransform(56.1,-7.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNANAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_29.setTransform(49.1,-7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_30.setTransform(43.8,-8.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_31.setTransform(35,-7.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18334D").s().p("AgkAqIAAhTIAdAAQATAAAMAMQANAMAAARQAAASgNAMQgMAMgTAAgAgaAhIATAAQAPAAAKgKQAJgIAAgPQAAgNgJgKQgKgJgPAAIgTAAg");
	this.shape_32.setTransform(26.7,-8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgEATIgCgTIABgBQALAAAGgEQAGgFAAgHIAAgBQAAgGgFgFQgFgEgHAAQgMAAgKALIgFgGQALgNAQAAQAMgBAHAHQAIAHAAAKIAAAAQAAALgIAGQgGAFgMACIAAANg");
	this.shape_33.setTransform(15.2,-8.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_34.setTransform(8.6,-7.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#18334D").s().p("AgVAkQgKgJAAgPQAAgOAKgJQAJgJALAAQAOAAAJAOIAAglIAJAAIAABWIgJAAIAAgNQgKAPgNAAQgLAAgJgJgAgOgFQgHAGAAALQAAAKAHAHQAGAHAIAAQAJAAAGgHQAIgHgBgKQABgKgIgHQgGgGgJAAQgJAAgFAGg");
	this.shape_35.setTransform(1,-8.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-6.6,-7.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#18334D").s().p("AgTAXQgJgKAAgNIAAAAQAAgMAJgJQAKgLANAAQAOAAAKAMIgGAGQgJgJgKAAQgIAAgGAHQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAJgJIAFAFQgKANgOAAQgNAAgKgKg");
	this.shape_37.setTransform(-13.7,-7.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgHAAgGAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNAMAAQAMAAAGAHQAGAHAAALIAAAmg");
	this.shape_38.setTransform(-24.2,-7.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_39.setTransform(-29.4,-8.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18334D").s().p("AAmAgIAAgjQAAgJgFgFQgEgFgHAAQgIAAgEAFQgGAFAAAJIAAAjIgIAAIAAgkQAAgIgEgFQgEgFgIAAQgHAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQAKAAAHAHQAGAHAAALIAAAmg");
	this.shape_40.setTransform(-40,-7.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_41.setTransform(-49.3,-7.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_42.setTransform(-56,-7.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_43.setTransform(-61.6,-7.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18334D").s().p("AgVAkQgKgJAAgPQAAgOAKgJQAIgJAMAAQAOAAAJAOIAAglIAJAAIAABWIgJAAIAAgNQgJAPgOAAQgMAAgIgJgAgOgFQgHAGAAALQAAAKAHAHQAGAHAIAAQAJAAAGgHQAIgHgBgKQABgKgIgHQgGgGgJAAQgJAAgFAGg");
	this.shape_44.setTransform(-68.4,-8.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAHAAAGgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgNAAQgLAAgGgHg");
	this.shape_45.setTransform(-79.3,-7.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_46.setTransform(-86.7,-7.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18334D").s().p("AgcAmIAEgIQAEADAFAAQAFAAACgDQADgDADgGIgcg9IAKAAIAWAzIAUgzIAJAAIgaA/QgEAKgDAEQgFAEgHAAQgHAAgHgDg");
	this.shape_47.setTransform(-94,-6.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_48.setTransform(-104.8,-7.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#18334D").s().p("AgkAqIAAhTIAdAAQATAAAMAMQANAMAAARQAAASgNAMQgMAMgTAAgAgaAhIATAAQAPAAAKgKQAJgIAAgPQAAgNgJgKQgKgJgPAAIgTAAg");
	this.shape_49.setTransform(-113.1,-8.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgEATIgCgTIABgBQAKAAAHgEQAGgFAAgHIAAgBQAAgGgFgEQgEgFgJAAQgLAAgJALIgGgGQALgNAQAAQAMgBAHAHQAIAHgBAKIAAAAQABALgIAGQgGAFgMACIgBANg");
	this.shape_50.setTransform(66.6,9.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#18334D").s().p("AARAsIgWgdIgMANIAAAQIgJAAIAAhXIAJAAIAAA8IAggiIAMAAIgaAZIAbAkg");
	this.shape_51.setTransform(48.8,9.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_52.setTransform(10.3,10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAEgFQAGgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgNAAQgKAAgHgHg");
	this.shape_53.setTransform(3.9,10.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#18334D").s().p("AgSAXQgKgKABgNIAAAAQgBgMAKgJQAJgLAMAAQAOAAALAMIgGAGQgJgJgKAAQgIAAgGAHQgHAHAAAJQAAAKAHAHQAGAHAIAAQALAAAIgJIAGAFQgKANgPAAQgMAAgJgKg");
	this.shape_54.setTransform(-7.7,10.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#18334D").s().p("AgbAhIAEgHQALAHAMABQAKgBAGgFQAGgGAAgLIAAgHQgKANgNAAQgMAAgIgIQgJgIAAgMQgBgNAKgJQAIgHAMgBQANAAAKANIAAgLIAKAAIAAAyQgBAOgHAIQgJAJgPAAQgPAAgMgJgAgPgbQgGAGAAAKIAAAAQAAAJAGAFQAHAGAIAAQAJAAAHgGQAGgFABgJQgBgJgGgHQgHgFgJAAQgJAAgGAFg");
	this.shape_55.setTransform(-29.6,11.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#18334D").s().p("AgVAfIAAAMIgJAAIAAhWIAJAAIAAAlQAJgOAOAAQALAAAJAJQAJAJAAAOQAAAPgJAJQgIAJgMAAQgOAAgJgOgAgPgFQgHAHAAAKQAAAKAHAHQAHAHAIAAQAJAAAGgHQAHgGAAgLQAAgLgHgGQgGgGgJAAQgIAAgHAGg");
	this.shape_56.setTransform(-40.2,9.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#18334D").s().p("AgVAkQgKgJAAgPQAAgOAKgJQAJgJAMAAQANAAAJAOIAAglIAJAAIAABWIgJAAIAAgNQgJAPgNAAQgMAAgJgJgAgPgFQgGAGAAALQAAAKAGAHQAHAHAIAAQAJAAAHgHQAGgHAAgKQAAgKgGgHQgHgGgJAAQgIAAgHAGg");
	this.shape_57.setTransform(-51.9,9.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgHAAgGAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNAMAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_58.setTransform(-59.2,10.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_59.setTransform(87.7,-7.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#18334D").s().p("AgDAfIgbg9IAKAAIAUAyIAWgyIAJAAIgaA9g");
	this.shape_60.setTransform(74.5,-7.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_61.setTransform(69.5,-8.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#18334D").s().p("AAlAgIAAgjQAAgJgDgFQgFgFgIAAQgHAAgFAFQgEAFgBAJIAAAjIgIAAIAAgkQABgIgFgFQgFgFgGAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_62.setTransform(45.4,-7.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_63.setTransform(31.2,-8.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#18334D").s().p("AgVAfIAAAMIgJAAIAAhWIAJAAIAAAlQAJgOAOAAQALAAAJAJQAJAJAAAOQAAAPgJAJQgIAJgMAAQgOAAgJgOgAgPgFQgHAHAAAKQAAAKAHAHQAHAHAIAAQAJAAAGgHQAHgGAAgLQAAgLgHgGQgGgGgJAAQgIAAgHAGg");
	this.shape_64.setTransform(25.9,-8.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_65.setTransform(12.1,-7.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgFgFQgEgFgJAAQgHAAgEAFQgGAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNANAAQALAAAHAHQAGAHAAAKIAAAng");
	this.shape_66.setTransform(-15.8,-8.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_67.setTransform(-21.9,-8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#18334D").s().p("AgVAfIAAAMIgJAAIAAhWIAJAAIAAAlQAJgOAOAAQALAAAJAJQAJAJAAAOQAAAPgJAJQgIAJgMAAQgOAAgJgOgAgPgFQgHAHAAAKQAAAKAHAHQAHAHAIAAQAJAAAGgHQAHgGAAgLQAAgLgHgGQgGgGgJAAQgIAAgHAGg");
	this.shape_68.setTransform(-35.6,-8.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAEgFQAGgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgHANgNAAQgLAAgHgHg");
	this.shape_69.setTransform(-46.8,-7.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_70.setTransform(-77.6,-7.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#18334D").s().p("AAhAqIgKgWIgtAAIgKAWIgKAAIAnhTIAIAAIAmBTgAATALIgTgpIgSApIAlAAg");
	this.shape_71.setTransform(-85,-8.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgDATIgCgTIAAgBQALAAAGgEQAGgFAAgHIAAgBQAAgGgEgEQgFgFgJAAQgKAAgLALIgGgGQAMgNAQAAQAMgBAIAHQAGAHAAAKIAAAAQAAALgGAGQgHAFgLACIgBANg");
	this.shape_72.setTransform(78.2,9.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#18334D").s().p("AgbAhIAEgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgKANgNAAQgMAAgJgIQgIgIgBgMQAAgNAKgJQAIgHAMgBQANAAAKANIAAgLIAJAAIAAAyQABAOgJAIQgIAJgPAAQgPAAgMgJgAgPgbQgGAGAAAKIAAAAQAAAJAGAFQAHAGAIAAQAJAAAGgGQAIgFgBgJQABgJgIgHQgGgFgJAAQgJAAgGAFg");
	this.shape_73.setTransform(64.1,11.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#18334D").s().p("AgTAXQgIgKgBgNIAAAAQABgMAIgJQAKgLANAAQANAAALAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAJAAQAKAAAJgJIAGAFQgLANgOAAQgNAAgKgKg");
	this.shape_74.setTransform(24.2,10.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#18334D").s().p("AgVAkQgJgJAAgPQAAgOAJgJQAIgJAMAAQAOAAAJAOIAAglIAKAAIAABWIgKAAIAAgNQgJAPgOAAQgMAAgIgJgAgOgFQgHAGAAALQAAAKAHAHQAGAHAIAAQAJAAAGgHQAIgHAAgKQAAgKgIgHQgGgGgJAAQgJAAgFAGg");
	this.shape_75.setTransform(-25.7,9.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAHAAAGgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgMAAQgLAAgHgHg");
	this.shape_76.setTransform(-33.1,10.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgHAAgGAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNAMAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_77.setTransform(-70.9,10.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgFgFQgEgFgIAAQgIAAgFAFQgFAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAIgNAMAAQALAAAHAHQAGAHAAAKIAAAng");
	this.shape_78.setTransform(102.9,-8.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_79.setTransform(96.8,-8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#18334D").s().p("AARAgIgRgxIgQAxIgIAAIgWg+IAKAAIAQAxIARgxIAHAAIARAxIAQgxIAKAAIgWA+g");
	this.shape_80.setTransform(86.4,-7.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_81.setTransform(75.4,-8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHAKABQAGAAADgEQAEgCAAgEQAAgFgFgCQgDgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQAMAAAJAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAFABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgOAAgLgJg");
	this.shape_82.setTransform(70.1,-7.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_83.setTransform(61.8,-8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAEABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgOAAgLgJg");
	this.shape_84.setTransform(32.4,-7.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#18334D").s().p("AgJAsIAAg1IgJAAIAAgIIAJAAIAAgGQAAgKAFgGQAEgEAIAAQAHAAADACIAAAIIgJgCQgJAAAAANIAAAFIASAAIAAAIIgSAAIAAA1g");
	this.shape_85.setTransform(24.1,-8.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_86.setTransform(15.1,-7.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgEgFQgFgFgJAAQgGAAgFAFQgGAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNAOAAQAKAAAHAHQAGAHAAAKIAAAng");
	this.shape_87.setTransform(8.4,-8.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#18334D").s().p("AgHAKQAIgEgBgGIgCAAIAAgNIAKAAIAAALQgBAGgDAFQgDADgGABg");
	this.shape_88.setTransform(-0.4,-3.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_89.setTransform(-4,-8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgDgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAFABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgOAAgLgJg");
	this.shape_90.setTransform(-9.3,-7.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_91.setTransform(-17.6,-8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_92.setTransform(-28.3,-7.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#18334D").s().p("AgJAsIAAg1IgIAAIAAgIIAIAAIAAgGQAAgKAFgGQAEgEAJAAQAFAAAEACIAAAIIgJgCQgJAAAAANIAAAFIASAAIAAAIIgSAAIAAA1g");
	this.shape_93.setTransform(-36.9,-8.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_94.setTransform(-40.8,-8.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_95.setTransform(-45.9,-7.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgDATIgCgTIAAgBQALAAAGgEQAGgFAAgHIAAgBQAAgGgEgFQgGgEgIAAQgLAAgJALIgHgGQAMgNAQAAQAMgBAIAHQAGAHAAAKIAAAAQAAALgGAGQgHAFgLACIgCANg");
	this.shape_96.setTransform(110.5,-8.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#18334D").s().p("AARAsIgWgdIgMANIAAAQIgKAAIAAhXIAKAAIAAA8IAggiIAMAAIgbAZIAbAkg");
	this.shape_97.setTransform(92.8,-8.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgFgFQgEgFgIAAQgIAAgFAFQgFAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAIgNANAAQALAAAGAHQAGAHAAAKIAAAng");
	this.shape_98.setTransform(75.2,-8.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgEgFQgFgFgIAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNANAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_99.setTransform(9.5,-7.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAHAAAGgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgMAAQgLAAgHgHg");
	this.shape_100.setTransform(-70.8,-7.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgEATIgCgTIABgBQAKAAAHgEQAGgFAAgHIAAgBQAAgGgFgEQgFgFgHAAQgLAAgLALIgFgGQALgNAQAAQAMgBAIAHQAHAHAAAKIAAAAQAAALgHAGQgHAFgMACIAAANg");
	this.shape_101.setTransform(79.9,9.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#18334D").s().p("AgVAkQgJgJAAgPQAAgOAJgJQAIgJAMAAQAOAAAJAOIAAglIAKAAIAABWIgKAAIAAgNQgJAPgOAAQgMAAgIgJgAgOgFQgHAGAAALQAAAKAHAHQAGAHAIAAQAJAAAHgHQAHgHAAgKQAAgKgHgHQgHgGgJAAQgJAAgFAGg");
	this.shape_102.setTransform(72.7,9.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#18334D").s().p("AgTAXQgIgKgBgNIAAAAQABgMAIgJQAKgLANAAQANAAALAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAJAAQAKAAAJgJIAGAFQgLANgOAAQgNAAgKgKg");
	this.shape_103.setTransform(44.9,10.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAIAAAFgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgNAAQgLAAgGgHg");
	this.shape_104.setTransform(37.8,10.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAJABQAGAAADgEQAEgCAAgEQAAgFgFgCQgCgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQAMAAALAHIgFAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgNAAgMgJg");
	this.shape_105.setTransform(31.2,10.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHALABQAFAAAEgEQADgCAAgEQAAgFgFgCQgCgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQAMAAALAHIgFAGQgJgFgJgBQgEAAgEAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgNAAgMgJg");
	this.shape_106.setTransform(21.9,10.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_107.setTransform(10.8,10.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#18334D").s().p("AAmAgIAAgjQgBgJgDgFQgFgFgIAAQgGAAgFAFQgFAFgBAJIAAAjIgIAAIAAgkQABgIgFgFQgFgFgGAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQAKAAAHAHQAGAHAAALIAAAmg");
	this.shape_108.setTransform(1.7,10.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHAKABQAGAAADgEQAEgCAAgEQAAgFgFgCQgDgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQANAAAJAHIgEAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADAEABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgNAAgMgJg");
	this.shape_109.setTransform(-19.4,10.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAEgFQAGgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgHANgOAAQgKAAgHgHg");
	this.shape_110.setTransform(-25.9,10.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#18334D").s().p("AgSAXQgKgKABgNIAAAAQgBgMAKgJQAJgLAMAAQAOAAALAMIgGAGQgJgJgKAAQgIAAgGAHQgHAHAAAJQAAAKAHAHQAGAHAIAAQALAAAJgJIAFAFQgKANgPAAQgMAAgJgKg");
	this.shape_111.setTransform(-32.8,10.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#18334D").s().p("AgcAhIAFgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgJANgOAAQgMAAgIgIQgKgIABgMQAAgNAJgJQAIgHAMgBQAOAAAJANIAAgLIAKAAIAAAyQgBAOgHAIQgJAJgPAAQgPAAgNgJgAgOgbQgHAGAAAKIAAAAQAAAJAHAFQAGAGAIAAQAJAAAGgGQAIgFAAgJQAAgJgIgHQgGgFgJAAQgIAAgGAFg");
	this.shape_112.setTransform(-43.8,11.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgEgFQgFgFgJAAQgGAAgFAFQgGAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAHgNAOAAQAKAAAHAHQAGAHAAALIAAAmg");
	this.shape_113.setTransform(-51.1,10.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_114.setTransform(-72.3,10.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHALABQAFAAAEgEQADgCAAgEQAAgFgFgCQgCgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQAMAAALAHIgFAGQgJgFgJgBQgEAAgEAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgNAAgMgJg");
	this.shape_115.setTransform(102,-7.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#18334D").s().p("AgDAfIgbg9IAKAAIAVAyIAVgyIAJAAIgbA9g");
	this.shape_116.setTransform(88.7,-7.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#18334D").s().p("AgGAKQAHgEgBgGIgDAAIAAgNIAKAAIAAALQABAGgEAFQgDADgGABg");
	this.shape_117.setTransform(40.9,-3.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgEgFQgFgFgJAAQgGAAgFAFQgGAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAHgNANAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_118.setTransform(36.1,-7.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#18334D").s().p("AgeApIAAhQIAJAAIAAANQAJgOAOAAQALAAAJAIQAJAJAAAPQAAAOgJAJQgIAJgMAAQgOAAgJgOIAAAfgAgPgZQgHAHAAAKQAAAKAHAHQAHAGAIAAQAJAAAGgGQAHgHAAgKQAAgLgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_119.setTransform(-18,-6.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#18334D").s().p("AgeApIAAhQIAJAAIAAANQAJgOAOAAQALAAAJAIQAJAJAAAPQAAAOgJAJQgIAJgMAAQgOAAgJgOIAAAfgAgPgZQgHAHAAAKQAAAKAHAHQAHAGAIAAQAJAAAGgGQAHgHAAgKQAAgLgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_120.setTransform(-40.5,-6.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAFgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgNAAQgLAAgGgHg");
	this.shape_121.setTransform(-62.1,-7.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_122.setTransform(-69.5,-7.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgOAAgLgJg");
	this.shape_123.setTransform(107.1,10.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#18334D").s().p("AAmAgIAAgjQAAgJgFgFQgEgFgIAAQgHAAgEAFQgGAFAAAJIAAAjIgIAAIAAgkQAAgIgEgFQgEgFgIAAQgHAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_124.setTransform(98.7,10.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#18334D").s().p("AgbAhIAEgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgKANgNAAQgMAAgJgIQgIgIgBgMQAAgNAKgJQAIgHAMgBQANAAAKANIAAgLIAJAAIAAAyQAAAOgIAIQgIAJgPAAQgPAAgMgJgAgPgbQgGAGAAAKIAAAAQAAAJAGAFQAHAGAIAAQAJAAAHgGQAGgFAAgJQAAgJgGgHQgHgFgJAAQgIAAgHAFg");
	this.shape_125.setTransform(-46.5,11.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_126.setTransform(-68.8,10.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#18334D").s().p("AAmAgIAAgjQgBgJgEgFQgEgFgHAAQgIAAgFAFQgEAFAAAJIAAAjIgIAAIAAgkQgBgIgEgFQgEgFgIAAQgHAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQAKAAAHAHQAGAHAAALIAAAmg");
	this.shape_127.setTransform(-103.6,10.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_128.setTransform(-112.8,10.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHAKABQAGAAADgEQAEgCAAgEQAAgFgFgCQgDgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQAMAAAJAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAFABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgOAAgLgJg");
	this.shape_129.setTransform(100.7,-7.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#18334D").s().p("AgKA0IAAgHIAFAAQAGAAAAgIIAAhBIAJAAIAABBQAAAQgOAAIgGgBgAAAgpIAAgLIALAAIAAALg");
	this.shape_130.setTransform(81.1,-7.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_131.setTransform(58.6,-7.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgEgFQgFgFgJAAQgHAAgEAFQgGAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNAOAAQALAAAGAHQAGAHAAAKIAAAng");
	this.shape_132.setTransform(51.2,-8.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#18334D").s().p("AARAgIgRgxIgQAxIgIAAIgWg+IAKAAIAQAxIARgxIAHAAIARAxIAQgxIAKAAIgWA+g");
	this.shape_133.setTransform(42.4,-7.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_134.setTransform(-7.3,-8.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#18334D").s().p("AgVAkQgKgJAAgPQAAgOAKgJQAIgJANAAQANAAAJAOIAAglIAJAAIAABWIgJAAIAAgNQgJAPgNAAQgNAAgIgJgAgPgFQgGAGAAALQAAAKAGAHQAHAHAIAAQAJAAAGgHQAIgHgBgKQABgKgIgHQgGgGgJAAQgIAAgHAGg");
	this.shape_135.setTransform(-16.4,-8.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_136.setTransform(-24,-7.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_137.setTransform(-31.7,-7.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#18334D").s().p("AgcAhIAFgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgJANgOAAQgMAAgJgIQgJgIAAgMQAAgNAKgJQAIgHAMgBQAOAAAJANIAAgLIAJAAIAAAyQABAOgJAIQgIAJgPAAQgPAAgNgJgAgOgbQgHAGAAAKIAAAAQAAAJAHAFQAGAGAIAAQAJAAAGgGQAIgFgBgJQABgJgIgHQgGgFgJAAQgIAAgGAFg");
	this.shape_138.setTransform(-39.6,-6.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_139.setTransform(-68.2,-7.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#18334D").s().p("AgGAqIAAgMIAKAAIAAAMgAgDATIgCgTIAAgBQALAAAGgEQAGgFAAgHIAAgBQAAgGgEgEQgGgFgIAAQgLAAgJALIgHgGQAMgNAQAAQAMgBAIAHQAGAHAAAKIAAAAQAAALgGAGQgHAFgLACIgCANg");
	this.shape_140.setTransform(81.3,9.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAJABQAGAAADgEQAEgCAAgEQAAgFgFgCQgCgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQANAAAKAHIgFAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgGAFgJAAQgNAAgMgJg");
	this.shape_141.setTransform(75.2,10.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#18334D").s().p("AAlAgIAAgjQAAgJgDgFQgFgFgHAAQgHAAgGAFQgEAFAAAJIAAAjIgIAAIAAgkQAAgIgFgFQgFgFgGAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_142.setTransform(66.8,10.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHALABQAFAAADgEQAEgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAFABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgOAAgLgJg");
	this.shape_143.setTransform(10.6,10.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNAMAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_144.setTransform(-2.8,10.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#18334D").s().p("AATAfIgTgZIgSAZIgLAAIAZgfIgYgeIALAAIARAYIATgYIAKAAIgYAeIAZAfg");
	this.shape_145.setTransform(-37.4,10.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#18334D").s().p("AAlAgIAAgjQAAgJgDgFQgFgFgIAAQgHAAgFAFQgEAFAAAJIAAAjIgIAAIAAgkQAAgIgFgFQgFgFgGAAQgIAAgFAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAAKQAIgMAMAAQAOAAAFANQAIgNAOAAQALAAAGAHQAGAHAAALIAAAmg");
	this.shape_146.setTransform(-64.3,10.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#18334D").s().p("AgcAhIAFgHQAKAHANABQAKgBAGgFQAGgGAAgLIAAgHQgJANgOAAQgMAAgIgIQgKgIABgMQAAgNAJgJQAIgHAMgBQAOAAAJANIAAgLIAKAAIAAAyQgBAOgHAIQgJAJgPAAQgPAAgNgJgAgOgbQgHAGAAAKIAAAAQAAAJAHAFQAGAGAIAAQAJAAAHgGQAHgFAAgJQAAgJgHgHQgHgFgJAAQgIAAgGAFg");
	this.shape_147.setTransform(111.9,-6.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgEgFQgFgFgJAAQgGAAgFAFQgGAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNANAAQAKAAAHAHQAGAHAAALIAAAmg");
	this.shape_148.setTransform(104.6,-7.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#18334D").s().p("AgDAfIgbg9IALAAIAUAyIAUgyIAKAAIgbA9g");
	this.shape_149.setTransform(94.4,-7.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#18334D").s().p("AgVAkQgJgJAAgPQAAgOAJgJQAJgJALAAQAOAAAJAOIAAglIAKAAIAABWIgKAAIAAgNQgKAPgNAAQgLAAgJgJgAgPgFQgGAGAAALQAAAKAGAHQAHAHAIAAQAJAAAHgHQAGgHABgKQgBgKgGgHQgHgGgJAAQgIAAgHAGg");
	this.shape_150.setTransform(66.8,-8.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgEgFQgFgFgJAAQgHAAgFAFQgFAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNAOAAQALAAAGAHQAGAHAAAKIAAAng");
	this.shape_151.setTransform(23.3,-8.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_152.setTransform(9.9,-8.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#18334D").s().p("AgDAfIgbg9IALAAIATAyIAWgyIAJAAIgaA9g");
	this.shape_153.setTransform(-2.1,-7.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#18334D").s().p("AgJAsIAAg1IgJAAIAAgIIAJAAIAAgGQAAgKAFgGQAEgEAIAAQAGAAAFACIAAAIIgJgCQgKAAAAANIAAAFIATAAIAAAIIgTAAIAAA1g");
	this.shape_154.setTransform(-5.8,9.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgFgFQgEgFgIAAQgHAAgGAFQgFAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAIgNAMAAQALAAAHAHQAGAHAAAKIAAAng");
	this.shape_155.setTransform(91.6,-8.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#18334D").s().p("AgbAhIAEgHQALAHAMABQAKgBAGgFQAGgGAAgLIAAgHQgKANgNAAQgMAAgJgIQgIgIgBgMQAAgNAKgJQAIgHAMgBQANAAAKANIAAgLIAJAAIAAAyQAAAOgHAIQgJAJgPAAQgPAAgMgJgAgPgbQgGAGAAAKIAAAAQAAAJAGAFQAHAGAIAAQAJAAAHgGQAGgFAAgJQAAgJgGgHQgHgFgJAAQgIAAgHAFg");
	this.shape_156.setTransform(63.9,-6.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAALAHIgEAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgOAAgLgJg");
	this.shape_157.setTransform(36,-7.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#18334D").s().p("AgcAmIAEgIQAEADAFAAQAFAAACgDQADgDADgGIgcg9IAKAAIAWAzIAUgzIAJAAIgaA/QgEAKgDAEQgFAEgHAAQgHAAgHgDg");
	this.shape_158.setTransform(-78.2,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48,p:{x:-104.8,y:-7.1}},{t:this.shape_47,p:{x:-94}},{t:this.shape_46,p:{x:-86.7,y:-7.1}},{t:this.shape_45,p:{x:-79.3}},{t:this.shape_44},{t:this.shape_43,p:{x:-61.6,y:-7.2}},{t:this.shape_42,p:{x:-56}},{t:this.shape_41,p:{x:-49.3,y:-7.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-24.2,y:-7.2}},{t:this.shape_37,p:{x:-13.7}},{t:this.shape_36,p:{x:-6.6,y:-7.1}},{t:this.shape_35,p:{x:1}},{t:this.shape_34,p:{x:8.6}},{t:this.shape_33},{t:this.shape_32,p:{x:26.7}},{t:this.shape_31,p:{x:35,y:-7.1}},{t:this.shape_30,p:{x:43.8}},{t:this.shape_29},{t:this.shape_28,p:{x:56.1}},{t:this.shape_27},{t:this.shape_26,p:{x:66.3,y:-8.4}},{t:this.shape_25,p:{x:69.7}},{t:this.shape_24},{t:this.shape_23,p:{x:79.5,y:-8.3}},{t:this.shape_22,p:{x:84.6}},{t:this.shape_21,p:{x:91.8}},{t:this.shape_20},{t:this.shape_19,p:{x:103.6,y:-8.3}},{t:this.shape_18,p:{x:108.6}},{t:this.shape_17,p:{x:115,y:-7.1}},{t:this.shape_16},{t:this.shape_15,p:{x:-53.4}},{t:this.shape_14,p:{x:-46.4}},{t:this.shape_13,p:{x:-38.8,y:11.7}},{t:this.shape_12,p:{x:-28.1,y:11.8}},{t:this.shape_11,p:{x:-20.8,y:10.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:5.1,y:11.7}},{t:this.shape_7,p:{x:15.6,y:10.9}},{t:this.shape_6,p:{x:21.5,y:10}},{t:this.shape_5},{t:this.shape_4,p:{x:36.1,y:9.7}},{t:this.shape_3},{t:this.shape_2,p:{x:49.2}},{t:this.shape_1,p:{x:55.1,y:10}},{t:this.shape,p:{x:60.5}}]}).to({state:[{t:this.shape_71,p:{x:-85}},{t:this.shape_70},{t:this.shape_28,p:{x:-72}},{t:this.shape_12,p:{x:-61.6,y:-6.2}},{t:this.shape_46,p:{x:-54.3,y:-7.1}},{t:this.shape_69,p:{x:-46.8}},{t:this.shape_68},{t:this.shape_36,p:{x:-28,y:-7.1}},{t:this.shape_67,p:{x:-21.9,y:-8}},{t:this.shape_66,p:{x:-15.8}},{t:this.shape_41,p:{x:-5.5,y:-7.1}},{t:this.shape_13,p:{x:5.7,y:-6.3}},{t:this.shape_65,p:{x:12.1}},{t:this.shape_31,p:{x:18,y:-7.1}},{t:this.shape_64,p:{x:25.9,y:-8.3}},{t:this.shape_63,p:{x:31.2,y:-8.4}},{t:this.shape_22,p:{x:36.2}},{t:this.shape_62},{t:this.shape_17,p:{x:57.4,y:-7.1}},{t:this.shape_11,p:{x:64.2,y:-7.1}},{t:this.shape_61,p:{x:69.5,y:-8.4}},{t:this.shape_60,p:{x:74.5,y:-7.1}},{t:this.shape_18,p:{x:81.5}},{t:this.shape_59,p:{x:87.7}},{t:this.shape_7,p:{x:-66.5,y:10.9}},{t:this.shape_58,p:{x:-59.2,y:10.8}},{t:this.shape_57,p:{x:-51.9,y:9.7}},{t:this.shape_56,p:{x:-40.2}},{t:this.shape_23,p:{x:-34.9,y:9.7}},{t:this.shape_55},{t:this.shape_8,p:{x:-17.9,y:11.7}},{t:this.shape_19,p:{x:-12.7,y:9.7}},{t:this.shape_54},{t:this.shape_6,p:{x:-2.1,y:10}},{t:this.shape_53},{t:this.shape_52,p:{x:10.3,y:10.8}},{t:this.shape_15,p:{x:15.8}},{t:this.shape_1,p:{x:25.1,y:10}},{t:this.shape_2,p:{x:31.2}},{t:this.shape_4,p:{x:36.3,y:9.7}},{t:this.shape_38,p:{x:41.5,y:10.8}},{t:this.shape_51},{t:this.shape_14,p:{x:55.3}},{t:this.shape_43,p:{x:61.5,y:10.8}},{t:this.shape_50}]},1).to({state:[{t:this.shape_71,p:{x:-101.7}},{t:this.shape_59,p:{x:-94.3}},{t:this.shape_22,p:{x:-88.7}},{t:this.shape_47,p:{x:-78.3}},{t:this.shape_46,p:{x:-71,y:-7.1}},{t:this.shape_45,p:{x:-63.5}},{t:this.shape_66,p:{x:-52.7}},{t:this.shape_95,p:{x:-45.9}},{t:this.shape_94,p:{x:-40.8,y:-8.4}},{t:this.shape_93},{t:this.shape_92,p:{x:-28.3}},{t:this.shape_52,p:{x:-22,y:-7.2}},{t:this.shape_91},{t:this.shape_30,p:{x:-13.7}},{t:this.shape_90,p:{x:-9.3}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:15.1}},{t:this.shape_63,p:{x:20.2,y:-8.4}},{t:this.shape_85},{t:this.shape_84,p:{x:32.4,y:-7.1}},{t:this.shape_37,p:{x:38.9}},{t:this.shape_25,p:{x:43.7}},{t:this.shape_18,p:{x:48.7}},{t:this.shape_38,p:{x:55.9,y:-7.2}},{t:this.shape_83},{t:this.shape_23,p:{x:65.7,y:-8.3}},{t:this.shape_82,p:{x:70.1,y:-7.1}},{t:this.shape_81,p:{x:75.4}},{t:this.shape_80,p:{x:86.4,y:-7.1}},{t:this.shape_19,p:{x:93,y:-8.3}},{t:this.shape_79,p:{x:96.8}},{t:this.shape_78,p:{x:102.9,y:-8.4}},{t:this.shape_41,p:{x:-78.2,y:10.9}},{t:this.shape_77,p:{x:-70.9,y:10.8}},{t:this.shape_7,p:{x:-60.6,y:10.9}},{t:this.shape_8,p:{x:-52.9,y:11.7}},{t:this.shape_67,p:{x:-46.9,y:10}},{t:this.shape_4,p:{x:-43,y:9.7}},{t:this.shape_6,p:{x:-39.1,y:10}},{t:this.shape_76,p:{x:-33.1,y:10.9}},{t:this.shape_75},{t:this.shape_15,p:{x:-18.1}},{t:this.shape_26,p:{x:-8.8,y:9.6}},{t:this.shape_36,p:{x:-3,y:10.9}},{t:this.shape_43,p:{x:3.5,y:10.8}},{t:this.shape_1,p:{x:11.4,y:10}},{t:this.shape_14,p:{x:17.3}},{t:this.shape_74,p:{x:24.2,y:10.9}},{t:this.shape_2,p:{x:31.2}},{t:this.shape_58,p:{x:38.5,y:10.8}},{t:this.shape_31,p:{x:45.8,y:10.9}},{t:this.shape_61,p:{x:51.2,y:9.6}},{t:this.shape_11,p:{x:56.5,y:10.9}},{t:this.shape_73,p:{x:64.1}},{t:this.shape_12,p:{x:71.7,y:11.8}},{t:this.shape_72,p:{x:78.2}}]},1).to({state:[{t:this.shape_71,p:{x:-109}},{t:this.shape_59,p:{x:-101.6}},{t:this.shape_22,p:{x:-96}},{t:this.shape_12,p:{x:-85.6,y:-6.2}},{t:this.shape_11,p:{x:-78.3,y:-7.1}},{t:this.shape_100,p:{x:-70.8}},{t:this.shape_95,p:{x:-60.5}},{t:this.shape_57,p:{x:-49.6,y:-8.3}},{t:this.shape_92,p:{x:-42.3}},{t:this.shape_79,p:{x:-36.4}},{t:this.shape_86,p:{x:-30.8}},{t:this.shape_58,p:{x:-20,y:-7.2}},{t:this.shape_76,p:{x:-12.9,y:-7.1}},{t:this.shape_67,p:{x:-6.9,y:-8}},{t:this.shape_41,p:{x:2.2,y:-7.1}},{t:this.shape_99},{t:this.shape_35,p:{x:16.8}},{t:this.shape_74,p:{x:27.8,y:-7.1}},{t:this.shape_52,p:{x:33.8,y:-7.2}},{t:this.shape_23,p:{x:37.4,y:-8.3}},{t:this.shape_6,p:{x:41.2,y:-8}},{t:this.shape_19,p:{x:45.1,y:-8.3}},{t:this.shape_37,p:{x:50.1}},{t:this.shape_7,p:{x:56.6,y:-7.1}},{t:this.shape_61,p:{x:61.7,y:-8.4}},{t:this.shape_1,p:{x:69.1,y:-8}},{t:this.shape_98},{t:this.shape_4,p:{x:80.2,y:-8.3}},{t:this.shape_21,p:{x:85.5}},{t:this.shape_97},{t:this.shape_18,p:{x:99.2}},{t:this.shape_43,p:{x:105.4,y:-7.2}},{t:this.shape_96}]},1).to({state:[{t:this.shape_71,p:{x:-100.2}},{t:this.shape_59,p:{x:-92.8}},{t:this.shape_42,p:{x:-87.3}},{t:this.shape_12,p:{x:-76.8,y:-6.2}},{t:this.shape_122,p:{x:-69.5}},{t:this.shape_121,p:{x:-62.1}},{t:this.shape_7,p:{x:-51.7,y:-7.1}},{t:this.shape_120,p:{x:-40.5,y:-6.3}},{t:this.shape_34,p:{x:-33.3}},{t:this.shape_48,p:{x:-26,y:-7.1}},{t:this.shape_119,p:{x:-18,y:-6.3}},{t:this.shape_94,p:{x:-12.8,y:-8.4}},{t:this.shape_28,p:{x:-7.7}},{t:this.shape_13,p:{x:3.4,y:-6.3}},{t:this.shape_22,p:{x:10.6}},{t:this.shape_52,p:{x:16.8,y:-7.2}},{t:this.shape_90,p:{x:21.7}},{t:this.shape_46,p:{x:28.5,y:-7.1}},{t:this.shape_118,p:{x:36.1}},{t:this.shape_117},{t:this.shape_80,p:{x:51,y:-7.1}},{t:this.shape_66,p:{x:59.8}},{t:this.shape_36,p:{x:67.2,y:-7.1}},{t:this.shape_63,p:{x:76,y:-8.4}},{t:this.shape_31,p:{x:81.4,y:-7.1}},{t:this.shape_116},{t:this.shape_18,p:{x:95.6}},{t:this.shape_115},{t:this.shape_78,p:{x:-79.3,y:9.6}},{t:this.shape_114,p:{x:-72.3}},{t:this.shape_61,p:{x:-67.3,y:9.6}},{t:this.shape_8,p:{x:-61.6,y:11.7}},{t:this.shape_4,p:{x:-56.4,y:9.7}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-32.8}},{t:this.shape_110,p:{x:-25.9}},{t:this.shape_109},{t:this.shape_1,p:{x:-14.1,y:10}},{t:this.shape_11,p:{x:-7.9,y:10.9}},{t:this.shape_108},{t:this.shape_107,p:{x:10.8}},{t:this.shape_43,p:{x:17,y:10.8}},{t:this.shape_106,p:{x:21.9,y:10.9}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_74,p:{x:51.7,y:10.9}},{t:this.shape_15,p:{x:58.5}},{t:this.shape_14,p:{x:65.5}},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_71,p:{x:-98.9}},{t:this.shape_65,p:{x:-91.5}},{t:this.shape_34,p:{x:-86}},{t:this.shape_47,p:{x:-75.5}},{t:this.shape_139},{t:this.shape_69,p:{x:-60.8}},{t:this.shape_7,p:{x:-50.4,y:-7.1}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:-24}},{t:this.shape_135},{t:this.shape_134,p:{x:-7.3}},{t:this.shape_19,p:{x:-4.3,y:-8.3}},{t:this.shape_90,p:{x:0.1}},{t:this.shape_6,p:{x:5.4,y:-8}},{t:this.shape_28,p:{x:11.3}},{t:this.shape_118,p:{x:18.5}},{t:this.shape_22,p:{x:25.6}},{t:this.shape_59,p:{x:31.8}},{t:this.shape_133,p:{x:42.4}},{t:this.shape_132},{t:this.shape_131,p:{x:58.6}},{t:this.shape_18,p:{x:69.4}},{t:this.shape_38,p:{x:76.6,y:-7.2}},{t:this.shape_130,p:{x:81.1}},{t:this.shape_122,p:{x:87}},{t:this.shape_12,p:{x:94.3,y:-6.2}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:-103.6}},{t:this.shape_120,p:{x:-93.9,y:11.7}},{t:this.shape_48,p:{x:-86.3,y:10.9}},{t:this.shape_80,p:{x:-77.4,y:10.9}},{t:this.shape_126},{t:this.shape_52,p:{x:-62.6,y:10.8}},{t:this.shape_4,p:{x:-59,y:9.7}},{t:this.shape_58,p:{x:-53.8,y:10.8}},{t:this.shape_125,p:{x:-46.5,y:11.8}},{t:this.shape_119,p:{x:-34.8,y:11.7}},{t:this.shape_114,p:{x:-27.5}},{t:this.shape_46,p:{x:-20.2,y:10.9}},{t:this.shape_13,p:{x:-12.3,y:11.7}},{t:this.shape_94,p:{x:-7,y:9.6}},{t:this.shape_107,p:{x:-2}},{t:this.shape_1,p:{x:7.3,y:10}},{t:this.shape_36,p:{x:13.5,y:10.9}},{t:this.shape_82,p:{x:23.7,y:10.9}},{t:this.shape_31,p:{x:30.5,y:10.9}},{t:this.shape_63,p:{x:35.9,y:9.6}},{t:this.shape_60,p:{x:40.9,y:10.9}},{t:this.shape_15,p:{x:47.8}},{t:this.shape_8,p:{x:58.9,y:11.7}},{t:this.shape_43,p:{x:65.4,y:10.8}},{t:this.shape_11,p:{x:71.2,y:10.9}},{t:this.shape_56,p:{x:79.2}},{t:this.shape_61,p:{x:84.4,y:9.6}},{t:this.shape_14,p:{x:89.5}},{t:this.shape_124},{t:this.shape_123},{t:this.shape,p:{x:113.2}}]},1).to({state:[{t:this.shape_32,p:{x:-111}},{t:this.shape_131,p:{x:-102.8}},{t:this.shape_12,p:{x:-92,y:-6.2}},{t:this.shape_122,p:{x:-84.7}},{t:this.shape_100,p:{x:-77.2}},{t:this.shape_133,p:{x:-65}},{t:this.shape_41,p:{x:-56.7,y:-7.1}},{t:this.shape_38,p:{x:-49.4,y:-7.2}},{t:this.shape_79,p:{x:-43.5}},{t:this.shape_67,p:{x:-35.3,y:-8}},{t:this.shape_48,p:{x:-29.1,y:-7.1}},{t:this.shape_6,p:{x:-19.5,y:-8}},{t:this.shape_59,p:{x:-14.4}},{t:this.shape_7,p:{x:-9.1,y:-7.1}},{t:this.shape_153},{t:this.shape_22,p:{x:4.9}},{t:this.shape_152},{t:this.shape_1,p:{x:17.2,y:-8}},{t:this.shape_151,p:{x:23.3}},{t:this.shape_18,p:{x:30.4}},{t:this.shape_80,p:{x:42.5,y:-7.1}},{t:this.shape_46,p:{x:51.4,y:-7.1}},{t:this.shape_52,p:{x:57.9,y:-7.2}},{t:this.shape_134,p:{x:61.5}},{t:this.shape_150},{t:this.shape_106,p:{x:77.2,y:-7.1}},{t:this.shape_36,p:{x:84,y:-7.1}},{t:this.shape_94,p:{x:89.4,y:-8.4}},{t:this.shape_149},{t:this.shape_19,p:{x:99.3,y:-8.3}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_111,p:{x:-80.9}},{t:this.shape_31,p:{x:-73.8,y:10.9}},{t:this.shape_146},{t:this.shape_13,p:{x:-54.6,y:11.7}},{t:this.shape_63,p:{x:-49.3,y:9.6}},{t:this.shape_107,p:{x:-44.3}},{t:this.shape_145},{t:this.shape_64,p:{x:-26.4,y:9.7}},{t:this.shape_76,p:{x:-19.1,y:10.9}},{t:this.shape_84,p:{x:-12.6,y:10.9}},{t:this.shape_4,p:{x:-8.1,y:9.7}},{t:this.shape_144,p:{x:-2.8,y:10.8}},{t:this.shape_15,p:{x:4.2}},{t:this.shape_143},{t:this.shape_17,p:{x:16.4,y:10.9}},{t:this.shape_8,p:{x:27,y:11.7}},{t:this.shape_43,p:{x:33.5,y:10.8}},{t:this.shape_11,p:{x:39.3,y:10.9}},{t:this.shape_56,p:{x:47.3}},{t:this.shape_61,p:{x:52.5,y:9.6}},{t:this.shape_14,p:{x:57.6}},{t:this.shape_142},{t:this.shape_141,p:{x:75.2,y:10.9}},{t:this.shape_140}]},1).to({state:[{t:this.shape_32,p:{x:-97.2}},{t:this.shape_136,p:{x:-89}},{t:this.shape_158},{t:this.shape_131,p:{x:-70.9}},{t:this.shape_121,p:{x:-63.4}},{t:this.shape_42,p:{x:-52.8}},{t:this.shape_144,p:{x:-45.6,y:-7.2}},{t:this.shape_130,p:{x:-41.1}},{t:this.shape_122,p:{x:-35.2}},{t:this.shape_47,p:{x:-27.9}},{t:this.shape_151,p:{x:-17.2}},{t:this.shape_34,p:{x:-10.1}},{t:this.shape_63,p:{x:-5.1,y:-8.4}},{t:this.shape_8,p:{x:0.5,y:-6.3}},{t:this.shape_4,p:{x:5.8,y:-8.3}},{t:this.shape_77,p:{x:11,y:-7.2}},{t:this.shape_125,p:{x:18.3,y:-6.2}},{t:this.shape_76,p:{x:29.5,y:-7.1}},{t:this.shape_157},{t:this.shape_28,p:{x:42.5}},{t:this.shape_43,p:{x:48.7,y:-7.2}},{t:this.shape_141,p:{x:53.6,y:-7.1}},{t:this.shape_156},{t:this.shape_22,p:{x:71.5}},{t:this.shape_81,p:{x:77.3}},{t:this.shape_79,p:{x:85.5}},{t:this.shape_155},{t:this.shape_18,p:{x:98.6}},{t:this.shape_127,p:{x:-66.2}},{t:this.shape_48,p:{x:-56.8,y:10.9}},{t:this.shape_106,p:{x:-50.1,y:10.9}},{t:this.shape_67,p:{x:-44.8,y:10}},{t:this.shape_46,p:{x:-35.1,y:10.9}},{t:this.shape_110,p:{x:-27.7}},{t:this.shape_6,p:{x:-21.7,y:10}},{t:this.shape_36,p:{x:-12,y:10.9}},{t:this.shape_154},{t:this.shape_1,p:{x:1.9,y:10}},{t:this.shape_14,p:{x:7.8}},{t:this.shape_74,p:{x:14.8,y:10.9}},{t:this.shape_2,p:{x:21.8}},{t:this.shape_58,p:{x:29,y:10.8}},{t:this.shape_31,p:{x:36.4,y:10.9}},{t:this.shape_61,p:{x:41.7,y:9.6}},{t:this.shape_11,p:{x:47.1,y:10.9}},{t:this.shape_73,p:{x:54.7}},{t:this.shape_12,p:{x:62.2,y:11.8}},{t:this.shape_72,p:{x:68.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-15.6,240,34);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"salesforceDeveloper":0,"techArchitect":1,"marketingManager":2,"businessAnalyst":3,"salesManager":4,"serviceManager":5,"salesConsultant":6,"salesforceAdmin":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape.setTransform(106.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA3AAIAAAYIg3AAIAAATIA9AAIAAAbg");
	this.shape_1.setTransform(95.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334D").s().p("AgwA6IAAhzIAxAAQAWAAANALQANALAAATQAAATgOALQgNALgWAAIgQAAIAAAhgAgQAAIAQAAQAHAAAFgEQAFgEAAgGIAAgBQAAgPgRAAIgQAAg");
	this.shape_2.setTransform(84.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334D").s().p("AgsArQgRgSAAgZIAAAAQAAgYASgRQASgSAZAAQAbAAARARQASASAAAYQAAAZgSARQgSASgaAAQgaAAgSgRgAgVgVQgIAJAAAMQAAANAJAJQAIAJAMAAQANAAAIgJQAIgJAAgNIAAAAQAAgMgIgJQgIgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(71.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334D").s().p("AgrA6IAAhzIAgAAIAABXIA3AAIAAAcg");
	this.shape_4.setTransform(59.9,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA2AAIAAAYIg2AAIAAATIA9AAIAAAbg");
	this.shape_5.setTransform(49.2,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334D").s().p("AgOA6IgvhzIAkAAIAZBIIAbhIIAjAAIgvBzg");
	this.shape_6.setTransform(37.2,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA2AAIAAAYIg2AAIAAATIA9AAIAAAbg");
	this.shape_7.setTransform(25.7,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334D").s().p("Ag2A6IAAhzIAtAAQAdAAASAQQARAQAAAZIAAAAQAAAZgRAQQgTARgdAAgAgWAdIANAAQAOAAAJgHQAJgIAAgOIAAAAQAAgNgJgIQgJgIgOAAIgNAAg");
	this.shape_8.setTransform(13.9,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA2AAIAAAYIg2AAIAAATIA9AAIAAAbg");
	this.shape_9.setTransform(-2.5,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334D").s().p("AglArQgRgRAAgaIAAAAQAAgYARgSQARgRAZAAQAgAAARAYIgYATQgLgOgOAAQgLAAgIAJQgIAJAAAMQAAANAIAJQAIAJALAAQAPAAALgOIAYARQgTAaggAAQgYAAgRgRg");
	this.shape_10.setTransform(-14.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape_11.setTransform(-25.8,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334D").s().p("AgsArQgRgSAAgZIAAAAQAAgYASgRQASgSAZAAQAbAAARARQASASAAAYQAAAZgSARQgSASgaAAQgaAAgSgRgAgVgVQgIAJAAAMQAAANAJAJQAIAJAMAAQANAAAIgJQAIgJAAgNIAAAAQAAgMgIgJQgIgJgNAAQgMAAgJAJg");
	this.shape_12.setTransform(-38.9,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334D").s().p("AgtA6IAAhzIBbAAIAAAcIg7AAIAAAUIA2AAIAAAaIg2AAIAAApg");
	this.shape_13.setTransform(-50.9,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgXgFgJgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgPgLgQAAQgMAAAAAHIAAABQAAAEAEACQAEACAMADQAVAFAJAHQANAIAAAPIAAAAQAAASgOAKQgMAKgWAAQgfAAgWgTg");
	this.shape_14.setTransform(-62,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA3AAIAAAYIg3AAIAAATIA9AAIAAAbg");
	this.shape_15.setTransform(-72.5,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334D").s().p("AgrA6IAAhzIAgAAIAABXIA3AAIAAAcg");
	this.shape_16.setTransform(-83,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334D").s().p("AAfA6IgJgVIgsAAIgIAVIgiAAIAyhzIAdAAIAyBzgAANANIgNggIgMAgIAZAAg");
	this.shape_17.setTransform(-94.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgXgFgJgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgPgLgQAAQgMAAAAAHIAAABQAAAEAEACQAEACAMADQAVAFAJAHQANAIAAAPIAAAAQAAASgOAKQgMAKgWAAQgfAAgWgTg");
	this.shape_18.setTransform(-107,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334D").s().p("AgPA6IAAhXIgjAAIAAgcIBlAAIAAAcIgjAAIAABXg");
	this.shape_19.setTransform(96.7,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334D").s().p("AgPA6IAAhXIgiAAIAAgcIBkAAIAAAcIgjAAIAABXg");
	this.shape_20.setTransform(62.8,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334D").s().p("AgPA6IAAhzIAfAAIAABzg");
	this.shape_21.setTransform(54.7,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334D").s().p("AAVA6IAAgsIgpAAIAAAsIggAAIAAhzIAgAAIAAArIApAAIAAgrIAgAAIAABzg");
	this.shape_22.setTransform(45.7,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334D").s().p("AglArQgRgRAAgaIAAAAQAAgYARgSQARgRAZAAQAgAAARAYIgYATQgLgOgOAAQgLAAgIAJQgIAJAAAMQAAANAIAJQAIAJALAAQAPAAALgOIAYARQgTAaggAAQgYAAgRgRg");
	this.shape_23.setTransform(33.6,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334D").s().p("AAeA6IgIgVIgsAAIgIAVIgiAAIAyhzIAdAAIAyBzgAAMANIgMggIgMAgIAYAAg");
	this.shape_24.setTransform(-18.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334D").s().p("AglArQgRgRAAgaIAAAAQAAgYARgSQARgRAZAAQAgAAARAYIgYATQgLgOgOAAQgLAAgIAJQgIAJAAAMQAAANAIAJQAIAJALAAQAPAAALgOIAYARQgTAaggAAQgYAAgRgRg");
	this.shape_25.setTransform(-31.2,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334D").s().p("AgPA6IAAhzIAfAAIAABzg");
	this.shape_26.setTransform(-40,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334D").s().p("AAbA6Igxg/IAAA/IggAAIAAhzIAeAAIAvA8IAAg8IAgAAIAABzg");
	this.shape_27.setTransform(-49.2,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334D").s().p("AAVA6IAAgsIgpAAIAAAsIggAAIAAhzIAgAAIAAArIApAAIAAgrIAgAAIAABzg");
	this.shape_28.setTransform(-62,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334D").s().p("AglArQgRgRAAgaIAAAAQAAgYARgSQARgRAZAAQAgAAARAYIgYATQgLgOgOAAQgLAAgIAJQgIAJAAAMQAAANAIAJQAIAJALAAQAPAAALgOIAYARQgTAaggAAQgYAAgRgRg");
	this.shape_29.setTransform(-74.1,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334D").s().p("AgPA6IAAhXIgjAAIAAgcIBlAAIAAAcIgjAAIAABXg");
	this.shape_30.setTransform(-96.7,0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334D").s().p("AgmArQgRgRAAgaIAAAAQAAgYARgSQASgRAaAAQAbAAATARIgSAWQgOgLgOAAQgMAAgIAKQgJAJAAAMIAAAAQAAAOAJAKQAJAJAMAAQAMAAAHgFIAAgOIgWAAIAAgXIA1AAIAAAzQgWASgdAAQgaAAgSgRg");
	this.shape_31.setTransform(69.6,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIgiAAIAyhzIAdAAIAyBzgAANANIgNggIgMAgIAZAAg");
	this.shape_32.setTransform(56.7,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#18334D").s().p("AAeA6IgIgVIgrAAIgJAVIghAAIAwhzIAfAAIAwBzgAAMANIgMggIgMAgIAYAAg");
	this.shape_33.setTransform(30.7,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#18334D").s().p("AAdA6IAAhCIgdAtIAAAAIgdgsIAABBIgfAAIAAhzIAiAAIAaAtIAcgtIAiAAIAABzg");
	this.shape_34.setTransform(17,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#18334D").s().p("AgmArQgRgRgBgaIAAAAQAAgYASgSQASgRAaAAQAbAAATARIgSAWQgOgLgOAAQgMAAgIAKQgJAJAAAMIAAAAQAAAOAJAKQAJAJAMAAQAMAAAHgFIAAgOIgWAAIAAgXIA1AAIAAAzQgWASgdAAQgaAAgSgRg");
	this.shape_35.setTransform(-1.1,0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18334D").s().p("AAbA6Igxg/IAAA/IggAAIAAhzIAeAAIAvA8IAAg8IAgAAIAABzg");
	this.shape_36.setTransform(-13.9,0.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#18334D").s().p("AARA6IgcgrIgMANIAAAeIggAAIAAhzIAgAAIAAAvIAngvIAmAAIgsAyIAuBBg");
	this.shape_37.setTransform(-53,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIgiAAIAyhzIAdAAIAyBzgAANANIgNggIgMAgIAZAAg");
	this.shape_38.setTransform(-77.9,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18334D").s().p("AAdA6IAAhCIgdAtIAAAAIgdgsIAABBIggAAIAAhzIAiAAIAbAtIAbgtIAiAAIAABzg");
	this.shape_39.setTransform(-91.6,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18334D").s().p("AgPA6IAAgsIgshHIAkAAIAXAqIAZgqIAjAAIgsBHIAAAsg");
	this.shape_40.setTransform(59,0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#18334D").s().p("AAeA6IgIgVIgsAAIgIAVIghAAIAwhzIAfAAIAwBzgAAMANIgMggIgMAgIAYAAg");
	this.shape_41.setTransform(10.3,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18334D").s().p("AgxApIASgWQARAOATAAQANAAAAgIIAAAAQAAgEgEgCIgPgFQgVgFgJgHQgNgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAFACQADACALADQAWAFAKAHQAMAIgBAPIAAAAQABASgNAKQgNAKgVAAQggAAgVgTg");
	this.shape_42.setTransform(-17.1,0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#18334D").s().p("AgxApIASgWQARAOATAAQANAAAAgIIAAAAQAAgEgEgCIgPgFQgVgFgJgHQgNgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAFACQADACALADQAWAFAKAHQAMAIgBAPIAAAAQABASgNAKQgNAKgVAAQggAAgVgTg");
	this.shape_43.setTransform(-57.1,0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18334D").s().p("AgmAuQgPgOAAgaIAAhAIAhAAIAAA/QAAAZAUAAQAVAAAAgYIAAhAIAhAAIAAA/QAAAbgPAOQgOANgZAAQgZAAgNgNg");
	this.shape_44.setTransform(-68.6,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18334D").s().p("AgzA6IAAhzIA7AAQAVAAAKAKQAIAIAAALIAAABQAAASgSAHQAXAHAAAVQAAAPgMAIQgLAJgVAAgAgTAgIAXAAQAQAAAAgLQAAgKgQAAIgXAAgAgTgLIATAAQAPAAAAgKIAAAAQAAgKgOAAIgUAAg");
	this.shape_45.setTransform(-80.4,0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#18334D").s().p("AglArQgTgRABgaIAAAAQAAgYARgSQASgRAaAAQAbAAAUARIgTAWQgNgLgPAAQgMAAgJAKQgIAJAAAMIAAAAQAAAOAJAKQAIAJAOAAQALAAAHgFIAAgOIgXAAIAAgXIA1AAIAAAzQgVASgdAAQgaAAgRgRg");
	this.shape_46.setTransform(45.4,0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIghAAIAwhzIAfAAIAwBzgAANANIgNggIgMAgIAZAAg");
	this.shape_47.setTransform(32.6,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18334D").s().p("AAeA6IgIgVIgsAAIgIAVIghAAIAwhzIAeAAIAyBzgAAMANIgMggIgMAgIAYAAg");
	this.shape_48.setTransform(6.5,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#18334D").s().p("AAeA6IAAhCIgeAtIAAAAIgdgsIAABBIgfAAIAAhzIAhAAIAbAtIAcgtIAhAAIAABzg");
	this.shape_49.setTransform(-7.2,0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgWgFgKgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAFACQADACAMADQAVAFAJAHQAMAIAAAPIAAAAQAAASgNAKQgMAKgWAAQgfAAgWgTg");
	this.shape_50.setTransform(-24.4,0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIgiAAIAyhzIAdAAIAxBzgAANANIgNggIgMAgIAZAAg");
	this.shape_51.setTransform(-57.3,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgWgFgKgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAFACQADACAMADQAVAFAJAHQAMAIAAAPIAAAAQAAASgNAKQgMAKgWAAQgfAAgWgTg");
	this.shape_52.setTransform(-69.4,0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#18334D").s().p("AgmArQgRgRgBgaIAAAAQAAgYASgSQASgRAZAAQAcAAATARIgTAWQgNgLgPAAQgLAAgIAKQgJAJAAAMIAAAAQAAAOAJAKQAJAJAMAAQAMAAAHgFIAAgOIgWAAIAAgXIA1AAIAAAzQgWASgdAAQgaAAgSgRg");
	this.shape_53.setTransform(54.8,0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#18334D").s().p("AAeA6IgIgVIgsAAIgIAVIgiAAIAyhzIAdAAIAyBzgAANANIgNggIgMAgIAZAAg");
	this.shape_54.setTransform(42,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIgiAAIAxhzIAfAAIAwBzgAANANIgNggIgMAgIAZAAg");
	this.shape_55.setTransform(15.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#18334D").s().p("AAdA6IAAhCIgdAtIAAAAIgdgsIAABBIggAAIAAhzIAjAAIAaAtIAbgtIAjAAIAABzg");
	this.shape_56.setTransform(2.2,0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#18334D").s().p("AgPA6IAAhXIgiAAIAAgcIBjAAIAAAcIgiAAIAABXg");
	this.shape_57.setTransform(114.3,0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#18334D").s().p("AAfA6IgJgVIgrAAIgJAVIgiAAIAyhzIAeAAIAwBzgAANANIgNggIgMAgIAZAAg");
	this.shape_58.setTransform(89.4,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#18334D").s().p("AgPA6IAAhXIgiAAIAAgcIBjAAIAAAcIgiAAIAABXg");
	this.shape_59.setTransform(77.4,0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#18334D").s().p("AgxApIARgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgPgFQgVgFgKgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAFACQAEACAKADQAWAFAKAHQAMAIgBAPIAAAAQABASgNAKQgNAKgWAAQgfAAgVgTg");
	this.shape_60.setTransform(43.8,0.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgWgFgKgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgPgLgQAAQgMAAAAAHIAAABQAAAEAFACQAEACALADQAVAFAJAHQAMAIAAAPIAAAAQAAASgMAKQgNAKgWAAQgfAAgWgTg");
	this.shape_61.setTransform(-69.5,0.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgWgFgKgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgPgLgQAAQgMAAAAAHIAAABQAAAEAFACQAEACALADQAVAFAJAHQAMAIAAAPIAAAAQAAASgMAKQgNAKgWAAQgfAAgWgTg");
	this.shape_62.setTransform(-114.5,0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#18334D").s().p("AgPA6IAAhXIgjAAIAAgcIBkAAIAAAcIgiAAIAABXg");
	this.shape_63.setTransform(66.4,0.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#18334D").s().p("Ag2A6IAAhzIAtAAQAdAAASAQQARAQAAAZIAAAAQAAAZgSAQQgSARgdAAgAgWAdIANAAQAOAAAJgHQAIgIABgOIAAAAQgBgNgIgIQgJgIgOAAIgNAAg");
	this.shape_64.setTransform(6.1,0.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape_65.setTransform(-46.6,0.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#18334D").s().p("AgxApIASgWQARAOATAAQANAAAAgIIAAAAQAAgEgEgCIgPgFQgWgFgIgHQgNgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAEACQAFACAKADQAWAFAKAHQAMAIgBAPIAAAAQABASgNAKQgNAKgVAAQggAAgVgTg");
	this.shape_66.setTransform(-82.9,0.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#18334D").s().p("AgxApIASgWQARAOATAAQANAAAAgIIAAAAQAAgEgEgCIgPgFQgWgFgIgHQgNgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgQgLgPAAQgMAAAAAHIAAABQAAAEAEACQAFACAKADQAWAFAKAHQAMAIgBAPIAAAAQABASgNAKQgNAKgVAAQggAAgVgTg");
	this.shape_67.setTransform(-127.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{x:-107}},{t:this.shape_17,p:{x:-94.9}},{t:this.shape_16,p:{x:-83}},{t:this.shape_15,p:{x:-72.5}},{t:this.shape_14,p:{x:-62}},{t:this.shape_13,p:{x:-50.9}},{t:this.shape_12,p:{x:-38.9}},{t:this.shape_11,p:{x:-25.8}},{t:this.shape_10,p:{x:-14.1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:37.2}},{t:this.shape_5,p:{x:49.2}},{t:this.shape_4,p:{x:59.9}},{t:this.shape_3,p:{x:71.5}},{t:this.shape_2},{t:this.shape_1,p:{x:95.1}},{t:this.shape,p:{x:106.7}}]}).to({state:[{t:this.shape_30},{t:this.shape_1,p:{x:-85.6}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-49.2}},{t:this.shape_26,p:{x:-40}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_4,p:{x:-6.8}},{t:this.shape_17,p:{x:9}},{t:this.shape,p:{x:21.9}},{t:this.shape_23,p:{x:33.6}},{t:this.shape_22},{t:this.shape_21,p:{x:54.7}},{t:this.shape_20,p:{x:62.8}},{t:this.shape_5,p:{x:73.9}},{t:this.shape_10,p:{x:85.4}},{t:this.shape_19,p:{x:96.7}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:-65.1}},{t:this.shape_37},{t:this.shape_5,p:{x:-41.8}},{t:this.shape_19,p:{x:-31.1}},{t:this.shape_21,p:{x:-23}},{t:this.shape_36,p:{x:-13.9}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_27,p:{x:43.7}},{t:this.shape_32,p:{x:56.7}},{t:this.shape_31},{t:this.shape_1,p:{x:81.6}},{t:this.shape,p:{x:93.2}}]},1).to({state:[{t:this.shape_45},{t:this.shape_44,p:{x:-68.6}},{t:this.shape_43},{t:this.shape_21,p:{x:-48.9}},{t:this.shape_36,p:{x:-39.8}},{t:this.shape_5,p:{x:-27.6}},{t:this.shape_42,p:{x:-17.1}},{t:this.shape_18,p:{x:-6.3}},{t:this.shape_41,p:{x:10.3}},{t:this.shape_27,p:{x:23.3}},{t:this.shape_32,p:{x:36.4}},{t:this.shape_4,p:{x:48.3}},{t:this.shape_40},{t:this.shape_14,p:{x:70.2}},{t:this.shape_20,p:{x:81.2}}]},1).to({state:[{t:this.shape_52},{t:this.shape_51,p:{x:-57.3}},{t:this.shape_4,p:{x:-45.4}},{t:this.shape_1,p:{x:-34.9}},{t:this.shape_50},{t:this.shape_49,p:{x:-7.2}},{t:this.shape_48},{t:this.shape_27,p:{x:19.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_5,p:{x:57.5}},{t:this.shape,p:{x:69.1}}]},1).to({state:[{t:this.shape_14,p:{x:-78.8}},{t:this.shape_5,p:{x:-67.5}},{t:this.shape_11,p:{x:-55.9}},{t:this.shape_6,p:{x:-44.1}},{t:this.shape_21,p:{x:-35.2}},{t:this.shape_10,p:{x:-26.4}},{t:this.shape_15,p:{x:-14.8}},{t:this.shape_56},{t:this.shape_55,p:{x:15.9}},{t:this.shape_27,p:{x:28.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_1,p:{x:66.9}},{t:this.shape,p:{x:78.5}}]},1).to({state:[{t:this.shape_62},{t:this.shape_55,p:{x:-102.4}},{t:this.shape_16,p:{x:-90.5}},{t:this.shape_15,p:{x:-80}},{t:this.shape_61},{t:this.shape_13,p:{x:-58.4}},{t:this.shape_12,p:{x:-46.4}},{t:this.shape,p:{x:-33.3}},{t:this.shape_23,p:{x:-21.6}},{t:this.shape_1,p:{x:-10}},{t:this.shape_10,p:{x:6}},{t:this.shape_3,p:{x:18.8}},{t:this.shape_36,p:{x:32.1}},{t:this.shape_60},{t:this.shape_44,p:{x:55.6}},{t:this.shape_4,p:{x:67.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_27,p:{x:102.4}},{t:this.shape_57,p:{x:114.3}}]},1).to({state:[{t:this.shape_67},{t:this.shape_41,p:{x:-115.8}},{t:this.shape_4,p:{x:-103.8}},{t:this.shape_5,p:{x:-93.4}},{t:this.shape_66},{t:this.shape_13,p:{x:-71.7}},{t:this.shape_12,p:{x:-59.8}},{t:this.shape_65},{t:this.shape_10,p:{x:-34.9}},{t:this.shape_1,p:{x:-23.3}},{t:this.shape_51,p:{x:-6.9}},{t:this.shape_64},{t:this.shape_49,p:{x:19.4}},{t:this.shape_26,p:{x:29.2}},{t:this.shape_27,p:{x:38.3}},{t:this.shape_21,p:{x:47.5}},{t:this.shape_42,p:{x:55.4}},{t:this.shape_63},{t:this.shape_11,p:{x:78.1}},{t:this.shape_55,p:{x:90.2}},{t:this.shape_57,p:{x:102.2}},{t:this.shape_3,p:{x:114.4}},{t:this.shape,p:{x:127.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.3,-9.3,228.7,20.5);


(lib.text_salesforceDeveloper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgugCIAUgZQAKgMALgBQAIgBAHAGQAMAKgEAPIAdADIgNAQIgagCIgGAGIARAOIgMAPgAgNgQIgIAKIANAKIAIgJQAFgIgFgGQgDgCgCAAQgEAAgEAFg");
	this.shape.setTransform(24.2,14.9,1,1,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsgGIAqgmIAKAMIgbAaIAIAGIAYgWIAKAMIgYAVIAHAIIAbgYIALAMIgpAmg");
	this.shape_1.setTransform(18.4,18.3,1,1,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghgQIAZgRQAKgIAKABQAKABAHAKQAHAKgDAKQgDAJgLAIIgIAFIALARIgQALgAAAgTIgIAFIAKAPIAIgFQAJgGgFgIIgBAAQgCgEgEAAQgEAAgDADg");
	this.shape_2.setTransform(11.2,21.4,1,1,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAjQgOgFgHgNQgHgOAGgNQAFgPAOgHQAPgHANAFQAOAFAHANIAAABQAHANgFANQgGAPgOAHQgJAEgIAAQgFAAgGgCgAgHgQQgHAEgCAHQgCAGADAHIAAAAQAEAHAGADQAGADAIgEQAHgDACgIQACgGgEgHQgDgHgHgCIgGgCQgEAAgDACg");
	this.shape_3.setTransform(4.9,23.5,1,1,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjgdIASgHIARAyIAfgKIAFAQIgyAQg");
	this.shape_4.setTransform(-1.9,25,1,1,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghgcIA2gLIADARIgkAHIACAKIAggGIADAOIggAGIACALIAkgHIADARIg3AKg");
	this.shape_5.setTransform(-8.3,24.6,1,1,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglggIAXgBIAQAqIAOgsIAVAAIgZBGIgRABg");
	this.shape_6.setTransform(-15.7,23.6,1,1,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAgIAIhFIA3AGIgCARIgkgEIgBAKIAgAEIgCAOIgggEIgBALIAkAFIgCAQg");
	this.shape_7.setTransform(-22.5,21.8,1,1,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAkIgagHIARhCIAaAHQARAEAIAMQAIAMgEAOIAAAAQgEAPgNAHQgHAEgJAAQgGAAgHgCgAgNASIAHACQASAFAFgSQAEgQgTgFIgGgCg");
	this.shape_8.setTransform(-29.3,18.4,1,1,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#19334C").s().p("AnQCwIHKoMIHXH/QjFC2kKAEIgJAAQkDAAjGitg");
	this.shape_9.setTransform(-6.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_salesforceDeveloper, new cjs.Rectangle(-61.1,-34.8,122.3,69.8), null);


(lib.swimming_horse_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swimming_horse();
	this.instance.parent = this;
	this.instance.setTransform(-78,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swimming_horse_1, new cjs.Rectangle(-78,-102,156,204), null);


(lib.swimming_goat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swimming_goat();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swimming_goat_1, new cjs.Rectangle(-90.5,-108,181,216), null);


(lib.swimming_bear_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.swimming_bear();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.swimming_bear_1, new cjs.Rectangle(-108.5,-154.5,217,309), null);


(lib.subtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape.setTransform(163.3,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAJAAQALAAAKAHIgDAGQgKgFgJgBQgEAAgDAEQgEACAAADIAAABQAAAEAFACIAKAFQAJADAEABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgOAAgLgJg");
	this.shape_1.setTransform(158.9,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_2.setTransform(154.5,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_3.setTransform(151.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_4.setTransform(148.4,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334D").s().p("AAQAsIgVgdIgNANIAAAQIgJAAIAAhXIAJAAIAAA8IAhgiIALAAIgaAZIAbAkg");
	this.shape_5.setTransform(143.9,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAKABQAFAAAEgEQADgCAAgEQAAgFgEgCQgEgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQAMAAALAHIgFAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgNAAgMgJg");
	this.shape_6.setTransform(137.2,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_7.setTransform(127.3,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334D").s().p("AgTAXQgIgKgBgNIAAAAQABgMAIgJQAKgLANAAQANAAALAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAJAAQAKAAAJgJIAGAFQgLANgOAAQgNAAgKgKg");
	this.shape_8.setTransform(120.5,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_9.setTransform(115,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_10.setTransform(108.5,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334D").s().p("AgJAsIAAg1IgIAAIAAgIIAIAAIAAgGQAAgKAFgGQAEgEAJAAQAFAAAFACIAAAIIgJgCQgKAAAAANIAAAFIATAAIAAAIIgTAAIAAA1g");
	this.shape_11.setTransform(102.7,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334D").s().p("AgXAXIAFgGQALAHAJABQAGAAADgEQAEgCAAgEQAAgFgFgCQgCgCgIgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQAMAAALAHIgFAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADADABQAHAFAAAIQAAAIgHAFQgFAFgKAAQgNAAgMgJg");
	this.shape_12.setTransform(97.4,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_13.setTransform(91,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_14.setTransform(86,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_15.setTransform(80.9,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334D").s().p("AgeAeIAFgHQAOAMAOAAQAJAAAFgFQAFgDAAgHIAAAAQAAgGgFgDQgFgEgMgDQgOgDgGgFQgIgFABgKIAAAAQgBgKAJgGQAHgHAMAAQAQAAANAKIgFAHQgMgJgMAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAGADAMADQAOAEAHAEQAGAGABAJIAAAAQgBALgHAHQgJAGgNAAQgRAAgPgNg");
	this.shape_16.setTransform(73.9,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_17.setTransform(63.1,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_18.setTransform(57.6,10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_19.setTransform(53.3,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAEAFQAFAFAIAAQAIAAAFgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgNAAQgLAAgGgHg");
	this.shape_20.setTransform(48.2,10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334D").s().p("AAWApIAAgfQgKAOgMAAQgMAAgJgJQgKgJAAgOQAAgOAKgKQAJgIAMAAQANAAAJANIAAgMIAJAAIAABQgAgPgZQgGAGAAALQAAAKAGAHQAHAGAIAAQAJAAAHgGQAGgHAAgKQAAgKgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_21.setTransform(40.5,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAGQgGAFgBAKIAnAAIAAAAg");
	this.shape_22.setTransform(33.2,10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_23.setTransform(27.7,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_24.setTransform(19.9,9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334D").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_25.setTransform(16.9,9.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334D").s().p("AgEArIAAg9IAJAAIAAA9gAgEggIAAgKIAJAAIAAAKg");
	this.shape_26.setTransform(13.8,9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334D").s().p("AARAgIgRgxIgQAxIgIAAIgWg+IAKAAIAQAxIARgxIAHAAIARAxIAQgxIAKAAIgWA+g");
	this.shape_27.setTransform(7.2,10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334D").s().p("AgVAfIAAAMIgJAAIAAhWIAJAAIAAAlQAJgOAOAAQALAAAJAJQAJAJAAAOQAAAPgJAJQgIAJgMAAQgOAAgJgOgAgPgFQgHAHAAAKQAAAKAHAHQAHAHAIAAQAJAAAGgHQAHgGAAgLQAAgLgHgGQgGgGgJAAQgIAAgHAGg");
	this.shape_28.setTransform(156.2,-8.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_29.setTransform(148.2,-7.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334D").s().p("AgKA0IAAgHIAFAAQAGAAAAgIIAAhBIAJAAIAABBQAAAQgOAAIgGgBgAAAgpIAAgLIALAAIAAALg");
	this.shape_30.setTransform(142.3,-7.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334D").s().p("AgJAXIAAgkIgJAAIAAgIIAJAAIAAgTIAJAAIAAATIATAAIAAAIIgTAAIAAAjQAAAKAJAAQAFAAAEgCIAAAIQgFADgGAAQgQAAAAgSg");
	this.shape_31.setTransform(135.5,-8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18334D").s().p("AATAfIgTgZIgSAZIgLAAIAZgfIgYgeIALAAIARAYIATgYIAKAAIgYAeIAZAfg");
	this.shape_32.setTransform(129.8,-7.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_33.setTransform(122.9,-7.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgFgFQgEgFgIAAQgHAAgGAFQgFAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAIgNAMAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_34.setTransform(115.9,-7.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_35.setTransform(106.6,-7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18334D").s().p("AgUAZQgGgHAAgLIAAgmIAJAAIAAAjQAAAJAFAFQAEAFAIAAQAHAAAGgFQAFgGAAgIIAAgjIAJAAIAAA9IgJAAIAAgLQgIANgMAAQgMAAgGgHg");
	this.shape_36.setTransform(100.3,-7.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#18334D").s().p("AgWAXQgJgKAAgNIAAAAQAAgNAJgIQAJgLANAAQAOAAAJAKQAJAKAAAMQAAANgJAKQgJAKgOAAQgNAAgJgKgAgPgQQgHAHAAAJQAAAKAHAHQAGAHAJAAQAKAAAHgHQAGgGAAgLIAAAAQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_37.setTransform(92.8,-7.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#18334D").s().p("AgcAmIAEgIQAEADAFAAQAFAAACgDQADgDADgGIgcg9IAKAAIAWAzIAUgzIAJAAIgaA/QgEAKgDAEQgFAEgHAAQgHAAgHgDg");
	this.shape_38.setTransform(85.5,-6.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_39.setTransform(75.1,-7.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18334D").s().p("AgQAgIAAg9IAJAAIAAAQQADgIAGgFQAHgFAIABIAAAKIgBAAQgKAAgGAHQgHAHAAANIAAAZg");
	this.shape_40.setTransform(69.5,-7.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_41.setTransform(63.2,-7.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18334D").s().p("AgXAXIAFgGQAKAHAKABQAGAAADgEQAEgCAAgEQAAgFgFgCQgDgCgHgDQgJgCgEgCQgHgEAAgIIAAgBQAAgHAGgFQAGgFAIAAQANAAAJAHIgEAGQgJgFgJgBQgFAAgDAEQgDACAAADIAAABQAAAEAFACIAKAFQAKADAEABQAGAFAAAIQAAAIgGAFQgHAFgJAAQgNAAgMgJg");
	this.shape_42.setTransform(53.5,-7.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#18334D").s().p("AgTAYQgJgJAAgPQAAgMAIgKQAJgKALAAQAOAAAIAKQAHAKAAAMIAAADIgwAAQABAKAGAGQAGAFAIABQALgBAIgIIAGAFQgKAMgPAAQgMgBgJgIgAAUgCQgBgKgFgFQgFgHgJAAQgHABgFAFQgGAGgBAKIAnAAIAAAAg");
	this.shape_43.setTransform(47.2,-7.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18334D").s().p("AgSAXQgJgKAAgNIAAAAQAAgMAJgJQAJgLAMAAQAPAAAKAMIgGAGQgJgJgKAAQgIAAgHAHQgGAHAAAJQAAAKAGAHQAHAHAIAAQALAAAIgJIAHAFQgLANgPAAQgMAAgJgKg");
	this.shape_44.setTransform(40.4,-7.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18334D").s().p("AASAgIAAgjQAAgJgEgFQgFgFgJAAQgGAAgFAFQgGAGAAAIIAAAjIgJAAIAAg9IAJAAIAAALQAHgNANAAQALAAAHAHQAGAHAAALIAAAmg");
	this.shape_45.setTransform(33.4,-7.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#18334D").s().p("AgTAbQgHgFAAgJQAAgKAHgEQAHgGAMAAQAJAAAJADIAAgCQAAgRgSAAQgIAAgKAFIgDgIQAMgFAKAAQANAAAHAHQAGAGAAAMIAAAlIgJAAIAAgKQgIALgNAAQgJAAgHgFgAgMADQgFADAAAGQAAAGAFADQAEAEAHAAQAIAAAFgFQAHgFAAgHIAAgGQgKgCgJAAQgHAAgFADg");
	this.shape_46.setTransform(26.1,-7.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18334D").s().p("AASAsIAAgkQAAgIgFgFQgEgFgIAAQgIAAgEAFQgGAFAAAIIAAAkIgJAAIAAhXIAJAAIAAAlQAHgNANAAQALAAAHAHQAGAHAAAKIAAAng");
	this.shape_47.setTransform(19.3,-8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18334D").s().p("AgZAfQgMgMAAgTQAAgRAMgNQAMgNASAAQASAAAOAOIgGAHQgMgMgOAAQgNAAgKAKQgJAKAAAOQAAAOAJALQAKAJANABQAOAAANgNIAGAGQgPAQgSAAQgSAAgMgNg");
	this.shape_48.setTransform(11.4,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext, new cjs.Rectangle(0,-15.6,166.7,34), null);


(lib.serviceManager_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 300x600
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAdIAJgZIgFgGIgRAMIgMgPIA4goIAUAbQAIALgBAKQgCAKgIAFQgMAJgOgIIgJAcgAAAgKIAHAKQAGAIAHgFQAHgEgGgIIgIgLg");
	this.shape.setTransform(34,-35.3,1,1,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsAEIAygwIAnApIgMAKIgagaIgHAIIAXAXIgLALIgXgYIgIAHIAZAbIgKAMg");
	this.shape_1.setTransform(29,-40.2,1,1,-10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAcQgNgKgCgOQgDgOAKgMIAAgBQAJgMAPgCQAOgBANAJQANAKADAQIgRADQgDgKgHgFQgGgFgGACQgHABgFAGIgBABQgFAHABAGQABAIAHAFQAEADAGABIAFgHIgKgIIAHgKIAaASIgTAZIgDAAQgOAAgNgKg");
	this.shape_2.setTransform(22.8,-43.9,1,1,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAgIABgNIgXgNIgKAJIgSgKIA7guIAQAJIgHBKgAACgDIAPAGIACgUg");
	this.shape_3.setTransform(14.3,-46.2,1,1,-10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEAmIgPgtIgMAkIgSgHIAWhBIARAGIAPArIAMgiIARAHIgWBBg");
	this.shape_4.setTransform(7.4,-49,1,1,-10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAjIgDgNIgZgEIgHALIgUgDIAnhAIASADIASBKgAgDAEIAPACIgEgUg");
	this.shape_5.setTransform(-1.2,-49.2,1,1,-10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAjIgBhFIAVAAIAQAbIAQgbIAVAAIABBFIgUAAIgBgnIgRAaIAAAAIgSgaIABAng");
	this.shape_6.setTransform(-9.3,-48.7,1,1,-10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjgbIA2gNIAEARIgjAIIADAKIAfgIIAEAPIggAHIADALIAjgIIADAQIg1AMg");
	this.shape_7.setTransform(-19.6,-45.6,1,1,-10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAiQgOgGgGgOIAAgBQgFgNAGgOQAGgNAOgGQARgHAPAKIgJAQQgKgFgGADQgHACgDAHQgCAHADAGQADAIAGADQAGADAGgDQAJgDADgKIARAEQgFATgSAHQgGADgHAAQgGAAgHgDg");
	this.shape_8.setTransform(-25.8,-42.4,1,1,-10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYgaIARgJIAgA+IgRAJg");
	this.shape_9.setTransform(-30.6,-39,1,1,-10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAAIASgLIAlAaIgMgsIARgMIARBJIgPAKg");
	this.shape_10.setTransform(-36.2,-35.8,1,1,-10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvgIIAZgXQALgKAKAAQAIABAHAHIAAAAQALAMgGAOIAdAGIgRAOIgZgFIgGAFIAOAQIgNANgAgMgSIgJAJIALALIAKgIQAHgGgGgHQgCgDgDAAQgDAAgFAEg");
	this.shape_11.setTransform(-39.6,-29.3,1,1,-10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsAAIAjgrIAMAKIgWAdIAIAGIAUgZIAMAJIgVAaIAJAHIAXgdIANAKIgkAsg");
	this.shape_12.setTransform(-43.6,-23.7,1,1,-10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAXQAMgFAGgKQAEgHgEgCQgEgCgIAIQgIAJgGADQgJAEgIgFQgJgFgBgJQgCgJAGgLQAJgOAOgFIAHAPQgMAFgEAIQgEAGAEACQABABAAAAQABAAAAAAQABAAAAAAQABgBABAAIAHgHQARgTAOAIIABAAQAJAFABALQABAIgGALQgLASgQAEg");
	this.shape_13.setTransform(-46.5,-17.2,1,1,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 300x600
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19334C").s().p("AqMDyQAhjrCuihQCuiiDsgQQDrgQDDCKQDDCKA/DjIqEC0g");
	this.shape_14.setTransform(-0.8,-30.2,0.902,0.902);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.serviceManager_text, new cjs.Rectangle(-59.7,-60.4,117.9,60.8), null);


(lib.serviceManager_image_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.serviceManager_image();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.serviceManager_image_1, new cjs.Rectangle(-36,-36,71.4,71.4), null);


(lib.seePaths_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:0,out:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334E").s().p("AhZCxIl5AAQgjAAAAgeIAAklQAAgeAjAAIF5AAIJPAAIAAFhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17446E").s().p("AhZCxIl5AAQgjAAAAgeIAAklQAAgeAjAAIF5AAIJPAAIAAFhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-17.7,100.5,35.4);


(lib.seePath_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9ACIA5grIAAAaIBCAAIAAAiIhCAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seePath_arrow, new cjs.Rectangle(-6.2,-4.2,12.4,8.4), null);


(lib.salesManager_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 300x600
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgogbIAggJQANgEAKAEQAHAFADAJQAFAQgMAIIAXATIgWAGIgTgQIgHACIAGAVIgTAFgAgEgUIgNAEIAFAQIAMgEQAKgDgDgIIAAAAQgCgGgFAAIgEABg");
	this.shape.setTransform(16.9,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghgdIA3gJIACAQIgjAGIACALIAggGIACAOIggAGIACALIAkgHIADARIg3AJg");
	this.shape_1.setTransform(9.9,57.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAbQgLgKgBgPIAAgBQAAgOAKgLQAKgLAPgBQARAAAMAJIgLAOQgHgGgKABQgHAAgEAGQgFAFAAAHIAAABQABAIAFAGQAFAFAIgBQAGAAAFgDIAAgJIgOABIgBgNIAggCIACAfQgMALgSABIgDABQgNAAgLgKg");
	this.shape_2.setTransform(2.6,58.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAjIgEgNIgagCIgGAMIgUgCIAjhCIASABIAYBIgAgFAFIAPACIgHgUg");
	this.shape_3.setTransform(-5.1,58.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAlIgUgrIgIAlIgTgEIAPhDIASADIATAqIAIgjIATAEIgPBEg");
	this.shape_4.setTransform(-12.7,57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAiIAAgNIgZgKIgJAKIgTgHIAzg3IASAHIAEBLgAACAAIAPAEIgBgUg");
	this.shape_5.setTransform(-21.5,55.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAnIASgjIgcAPIAAAAIgDggIgTAjIgQgJIAhg9IARAKIACAgIAbgQIASAKIghA8g");
	this.shape_6.setTransform(-28,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAdQgPgMgDgRIARgDQADAMAJAHQAGAGADgEQACgDgHgKQgIgJgCgHQgCgJAGgIIAAAAQAGgIAIAAQAKAAAKAIQANAKADAPIgQADQgDgJgIgHQgFgEgDADIAAAAQgDAEAIAJQAIAKACAHQACAIgFAIQgHAIgJAAQgKAAgKgIg");
	this.shape_7.setTransform(-36.8,45.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsAFIAxgxIAoAoIgMALIgagZIgHAHIAXAXIgLALIgXgXIgHAHIAZAaIgLAMg");
	this.shape_8.setTransform(-41.5,41);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAAIA2gqIALAPIgoAhIAUAaIgNALg");
	this.shape_9.setTransform(-46.8,36.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAVIAIgKIgOgXIgNACIgLgRIBLgLIAKAQIgsA9gAgCgOIAHAMIANgQg");
	this.shape_10.setTransform(-50.7,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAgQgJgFgFgLQgIgSAFgQIAQAFQgDANAFAKQADAHAEgCQAEgCgCgMQgDgMABgHQACgJAIgEIAAAAQAJgEAJAEQAJAEAFAMQAHAPgEAOIgQgDQACgLgEgJQgDgGgEABQgEACACAMQAGAagPAGQgDACgFAAQgFAAgEgCg");
	this.shape_11.setTransform(-53.3,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#19334C").s().p("AkmDVQjJiLg/jpIKAisIHdHMQiqCvjxAYQgkAEgjAAQjHAAish3g");
	this.shape_12.setTransform(-10.5,33.8,1.04,1.04,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesManager_text, new cjs.Rectangle(-67.6,-32.7,117.3,101.6), null);


(lib.salesManager_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.salesManager();
	this.instance.parent = this;
	this.instance.setTransform(-44,-44,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesManager_1, new cjs.Rectangle(-44,-44,88.8,88.8), null);


(lib.salesforceTechnicalArchitect_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAWIAMguIAOADIgFARIAoAJIgEAPIgogLIgEAQg");
	this.shape.setTransform(43.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAbQgMgFgEgLQgFgLAFgLQAGgOAOgDIAEAOQgIADgDAGQgCAFADAEQACAFAGADIAAAAQAFADAFgCQAGgCACgGQADgFgFgIIANgHQAHANgFANQgFALgLAFQgFACgGAAQgEAAgGgCg");
	this.shape_1.setTransform(42.4,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAGIAXgmIALAGIgPAaIAIADIAMgXIALAHIgOAWIAIAEIAPgZIALAHIgVAmg");
	this.shape_2.setTransform(39.9,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAFIgKANIgLgIIAcgnIAKAIIgIAOIAhAXIgJAOg");
	this.shape_3.setTransform(36.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgagLIAKgMIAqAkIgKALg");
	this.shape_4.setTransform(34.5,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglgBIALgLIAPAOIANgNIgNgPIALgLIAmAnIgLALIgPgOIgNANIAOAPIgMALg");
	this.shape_5.setTransform(31.4,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAdQgMgBgHgKIgBAAQgHgKACgLQABgLAKgIQAMgKANAFIgEAOQgHgCgFAEQgFAEAAAGQgBAEAEAFQAEAFAGABQAEABAFgDQAGgFAAgHIAOgBQAAAPgMAJQgIAHgJAAIgDgBg");
	this.shape_6.setTransform(27.1,24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjgOIAWgNQALgHAHADQAHABAEAHIAAABQAHAKgIAKIAVAJIgPAJIgSgJIgFAEIAHAPIgMAHgAgGgPIgJAFIAHAKIAIgEQAHgEgEgGQgCgDgCAAIgFACg");
	this.shape_7.setTransform(22.1,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcgaIAOgHIArAqIgPAHIgIgIIgTAJIAAALIgPAGgAgNADIALgDIgMgNg");
	this.shape_8.setTransform(17.6,30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgagYIAPgEIAKAoIAZgHIADAOIgoAKg");
	this.shape_9.setTransform(9.1,33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNgbIANgCIAfA0IgQACIgGgJIgUACIgDAKIgQACgAgIAGIALgCIgHgOg");
	this.shape_10.setTransform(3.6,33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAVQgJgIAAgNQAAgLAJgJQAIgIAMAAQAQAAAIAMIgMAJQgFgHgHAAQgFAAgEAFQgEAEAAAFIAAAAQAAAHAEAEQAEAEAEAAQAHAAAGgHIAMAJQgJAMgQAAQgLAAgIgIg");
	this.shape_11.setTransform(-2.8,34.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAbIAFg3IAOACIgFA3g");
	this.shape_12.setTransform(-7.2,33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAIAeIgRgiIgGAdIgPgCIALg2IANACIAQAhIAGgdIAPAEIgKA2g");
	this.shape_13.setTransform(-11.6,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABAdIAHgUIgSgGIgHAVIgPgGIARg0IAPAFIgHAUIASAGIAHgUIAPAFIgRA1g");
	this.shape_14.setTransform(-17.7,31.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAaQgLgFgEgLQgEgKAGgLQAFgMALgDQAKgFAMAGQAOAHACANIgOAEQgCgIgHgEQgFgCgEACQgFADgDAFQgDAFACAGQABAFAGADQAFADAIgEIAHAMQgHAEgIAAQgFAAgHgDg");
	this.shape_15.setTransform(-23.1,29.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAMIAegvIAlAYIgHALIgZgPIgEAHIAWANIgGAKIgWgOIgFAIIAZAQIgHALg");
	this.shape_16.setTransform(-28.2,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAXIAaghIgNgKIAIgLIAmAfIgIAJIgOgJIgZAgg");
	this.shape_17.setTransform(-32,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#17334D").s().p("AkADzQishGhhicIHjkuII4AoQgNC5h4CNQh4CPizAsQhGAShEAAQhrAAhpgrg");
	this.shape_18.setTransform(1.3,13.8,1.003,1.003);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceTechnicalArchitect_text, new cjs.Rectangle(-54.9,-42.5,110,85.1), null);


(lib.salesforceTechnicalArchitect_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SalesforceechnicalArchitect();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceTechnicalArchitect_image, new cjs.Rectangle(-35,-35,70.5,70.5), null);


(lib.salesforceDeveloper_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.salesforceDeveloper();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-43.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceDeveloper_img, new cjs.Rectangle(-43.5,-43.5,87,87), null);


(lib.salesforceConsultant_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAFIgoApIghggIBzh2IAhAgIgoApIBnBjIglAlg");
	this.shape.setTransform(40.5,12.2,0.428,0.428,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiAgPIAmgfIB7AbIg/hNIAnghIB4CRIgjAdIiAgcIBBBQIgnAhg");
	this.shape_1.setTransform(34.8,18.1,0.428,0.428,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhphXIAqgbICpB0IgvAeIgegVIg8AnIAHAkIgvAdgAgoAHIAkgVIgvgig");
	this.shape_2.setTransform(28.5,23.6,0.428,0.428,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTgSIgzAYIgUgpICUhJIAUApIgzAZIBACAIgvAXg");
	this.shape_3.setTransform(18.7,25.3,0.428,0.428,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkhOIAxgSIAzCEIBVggIAQArIiGAyg");
	this.shape_4.setTransform(13.1,28.7,0.428,0.428,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCBqQgQAAgPgIQgOgIgKgOQgKgPgFgUIgchmIA0gOIAbBlQAFAUAMAHQAKAHAQgEQAPgEAHgMQAGgMgFgSIgbhmIA0gOIAaBlQAGAWgCARQgBARgJAOQgIAMgPALQgNAIgVAGQgQAFgPAAIgEgBg");
	this.shape_5.setTransform(5.1,29.4,0.428,0.428,5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBgQgWgFgVgNIAXgnQAfASAggEQALgCAFgEQAFgEgBgGIAAgBIgCgFQgCgCgEgCIgKgCIgPgCQgQgBgNgCQgOgCgKgGQgLgFgHgIQgHgJgCgOIAAAAQgCgNADgMQAEgMAIgJQAHgJAOgHQAMgGARgDQAXgEAUAEQAUADARAKIgUApQgOgHgPgDQgMgCgNABQgKACgEAEQgEAEABAFIAAABIACAFIAGAEIAKACIAQACIAeAEQANACALAGQAJAFAHAIQAHAJABAMIAAABQADAOgEAMQgEAMgJAKQgIAJgNAGQgOAGgRADQgMACgKAAQgNAAgNgCg");
	this.shape_6.setTransform(-2.4,30.6,0.428,0.428,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhchZIAxgDIBRBfIgFhiIA0gCIAIC8IguACIhUhjIAEBmIgzADg");
	this.shape_7.setTransform(-10.5,30.6,0.428,0.428,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBiQgWgBgSgKQgSgJgMgOQgMgNgHgUQgGgSABgTIAAgBQACgUAJgRQAIgRAQgNQAQgNASgGQATgFAVABQAWABARAKQATAJAMAOQALANAIATQAGAUgCATIAAAAQgBAVgJARQgJAQgPANQgOALgUAHQgPAFgRAAIgIAAgAgQgwQgJAFgHAFQgGAGgEAJQgEAJgBAKIAAABQgBAKADAJQACAJAGAIQAHAIAIAEQAIAGALAAQAJAAAKgDQAKgEAGgGQAHgGAEgJQAEgIABgLIAAgBQABgHgDgLQgDgJgGgIQgGgHgIgFQgJgFgLgBIgCAAQgIAAgJACg");
	this.shape_8.setTransform(-19.5,29.6,0.428,0.428,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBgQgUgDgQgLQgPgKgMgQQgJgPgFgUQgEgTAEgUIAAAAQAEgUALgQQALgQAPgLQAPgKAUgFQATgEAVAFQAPADAKAFQALAFAJAHQAKAIAFAIQAGAHAFALIgtAWQgGgMgIgHQgJgIgNgCQgKgDgIADQgJACgHAGQgGAFgGAIQgFAJgCAKIAAAAQgCAKABAJQACAKAEAIQAHAJAFAEQAIAGAJACIANABIAMgDIAKgFIALgIIAhAkQgIAHgKAGQgLAHgJADQgJADgPABIgHABQgKAAgKgDg");
	this.shape_9.setTransform(-27.8,27.7,0.428,0.428,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#19334C").s().p("AomFLIGksDIKpIqQjKD4k4A9QhXAShXAAQjXAAjGhug");
	this.shape_10.setTransform(5.6,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceConsultant_text, new cjs.Rectangle(-77.6,-46.7,155.3,89), null);


(lib.salesforceConsultant_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.salesforceConsultant();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceConsultant_image, new cjs.Rectangle(-60,-60,119.6,119.6), null);


(lib.salesforceAdministrator_image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.salesforceAdministrator();
	this.instance.parent = this;
	this.instance.setTransform(-29,-29,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceAdministrator_image, new cjs.Rectangle(-29,-29,57.1,57.1), null);


(lib.salesforceAdmin_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkgNIAXgOQAKgGAHABQAIACAEAHQAGAKgHALIAWAIIgPAJIgTgIIgFAEIAIAOIgMAIgAgHgPIgIAFIAHAKIAIgEQAHgEgEgGQgCgDgCAAQgDAAgDACg");
	this.shape.setTransform(18.6,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAbQgKgEgFgLQgGgLAFgKQAEgMAMgFQAMgFALAEQALAEAFAMQAFALgFAKQgEAMgMAFQgHACgFAAQgFAAgGgCgAgFgNQgGACgCAGQgCAFADAFQACAGAGADQAEACAGgCQAGgDACgFQACgGgDgFQgDgFgFgDIgFgBIgFABg");
	this.shape_1.setTransform(12.9,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFgJIgQAFIgDgNIAugNIADANIgQAEIAMAoIgQAEg");
	this.shape_2.setTransform(6.9,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOgcIAOgCIAfA0IgQACIgGgJIgUADIgDAKIgQADgAgJAFIAMgCIgHgNg");
	this.shape_3.setTransform(2.7,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAcIgKgRIgHAAIAAARIgQAAIAAg3IAaAAQAMAAAGAGQAFAFAAAIQAAALgLAFIANAUgAgJAAIAJAAQAJAAAAgHQAAgHgJAAIgJAAg");
	this.shape_4.setTransform(-3.5,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAcIAFgpIgQgCIACgOIAvAHIgCANIgQgCIgGApg");
	this.shape_5.setTransform(-9,20.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAcQgQgEgHgLIALgIQAGAIAKADQAFACABgEQABgDgIgFQgJgFgEgDQgEgGACgHQABgIAIgDQAGgEAJADQAOAEAGAJIgKAIQgGgHgIgCQgEgBgBADQgBADAIAFQATAIgEANQgBAIgIAEQgEABgFAAIgHgBg");
	this.shape_6.setTransform(-14.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAXIASgzIAPAFIgSA0g");
	this.shape_7.setTransform(-18.2,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAfIgIglIgNAaIgOgHIAZgxIAMAGIAHAkIANgZIAOAGIgZAyg");
	this.shape_8.setTransform(-22.4,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVATIAeguIANAIIgdAvg");
	this.shape_9.setTransform(-26.3,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAeIATgYIgYAIIADgZIgVAXIgMgKIAkgpIAMAKIgEAZIAYgIIANAKIgjArg");
	this.shape_10.setTransform(-30.3,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAhQgLgCgKgLIgOgQIApgkIAPAQQAJALAAALQAAALgJAIIAAABQgJAHgJAAIgDAAgAgLAHIAEAFQAJALALgJIAAAAQALgKgLgKIgEgFg");
	this.shape_11.setTransform(-35.5,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIASIAGgJIgMgRIgKACIgJgOIA7gLIAIANIgiAygAgBgLIAGAKIAKgOg");
	this.shape_12.setTransform(-39.5,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#17334D").s().p("Ai3DZQjChKhVi9IHKjNIHTC0QhLDBi+BVQhkAthlAAQhZAAhbgjg");
	this.shape_13.setTransform(-7.7,5.4,1,1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforceAdmin_text, new cjs.Rectangle(-53,-23.7,95.9,54.6), null);


(lib.salesforce_logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.salesforce_logo();
	this.instance.parent = this;
	this.instance.setTransform(-42,-32,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salesforce_logo_1, new cjs.Rectangle(-42,-32,85.5,64), null);


(lib.position = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"salesforceDeveloper":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.position, null, null);


(lib.plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAuIAAgjIgjAAIAAgVIAjAAIAAgjIAVAAIAAAjIAjAAIAAAVIgjAAIAAAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plus, new cjs.Rectangle(-4.5,-4.5,9.1,9.1), null);


(lib.pin_orangeBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E65E15").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pin_orangeBG, new cjs.Rectangle(-12.5,-12.5,25,25), null);


(lib.marketingManager_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.marketingManager();
	this.instance.parent = this;
	this.instance.setTransform(-59,-60,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.marketingManager_img, new cjs.Rectangle(-59,-60,117.5,117.9), null);


(lib.marketing_manager_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,0,102,0)").s().p("AmTGUQimioAAjsQAAjrCminQCoinDrAAQDsAACoCnQCmCnAADrQAADsimCoQioCmjsAAQjrAAioimg");
	this.shape.setTransform(15.6,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1g/IBSgkQAWgJANAAQARgCAMAGQAWAIALAZIAAABQAJAVgEAQQgEASgNANIBDAqIg3AYIg5glIgBAAIgTAJIAVA0IguAVgAgTg4IgfAOIASApIAfgNQAMgGAEgIQAEgIgEgKIAAgBQgFgKgIgCIgEAAQgHAAgKADg");
	this.shape_1.setTransform(41.8,29.2,0.41,0.41,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhlhCICRguIANArIhfAdIAJAcIBWgcIAMAoIhVAbIAJAcIBggfIANAqIiRAvg");
	this.shape_2.setTransform(34.6,31.2,0.41,0.41,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBhQgTgDgQgKQgRgKgLgQQgLgQgEgVIAAgBQgEgVAEgRQADgSALgRQAKgQASgLQARgLAVgEQAYgFATAEQARADAUAKIgYAqQgMgHgLgCQgMgCgMADQgJACgJAFQgHAGgFAIQgFAHgCALQgCAKACAKIAAABQADALAFAJQAGAJAHAFQAJAFAJACQAKACALgCQARgEALgKIgFgWIgkAHIgHglIBVgRIARBTQgNAPgTAMQgTANgZAEQgMADgLAAQgIAAgJgCg");
	this.shape_3.setTransform(27.2,32.8,0.41,0.41,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnhfIAxgEIBfC2Ig4AFIgQghIhIAGIgLAjIg2AEgAgbATIAqgDIgZgzg");
	this.shape_4.setTransform(19,33.9,0.41,0.41,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBgIhMhpIgEBmIg0gCIAIi8IAxACIBJBmIADhjIA0ACIgHC8g");
	this.shape_5.setTransform(10.2,33.7,0.41,0.41,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBgIgIgkIhHgLIgTAfIg3gJIBtiuIAxAIIAzDHgAgJALIApAHIgNg4g");
	this.shape_6.setTransform(1.1,32.8,0.41,0.41,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBoIAehoIhBA5IgCAAIgZhSIgfBmIgxgOIA1i1IA1APIAWBTIA/g5IA2AQIg1C0g");
	this.shape_7.setTransform(-6.9,30.4,0.41,0.41,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAFBkQgWgBgWgLQgUgKgOgPQgOgOgHgSQgGgSAAgSQABgTAJgUIABgBQAJgTAOgMQAOgMATgHQASgGATABQATABAVAKQAWALAOAOQANAPAIASIgsAUQgGgOgHgHQgJgJgLgGQgJgEgKgBQgHAAgLAEQgJAEgHAGQgIAHgEAKIgBAAQgFAMAAAJQgBAIADALQADAIAHAIQAIAJAJAEQARAIANgCIAKgVIghgQIAQghIBOAkIglBNQgOAEgQAAIgLgBg");
	this.shape_8.setTransform(-17.4,26.1,0.41,0.41,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBnIgMiCIg3BWIgsgbIBlifIApAbIALB9IA3hUIArAcIhlCfg");
	this.shape_9.setTransform(-24.8,21.6,0.41,0.41,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNA7IBxiVIAqAgIhxCVg");
	this.shape_10.setTransform(-29.6,18.1,0.41,0.41,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhmBJIBehrIgqglIAegjIB7BtIgeAiIgqglIheBrg");
	this.shape_11.setTransform(-32.6,14,0.41,0.41,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah4AIICJh/IBoBvIghAdIhEhIIgUATIA9BCIgfAcIg8hCIgWAUIBEBKIggAeg");
	this.shape_12.setTransform(-38.4,9.7,0.41,0.41,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAiIAOgiIgNgCIgSAMIgOgSIBFgwIANASIgbAUIAsAEIAQAWIgxgFIgTA2g");
	this.shape_13.setTransform(-43.1,4,0.917,0.917);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BHIAeg+IgBAAIgLgTIgxAdIgbgsICihhIAtBNQALASADARQADAPgDANQgFAWgYAOIgBABQgSALgSgCQgSgCgQgMIggBJgAAAgfIARAeQAGAKAKAEQAIADAJgFIABgBQAKgGABgIQABgJgHgLIgSgeg");
	this.shape_14.setTransform(-47.6,-2.7,0.41,0.41,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxAvIAZgaIgehCIgkACIgXgyIDOgFIAVAuIiNCWgAgLgvIARAmIAogog");
	this.shape_15.setTransform(-51.4,-8.7,0.41,0.41,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLBKIBmggIhTgZIgBgBIA4hCIhnAfIgOgxICzg2IARA1Ig6BAIBUAVIAPA1Ii0A2g");
	this.shape_16.setTransform(-53.5,-18.7,0.41,0.41,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334D").s().p("AB6HJQirgFiahGQiVhFhxh4Qhxh4g8iYQgihZgNheQgGgngCgnIMrh0IABAAII/LJQhtBciGA1QiRA3icAAIgcAAg");
	this.shape_17.setTransform(0.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.marketing_manager_text, new cjs.Rectangle(-68.6,-95.5,141.3,140.5), null);


(lib.hit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(25,25,0.167,0.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334D").s().p("AguA6IAAhzIBcAAIAAAbIg8AAIAAASIA2AAIAAAYIg2AAIAAATIA9AAIAAAbg");
	this.shape.setTransform(242.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape_1.setTransform(231.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334D").s().p("AgmAuQgPgOAAgaIAAhAIAhAAIAAA/QAAAZAUAAQAVAAAAgYIAAhAIAhAAIAAA/QAAAbgPAOQgOANgZAAQgZAAgNgNg");
	this.shape_2.setTransform(218.8,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334D").s().p("AgPA6IAAhXIgiAAIAAgcIBjAAIAAAcIgiAAIAABXg");
	this.shape_3.setTransform(207.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334D").s().p("AgmAuQgPgOAAgaIAAhAIAhAAIAAA/QAAAZAUAAQAVAAAAgYIAAhAIAhAAIAAA/QAAAbgPAOQgOANgZAAQgZAAgNgNg");
	this.shape_4.setTransform(195.4,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334D").s().p("AgtA6IAAhzIBbAAIAAAcIg7AAIAAAUIA2AAIAAAaIg2AAIAAApg");
	this.shape_5.setTransform(184.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape_6.setTransform(168.4,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334D").s().p("AgmAuQgPgOAAgaIAAhAIAhAAIAAA/QAAAZAUAAQAVAAAAgYIAAhAIAhAAIAAA/QAAAbgPAOQgOANgZAAQgZAAgNgNg");
	this.shape_7.setTransform(155.8,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334D").s().p("AgsArQgRgSAAgZIAAAAQAAgYASgRQASgSAZAAQAbAAARARQASASAAAYQAAAZgSARQgSASgaAAQgaAAgSgRgAgVgVQgIAJAAAMQAAANAJAJQAIAJAMAAQANAAAIgJQAIgJAAgNIAAAAQAAgMgIgJQgIgJgNAAQgMAAgJAJg");
	this.shape_8.setTransform(142.7,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334D").s().p("AgPA6IAAgsIgshHIAkAAIAYAqIAYgqIAjAAIgsBHIAAAsg");
	this.shape_9.setTransform(129.9,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334D").s().p("AAQA6IgWgjIgOAAIAAAjIggAAIAAhzIA2AAQAZAAAMANQAKAKAAARQAAAYgXAKIAbApgAgUgBIAUAAQAIAAAFgEQAEgEAAgGIAAAAQAAgOgRAAIgUAAg");
	this.shape_10.setTransform(113.9,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334D").s().p("AgsArQgRgSAAgZIAAAAQAAgYASgRQASgSAZAAQAbAAARARQASASAAAYQAAAZgSARQgSASgaAAQgaAAgSgRgAgVgVQgIAJAAAMQAAANAJAJQAIAJAMAAQANAAAIgJQAIgJAAgNIAAAAQAAgMgIgJQgIgJgNAAQgMAAgJAJg");
	this.shape_11.setTransform(100.7,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334D").s().p("AgtA6IAAhzIBbAAIAAAcIg7AAIAAAUIA2AAIAAAaIg2AAIAAApg");
	this.shape_12.setTransform(88.8,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334D").s().p("AgwA6IAAhzIAxAAQAWAAANALQANALAAATQAAATgOALQgNALgWAAIgQAAIAAAhgAgQAAIAQAAQAHAAAFgEQAFgEAAgGIAAgBQAAgPgRAAIgQAAg");
	this.shape_13.setTransform(73.4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334D").s().p("AgmAuQgPgOAAgaIAAhAIAhAAIAAA/QAAAZAUAAQAVAAAAgYIAAhAIAhAAIAAA/QAAAbgPAOQgOANgZAAQgZAAgNgNg");
	this.shape_14.setTransform(61.3,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334D").s().p("AgrA6IAAhzIAgAAIAABXIA3AAIAAAcg");
	this.shape_15.setTransform(45.7,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334D").s().p("AgrA6IAAhzIAgAAIAABXIA3AAIAAAcg");
	this.shape_16.setTransform(35.6,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334D").s().p("AgPA6IAAhzIAfAAIAABzg");
	this.shape_17.setTransform(27.5,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334D").s().p("AARA6IgcgrIgMANIAAAeIggAAIAAhzIAgAAIAAAvIAngvIAmAAIgsAyIAuBBg");
	this.shape_18.setTransform(19.4,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334D").s().p("AgyApIASgWQASAOATAAQANAAAAgIIAAAAQAAgEgEgCIgOgFQgXgFgJgHQgMgHAAgQIAAgBQAAgQAMgKQAMgLAUAAQAcAAATAQIgQAWQgPgLgQAAQgMAAAAAHIAAABQAAAEAEACQAEACAMADQAVAFAJAHQANAIAAAPIAAAAQAAASgOAKQgMAKgWAAQgfAAgWgTg");
	this.shape_19.setTransform(7.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(0,-9.3,250,20.5), null);


(lib.cta_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAhQgJgJAAgSIAAgwIAJAAIAAAwQAAANAIAHQAGAIALAAQAMAAAHgHQAGgHABgOIAAgwIAJAAIAAAvQAAASgJAKQgKAKgQAAQgPAAgKgKg");
	this.shape.setTransform(80.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgNARABQATgBAMANQAMANAAARQAAASgMAMQgMANgTAAQgSAAgMgNgAgXgXQgJAKAAANQAAAPAJAJQAKAKANAAQAOAAAKgKQAJgJAAgPQAAgNgKgKQgJgLgOABQgOgBgJALg");
	this.shape_1.setTransform(71,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAqIAAghIgjgyIAMAAIAbApIAdgpIALAAIgjAyIAAAhg");
	this.shape_2.setTransform(61.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA7AAIAAAJIgyAAIAAAcIAtAAIAAAIIgtAAIAAAdIAzAAIAAAJg");
	this.shape_3.setTransform(50.6,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAqIAAhTIAdAAQATAAAMAMQANAMAAARQAAASgNAMQgMAMgTAAgAgaAhIATAAQAPAAAKgKQAJgIAAgPQAAgNgJgKQgKgJgPAAIgTAAg");
	this.shape_4.setTransform(42,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_5.setTransform(35.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAhQgKgJAAgSIAAgwIAKAAIAAAwQgBANAIAHQAGAIALAAQAMAAAHgHQAGgHABgOIAAgwIAJAAIAAAvQAAASgJAKQgKAKgQAAQgPAAgJgKg");
	this.shape_6.setTransform(29.6,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgLgNAAgSQAAgRALgNQANgNARABQASgBANALIgGAIQgLgJgOAAQgNgBgJALQgJAKAAANQAAAPAJAKQAJAKAOAAQAOAAAKgIIAAgWIgZAAIAAgHIAiAAIAAAgQgOANgTAAQgTAAgMgMg");
	this.shape_7.setTransform(20.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnAqIAAhTIAhAAQAVAAANALQAMAMAAASIAAAAQAAATgNALQgNAMgVAAgAgQAWIAKAAQAKgBAGgFQAGgGAAgKQAAgJgGgGQgGgFgKgBIgKAAg");
	this.shape_8.setTransform(8.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAqIgGgPIggAAIgGAPIgYAAIAkhTIAVAAIAkBTgAAJAJIgJgXIgJAXIASAAg");
	this.shape_9.setTransform(-1.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAqIAAhTIBDAAIAAATIgsAAIAAAOIAnAAIAAARIgnAAIAAANIAsAAIAAAUg");
	this.shape_10.setTransform(-9.5,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAqIAAggIgdAAIAAAgIgXAAIAAhTIAXAAIAAAfIAdAAIAAgfIAXAAIAABTg");
	this.shape_11.setTransform(-18,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAXAAIAAA/IAoAAIAAAUg");
	this.shape_12.setTransform(-25.8,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAqIAAhTIAXAAIAABTg");
	this.shape_13.setTransform(-31.5,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAqIgGgPIggAAIgGAPIgYAAIAkhTIAVAAIAkBTgAAJAJIgJgXIgJAXIASAAg");
	this.shape_14.setTransform(-38,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMAqIgQgaIgKAAIAAAaIgYAAIAAhTIAnAAQATAAAIAJQAIAHAAAMIAAABQAAARgSAIIAVAdgAgOgBIAOAAQAGAAADgDQAEgCAAgFIAAAAQAAgKgNAAIgOAAg");
	this.shape_15.setTransform(-46.5,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAqIAAg/IgZAAIAAgUIBJAAIAAAUIgaAAIAAA/g");
	this.shape_16.setTransform(-54.9,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAqIAAhKIgcAAIAAgJIBBAAIAAAJIgcAAIAABKg");
	this.shape_17.setTransform(-65.9,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAqIAAhTIA8AAIAAAJIgyAAIAAAcIAsAAIAAAIIgsAAIAAAdIAzAAIAAAJg");
	this.shape_18.setTransform(-73.3,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIAJAAIAABKIAuAAIAAAJg");
	this.shape_19.setTransform(-80.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_text, new cjs.Rectangle(-86.8,-7.3,173.7,16), null);


(lib.cta_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E65E16").s().p("AusCOQg2AAAAg3IAAitQAAg3A2AAIdYAAQA3AAAAA3IAACtQAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_bg, new cjs.Rectangle(-99.5,-14.2,199,28.4), null);


(lib.circleHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmwGxQiyi0AAj9QAAj8Cyi0QC0izD8AAQD+AACzCzQCyC0AAD8QAAD9iyC0QizCzj+AAQj8AAi0izg");
	this.shape.setTransform(0,-61.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.career = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334C").s().p("AgDAZQgJgBgDgCQgEgCgDgDQgDgEgCgFIgBgJQABgIACgDQACgFADgDQADgDAFgBQAFgCAGABIAeABIgBAQIgegCQgFAAgEACQgDADAAAEQAAAFADACQACACAGABIAeACIgBAPg");
	this.shape.setTransform(25.3,39.3,1.115,1.115,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334C").s().p("AgJAcIgJgGQgFgEgCgFQgCgDgBgIIACgLQADgHACgDQADgDAGgEQAFgCAGAAIAAAAQAFgBAFACQAGACAEAEQAEADACAGQADAFAAAHQABAFgCAFQgBAFgFAFQgEAFgEACQgFADgGAAQgFAAgGgCgAgGgMIgEAEIgDAEIgBAFQAAAEACACIADAEIAFADIAEAAIABAAIAFgBIAFgDIADgFIABgFQAAgDgCgCIgDgFIgFgCIgFgBg");
	this.shape_1.setTransform(25.5,32.1,1.115,1.115,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334C").s().p("AgGANIgVAEIgCgQIAUgCIAegaIACARIgSANIAWAIIADARg");
	this.shape_2.setTransform(25.2,24.7,1.115,1.115,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334C").s().p("AgUAQIAMgQIAAAAIgCgFIgPAFIgFgPIAzgQIAIAYQACAHAAADQAAAGgCACQgDAHgIACQgGACgFgCQgGgCgBgEIgPASgAABgJIADAJQABADACACQADABADAAIAAgBQADgBABgCQABgCgCgDIgDgKg");
	this.shape_3.setTransform(23,16.6,1.115,1.115,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334C").s().p("AgJAbQgFgBgFgFQgEgEgCgGQgCgDgBgIQAAgGACgEQADgGADgEIAJgGIALgDQAEAAAGADQAFABAEAFQAEADADAHQADAGAAAEQAAAHgCAEQgBAFgEAFIgKAGQgGADgFAAQgEAAgGgDgAgEgMIgFADIgDAFIgBAEIABAGIADAFIAFADIAEAAQAEAAACgBQACgBACgCIAEgFIABgFIgBgFIgEgFQgCgCgCgBIgGAAIgEABg");
	this.shape_4.setTransform(21,9.8,1.115,1.115,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334C").s().p("AgJAEIgRAKIgIgNIAvgbIAWAmIgMAGIgOgYIgIAFIANAVIgLAHg");
	this.shape_5.setTransform(18.3,3.3,1.115,1.115,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334C").s().p("AgeARIAfgYIgJgNIAKgIIAeAlIgLAIIgKgNIggAZg");
	this.shape_6.setTransform(14.5,-4,1.115,1.115,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334C").s().p("AgMAaIAOgOIgNgOIgPAOIgKgLIAnglIAKALIgOAOIANAOIAPgOIAKALIgnAlg");
	this.shape_7.setTransform(10,-8.3,1.115,1.115,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334C").s().p("AgGAcQgGgCgGgFQgEgDgDgGQgDgFgBgGQAAgGACgEQABgFAEgFIAAAAQAFgFAEgCIALgDIAKABIALAGQAFAGADAEIADALIgOABIgCgGQgBgDgDgCQgDgDgDAAIgEAAIgGABIgEAEIAAAAIgEAFIAAAFIABAGIAEAEQAFAEAEAAIADgFIgIgHIAHgHIATAPIgQATQgFAAgGgCg");
	this.shape_8.setTransform(5.4,-13,1.115,1.115,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334C").s().p("AgVASIAfgsIANAJIggAsg");
	this.shape_9.setTransform(1.5,-16.5,1.115,1.115,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334C").s().p("AgDAbIAAgUIgBAAIgFgDIgJAOIgNgJIAegtIAVAOIAIAHQADAEAAAEQACAGgEAGIAAABQgEAFgFACQgEACgGgBIABAXgAgDgFIAIAFQADABADAAQADAAABgCQACgDgBgDQgCgDgCgBIgJgGg");
	this.shape_10.setTransform(-2.6,-19.1,1.115,1.115,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334C").s().p("AAAAdIgJgDQgEgCgIgGQgEgFgEgGIANgGQAEAKAJAEIAEABQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAAgCIAAgCIgCgCIgJgIIgFgFIgCgGIABgHQACgEADgCIAGgDQADgCADABQAEAAAFADQAHADAEAEQAEAEADAFIgLAGIgGgHQgDgDgEgBIgDgBQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIAAAAIAAACIABACIACACIADADIAHAFQADACACADQACADAAADQgBAEgBADIAAAAIgFAGQgDADgDAAIgEABIgDAAg");
	this.shape_11.setTransform(-9.9,-23.6,1.115,1.115,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334C").s().p("AgLAMIAAgFQAEABACgBQAEgCAAgDIgGgBIAGgOIANAGIgEAKIgDAHIgFADIgFABQgDAAgDgCg");
	this.shape_12.setTransform(-12.9,-27,1.115,1.115,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334C").s().p("AgUAbIAMgnIgQgFIAEgNIAtAOIgEANIgPgFIgMAng");
	this.shape_13.setTransform(-16.8,-27.1,1.115,1.115,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334C").s().p("AAOAcIgCgKIgUgFIgFAJIgQgDIAhgxIAOADIAMA6gAgBADIALACIgDgQg");
	this.shape_14.setTransform(-24.4,-28.5,1.115,1.115,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334C").s().p("AAIAcIABgUIgSgCIgCAUIgPgBIAEg1IAQABIgCAUIASACIACgVIAPABIgFA2g");
	this.shape_15.setTransform(-30.6,-29.9,1.115,1.115,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334C").s().p("AgGAcIAAgpIgRAAIAAgNIAvgBIAAAOIgQAAIAAApg");
	this.shape_16.setTransform(-37,-30.4,1.115,1.115,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334C").s().p("AgZALIAQgMIgBgHIgRACIgCgQIA3gGIADAaIAAAKQgCAGgCACQgEAFgIACIgBAAQgFAAgGgCQgDgCgDgGIgSAQgAABgJIABAJQABAEACACIAFABQAEgBABgCIABgFIgCgKg");
	this.shape_17.setTransform(36.4,27.7,1.115,1.115,4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334C").s().p("AgfgPIA2gMIAJArIgNADIgGgcIgIACIAFAZIgLADIgGgaIgIACIAGAcIgNADg");
	this.shape_18.setTransform(36.1,21.2,1.115,1.115,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334C").s().p("AgggNIA0gQIANAqIgMAEIgJgcIgIADIAIAZIgMAEIgHgZIgIACIAJAcIgNAEg");
	this.shape_19.setTransform(35,15.2,1.115,1.115,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334C").s().p("AgTASIAMgRIgDgFIgQAFIgFgNIAzgWIAJAZQACAEABAGQAAAFgBADQgEAIgHACQgGACgFgBQgGgCgDgDIgMATgAAAgJIAEAJIAEAFQACABAEgBIAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQABgCgBgDIgEgKg");
	this.shape_20.setTransform(33.1,9.2,1.115,1.115,4.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334C").s().p("AgLAPIAGgIIgKgSIgLABIgHgOIA8gFIAHANIgmAugAgCgMIAEALIAMgNg");
	this.shape_21.setTransform(30.3,3.7,1.115,1.115,4.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334C").s().p("AgGAcIgGgCIgGgEIgGgGIgEgLIAAgKQACgHACgDIAIgJIABAAIAKgEIAKAAQAGABAFADQAEADAEAGIAEAHIABAHIAAAFIgBAGIgOgFIABgGQAAgDgDgDIgEgEIgFgCIgEAAIgFADIgBAAIgEAEIgCAFIgBAEIACAFIADADIADACIADABIADABIAAAOg");
	this.shape_22.setTransform(28.2,-3.4,1.115,1.115,4.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334C").s().p("AgjACIApglIAeAiIgKAIIgUgVIgGAFIASAUIgKAIIgQgUIgHAGIATAWIgJAIg");
	this.shape_23.setTransform(23.3,-11.1,1.115,1.115,4.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334C").s().p("AgLAbIAOgPIgOgNIgPAOIgLgKIAmgoIALALIgNAPIANANIAPgPIALALIgmAog");
	this.shape_24.setTransform(19.1,-16.3,1.115,1.115,4.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334C").s().p("AgdAXIAaghIgNgKIAJgLIAlAfIgIAJIgOgJIgZAgg");
	this.shape_25.setTransform(15.4,-21.5,1.115,1.115,4.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334C").s().p("AghAMIAdgvIAmAYIgHALIgagPIgDAHIAWANIgGAKIgWgOIgFAIIAZAPIgHAMg");
	this.shape_26.setTransform(8.1,-26.3,1.115,1.115,4.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334C").s().p("AgBAdQgFAAgEgDQgHgDgFgFQgEgFgEgHIANgFQAFAKAIAEIAEABIADgCIAAgBIAAgCIgCgDIgKgIQgCgCgCgDQgCgDAAgEIACgHIAAAAQACgEACgCIAGgDIAIAAIAIADQAFACAGAFQAFAGACAEIgMAGIgGgHIgGgFIgEgBQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIgBACIABABIAMALIAEAGIACAGQABADgDAEIAAAAIgEAGQgDADgEAAIgEAAIgDAAg");
	this.shape_27.setTransform(2.8,-29.7,1.115,1.115,4.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334C").s().p("AgKAbQgGgCgEgEQgFgEgCgFQgCgGAAgFQAAgGACgEIAAgBQACgGAEgDQAEgEAFgDQAGgCAFAAQAGAAAFACQAFACAGAEQAEAFACAFQACAEABAGQAAAFgCAGQgCAFgEAFQgFAEgEACQgFACgHAAIgBAAQgDAAgHgCgAAAgOIgFABIgEAEQgDACAAADIAAAAQgCADAAACIABAFIAEAFQACADADAAIAEABQAEAAACgBIAEgEIADgFIABgFIgBgFIgDgFIgFgDIgEgBIgBAAg");
	this.shape_28.setTransform(-3,-32.9,1.115,1.115,4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334C").s().p("AgGAcQgHgBgEgEQgFgEgDgEQgDgGgBgFQgBgGACgEIAAgBIAFgKQADgFAFgCIALgEQAEgBAIACQAFABAGAEQAEADADAFQADAFABAGQABAEgCAGIAAABQgBAGgEAEQgEAFgEACQgFADgGABIgFAAIgGgBgAgBgOIgFACIgEAEIgDAFIAAAFIABAGIAEAEQADACACABQADABACgBIAFgCQADgBABgDIADgFIAAgFQAAgDgBgDIgEgEIgFgDIgDAAIgCAAg");
	this.shape_29.setTransform(-10,-35.8,1.115,1.115,4.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334C").s().p("AAGAeIADgVIgTgEIgDAWIgPgDIAIg3IAQADIgEAVIATACIADgUIAPACIgIA2g");
	this.shape_30.setTransform(-17,-37.9,1.115,1.115,4.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334C").s().p("AgKAaQgFgCgEgEQgEgEgBgGQgCgEAAgGIADgMQACgEAEgFQAFgEAFgBQAFgCAGAAIAIABIAGADIAFAEIAEAFIgMAIIgFgFQgCgCgFAAIgEABQgDABgCACIgDAFIgBAFIABAFIACAFIAEAEIAFABIAEAAIADgCIAGgEIALAJIgFAFIgFADIgHADIgJAAQgGgBgEgCg");
	this.shape_31.setTransform(-23.5,-39,1.115,1.115,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.career, new cjs.Rectangle(-39.6,-42.3,79.4,84.7), null);


(lib.businessAnalyst_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 300x600
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIgDIgSAJIgJgNIAzggIAJAOIgSALIAdAsIgRALg");
	this.shape.setTransform(25.3,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAjIAFgQQANADAKgFQAHgDgCgEIAAgBQgCgDgMACQgMADgHgBQgJgCgEgIQgEgJAEgJQAEgJALgFQAQgGANADIgDAQQgKgCgJAEQgGADABAEIAAABQACADAMgCQAMgDAHABQAJACAEAIIAAAAQAEAJgEAJQgFAJgLAFQgMAFgJAAQgHAAgGgCg");
	this.shape_1.setTransform(20.6,45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAPIglghIAWgGIAUAUIAGgdIAVgGIgNAwIAIAZIgTAGg");
	this.shape_2.setTransform(13.4,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgggfIATgEIAKAzIAggGIAEARIg0AJg");
	this.shape_3.setTransform(9.3,49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMgjIASAAIAhBEIgVABIgGgNIgaABIgEANIgUABgAgIAHIAOgBIgIgSg");
	this.shape_4.setTransform(2.2,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAlIgYgpIgFAlIgTgCIAJhFIASACIAXAnIAEgjIATACIgIBFg");
	this.shape_5.setTransform(-6,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAjIgBgNIgZgIIgIALIgUgFIAug7IASAFIALBKgAAAABIAOAEIgCgUg");
	this.shape_6.setTransform(-14.7,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAhQgRgKgGgQIAPgGQAHANAKAFQAGAEACgFIAAAAQACgEgIgHQgLgIgDgGQgEgIAFgJQAEgJAKgCQAIgCALAFQAPAJAGANIgPAIQgFgLgJgEQgGgEgCAEQgBAEAIAIQALAIADAGQADAIgEAJQgFAJgKACIgFAAQgGAAgJgEg");
	this.shape_7.setTransform(-23.3,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAeQgQgLgEgSIARgDQADANAKAGQAGAFACgEQADgDgHgKQgJgJgDgGQgDgJAGgIQAGgIAIgBQAKgBAKAIQAOAJAEAPIgPAFQgEgLgJgGQgGgEgCAEIAAAAQgCADAIAKQAJAJACAHQADAIgGAIQgGAIgKABIgBAAQgIAAgKgHg");
	this.shape_8.setTransform(-28.8,40.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsAHIAvgzIApAmIgLAMIgbgYIgGAHIAYAWIgLALIgXgWIgJAIIAbAZIgKAMg");
	this.shape_9.setTransform(-33.8,36.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAiIAMguIgeAXIgMgOIA2gsIALAPIgLAsIAdgWIAMAOIg2Asg");
	this.shape_10.setTransform(-38.8,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiALIA7glIAKARIg7Akg");
	this.shape_11.setTransform(-42.1,26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAgQgJgEgGgLQgIgRAEgRIAQAEQgCANAFAKQADAHAFgCIAAAAQAEgCgDgMQgDgLABgHQABgKAIgEIAAAAQAJgEAJADQAJAEAFALQAIAQgDANIgRgCQACgLgFgJQgDgGgEACQgDABACANQAEAMgCAHQgBAJgJAEQgEACgFAAQgEAAgEgCg");
	this.shape_12.setTransform(-44.5,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAOQgKgdAfgKIAkgMIAGASIgkAMQgOAFAEALQAEANAOgFIAkgMIAGATIglAMQgGACgGAAQgUAAgIgYg");
	this.shape_13.setTransform(-46.9,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAeQgGgGgCgMIgGgjIBEgLIAGAiQACANgFAHQgEAGgGAAQgLACgHgKQgCAPgLACIgEAAQgHAAgFgFgAgSgHIACAOQACAJAGgBQAGAAgBgKIgCgOgAAHgLIACALQABAJAGgBIABAAQAGAAgCgIIgCgNg");
	this.shape_14.setTransform(-49.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19334C").s().p("AiBEtQjPg7h+ixQh+ivANjWIJkAjIIdEgQhnC/jHBVQh2Ayh4AAQhTAAhUgYg");
	this.shape_15.setTransform(-3.9,27.6,0.966,0.966);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = getMCSymbolPrototype(lib.businessAnalyst_text, new cjs.Rectangle(-59.6,-26.9,111.6,85.9), null);


(lib.businessAnalyst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BusinessAnalyst();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.businessAnalyst, new cjs.Rectangle(-35,-35,70,69.5), null);


(lib.bubbleBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7BD6FF").ss(1,1,1).p("AHbAAQAADFiLCLQiLCLjFAAQjEAAiLiLQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEg");
	this.shape.setTransform(47.5,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape_1.setTransform(47.5,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbleBG, new cjs.Rectangle(-1,-1,97,97), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(160,212,231,0.698)","rgba(160,212,231,0)"],[0.706,1],9.3,-47.6,9.3,-124.6).s().p("EAFTAoBIAAgFQAAgPgBgIQgDgXgRgIQgRgJgRgDIgMgCQgag4gvg7Qhfh3hugQQgNADgTAIQgoAPglAYQh3BKgxB9IgTAFQgVAGgJAKQgLAKgCAVQgBALABAIIyOAAMAAAhP+MAvQAAAMAAABQBg");
	this.shape.setTransform(-2.1,-70.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(-153.4,-326.9,302.5,512.2), null);


(lib.bloom_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E65E16").ss(2,1,1).p("ADIAAQAABTg6A7Qg7A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA7A6QA6A7AABSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bloom_MC, new cjs.Rectangle(-21,-21,42,42), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(0,0,50,50), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334C").s().p("AhTBBIBNhHIAGAfIALgCQARgDAMgKQAogdgRhKIAKASQAKAXABAWQAEBBhRAeIAGAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-8.4,-9.4,16.8,18.9), null);


(lib.swmming2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.swimming_bear_1();
	this.instance.parent = this;

	this.instance_1 = new lib.swimming_goat_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.swimming_horse_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-154.5,217,309);


(lib.swmming1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.swimming_horse_1();
	this.instance.parent = this;

	this.instance_1 = new lib.swimming_goat_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.swimming_bear_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-102,156,204);


(lib.seeAllPaths = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.hit_btn();
	this.instance.parent = this;
	this.instance.setTransform(-24,-6,2.136,0.746);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRCxQgjAAAAgeIAAklQAAgeAjAAIDHAAIAAFhg");
	mask.setTransform(-9.2,13.1);

	// Layer_2
	this.arrow = new lib.seePath_arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(-15,12.9,1,1,0,0,0,-6.2,0);

	var maskedShapeInstanceList = [this.arrow];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAeIANgQQANAKAOAAQAJAAAAgGIAAAAQAAgCgDgCIgKgEQgQgDgHgGQgJgFAAgMQAAgLAJgIQAJgIAOAAQAUAAAOAMIgLAQQgMgIgLAAQgIAAAAAFQAAADADACIAKADQAQAEAHAFQAJAGAAALQAAANgKAHQgJAHgPAAQgXABgQgOg");
	this.shape.setTransform(37.9,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAqIAAggIgdAAIAAAgIgXAAIAAhTIAXAAIAAAfIAdAAIAAgfIAXAAIAABTg");
	this.shape_1.setTransform(30.2,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAqIAAg+IgZAAIAAgVIBJAAIAAAVIgaAAIAAA+g");
	this.shape_2.setTransform(22.3,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAqIgGgPIggAAIgGAPIgYAAIAkhTIAVAAIAkBTgAAJAJIgJgXIgJAXIASAAg");
	this.shape_3.setTransform(14.2,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAqIAAhTIAjAAQAPAAAKAIQAKAIgBAOQABANgLAIQgJAIgQAAIgMAAIAAAYgAgMAAIAMAAQAFAAADgCQAEgEAAgEQAAgMgMABIgMAAg");
	this.shape_4.setTransform(6.3,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAXAAIAAA+IAoAAIAAAVg");
	this.shape_5.setTransform(46.4,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIAXAAIAAA+IAoAAIAAAVg");
	this.shape_6.setTransform(39.6,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWAqIgGgPIggAAIgGAPIgYAAIAkhTIAVAAIAkBTgAAJAJIgJgXIgJAXIASAAg");
	this.shape_7.setTransform(31.5,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghAqIAAhTIBDAAIAAATIgsAAIAAAOIAnAAIAAARIgnAAIAAANIAsAAIAAAUg");
	this.shape_8.setTransform(20.8,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAqIAAhTIBDAAIAAATIgsAAIAAAOIAnAAIAAARIgnAAIAAANIAsAAIAAAUg");
	this.shape_9.setTransform(13.4,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAdIANgPQANAKAOAAQAJAAAAgFIAAgBQAAgDgDgCIgKgDQgQgEgHgEQgJgGAAgLQAAgMAJgIQAJgHAOAAQAUgBAOALIgLARQgMgIgLAAQgIAAAAAGQAAADADABIAKAEQAQADAHAGQAJAEAAAMQAAANgKAHQgJAIgPAAQgXAAgQgPg");
	this.shape_10.setTransform(5.8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.bg = new lib.seePaths_BG();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(29.2,13.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.seeAllPaths, new cjs.Rectangle(-24,-6,106.8,37.3), null);


(lib.pin_bloom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bloom_MC();
	this.instance.parent = this;
	this.instance.setTransform(0,0.6,0.58,0.58);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.81,scaleY:0.81,alpha:1},19).to({regY:0.1,scaleX:1.03,scaleY:1.03,y:0.7,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.6,24.4,24.4);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.plus = new lib.plus();
	this.plus.name = "plus";
	this.plus.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.plus).wait(1));

	// Layer_1
	this.bloom = new lib.pin_bloom();
	this.bloom.name = "bloom";
	this.bloom.parent = this;
	this.bloom.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.bloom).wait(1));

	// Layer_3
	this.bg = new lib.pin_orangeBG();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(-12.5,-12.5,25,25), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.text = new lib.cta_text();
	this.text.name = "text";
	this.text.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.bg = new lib.cta_bg();
	this.bg.name = "bg";
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-99.5,-14.2,199,28.4), null);


(lib.circle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(49.9,57.8,0.377,0.283,45,0,0,6.5,-55.4);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(-48.4,-45.1,1.008,1.008,0,0,0,-48.1,-105.8);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(53.2,60.5);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmTGUQimioAAjsQAAjrCminQCoinDrAAQDsAACoCnQCmCnAADrQAADsimCoQioCmjsAAQjrAAioimg");

	// img
	this.image = new lib.marketingManager_img();
	this.image.name = "image";
	this.image.parent = this;

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmvGxQizizAAj+QAAj9CzizQCziyD8AAQD+AACzCyQCyCzAAD9QAAD+iyCzQizCyj+AAQj8AAiziyg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.text = new lib.marketing_manager_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0.3,0,1,1,0,0,0,15.6,-38.5);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle3, new cjs.Rectangle(-84,-61.7,153.7,145.2), null);


(lib.circle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(-39.4,25.8,0.377,0.283,-30,0,0,6.6,-55.5);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(16.5,-5.1,0.655,0.655,0,0,0,25.2,-68.9);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(-47.5,30.4);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj+D+QhohpAAiVQAAiUBohpQBqhpCUAAQCVAABqBpQBoBpAACUQAACVhoBpQhqBpiVAAQiUAAhqhpg");

	// Layer_6
	this.image = new lib.salesforceTechnicalArchitect_image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(-0.5,-0.5);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkaEcQh1h2AAimQAAilB1h2QB2h1CkAAQCmAAB2B1QB0B2AAClQAACmh0B2Qh2B1imgBQikABh2h1g");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.text = new lib.salesforceTechnicalArchitect_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(3.1,15);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle2, new cjs.Rectangle(-64.2,-40.1,121.4,97.6), null);


(lib.circle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(-36.6,47.7,0.377,0.283,-30,0,0,6.6,-55.5);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(18.1,-14.6,0.788,0.788,0,0,0,22.9,-79.7);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(-46.3,50.7);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak0E1Qh/iBAAi0QAAizB/iBQCBh/CzAAQC0AACBB/QB/CBAACzQAAC0h/CBQiBB/i0AAQizAAiBh/g");

	// Layer_6
	this.image = new lib.salesforceDeveloper_img();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(-0.5,-0.5);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlUFVQiNiNAAjIQAAjHCNiNQCOiNDGAAQDIAACNCNQCNCNAADHQAADIiNCNQiNCNjIAAQjGAAiOiNg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.text_salesforceDeveloper();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0.5,0.5,1,1,0,0,0,-5.5,-34);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle1, new cjs.Rectangle(-61.4,-48.2,109.8,117.7), null);


(lib.circ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(41.2,43.7,0.377,0.283,53.5,0,0,6.6,-55.4);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(-16.5,-13.6,0.794,0.794,0,0,0,-20.9,-78.3);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(45.9,47);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AirGZQhOggg/hBQhFhFgghVQgchJAAhUIAAgDQABi1CAiAQAXgYAZgUQByhWCWAAQBbAABPAhQA0AVAvAmQAWAQAVAWQBxBxAPCZQACAXAAAXQAAC3iCCAQiBCCi3AAQhcAAhPghg");

	// Layer_5
	this.image = new lib.salesManager_1();
	this.image.name = "image";
	this.image.parent = this;

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlSFTQiMiNAAjGQAAjFCMiNQCNiMDFAAQDHAACMCMQCMCNAADFQAADGiMCNQiMCMjHAAQjFAAiNiMg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.salesManager_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ7, new cjs.Rectangle(-67.6,-48.6,128.2,117.5), null);


(lib.circ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(46.1,24.1,0.377,0.283,4.7,0,0,6.5,-55.6);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(-10.9,-4.8,0.644,0.644,0,0,0,-17.1,-68.5);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(49.9,24.5);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5D6QhnhoAAiSQAAiRBnhoQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhohng");
	mask.setTransform(0,-0.1);

	// Layer_5
	this.image = new lib.businessAnalyst();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(0,0.3);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkWEXQhzh0AAijQAAiiBzh0QB0hzCiAAQCkAABzBzQBzB0AACiQAACjhzB0QhzBzikAAQiiAAh0hzg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.businessAnalyst_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ6, new cjs.Rectangle(-59.6,-39.4,126.4,98.4), null);


(lib.circ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(50.1,-14.6,0.377,0.283,-30,0,0,6.6,-55.5);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(-16.5,6.5,0.648,0.648,0,0,0,-25.5,-51.1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(53.7,-18.7);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_3
	this.hit_1 = new lib.circleHit();
	this.hit_1.name = "hit_1";
	this.hit_1.parent = this;
	this.hit_1.setTransform(0,0.4,0.647,0.647,0,0,0,0,-60.6);
	new cjs.ButtonHelper(this.hit_1, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit_1).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5D5Qg3g3gZhEQgXg6AAhEQABiRBmhoQATgSAUgQQBbhFB3AAQBJAAA/AbQAqARAkAdQASAOARAQQBaBbAMB6QACASAAASQgBCShnBnQhnBoiSAAQiRAAhohog");

	// Layer_5
	this.image = new lib.serviceManager_image_1();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(0.3,0.3);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkWEYQhzh1AAijQAAiiBzh1QB0hyCiAAQCkAABzByQBzB1AACiQAACjhzB1QhzByikAAQiiAAh0hyg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.serviceManager_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0,0.4,1,1,0,0,0,0,0.4);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ5, new cjs.Rectangle(-59.7,-60.4,128.8,99.9), null);


(lib.circ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(55.2,37.6,0.377,0.283,0,0,0,53.8,-19.1);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(0.2,-0.1,0.549,0.549,0,0,0,0.1,-61.2);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(42.7,25.1);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjJDKQhThTAAh3QAAh2BThTQBUhUB1ABQB2gBBUBUQBTBTAAB2QAAB3hTBTQhUBUh2gBQh1ABhUhUg");

	// Layer_4
	this.image = new lib.salesforceAdministrator_image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(0.5,0.5);

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjpDqQhghhAAiJQAAiIBghhQBhhgCIAAQCJAABhBgQBgBhAACIQAACJhgBhQhhBgiJAAQiIAAhhhgg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.salesforceAdmin_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0,0.4,1,1,0,0,0,-3.6,-19.1);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ4, new cjs.Rectangle(-49,-33.6,107,83.9), null);


(lib.circ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.hit2 = new lib.circleHit();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(-36.5,61.2,0.377,0.283,-30,0,0,6.6,-55.5);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.circleHit(), 3);

	this.hit = new lib.circleHit();
	this.hit.name = "hit";
	this.hit.parent = this;
	this.hit.setTransform(0,0,1.024,1.024,0,0,0,-0.1,-61.1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.circleHit(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit},{t:this.hit2}]}).wait(1));

	// pin
	this.pin = new lib.pin();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(-45.7,64.4);
	this.pin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZGZQioiqAAjvQAAjuCoiqQCriqDuABQDvgBCrCqQCoCqAADuQAADvioCqQirCpjvAAQjuAAiripg");

	// Layer_6
	this.image = new lib.salesforceConsultant_image();
	this.image.name = "image";
	this.image.parent = this;

	var maskedShapeInstanceList = [this.image];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am2G3Qi2i1ABkCQgBkBC2i1QC2i2EAAAQECAAC1C2QC1C1ABEBQgBECi1C1Qi1C2kCAAQkAAAi2i2g");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.text = new lib.salesforceConsultant_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0,0,1,1,0,0,0,-6.2,-42.5);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ3, new cjs.Rectangle(-62.5,-62.7,129.5,146.6), null);


(lib.career_callout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new lib.career();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(0,-8.2);

	this.arrow = new lib.arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(30.5,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.career_callout, new cjs.Rectangle(-39.6,-50.5,79.4,101.1), null);


(lib.bubble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"salesforceDeveloper":0,"techArchitect":1,"marketingManager":2,"businessAnalyst":3,"salesManager":4,"serviceManager":5,"salesConsultant":6,"salesforceAdmin":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334E").s().p("AgNAiQAUgNAAgVQAAgTgUgOIADgEQAYAOAAAXQAAAYgYAOg");
	this.shape.setTransform(18.1,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334E").s().p("AgOAVQgFgFgBgHQAAgHAHgDQAFgEAIABQAHAAAHACIAAgCQAAgNgOAAQgGAAgHAEIgCgHQAIgDAIAAQAJAAAGAFQAFAEAAAKIAAAbIgHAAIAAgHQgGAIgKAAQgHAAgFgDgAgJACQgDACAAAFQAAAEADADQAEACAEAAQAGABAEgEQAFgDAAgGIAAgFQgHgBgHAAQgFAAgEACg");
	this.shape_1.setTransform(13.9,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334E").s().p("AgHARIAAgbIgGAAIAAgGIAGAAIAAgOIAHAAIAAAOIAOAAIAAAGIgOAAIAAAbQAAAHAHAAQAEAAADgBIAAAGQgEACgEAAQgNAAAAgOg");
	this.shape_2.setTransform(10,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334E").s().p("AgOAVQgFgFgBgHQAAgHAHgDQAFgEAIABQAHAAAHACIAAgCQAAgNgOAAQgFAAgIAEIgCgHQAIgDAIAAQAJAAAGAFQAEAEABAKIAAAbIgHAAIAAgHQgGAIgKAAQgHAAgFgDgAgJACQgDACAAAFQAAAEADADQADACAFAAQAGABAFgEQAEgDAAgGIAAgFQgHgBgGAAQgGAAgEACg");
	this.shape_3.setTransform(5.9,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334E").s().p("AgQAbQgGgHAAgLIAAAAQAAgKAGgHQAHgGAJAAQAKAAAGAKIAAgcIAIAAIAABAIgIAAIAAgJQgHAKgJAAQgJAAgHgGgAgLgDQgEAEgBAIIAAAAQABAIAEAFQAFAFAGAAQAGAAAGgFQAFgFAAgIIAAAAQAAgIgFgEQgGgFgGAAQgGAAgFAFg");
	this.shape_4.setTransform(0.7,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334E").s().p("AgWAWIADgFQALAJALAAQAFAAAFgDQADgDAAgEIAAgBQAAgFgDgCQgEgDgJgCQgLgDgEgDQgFgEAAgHQAAgIAGgEQAGgGAIAAQAMABAKAHIgFAGQgIgHgJAAQgGAAgEADQgDADAAAEIAAAAQAAAFADADQAEACAJACQALADAEADQAGAFAAAGQAAAJgHAFQgFAEgKAAQgOAAgKgKg");
	this.shape_5.setTransform(-6.9,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334E").s().p("AgSAZQgHgIAAgMIAAgkIAHAAIAAAjQAAALAFAFQAFAGAIgBQAJABAFgGQAFgFAAgKIAAgkIAHAAIAAAjQAAANgHAIQgHAHgMAAQgLAAgHgHg");
	this.shape_6.setTransform(-12.8,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334E").s().p("AgNAAQAAgXAYgOIADAEQgUAOAAATQAAAVAUANIgDAEQgYgOAAgYg");
	this.shape_7.setTransform(-17.7,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334E").s().p("AgRARIAEgFQAIAGAHAAQAEAAADgCQACgCAAgDQAAgDgDgCIgIgDIgKgEQgFgDAAgGQAAgGAFgDQAEgEAGAAQAJAAAIAFIgDAFQgHgEgHAAQgDAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIAAABQAAADAEACIAHADQAHACADABQAFADAAAGQAAAHgFADQgEAEgIAAQgJAAgJgHg");
	this.shape_8.setTransform(28,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334E").s().p("AAOAhIAAgbQAAgGgEgEQgDgDgHAAQgFAAgEAEQgDADAAAGIAAAbIgHAAIAAhBIAHAAIAAAbQAFgJAJAAQAJAAAFAFQAEAFAAAIIAAAdg");
	this.shape_9.setTransform(23.6,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334E").s().p("AgHARIAAgbIgGAAIAAgGIAGAAIAAgOIAHAAIAAAOIAOAAIAAAGIgOAAIAAAbQAAAHAHAAQAEAAADgBIAAAGQgEACgEAAQgNAAAAgOg");
	this.shape_10.setTransform(19.3,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334E").s().p("AANAYIAAgaQAAgHgDgEQgEgDgFAAQgFAAgEAEQgEAEgBAGIAAAaIgGAAIAAguIAGAAIAAAIQAGgJAJAAQAJAAAFAFQAEAFAAAJIAAAcg");
	this.shape_11.setTransform(15.3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334E").s().p("AgRARQgGgHAAgKQAAgJAGgHQAIgHAJAAQAKAAAHAHQAHAHAAAJIAAAAQAAAKgHAHQgHAHgKAAQgKAAgHgHgAgMgMQgEAFAAAHIAAAAQAAAIAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_12.setTransform(10,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334E").s().p("AAXAgIAAgzIgXAhIgWghIAAAzIgHAAIAAg+IAHAAIAWAhIAXghIAHAAIAAA+g");
	this.shape_13.setTransform(3.6,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334E").s().p("AgVAgIAAgFIAWgVIAKgKQADgEAAgFQAAgFgEgDQgDgDgGAAQgEgBgEADQgEADgEAFIgFgDQAFgIAEgCQAGgEAHAAQAIAAAFAFQAGAFAAAIQAAAHgEAFQgDAEgJAIIgQAPIAhAAIAAAGg");
	this.shape_14.setTransform(-4.9,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334E").s().p("AADAgIAAg3IgLADIgBgFIAOgGIAFAAIAAA/g");
	this.shape_15.setTransform(-9.1,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334E").s().p("AgHARIAAgbIgGAAIAAgGIAGAAIAAgOIAHAAIAAAOIAOAAIAAAGIgOAAIAAAbQAAAHAHAAQAEAAADgBIAAAGQgEACgEAAQgNAAAAgOg");
	this.shape_16.setTransform(-14.1,5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334E").s().p("AgRARIAEgFQAIAGAHAAQAEAAADgCQACgCAAgDQAAgDgDgCIgIgDIgKgEQgFgDAAgGQAAgGAFgDQAEgEAGAAQAJAAAIAFIgDAFQgHgEgHAAQgDAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIAAABQAAADAEACIAHADQAHACADABQAFADAAAGQAAAHgFADQgEAEgIAAQgJAAgJgHg");
	this.shape_17.setTransform(-17.8,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334E").s().p("AgOAUQgGgEAAgGQABgIAFgDQAFgDAJgBQAHAAAHACIAAgCQAAgMgOAAQgGAAgHADIgCgGQAJgDAHAAQAKAAAFAFQAEAEAAAJIAAAcIgGAAIAAgHQgGAIgKAAQgHAAgFgEgAgIACQgEADAAAEQAAAFADACQADACAGABQAFgBAFgDQAEgEAAgFIAAgEQgHgCgGAAQgGAAgDACg");
	this.shape_18.setTransform(-22.3,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334E").s().p("AgUAgIAAg+IAHAAIAAA3IAiAAIAAAHg");
	this.shape_19.setTransform(-26.9,5.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334E").s().p("AgnAgIAOgRQAOALAPAAQAKAAAAgGIAAAAQAAgEgDgBQgDgCgIgCQgRgEgHgFQgKgGAAgMIAAgBQAAgNAJgIQAKgIAPAAQAWAAAPAMIgMASQgNgJgMAAQgJAAAAAFIAAABQAAADADACIAMAEQARAEAIAFQAJAGAAAMIAAAAQAAAOgKAIQgKAIgRAAQgZAAgRgPg");
	this.shape_20.setTransform(35.9,-9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334E").s().p("AgoAuIAAhbIAuAAQARABAIAHQAGAGAAAJQAAAPgOAGQASAFAAAQIAAABQAAALgJAHQgKAHgQAAgAgPAZIASAAQAMABAAgJIAAgBQAAgHgMgBIgSAAgAgPgIIAPAAQAMAAAAgIIAAAAQAAgIgMAAIgPAAg");
	this.shape_21.setTransform(27.8,-9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334E").s().p("AgiAhQgOgNAAgUQAAgTAOgNQAPgOATgBQAVABAOAOQAOANAAATIAAAAQAAATgOAOQgOAOgVABQgUgBgOgOgAgQgQQgGAHAAAJIAAAAQAAAKAGAHQAHAHAJAAQALABAGgIQAGgGAAgLQAAgJgGgHQgHgIgKABQgJgBgHAIg");
	this.shape_22.setTransform(18,-9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334E").s().p("AggAfIARgPQAHAIAGAAQAKAAAAgNIAAg4IAZAAIAAA4QAAARgJAJQgKAJgOAAQgVAAgLgPg");
	this.shape_23.setTransform(9,-8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgMANQgLAOgTABQgSgBgMgOgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAEAHAHAAQAHAAAFgHQAEgHABgLQgBgKgEgHQgFgHgHAAQgGAAgFAHg");
	this.shape_24.setTransform(-1.8,-9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334E").s().p("AgjAlIALgSQAKAIAKgBQAPABABgUQgIAIgKAAQgOAAgHgIQgJgHAAgNIAAAAQAAgPAKgKQAKgIAQgBQARAAAKALQAKALAAAXIAAAAQAAAWgKANQgMAOgTABQgRgBgOgKgAgIgXQgEADAAAGIAAAAQAAAFAEAEQADADAFAAQAGAAAEgDQADgEAAgFIAAAAQAAgFgEgEQgDgEgGAAQgFAAgDAEg");
	this.shape_25.setTransform(-10.5,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334E").s().p("AgaAoQgLgIAAgLIAAgBQAAgPAQgGQgMgGAAgOIAAAAQAAgLAJgHQAKgHAOAAQAPAAAKAHQAJAHAAALIAAAAQAAAOgMAGQAQAHAAAOQAAAMgLAIQgLAHgQAAQgPAAgLgHgAgJALQgDACAAAEIAAABQAAAEADADQAEADAFAAQAGAAAEgDQADgDAAgEIAAgBQAAgEgDgCQgEgEgGAAQgFAAgEAEgAgHgYQgDACAAAEIAAAAQAAAFADACQADADAEABQAFgBADgDQADgCAAgFIAAAAQAAgEgDgCQgDgEgFAAQgEAAgDAEg");
	this.shape_26.setTransform(-18.4,-9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334E").s().p("AgOAOQAOgBAAgMIgLAAIAAgYIAZAAIAAAVQAAAYgaABg");
	this.shape_27.setTransform(-24.1,-4.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgMANQgLAOgTABQgSgBgMgOgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAIAAAEgHQAEgHABgLQgBgKgEgHQgEgHgIAAQgHAAgEAHg");
	this.shape_28.setTransform(-30.1,-9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334E").s().p("AgCAuIAAhDIgPADIgEgTIAZgIIATAAIAABbg");
	this.shape_29.setTransform(-37.5,-9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334E").s().p("AgiAhQgOgNAAgUQAAgTAOgNQAPgOATgBQAVABAOAOQAOANAAATIAAAAQAAATgOAOQgOAOgVABQgUgBgOgOgAgQgQQgGAHAAAJIAAAAQAAAKAHAHQAGAHAJAAQALABAGgIQAGgGAAgLQAAgJgGgHQgHgIgKABQgJgBgHAIg");
	this.shape_30.setTransform(14.1,-9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334E").s().p("AggAfIAQgPQAHAIAIAAQAJAAAAgNIAAg4IAZAAIAAA4QAAARgJAJQgJAJgPAAQgVAAgLgPg");
	this.shape_31.setTransform(5.1,-8.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQALgIAAgHQgBgEgCgDQgDgCgEAAQgHAAgKALIgRgOQAHgKAIgEQAJgFALAAQAPAAAKAIQAJAIAAANQAAAKgGAHQgEAGgLAIIgPALIAlAAIAAAUg");
	this.shape_32.setTransform(-5.1,-9.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#18334E").s().p("AgZAlQgMgLAAgXIAAAAQAAgWALgNQALgPATAAQARABAOAJIgMASQgJgGgJAAQgIAAgEAGQgEAGAAAHQAJgHAJAAQANAAAJAIQAIAGABANQAAAPgLAKQgLAIgOABQgRAAgKgLgAgIAHQgDAEgBAEIAAABQABAFADADQADAEAGAAQAFgBAEgDQADgDAAgFIAAgBQAAgEgDgEQgEgDgGAAQgFAAgDADg");
	this.shape_33.setTransform(-13,-9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#18334E").s().p("AgkAeIAQgQQAKALALAAQAFAAADgDQADgDAAgEIAAAAQAAgJgNAAIgLAAIgEgMIAUgTIgiAAIAAgVIBBAAIAAASIgWATQAYAFAAATIAAABQAAAOgKAIQgKAJgPAAQgXAAgPgRg");
	this.shape_34.setTransform(-21.1,-8.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#18334E").s().p("AgNAOQANgBgBgMIgKAAIAAgYIAZAAIAAAVQAAAYgaABg");
	this.shape_35.setTransform(-26.5,-4.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18334E").s().p("AgaAoQgKgIAAgLIAAgBQAAgPAPgGQgNgGAAgOIAAAAQAAgLAKgHQAKgHAOAAQAPAAAKAHQAKAHAAALIAAAAQAAAOgNAGQAPAHAAAOQAAAMgKAIQgKAHgRAAQgQAAgKgHgAgJALQgDACAAAEIAAABQAAAEADADQAEADAFAAQAGAAADgDQAEgDAAgEIAAgBQAAgEgEgCQgDgEgGAAQgFAAgEAEgAgHgYQgDACAAAEIAAAAQAAAFADACQADADAEABQAFgBADgDQADgCAAgFIAAAAQAAgEgDgCQgDgEgFAAQgEAAgDAEg");
	this.shape_36.setTransform(-31.9,-9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#18334E").s().p("AgQAbQgGgHAAgLIAAAAQAAgKAGgHQAHgGAJAAQAKAAAGAKIAAgcIAIAAIAABAIgIAAIAAgJQgHAKgJAAQgJAAgHgGgAgKgDQgFAEgBAIIAAAAQABAIAFAFQAEAFAGAAQAGAAAFgFQAGgFAAgIIAAAAQAAgIgGgEQgFgFgGAAQgGAAgEAFg");
	this.shape_37.setTransform(15.9,17);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#18334E").s().p("AgPASQgGgHAAgLIAAAAQAAgJAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQABAHAEAEQAFAEAFAAQAJAAAGgGIAEAEQgHAIgMAAQgIAAgIgGgAAPgCQAAgGgFgFQgEgEgGAAQgFAAgEAEQgEAFgBAGIAdAAIAAAAg");
	this.shape_38.setTransform(10.9,17.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18334E").s().p("AgMAYIAAguIAHAAIAAAMQADgGADgDQAGgEAGAAIAAAIIAAAAQgIAAgFAFQgFAGAAAJIAAATg");
	this.shape_39.setTransform(7,17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18334E").s().p("AgCAgIAAgtIAGAAIAAAtgAgDgXIAAgIIAHAAIAAAIg");
	this.shape_40.setTransform(4.2,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#18334E").s().p("AgPATQgEgFAAgJIAAgcIAHAAIAAAaQAAAHADAEQADADAGAAQAGAAAEgEQAEgEAAgGIAAgaIAGAAIAAAuIgGAAIAAgIQgGAJgJAAQgJAAgFgFg");
	this.shape_41.setTransform(0.6,17.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18334E").s().p("AAQAfIAAgYQgHALgJAAQgJAAgHgHQgGgGAAgKIAAgBQAAgKAGgHQAHgHAJAAQAKAAAGAKIAAgJIAIAAIAAA8gAgKgTQgFAFgBAIIAAABQABAGAFAFQAEAGAGAAQAGAAAFgGQAGgFAAgGIAAgBQAAgIgGgFQgFgFgGAAQgGAAgEAFg");
	this.shape_42.setTransform(-4.8,18.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#18334E").s().p("AgPASQgGgHAAgLIAAAAQAAgJAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQABAHAEAEQAFAEAFAAQAJAAAGgGIAEAEQgHAIgMAAQgIAAgIgGgAAPgCQAAgGgFgFQgEgEgGAAQgFAAgEAEQgEAFgBAGIAdAAIAAAAg");
	this.shape_43.setTransform(-9.8,17.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18334E").s().p("AARAfIgRgYIgSAAIAAAYIgHAAIAAg+IAaAAQALAAAHAHQAFAEAAAIIAAABQAAAHgFAEQgFAEgHACIATAZgAgSABIASAAQAIgBAEgCQAEgDAAgGQAAgHgDgCQgFgEgIAAIgSAAg");
	this.shape_44.setTransform(-15.1,17.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18334E").s().p("AgOASQgHgHAAgLIAAAAQAAgJAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQAAAHAFAEQAFAEAGAAQAHAAAHgGIAEAEQgHAIgMAAQgJAAgGgGgAAPgCQAAgGgEgFQgFgEgGAAQgFAAgFAEQgEAFAAAGIAdAAIAAAAg");
	this.shape_45.setTransform(39.2,6.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#18334E").s().p("AgOARQgGgHAAgKQAAgJAGgHQAHgHAJAAQALAAAIAIIgEAFQgHgHgIAAQgGAAgFAFQgEAFAAAHIAAAAQAAAIAFAFQAFAFAGAAQAIAAAGgHIAEAEQgIAJgLAAQgJAAgHgHg");
	this.shape_46.setTransform(34.4,6.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18334E").s().p("AANAYIAAgaQABgHgEgEQgEgDgFAAQgGAAgDAEQgFAEAAAGIAAAaIgHAAIAAguIAHAAIAAAIQAGgJAJAAQAJAAAEAFQAGAFAAAJIAAAcg");
	this.shape_47.setTransform(29.5,6.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18334E").s().p("AgPASQgGgHAAgLIAAAAQAAgJAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQABAHAEAEQAFAEAFAAQAJAAAGgGIAEAEQgIAIgLAAQgIAAgIgGgAAPgCQAAgGgFgFQgEgEgGAAQgFAAgFAEQgDAFgBAGIAdAAIAAAAg");
	this.shape_48.setTransform(24.5,6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#18334E").s().p("AgDAgIAAgtIAGAAIAAAtgAgDgXIAAgIIAHAAIAAAIg");
	this.shape_49.setTransform(21,6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#18334E").s().p("AgMAYIAAguIAHAAIAAAMQADgGAEgDQAFgEAGAAIAAAIIgBAAQgHAAgFAFQgFAGAAAJIAAATg");
	this.shape_50.setTransform(18.7,6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#18334E").s().p("AgOASQgHgHAAgLIAAAAQAAgJAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQAAAHAFAEQAFAEAGAAQAHAAAHgGIAEAEQgHAIgMAAQgJAAgGgGgAAPgCQAAgGgEgFQgFgEgGAAQgFAAgFAEQgEAFAAAGIAdAAIAAAAg");
	this.shape_51.setTransform(14.4,6.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#18334E").s().p("AgWAfIAAg8IAGAAIAAAJQAIgKAJAAQAJAAAHAHQAGAGABALIAAABQgBAJgGAHQgHAHgJgBQgJAAgIgKIAAAYgAgLgTQgEAGgBAHIAAABQABAGAEAFQAFAFAGABQAHgBAFgFQAEgFAAgGIAAgBQAAgIgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_52.setTransform(9.3,7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#18334E").s().p("AAOAXIgOgTIgNATIgIAAIASgXIgSgWIAIAAIANASIAOgSIAIAAIgSAWIASAXg");
	this.shape_53.setTransform(4,6.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#18334E").s().p("AgWAfIAAg+IAtAAIAAAHIgmAAIAAAVIAhAAIAAAGIghAAIAAAWIAmAAIAAAGg");
	this.shape_54.setTransform(-1,6.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#18334E").s().p("AgPASQgGgHAAgLIAAAAQAAgJAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQAAAHAGAEQAEAEAFAAQAJAAAGgGIAEAEQgIAIgLAAQgIAAgIgGgAAPgCQgBgGgEgFQgDgEgHAAQgFAAgEAEQgFAFAAAGIAdAAIAAAAg");
	this.shape_55.setTransform(-8.7,6.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#18334E").s().p("AgVAYIAEgFQAIAGAJAAQAHAAAFgEQAFgEAAgJIAAgFQgIAKgJAAQgKAAgGgGQgHgGAAgJQAAgKAHgGQAGgGAKAAQAJAAAIAKIAAgJIAGAAIAAAlQAAALgFAGQgHAGgLAAQgLAAgKgHgAgKgUQgGAFAAAGIAAABQAAAHAGAEQAEAEAGAAQAHAAAEgEQAGgEAAgHQAAgHgGgFQgEgEgHAAQgGAAgEAEg");
	this.shape_56.setTransform(-14.1,7.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#18334E").s().p("AgOAUQgGgDABgIQAAgHAFgDQAFgDAJAAQAHAAAHACIAAgCQAAgNgOAAQgFAAgIAEIgCgGQAIgEAIAAQAJAAAGAFQAFAEgBAKIAAAbIgGAAIAAgHQgGAIgKAAQgHAAgFgEgAgJACQgDACAAAFQAAAEADADQAEADAFgBQAFABAEgEQAFgDAAgGIAAgFQgHgBgHAAQgFAAgEACg");
	this.shape_57.setTransform(-19.3,6.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#18334E").s().p("AgMAYIAAguIAHAAIAAAMQADgGADgDQAGgEAGAAIAAAIIgBAAQgIAAgEAFQgFAGAAAJIAAATg");
	this.shape_58.setTransform(-22.9,6.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#18334E").s().p("AgPASQgGgHAAgLIAAAAQAAgJAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQAAAHAGAEQAEAEAFAAQAJAAAGgGIAEAEQgIAIgLAAQgIAAgIgGgAAPgCQgBgGgEgFQgDgEgHAAQgFAAgEAEQgFAFAAAGIAdAAIAAAAg");
	this.shape_59.setTransform(-27.1,6.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#18334E").s().p("AgCAYIgUguIAIAAIAOAlIAQglIAHAAIgUAug");
	this.shape_60.setTransform(-32.1,6.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#18334E").s().p("AAZAgIgIgRIghAAIgIARIgHAAIAdg/IAFAAIAdA/gAAPAJIgPgfIgOAfIAdAAg");
	this.shape_61.setTransform(-37.8,6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#18334E").s().p("AgnAgIAOgRQAOALAPAAQAKAAAAgGIAAgBQAAgCgDgCQgDgCgIgCQgRgEgHgFQgKgGAAgNIAAAAQAAgNAJgIQAKgIAPAAQAWAAAPAMIgMASQgNgJgMAAQgJAAAAAFIAAABQAAADADACIAMAEQARAEAIAFQAJAGAAAMIAAAAQAAAOgKAIQgKAIgRAAQgZAAgRgPg");
	this.shape_62.setTransform(29.8,-6.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#18334E").s().p("AANAtIgRgbIgMAAIAAAbIgZAAIAAhaIAqAAQAUABAKAJQAIAJAAANQAAATgTAIIAWAfgAgQgBIAQAAQAGAAAEgCQADgDABgFIAAgBQAAgLgOAAIgQAAg");
	this.shape_63.setTransform(21.9,-6.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#18334E").s().p("AAYAuIgHgRIgiAAIgGARIgbAAIAnhbIAXAAIAnBbgAAKAKIgKgZIgKAZIAUAAg");
	this.shape_64.setTransform(12.1,-6.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#18334E").s().p("AgkAtIAAhaIBIAAIAAAWIgvAAIAAANIArAAIAAATIgrAAIAAAPIAwAAIAAAVg");
	this.shape_65.setTransform(3.2,-6.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#18334E").s().p("AgMAtIAAghIgig5IAdAAIARAiIATgiIAcAAIgjA4IAAAig");
	this.shape_66.setTransform(-5.5,-6.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#18334E").s().p("AgaAoQgLgIAAgLIAAgBQAAgPAQgGQgMgGAAgNIAAgBQAAgLAJgHQAKgHAOAAQAPAAAKAHQAJAHAAALIAAABQAAANgMAGQAQAHAAAOQAAAMgLAIQgLAHgQAAQgPAAgLgHgAgJAKQgDADAAAEIAAABQAAAEADADQAEADAFAAQAGAAAEgDQADgDAAgEIAAgBQAAgEgDgDQgEgDgGAAQgFAAgEADgAgHgZQgDADAAAEIAAAAQAAAFADACQADADAEAAQAFAAADgDQADgCAAgFIAAAAQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_67.setTransform(-17.1,-6.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#18334E").s().p("AgUALIAAgVIApAAIAAAVg");
	this.shape_68.setTransform(-23.4,-6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#18334E").s().p("AgkAgIAOgRQAMAKAKAAQAGAAADgDQAEgDAAgFQAAgFgEgDQgEgDgFABQgHgBgHAFIgPgIIACguIA8AAIAAAWIgoAAIgBANQAHgDAHAAQANAAAJAHQAJAHAAAOIAAAAQAAAPgKAJQgLAIgQABQgVAAgPgPg");
	this.shape_69.setTransform(-29.9,-6.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#18334E").s().p("AgiAhQgOgNAAgUQAAgTAOgNQAOgOAUgBQAVABAOAOQAOANAAATIAAAAQAAATgOAOQgOAOgVABQgUgBgOgOgAgQgQQgGAHAAAJIAAAAQAAAKAGAHQAHAHAJAAQAKABAHgIQAGgGAAgLQAAgJgGgHQgHgIgKABQgKgBgGAIg");
	this.shape_70.setTransform(14.1,-9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#18334E").s().p("AggAfIARgPQAGAIAHAAQAKAAAAgNIAAg4IAZAAIAAA4QAAARgJAJQgKAJgOAAQgVAAgLgPg");
	this.shape_71.setTransform(5.2,-8.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQALgIgBgHQAAgEgCgDQgDgCgEAAQgHAAgLALIgRgOQAIgKAIgEQAJgFAMAAQAOAAAJAIQAKAIAAANQAAAKgFAHQgFAGgLAIIgPALIAlAAIAAAUg");
	this.shape_72.setTransform(-5,-9.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#18334E").s().p("AgkAgIAOgRQAMAKAKAAQAGAAADgDQAEgDAAgFQAAgFgEgDQgEgCgFgBQgHABgHAEIgPgIIACguIA8AAIAAAWIgoAAIgBANQAHgDAHAAQANAAAJAHQAJAHAAANIAAABQAAAPgKAJQgLAIgQABQgVAAgPgPg");
	this.shape_73.setTransform(-20.6,-8.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#18334E").s().p("AgaAlQgKgLgBgXIAAAAQAAgWALgNQALgPAUAAQARABANAJIgMASQgJgGgJAAQgIAAgFAGQgDAGAAAHQAJgHAJAAQANAAAIAIQAJAGAAANQABAPgLAKQgKAIgQABQgQAAgLgLgAgIAHQgDAEAAAEIAAABQAAAFADADQAEAEAEAAQAGgBADgDQAEgDAAgFIAAgBQAAgEgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_74.setTransform(-31.7,-9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQAKgIAAgHQAAgEgCgDQgDgCgEAAQgIAAgJALIgSgOQAIgKAIgEQAJgFALAAQAPAAAKAIQAJAIAAANQAAAKgGAHQgEAGgLAIIgPALIAlAAIAAAUg");
	this.shape_75.setTransform(-29.7,-6.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#18334E").s().p("AANAtIgSgbIgKAAIAAAbIgaAAIAAhaIAqAAQAUABAJAJQAJAJAAANQAAATgTAIIAWAfgAgPgBIAPAAQAHAAADgCQAEgDgBgFIAAgBQAAgLgNAAIgPAAg");
	this.shape_76.setTransform(21.8,-6.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#18334E").s().p("AgkAtIAAhaIBJAAIAAAWIgwAAIAAANIAqAAIAAATIgqAAIAAAPIAwAAIAAAVg");
	this.shape_77.setTransform(3.2,-6.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#18334E").s().p("AgLAtIAAghIgkg5IAdAAIASAiIATgiIAdAAIgjA4IAAAig");
	this.shape_78.setTransform(-5.6,-6.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#18334E").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape_79.setTransform(-23.5,-6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#18334E").s().p("AgkAeIAQgQQAKALALAAQAFAAADgDQADgDAAgEIAAAAQAAgJgNAAIgLAAIgEgMIAUgTIgiAAIAAgVIBBAAIAAASIgWATQAYAGAAASIAAABQAAANgKAJQgKAJgPAAQgXgBgPgQg");
	this.shape_80.setTransform(-29.9,-6.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#18334E").s().p("AgiAhQgOgNAAgUQAAgTAOgNQAOgOAUgBQAVABAOAOQAOANAAATIAAAAQAAATgOAOQgOAOgVABQgUgBgOgOgAgQgQQgGAHAAAJIAAAAQAAAKAHAHQAGAHAJAAQAKABAHgIQAGgGAAgLQAAgJgGgHQgHgIgKABQgKgBgGAIg");
	this.shape_81.setTransform(15.2,-9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#18334E").s().p("AggAfIAQgPQAIAIAHAAQAJAAAAgNIAAg4IAZAAIAAA4QAAARgJAJQgKAJgOAAQgUAAgMgPg");
	this.shape_82.setTransform(6.3,-8.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#18334E").s().p("AggAuIAnhFIgpAAIAAgWIBFAAIAAAUIgnBHg");
	this.shape_83.setTransform(-11.9,-9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#18334E").s().p("AgOAOQAOgBAAgMIgKAAIAAgYIAYAAIAAAVQAAAYgaABg");
	this.shape_84.setTransform(-25.3,-4.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#18334E").s().p("AgBAuIAAhDIgQADIgFgTIAagIIASAAIAABbg");
	this.shape_85.setTransform(-29.7,-9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#18334E").s().p("AgBAuIAAhDIgPADIgGgTIAagIIASAAIAABbg");
	this.shape_86.setTransform(-34.8,-9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#18334E").s().p("AgiAhQgOgNAAgUQAAgTAOgNQAOgOAUgBQAVABAOAOQAOANAAATIAAAAQAAATgOAOQgOAOgVABQgUgBgOgOgAgQgQQgGAHAAAJIAAAAQAAAKAGAHQAHAHAJAAQALABAGgIQAGgGAAgLQAAgJgGgHQgHgIgKABQgKgBgGAIg");
	this.shape_87.setTransform(15.1,-9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#18334E").s().p("AggAfIARgPQAHAIAHAAQAJAAAAgNIAAg4IAZAAIAAA4QAAARgJAJQgKAJgOAAQgUAAgMgPg");
	this.shape_88.setTransform(6.2,-8.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAOgTABQgSgBgMgOgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAHAAAFgHQAEgHAAgLQAAgKgEgHQgFgHgHAAQgHAAgEAHg");
	this.shape_89.setTransform(-4.7,-9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#18334E").s().p("AgNAOQANgBgBgMIgKAAIAAgYIAaAAIAAAVQAAAYgaABg");
	this.shape_90.setTransform(-26.7,-4.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#18334E").s().p("AAGAuIAAgSIgrAAIgEgSIAug3IAaAAIAAA2IALAAIAAATIgLAAIAAASgAgPAJIAVAAIAAgZg");
	this.shape_91.setTransform(-32.6,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-10.5}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:27.8}},{t:this.shape_20,p:{x:35.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35,p:{x:-26.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-5.1}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_21,p:{x:23.9}},{t:this.shape_20,p:{x:32}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_69,p:{x:-29.9}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_74,p:{x:-31.7}},{t:this.shape_35,p:{x:-26.1}},{t:this.shape_73,p:{x:-20.6}},{t:this.shape_32,p:{x:-12.7}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_21,p:{x:24}},{t:this.shape_20,p:{x:32}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_75},{t:this.shape_68},{t:this.shape_69,p:{x:-17.2}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_69,p:{x:-17.3}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_64},{t:this.shape_76},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_73,p:{x:-19.8}},{t:this.shape_83,p:{x:-11.9}},{t:this.shape_25,p:{x:-4.2}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_21,p:{x:25.1}},{t:this.shape_20,p:{x:33.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_74,p:{x:-20.9}},{t:this.shape_83,p:{x:-12.9}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_21,p:{x:25}},{t:this.shape_20,p:{x:33}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.instance = new lib.bubbleBG();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,47.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96,96);


(lib.bubble1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"salesforceDeveloper":0,"techArchitect":1,"marketingManager":2,"businessAnalyst":3,"salesManager":4,"serviceManager":5,"salesConsultant":6,"salesforceAdmin":7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18334E").s().p("AgNAiQAUgNAAgVQAAgTgUgOIADgFQAYAOAAAYQAAAZgYAOg");
	this.shape.setTransform(18.1,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18334E").s().p("AgOAUQgFgDgBgHQAAgIAHgDQAFgEAIAAQAHAAAHADIAAgDQAAgMgOAAQgGAAgHADIgCgFQAIgEAIAAQAJAAAGAFQAFAFAAAIIAAAcIgHAAIAAgHQgGAIgKAAQgHAAgFgEgAgJACQgDADAAAEQAAAFADACQAEACAEAAQAGAAAEgDQAFgDAAgGIAAgFQgHgBgHAAQgFAAgEACg");
	this.shape_1.setTransform(13.9,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18334E").s().p("AgHARIAAgbIgGAAIAAgGIAGAAIAAgOIAHAAIAAAOIAOAAIAAAGIgOAAIAAAbQAAAHAHAAQAEAAADgBIAAAGQgEACgEAAQgNAAAAgOg");
	this.shape_2.setTransform(10,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18334E").s().p("AgOAUQgFgDgBgHQAAgIAHgDQAFgEAIAAQAHAAAHADIAAgDQAAgMgOAAQgFAAgIADIgCgFQAIgEAIAAQAJAAAGAFQAEAFABAIIAAAcIgHAAIAAgHQgGAIgKAAQgHAAgFgEgAgJACQgDADAAAEQAAAFADACQADACAFAAQAGAAAFgDQAEgDAAgGIAAgFQgHgBgGAAQgGAAgEACg");
	this.shape_3.setTransform(5.9,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18334E").s().p("AgQAbQgGgHAAgLIAAAAQAAgKAGgHQAHgGAJAAQAKAAAGAKIAAgcIAIAAIAABAIgIAAIAAgJQgHAKgJAAQgJAAgHgGgAgLgDQgEAEgBAIIAAAAQABAIAEAFQAFAFAGAAQAGAAAGgFQAFgFAAgIIAAAAQAAgIgFgEQgGgFgGAAQgGAAgFAFg");
	this.shape_4.setTransform(0.7,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18334E").s().p("AgWAWIADgFQALAJALAAQAFAAAFgDQADgDAAgFIAAAAQAAgFgDgCQgEgDgJgCQgLgDgEgDQgFgDAAgIQAAgHAGgGQAGgEAIAAQAMgBAKAJIgFAFQgIgHgJAAQgGAAgEADQgDADAAAEIAAABQAAAEADADQAEADAJABQALADAEADQAGAFAAAGQAAAIgHAGQgFAEgKAAQgOABgKgLg");
	this.shape_5.setTransform(-6.9,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18334E").s().p("AgSAZQgHgHAAgNIAAgkIAHAAIAAAjQAAAKAFAGQAFAFAIABQAJgBAFgFQAFgFAAgKIAAgkIAHAAIAAAjQAAAOgHAHQgHAHgMAAQgLAAgHgHg");
	this.shape_6.setTransform(-12.8,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18334E").s().p("AgNAAQAAgYAYgOIADAFQgUAOAAATQAAAVAUANIgDAFQgYgOAAgZg");
	this.shape_7.setTransform(-17.7,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18334E").s().p("AgUAcIACgFQADABAEABQADAAACgCIAFgHIgWgtIAIAAIAQAlIAPglIAIAAIgUAuQgDAIgCACQgEADgFABQgGgBgEgCg");
	this.shape_8.setTransform(28.9,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18334E").s().p("AgMAYIAAguIAHAAIAAAMQADgGADgDQAGgEAGAAIAAAIIgBAAQgHAAgFAFQgFAGAAAJIAAATg");
	this.shape_9.setTransform(25.1,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18334E").s().p("AgOAVQgGgFABgHQAAgHAFgDQAGgEAIABQAHAAAHACIAAgCQAAgNgOAAQgGAAgHAEIgCgHQAIgDAIAAQAJAAAGAFQAFAEgBAKIAAAbIgGAAIAAgHQgGAIgKAAQgHAAgFgDgAgIACQgEADAAAEQAAAEADADQAEACAFAAQAFAAAFgDQAEgEAAgFIAAgEQgHgCgHAAQgFAAgDACg");
	this.shape_10.setTransform(20.7,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18334E").s().p("AgCAhIAAhBIAGAAIAABBg");
	this.shape_11.setTransform(17.5,6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18334E").s().p("AgOAVQgGgFABgHQAAgHAFgDQAGgEAIABQAHAAAHACIAAgCQAAgNgOAAQgGAAgHAEIgCgHQAIgDAIAAQAJAAAGAFQAFAEgBAKIAAAbIgGAAIAAgHQgGAIgKAAQgHAAgFgDgAgIACQgEADAAAEQAAAEADADQAEACAFAAQAFAAAEgDQAFgEAAgFIAAgEQgHgCgHAAQgFAAgDACg");
	this.shape_12.setTransform(13.9,7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18334E").s().p("AgXAWIAFgFQAKAJAKAAQAHAAADgDQAFgDAAgEIAAgBQgBgEgDgDQgDgDgKgCQgKgCgFgDQgFgFAAgHQAAgIAFgEQAHgFAIgBQAMABAJAHIgDAGQgJgHgJAAQgGAAgDADQgEADAAAEIAAAAQAAAFAEADQADACAJADQALACAFADQAEAEABAIQgBAIgFAFQgHAEgJABQgNAAgMgLg");
	this.shape_13.setTransform(9,6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18334E").s().p("AgOASQgHgHAAgLIAAAAQAAgJAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQABAHAEAEQAFAEAFAAQAIAAAHgGIAEAEQgIAIgLAAQgJAAgGgGgAAPgCQAAgGgFgFQgEgEgGAAQgFAAgFAEQgDAFgBAGIAdAAIAAAAg");
	this.shape_14.setTransform(1.6,7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18334E").s().p("AgUAYIADgFQAIAGAJAAQAHAAAFgEQAEgFAAgHIAAgGQgGAKgLAAQgJAAgGgGQgGgGAAgJQAAgKAGgGQAGgGAJAAQALAAAGAJIAAgIIAIAAIAAAmQAAAKgHAGQgFAGgMAAQgLAAgJgHgAgLgUQgEAFgBAHIAAAAQABAHAEAEQAFAEAGAAQAGAAAGgEQAFgEAAgHQAAgHgFgFQgGgEgGAAQgGAAgFAEg");
	this.shape_15.setTransform(-3.8,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18334E").s().p("AgOAVQgFgFgBgHQAAgHAHgDQAFgEAIABQAHAAAHACIAAgCQAAgNgOAAQgFAAgIAEIgCgHQAIgDAIAAQAJAAAGAFQAEAEABAKIAAAbIgHAAIAAgHQgGAIgKAAQgHAAgFgDgAgJACQgDADAAAEQAAAEADADQADACAFAAQAGAAAFgDQAEgEAAgFIAAgEQgHgCgGAAQgGAAgEACg");
	this.shape_16.setTransform(-9,7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18334E").s().p("AgMAYIAAguIAHAAIAAAMQADgGAEgDQAFgEAGAAIAAAIIAAAAQgJAAgEAFQgFAGAAAJIAAATg");
	this.shape_17.setTransform(-12.6,7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18334E").s().p("AgOASQgHgHAAgLIAAAAQAAgJAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAJIAAADIgkAAQABAHAEAEQAFAEAFAAQAIAAAHgGIAEAEQgIAIgLAAQgJAAgGgGgAAPgCQAAgGgFgFQgEgEgGAAQgFAAgFAEQgDAFgBAGIAdAAIAAAAg");
	this.shape_18.setTransform(-16.8,7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18334E").s().p("AgCAXIgUgtIAIAAIAOAlIAQglIAHAAIgUAtg");
	this.shape_19.setTransform(-21.8,7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18334E").s().p("AAYAgIgHgRIghAAIgHARIgIAAIAcg/IAHAAIAcA/gAAOAJIgOgfIgNAfIAbAAg");
	this.shape_20.setTransform(-27.5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(8));

	// Layer_1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTALgNQAMgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAPgTAAQgSAAgMgPgAgMgRQgEAHAAAKIAAAAQAAALAFAHQAEAHAHAAQAIAAAEgHQAFgHgBgLQABgKgFgHQgEgHgIAAQgHAAgFAHg");
	this.shape_21.setTransform(25.2,-6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgMANQgLAPgTAAQgSAAgMgPgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAEAHAHAAQAHAAAFgHQAEgHABgLQgBgKgEgHQgFgHgHAAQgGAAgFAHg");
	this.shape_22.setTransform(16.2,-6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTALgNQAMgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAPgTAAQgSAAgMgPgAgMgRQgEAHAAAKIAAAAQAAALAFAHQAEAHAHAAQAHAAAFgHQAFgHgBgLQABgKgFgHQgFgHgHAAQgHAAgFAHg");
	this.shape_23.setTransform(7.1,-6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18334E").s().p("AgNAOQANgBgBgLIgKAAIAAgZIAaAAIAAAVQAAAZgbAAg");
	this.shape_24.setTransform(0.8,-2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18334E").s().p("AgkAgIAOgRQAMAKAKAAQAGAAADgDQAEgDAAgFQAAgFgEgDQgEgDgFABQgHgBgHAFIgPgIIACguIA8AAIAAAWIgoAAIgBANQAHgDAHAAQANAAAJAHQAJAHAAAOIAAAAQAAAPgKAJQgLAIgQABQgVAAgPgPg");
	this.shape_25.setTransform(-4.7,-6.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQALgIAAgHQgBgEgCgDQgDgCgEAAQgHAAgKALIgRgOQAHgKAIgEQAJgFALAAQAPAAAKAIQAJAIAAANQAAAKgGAHQgEAGgLAIIgPALIAlAAIAAAUg");
	this.shape_26.setTransform(-12.3,-7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18334E").s().p("AgBAuIAAhDIgPADIgGgTIAagIIASAAIAABbg");
	this.shape_27.setTransform(-19,-7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18334E").s().p("AgDA4IAAgNQgUgCgQgLIAMgSQANAJALACIAAgQQgQgDgHgFQgIgHAAgMIAAAAQAAgMAIgHQAIgHAPgBIAAgIIAMAAIAAAIQAPACANAIIgLASQgIgGgJgCIAAAPQAQAEAHAGQAIAGAAALQAAAMgJAHQgIAHgOACIAAANgAAJAYQAIgBAAgGIAAAAQAAgFgIgDgAgLgWIAAAAQAAAFAIADIAAgOQgIAAAAAGg");
	this.shape_28.setTransform(-25.4,-6.7);

	this.instance = new lib.bubbleBG();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,47.5,47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTALgNQAMgOASgBQATABAMAOQALANAAATIAAAAQAAAUgMANQgLAPgTAAQgSAAgMgPgAgMgRQgEAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAHAAAFgHQAFgHAAgLQAAgKgFgHQgFgHgHAAQgGAAgGAHg");
	this.shape_29.setTransform(25.9,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAPgTAAQgSAAgMgPgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAHAAAFgHQAEgHAAgLQAAgKgEgHQgFgHgHAAQgHAAgEAHg");
	this.shape_30.setTransform(16.8,-6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTALgNQAMgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAPgTAAQgSAAgMgPgAgMgRQgEAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAIAAAEgHQAFgHgBgLQABgKgFgHQgEgHgIAAQgGAAgGAHg");
	this.shape_31.setTransform(7.8,-6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#18334E").s().p("AgOAOQAOgBgBgLIgKAAIAAgZIAZAAIAAAVQAAAZgaAAg");
	this.shape_32.setTransform(1.5,-2.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#18334E").s().p("AgBAuIAAhDIgQADIgEgTIAZgIIATAAIAABbg");
	this.shape_33.setTransform(-19.7,-7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#18334E").s().p("AggAtIAnhEIgpAAIAAgWIBFAAIAAATIgnBHg");
	this.shape_34.setTransform(21.7,-6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQALgIAAgHQAAgEgDgDQgDgCgEAAQgHAAgLALIgQgOQAHgKAIgEQAJgFAMAAQAOAAAJAIQAKAIAAANQAAAKgFAHQgFAGgLAIIgPALIAlAAIAAAUg");
	this.shape_35.setTransform(14,-7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#18334E").s().p("AgaAlQgLgLAAgXIAAAAQABgWAKgNQALgPAUAAQARAAANAKIgMASQgJgGgJgBQgIABgFAGQgDAFAAAIQAJgHAKAAQAMAAAIAIQAJAGAAAOQAAAOgKAKQgLAIgPABQgQAAgLgLgAgIAHQgEAEABAEIAAABQgBAFAEADQAEAEAEgBQAGAAADgDQAEgDAAgFIAAgBQAAgEgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_36.setTransform(6,-6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#18334E").s().p("AgNAOQANgBgBgLIgJAAIAAgZIAZAAIAAAVQAAAZgaAAg");
	this.shape_37.setTransform(0.2,-2.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#18334E").s().p("AgaAoQgLgIAAgLIAAgBQABgPAPgGQgMgGAAgNIAAgBQAAgLAJgHQAKgHAOAAQAPAAAKAHQAKAHgBALIAAABQAAANgMAGQAQAHAAAOQAAAMgLAIQgLAHgQAAQgPAAgLgHgAgIAKQgEADAAAEIAAABQAAAEADADQAEADAFAAQAGAAAEgDQADgDAAgEIAAgBQAAgEgDgDQgEgDgGAAQgFAAgDADgAgHgZQgDADAAAEIAAAAQAAAFADACQADADAEAAQAFAAADgDQADgCAAgFIAAAAQAAgEgCgDQgEgDgFAAQgEAAgDADg");
	this.shape_38.setTransform(-12.9,-6.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgMANQgLAPgTAAQgSAAgMgPgAgLgRQgFAHAAAKIAAAAQAAALAFAHQAFAHAGAAQAIAAAEgHQAEgHABgLQgBgKgEgHQgEgHgIAAQgHAAgEAHg");
	this.shape_39.setTransform(8.2,-6.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#18334E").s().p("AgOAOQAOgBAAgLIgKAAIAAgZIAZAAIAAAVQAAAZgaAAg");
	this.shape_40.setTransform(1.9,-2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#18334E").s().p("AAGAuIAAgSIgrAAIgEgSIAug3IAZAAIAAA2IAMAAIAAATIgMAAIAAASgAgPAJIAVAAIAAgZg");
	this.shape_41.setTransform(-4,-7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#18334E").s().p("AgCAuIAAhDIgOADIgGgTIAagIIASAAIAABbg");
	this.shape_42.setTransform(-20.1,-7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#18334E").s().p("AgjAuIAAgTIAigaQALgIAAgHQAAgEgDgDQgDgCgEAAQgIAAgJALIgRgOQAHgKAIgEQAJgFAMAAQAOAAAJAIQAKAIAAANQAAAKgFAHQgFAGgLAIIgPALIAlAAIAAAUg");
	this.shape_43.setTransform(6.9,-7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#18334E").s().p("AgNAOQANgBgBgLIgKAAIAAgZIAaAAIAAAVQgBAZgaAAg");
	this.shape_44.setTransform(1.3,-2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#18334E").s().p("AgjAkIAMgRQAJAHAKAAQAPABABgUQgIAIgKAAQgOAAgIgIQgIgHgBgNIAAAAQAAgPALgKQAKgJAQAAQAQAAALALQALALAAAXIAAAAQAAAWgLANQgLAPgUAAQgRAAgOgMgAgIgXQgEADAAAGIAAAAQAAAFAEAEQADADAFAAQAGAAAEgDQADgEAAgFIAAAAQAAgGgEgDQgDgEgGAAQgFAAgDAEg");
	this.shape_45.setTransform(-13.4,-6.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#18334E").s().p("AgeAhQgLgNAAgUQAAgTAMgNQALgOASgBQATABAMAOQALANAAATIAAAAQAAAUgLANQgMAPgTAAQgSAAgMgPgAgMgRQgEAHAAAKIAAAAQAAALAFAHQAEAHAHAAQAHAAAFgHQAFgHgBgLQABgKgFgHQgFgHgHAAQgHAAgFAHg");
	this.shape_46.setTransform(13.9,-6.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#18334E").s().p("AgOAOQAOgBAAgLIgKAAIAAgZIAYAAIAAAVQAAAZgaAAg");
	this.shape_47.setTransform(-1.5,-2.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#18334E").s().p("AgjAkIAMgRQAJAHAKAAQAPABACgUQgJAIgKAAQgNAAgJgIQgIgHgBgNIAAAAQAAgPALgKQAKgJAQAAQAQAAALALQALALAAAXIAAAAQAAAWgLANQgMAPgTAAQgRAAgOgMgAgJgXQgDADAAAGIAAAAQAAAFADAEQAEADAFAAQAGAAAEgDQADgEAAgFIAAAAQAAgGgEgDQgEgEgFAAQgFAAgEAEg");
	this.shape_48.setTransform(-14.8,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-25.4}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-4.7}},{t:this.shape_24},{t:this.shape_23,p:{x:7.1}},{t:this.shape_22,p:{x:16.2}},{t:this.shape_21,p:{x:25.2}}]}).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-26.1}},{t:this.shape_33},{t:this.shape_25,p:{x:-13.1}},{t:this.shape_22,p:{x:-4.5}},{t:this.shape_32},{t:this.shape_31,p:{x:7.8}},{t:this.shape_30,p:{x:16.8}},{t:this.shape_29,p:{x:25.9}}]},1).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-21}},{t:this.shape_38},{t:this.shape_25,p:{x:-5.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:21.7}}]},1).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-26.5}},{t:this.shape_42},{t:this.shape_23,p:{x:-12.7}},{t:this.shape_41,p:{x:-4}},{t:this.shape_40,p:{x:1.9}},{t:this.shape_39,p:{x:8.2}},{t:this.shape_31,p:{x:17.2}},{t:this.shape_30,p:{x:26.3}}]},1).to({state:[{t:this.shape_28,p:{x:-21.7}},{t:this.shape_45},{t:this.shape_29,p:{x:-4.7}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_34,p:{x:14.6}},{t:this.shape_25,p:{x:22}}]},1).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-23.2}},{t:this.shape_34,p:{x:-15.1}},{t:this.shape_41,p:{x:-7.2}},{t:this.shape_40,p:{x:-1.4}},{t:this.shape_22,p:{x:4.9}},{t:this.shape_21,p:{x:14}},{t:this.shape_39,p:{x:23}}]},1).to({state:[{t:this.instance},{t:this.shape_28,p:{x:-23.1}},{t:this.shape_48},{t:this.shape_25,p:{x:-7}},{t:this.shape_47},{t:this.shape_29,p:{x:4.8}},{t:this.shape_46},{t:this.shape_22,p:{x:22.9}}]},1).to({state:[{t:this.shape_28,p:{x:-23.1}},{t:this.shape_48},{t:this.shape_25,p:{x:-7}},{t:this.shape_47},{t:this.shape_29,p:{x:4.8}},{t:this.shape_46},{t:this.shape_22,p:{x:22.9}}]},1).wait(1));

	// Layer_2
	this.instance_1 = new lib.bubbleBG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,47.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,96,96);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.swimming2 = new lib.swmming2();
	this.swimming2.name = "swimming2";
	this.swimming2.parent = this;
	this.swimming2.setTransform(471.4,106.6,0.15,0.15);

	this.swimming1 = new lib.swmming1();
	this.swimming1.name = "swimming1";
	this.swimming1.parent = this;
	this.swimming1.setTransform(499.2,104.6,0.15,0.15,0,0,0,0.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.swimming1},{t:this.swimming2}]}).wait(1));

	// Layer_1
	this.instance = new lib.bg_300x6002x();
	this.instance.parent = this;
	this.instance.setTransform(0,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,-300,656,600), null);


(lib.finalscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbles
	this.title_subhead = new lib.title_subhead();
	this.title_subhead.name = "title_subhead";
	this.title_subhead.parent = this;
	this.title_subhead.setTransform(0,121);

	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(0,92.3);

	this.bubble2 = new lib.bubble2();
	this.bubble2.name = "bubble2";
	this.bubble2.parent = this;
	this.bubble2.setTransform(70.4,236.9);

	this.bubble1 = new lib.bubble1();
	this.bubble1.name = "bubble1";
	this.bubble1.parent = this;
	this.bubble1.setTransform(-6.5,192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bubble1},{t:this.bubble2},{t:this.title},{t:this.title_subhead}]}).wait(1));

	// Layer_4
	this.position = new lib.position();
	this.position.name = "position";
	this.position.parent = this;
	this.position.setTransform(-160.5,37.5,0.5,0.5,0,0,0,0,-237);

	this.timeline.addTween(cjs.Tween.get(this.position).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,161,0,0)").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(0,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.finalscreen, new cjs.Rectangle(-150,0,300,600), null);


(lib.circleContain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(-2.6,21.4);
	this.blue.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

	// Layer_1
	this.circ3 = new lib.circ3();
	this.circ3.name = "circ3";
	this.circ3.parent = this;
	this.circ3.setTransform(-22.6,32.4);

	this.circ1 = new lib.circle2();
	this.circ1.name = "circ1";
	this.circ1.parent = this;
	this.circ1.setTransform(-61.3,-46.7);

	this.circ4 = new lib.circ4();
	this.circ4.name = "circ4";
	this.circ4.parent = this;
	this.circ4.setTransform(-78.3,84.3);

	this.circ7 = new lib.circ7();
	this.circ7.name = "circ7";
	this.circ7.parent = this;
	this.circ7.setTransform(45.7,77.8);

	this.circ6 = new lib.circ6();
	this.circ6.name = "circ6";
	this.circ6.parent = this;
	this.circ6.setTransform(65.6,5.5);

	this.circ5 = new lib.circ5();
	this.circ5.name = "circ5";
	this.circ5.parent = this;
	this.circ5.setTransform(-25.2,113.6);

	this.circ2 = new lib.circle3();
	this.circ2.name = "circ2";
	this.circ2.parent = this;
	this.circ2.setTransform(25,-49.4);

	this.circ0 = new lib.circle1();
	this.circ0.name = "circ0";
	this.circ0.parent = this;
	this.circ0.setTransform(-35.1,-104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circ0},{t:this.circ2},{t:this.circ5},{t:this.circ6},{t:this.circ7},{t:this.circ4},{t:this.circ1},{t:this.circ3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleContain, new cjs.Rectangle(-156,-305.5,302.5,512.2), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//variables
		var root = this, //set scope activation object
			screenPixelRatio = window.devicePixelRatio, //detects devicePixelRatio, use returned value for any code referencing mouse position
		    stageWidth = stage.canvas.width/screenPixelRatio, //returns expected value for width of stage
		    stageHeight = stage.canvas.height/screenPixelRatio, //returns expected value for height of stage
			bgScaleWidth = stageWidth/root.bg_mc.nominalBounds.width, //returns scale for resizing background width
			bgScaleHeight = stageHeight/root.bg_mc.nominalBounds.height; //returns scale for resizing background height
		
		//scale background cover movieclip to cover entire stage
		root.bg_mc.scaleX = bgScaleWidth;
		root.bg_mc.scaleY = bgScaleHeight;
		
		//scale invisible click button to cover entire stage
		root.hit_btn.scaleX = bgScaleWidth;
		root.hit_btn.scaleY = bgScaleHeight;
		
		//custom code should be written below this line
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		
		var circleContain = root.circleContain,
			circ0 = root.circleContain.circ0,
			circ1 = root.circleContain.circ1,
			circ2 = root.circleContain.circ2,
			circ3 = root.circleContain.circ3,
			circ4 = root.circleContain.circ4,
			circ5 = root.circleContain.circ5,
			circ6 = root.circleContain.circ6,
			circ7 = root.circleContain.circ7,
			cta = root.cta,
			blue = root.circleContain.blue,
			career_callout = root.career_callout,
			headline = root.headline,
			subtext = root.subtext,
			logo = root.logo,
			finalFrame = root.finalFrame,
			subhead = root.subhead,
			seePaths = root.seePaths,
			bg = root.bg,
			hit_btn = root.hit_btn,
			autoplayStop = root.autoplayStop,
			resetDepthsBtn = root.resetDepthsBtn;
			
		var circles = [ circ0, circ1, circ2, circ3, circ4, circ5, circ6, circ7 ];
		
		var globalTime = .5;
		var globalScale = 1.25;
		
		var clickthroughURL = "https://trailhead.salesforce.com/";
		var clickthroughIdentifier = "Default Clickthrough";
		
		for (i = 0; i < circles.length; i++) {		
			circles[i].name = 'circle' + i;
			circles[i].mouseChildren = false;
			circles[i].addEventListener('mouseover', circleOver(i));
			circles[i].addEventListener('mouseout', circleOut(i));
			circles[i].addEventListener('click', circleClick(i));
		}
		
		
		
		
		function circleOver(index){
			return function() {
				stopsAutoplay();
		
				circleContain.setChildIndex(circles[index], circleContain.getNumChildren()-1);
				
				//blue overlay
				root.setChildIndex(blue, root.getNumChildren()-2);
				
				TweenMax.to(blue, globalTime, { alpha: 1 });
				
				circles[index].hit2.visible = true;
				
				//animate global elements inside circle
				TweenMax.to(circles[index], globalTime, {scaleX: globalScale, scaleY: globalScale, ease: Back.easeOut });
				TweenMax.fromTo(circles[index].pin, .75, { alpha: 0, scaleX: .5, scaleY: .5, rotation: -180 }, { alpha: 1, scaleX: 1, scaleY: 1, rotation: 0, ease: Back.easeOut });
				TweenMax.fromTo(circles[index].text, .75, { alpha: 0, rotation: 40 }, { alpha: 1, rotation: 0, ease: Back.easeOut, rotation: 0 });
				TweenMax.to(circles[index].image, 1, { scaleX: 1.1, scaleY: 1.1, ease: Back.easeOut });
				
					
				//hide career callout
				hideCareer();
			}
		}
		function circleOut(index){
		    return function() {
				
				//blue overlay
				TweenMax.to(blue, globalTime, { alpha: 0 });
				
				circleContain.setChildIndex(circles[index], circleContain.getNumChildren()-3);
		
				circles[index].hit2.visible = false;
				
				//animate global elements inside circle
				TweenMax.to(circles[index], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[index].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[index].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[index].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
		
				//show career callout
				showCareer();
				
				
				
		    }
		}
		
		
		autoplayStop.on('rollover', function(){
			//console.log('reset everything');
			resetCircles();
			resetDepths();
			root.removeChild(autoplayStop);
		
		});
		
		function stopsAutoplay() {
			resetCircles();
			resetDepths();
			root.removeChild(autoplayStop);
			
		}
		
		var firstRollover = true;
		
		resetDepthsBtn.addEventListener('rollover', function(){
			clearInterval(autoplayInterval);
			
			resetDepths();
			
			if(firstRollover){		
				firstRollover = false;
				
				TweenMax.to(blue, globalTime, { alpha: 0 });
		
				TweenMax.to(circles[0], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[0].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[0].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[0].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[1], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[1].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[1].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[1].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[2], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[2].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[2].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[2].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[3], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[3].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[3].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[3].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[4], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[4].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[4].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[4].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[5], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[5].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[5].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[5].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[6], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[6].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[6].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[6].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.to(circles[7], globalTime, {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.to(circles[7].pin, .15, { alpha: 0, ease: Back.easeOut });
				TweenMax.to(circles[7].text, .15, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.to(circles[7].image, .15, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				
			}
		});
		
		
		
		function resetCircles(){
				
				TweenMax.to(blue, globalTime, { alpha: 0 });
		
				TweenMax.set(circles[0], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[0].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[0].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[0].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[1],  {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[1].pin,  { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[1].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[1].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[2], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[2].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[2].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[2].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[3], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[3].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[3].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[3].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[4], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[4].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[4].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[4].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[5], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[5].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[5].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[5].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[6], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[6].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[6].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[6].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				
				TweenMax.set(circles[7], {scaleX: 1, scaleY:  1, ease: Back.easeOut });
				TweenMax.set(circles[7].pin, { alpha: 0, ease: Back.easeOut });
				TweenMax.set(circles[7].text, { alpha: 0, rotation: 0, ease: Back.easeOut });
				TweenMax.set(circles[7].image, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
					
		};
		
		
		resetDepthsBtn.addEventListener('click', function(){
			dynamicClickthrough(clickthroughURL, clickthroughIdentifier);
		});
		
		
		
		
		function resetDepths(){
			
				circleContain.setChildIndex(circles[3], circleContain.getNumChildren()-1);
				circleContain.setChildIndex(circles[4], circleContain.getNumChildren()-2);
				circleContain.setChildIndex(circles[7], circleContain.getNumChildren()-3);
				circleContain.setChildIndex(circles[5], circleContain.getNumChildren()-4);
				circleContain.setChildIndex(circles[6], circleContain.getNumChildren()-5);
				circleContain.setChildIndex(circles[1], circleContain.getNumChildren()-6);
				circleContain.setChildIndex(circles[2], circleContain.getNumChildren()-7);	
				circleContain.setChildIndex(circles[0], circleContain.getNumChildren()-8);	
				circleContain.setChildIndex(blue, circleContain.getNumChildren()-1);	
			
		};
		
		
		
		
		
		var busAnalystImg = "https://s0.2mdn.net/creatives/assets/2926051/businessAnalyst.png";
		var marketingManagerImg = "https://s0.2mdn.net/creatives/assets/2926051/marketingManager.png";
		var salesManagerImg = "https://s0.2mdn.net/creatives/assets/2926051/salesManager.png";
		var salesforceAdminImg = "https://s0.2mdn.net/creatives/assets/2926051/salesforceAdmin.png";
		var salesforceConsultantImg = "https://s0.2mdn.net/creatives/assets/2926051/salesforceConsultant.png";
		var salesforceDeveloperImg = "https://s0.2mdn.net/creatives/assets/2926051/salesforceDeveloper.png";
		var serviceManagerImg = "https://s0.2mdn.net/creatives/assets/2926051/serviceManager.png";
		var techArchitectImg = "https://s0.2mdn.net/creatives/assets/2926051/techArchitect.png";
		
		var personaImage = new Image();
		var imgBitmap = new createjs.Bitmap(personaImage);
		
		function circleClick(index){
			return function(){
				switch (index) {
					case 0:
		
		
						bg.swimming1.gotoAndStop(1);
						bg.swimming2.gotoAndStop(2);
					
						finalFrame.position.removeAllChildren();
						personaImage.src = salesforceDeveloperImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Salesforce Developer", true);
						finalFrame.title.gotoAndStop('salesforceDeveloper');
						finalFrame.bubble1.gotoAndStop('salesforceDeveloper');
						finalFrame.bubble2.gotoAndStop('salesforceDeveloper');
						finalFrame.title_subhead.gotoAndStop('salesforceDeveloper');
						
						clickthroughIdentifier = "Salesforce Developer";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/developer";
					
						break;
					
					case 1:
						
		
						bg.swimming1.gotoAndStop(1);
						bg.swimming2.gotoAndStop(2);
					
						finalFrame.position.removeAllChildren();
						personaImage.src = techArchitectImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Tech Architect", true);
						finalFrame.title.gotoAndStop('techArchitect');
						finalFrame.bubble1.gotoAndStop('techArchitect');
						finalFrame.bubble2.gotoAndStop('techArchitect');
						finalFrame.title_subhead.gotoAndStop('techArchitect');
						
						clickthroughIdentifier = "Tech Architect";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/technical-architect";
					
						break;
					case 2:
						
						bg.swimming1.gotoAndStop(0);
						bg.swimming2.gotoAndStop(1);
					
						finalFrame.position.removeAllChildren();
						personaImage.src = marketingManagerImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Marketing Manager", true);
						finalFrame.title.gotoAndStop('marketingManager');
						finalFrame.bubble1.gotoAndStop('marketingManager');
						finalFrame.bubble2.gotoAndStop('marketingManager');
						finalFrame.title_subhead.gotoAndStop('marketingManager');
						
						clickthroughIdentifier = "Marketing Manager";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/marketing";
					
						break;
					case 3:
						
						bg.swimming1.gotoAndStop(1);
						bg.swimming2.gotoAndStop(2);			
					
						finalFrame.position.removeAllChildren();
						personaImage.src = salesforceConsultantImg;
						finalFrame.position.addChild(imgBitmap);
								
						Enabler.counter("Selection: Sales Consultant", true);
						finalFrame.title.gotoAndStop('salesConsultant');
						finalFrame.bubble1.gotoAndStop('salesConsultant');
						finalFrame.bubble2.gotoAndStop('salesConsultant');
						finalFrame.title_subhead.gotoAndStop('salesConsultant');
						
						clickthroughIdentifier = "Sales Consultant";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/consultant";
						break;
					case 4:
						
						bg.swimming1.gotoAndStop(1);
						bg.swimming2.gotoAndStop(2);
					
						finalFrame.position.removeAllChildren();
						personaImage.src = salesforceAdminImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Salesforce Administrator", true);
						finalFrame.title.gotoAndStop('salesforceAdmin');
						finalFrame.bubble1.gotoAndStop('salesforceAdmin');
						finalFrame.bubble2.gotoAndStop('salesforceAdmin');
						finalFrame.title_subhead.gotoAndStop('salesforceAdmin');
						
						clickthroughIdentifier = "Salesforce Administrator";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/admin";
						break;
					case 5:
						
						bg.swimming1.gotoAndStop(0);
						bg.swimming2.gotoAndStop(0);
					
						finalFrame.position.removeAllChildren();
						personaImage.src = serviceManagerImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Service Manager", true);
						finalFrame.title.gotoAndStop('serviceManager');
						finalFrame.bubble1.gotoAndStop('serviceManager');
						finalFrame.bubble2.gotoAndStop('serviceManager');
						finalFrame.title_subhead.gotoAndStop('serviceManager');
						
						clickthroughIdentifier = "Service Manager";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/service-manager";
						break;
					case 6:
						
						bg.swimming1.gotoAndStop(0);
						bg.swimming2.gotoAndStop(1);		
					
						finalFrame.position.removeAllChildren();
						personaImage.src = busAnalystImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Business Analyst", true);
						finalFrame.title.gotoAndStop('businessAnalyst');
						finalFrame.bubble1.gotoAndStop('businessAnalyst');
						finalFrame.bubble2.gotoAndStop('businessAnalyst');
						finalFrame.title_subhead.gotoAndStop('businessAnalyst');
					
						clickthroughIdentifier = "Business Analyst";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/business-analyst";
						break;
					case 7:
						
						
						bg.swimming1.gotoAndStop(0);
						bg.swimming2.gotoAndStop(0);			
					
						finalFrame.position.removeAllChildren();
						personaImage.src = salesManagerImg;
						finalFrame.position.addChild(imgBitmap);
					
						Enabler.counter("Selection: Sales Manager", true);
						finalFrame.title.gotoAndStop('salesManager');
						finalFrame.bubble1.gotoAndStop('salesManager');
						finalFrame.bubble2.gotoAndStop('salesManager');
						finalFrame.title_subhead.gotoAndStop('salesManager');
						
						clickthroughIdentifier = "Sales Manager";
						clickthroughURL = "https://trailhead.salesforce.com/career-path/sales";
						break;
				}	
				
				//animate parent objects
				TweenMax.to(finalFrame, .75, { x: "-=300", ease: Sine.easeOut });
				TweenMax.to(headline, .75, { x: "-=300", ease: Sine.easeOut });
				TweenMax.to(subhead, .75, { x: "-=300", ease: Sine.easeOut });
				TweenMax.to(bg, .75, { x: 45, ease: Sine.easeOut });
				TweenMax.to(blue, .5, { alpha: 0 });
				TweenMax.to(circles, .75, { x: "-=300", ease: Sine.easeeOut });
				TweenMax.to(career_callout, .75, { x: "-=300", ease: Sine.easeeOut });
				TweenMax.to(seePaths, .75, { delay: .5, x: "-=80", ease: Back.easeOut });
				
				//animate individual things
				TweenMax.from(finalFrame.position, 1.25, { x: "+=300", ease: Back.easeOut });
				TweenMax.from(finalFrame.bubble1, .75, { rotation: 30, scaleX: 0, scaleY: 0,  ease: Back.easeOut });
				TweenMax.from(finalFrame.bubble2, .75, { rotation: -30, delay: .35, scaleX: 0, scaleY: 0,  ease: Back.easeOut });
				
				
				
			}
			
		
		};
		
		function resetOriginal(){
			TweenMax.to(finalFrame, .75, { x: "+=300", ease: Sine.easeOut });
			TweenMax.to(headline, .75, { x: "+=300", ease: Sine.easeOut });
			TweenMax.to(subhead, .75, { x: "+=300", ease: Sine.easeOut });
			TweenMax.to(bg, .75, { x: 300, ease: Sine.easeOut });
			TweenMax.to(blue, .5, { alpha: 0 });
			TweenMax.to(circles, .75, { x: "+=300", ease: Sine.easeeOut });
			TweenMax.to(career_callout, .75, { x: "+=300", ease: Sine.easeeOut });
			TweenMax.to(seePaths, .75, { x: "+=80", ease: Back.easeOut });
		
		};
		
		
		seePaths.addEventListener('mouseover', function(){
		
			seePaths.bg.gotoAndStop('out');
			TweenMax.to(seePaths.arrow, .25, { x: -40,
				
			onComplete: function(){
		
					TweenMax.set(seePaths.arrow, { x: 80 });
					TweenMax.to(seePaths.arrow, .25, { x: -15 });
				
				}
				
			});
			
		});
		
		seePaths.addEventListener('mouseout', function(){
			seePaths.bg.gotoAndStop('over');	
		});
		
		seePaths.addEventListener('click', function(){
			
			clickthroughURL = "https://trailhead.salesforce.com/";
			clickthroughIdentifier = "Default Clickthrough";
			resetOriginal();	
			Enabler.counter("Selection: See All Paths", true);
		});
		
		
		function hideCareer(){
			TweenMax.to(career_callout, .15, { alpha: 0 });
		}
		
		function showCareer(){
			TweenMax.to(career_callout, .15, { alpha: 1 });
		}
		
		
		cta.addEventListener('mouseover', function(){
				TweenMax.to(cta.bg, .5, { scaleX: 1.2, scaleY: 1.2, ease: Back.easeOut });
				TweenMax.to(cta.text, .5, { scaleX: 1.1, scaleY: 1.1, ease: Back.easeOut });
		});
		
		
		cta.addEventListener('mouseout', function(){
				TweenMax.to(cta.bg, .5, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
				TweenMax.to(cta.text, .5, { scaleX: 1, scaleY: 1, ease: Back.easeOut });
		});
		
		/*hit_btn.addEventListener('click', function(){
			dynamicClickthrough(clickthroughURL, clickthroughIdentifier);
		});*/
		
		cta.addEventListener('click', function(){
			dynamicClickthrough(clickthroughURL, clickthroughIdentifier);
		});
		
		function dynamicClickthrough(url, id){
			
			//Enabler.exitOverride("Clickthrough", url);
			
			switch(id) {
				case "Default Clickthrough":
					Enabler.exit("Career Path Homepage");
				break;
				
				case "Salesforce Administrator":
					Enabler.exit("Salesforce Administrator");
				break;
				
				case "Salesforce Developer":
					Enabler.exit("Salesforce Developer");
				break;
				
				case "Sales Manager":
					Enabler.exit("Sales Manager");
				break;
				
				case "Marketing Manager":
					Enabler.exit("Marketing Manager");
				break;
				
				case "Tech Architect":
					Enabler.exit("Salesforce Technical Architect");
				break;
				
				case "Business Analyst":
					Enabler.exit("Business Analyst");
				break;
				
				case "Sales Consultant":
					Enabler.exit("Salesforce Consultant");
				break;
				
				case "Service Manager":
					Enabler.exit("Service Manager");
				break;
				
				
			}
		}
		
		
		function init(){
		
			//animate callout
			TweenMax.from(career_callout.text, .5, { scaleX: 0, scaleY: 0, alpha: 0, ease: Back.easeOut });
			TweenMax.fromTo(career_callout.arrow, .25, { rotation: "-=15", scaleX: 0, scaleY: 0, alpha: 0 }, { alpha: 1, rotation: "+=15", scaleX: 1, scaleY: 1, ease: Back.easeOut, onComplete: function(){
			
				
			}});
			
			//stagger circles
			TweenMax.staggerFrom(circles, .75, { scaleX: 0, scaleY: 0, ease:Back.easeOut}, 0.2);
		
			TweenMax.to(bg.swimming1, 10, { x: "-=10", yoyo: true, repeat: -1 });
			TweenMax.to(bg.swimming2, 15, { x: "-=10", yoyo: true, repeat: -1 });
			
			
			
			
		};
		
		var autoplayCounter = 0;
		var autoplayInterval = setInterval(nextThing, 3000);
		
		function nextThing(){
		
			autoplayCounter++;
				
			if(autoplayCounter == 1){
				circles[0].dispatchEvent('mouseover');
		
			}else
			if(autoplayCounter == 2){
				circles[0].dispatchEvent('mouseout');
				circles[1].dispatchEvent('mouseover');
				
			}else
			if(autoplayCounter == 3){
				circles[1].dispatchEvent('mouseout');
				circles[2].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 4){
				circles[2].dispatchEvent('mouseout');
				circles[3].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 5){
				circles[3].dispatchEvent('mouseout');
				circles[4].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 6){
				circles[4].dispatchEvent('mouseout');
				circles[5].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 7){
				circles[5].dispatchEvent('mouseout');
				circles[6].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 8){
				circles[6].dispatchEvent('mouseout');
				circles[7].dispatchEvent('mouseover');
		
			}
			if(autoplayCounter == 9){
				circles[7].dispatchEvent('mouseout');
		
			}
			
		}
			
		
		
		ad.setSleep(30,0,1);
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// autoplay Stop
	this.autoplayStop = new lib.hit_btn();
	this.autoplayStop.name = "autoplayStop";
	this.autoplayStop.parent = this;
	this.autoplayStop.setTransform(0,0,6,12);
	new cjs.ButtonHelper(this.autoplayStop, 0, 1, 2, false, new lib.hit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.autoplayStop).wait(1));

	// Career Callout
	this.career_callout = new lib.career_callout();
	this.career_callout.name = "career_callout";
	this.career_callout.parent = this;
	this.career_callout.setTransform(224.1,223.5);

	this.timeline.addTween(cjs.Tween.get(this.career_callout).wait(1));

	// See All Paths
	this.seePaths = new lib.seeAllPaths();
	this.seePaths.name = "seePaths";
	this.seePaths.parent = this;
	this.seePaths.setTransform(386.1,439.2,1,1,0,0,0,64,13.1);

	this.timeline.addTween(cjs.Tween.get(this.seePaths).wait(1));

	// CTA
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(150,565.3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// Circles
	this.circleContain = new lib.circleContain();
	this.circleContain.name = "circleContain";
	this.circleContain.parent = this;
	this.circleContain.setTransform(155.2,303.7);

	this.timeline.addTween(cjs.Tween.get(this.circleContain).wait(1));

	// Reset Depths
	this.resetDepthsBtn = new lib.hit_btn();
	this.resetDepthsBtn.name = "resetDepthsBtn";
	this.resetDepthsBtn.parent = this;
	this.resetDepthsBtn.setTransform(0,0,6,12);
	new cjs.ButtonHelper(this.resetDepthsBtn, 0, 1, 2, false, new lib.hit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.resetDepthsBtn).wait(1));

	// Branding
	this.subhead = new lib.subtext();
	this.subhead.name = "subhead";
	this.subhead.parent = this;
	this.subhead.setTransform(150.1,121.5,1,1,0,0,0,83.4,0);

	this.headline = new lib.headline();
	this.headline.name = "headline";
	this.headline.parent = this;
	this.headline.setTransform(150.1,91.6,1,1,0,0,0,125,0);

	this.logo = new lib.salesforce_logo_1();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(149.8,44.8);

	this.instance = new lib.trailhead_logo_1();
	this.instance.parent = this;
	this.instance.setTransform(150.3,508.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.logo},{t:this.headline},{t:this.subhead}]}).wait(1));

	// bottomBar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bHCIAAuDMAu3AAAIAAODg");
	this.shape.setTransform(150,555);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// hit_btn (TOP LAYER)
	this.hit_btn = new lib.hit_btn();
	this.hit_btn.name = "hit_btn";
	this.hit_btn.parent = this;
	new cjs.ButtonHelper(this.hit_btn, 0, 1, 2, false, new lib.hit_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit_btn).wait(1));

	// finalFrame
	this.finalFrame = new lib.finalscreen();
	this.finalFrame.name = "finalFrame";
	this.finalFrame.parent = this;
	this.finalFrame.setTransform(600,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.finalFrame).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(300,264.5,1,1,0,0,0,300,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0D4E7").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// bg_cover (BOTTOM LAYER)
	this.bg_mc = new lib.bg_mc();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.2,264.5,656.8,635.5);
// library properties:
lib.properties = {
	id: '26821785911F4BD59B7112D85822C144',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"300x600_atlas_P_.png", id:"300x600_atlas_P_"},
		{src:"300x600_atlas_NP_.jpg", id:"300x600_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['26821785911F4BD59B7112D85822C144'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;