// simulator accelerometer.js file
//@module
//@line 17 "/Users/Anand/Documents/UC Berkeley/CS160/device tutorial/tutorial3device/simulator/accelerometer.xml"
/* KPS2JS GENERATED FILE; DO NOT EDIT! */
//@line 19
var PinsSimulators = require('PinsSimulators');
//@line 21
var configure = exports.configure = function(configuration) {
	this.pinsSimulator = shell.delegate("addSimulatorPart", {
			header : { 
				label : "Drone Readings", 
				name : "3 Analog Inputs", 
				iconVariant : PinsSimulators.SENSOR_MODULE 
			},
			axes : [
				new PinsSimulators.AnalogInputAxisDescription(
					{
						valueLabel : "Current Speed",
						defaultControl : PinsSimulators.SLIDER,
						valueID : "x",
						speed : 0
					}
				),
				new PinsSimulators.AnalogInputAxisDescription(
					{
						valueLabel : "Altitude",
						defaultControl : PinsSimulators.SLIDER,
						valueID : "y",
						speed : 0
					}
				),
				new PinsSimulators.AnalogInputAxisDescription(
					{
						valueLabel : "Direction",
						valueID : "z",
						speed : 0
					}
				),
			]
		});
}
//@line 54
var close = exports.close = function() {
	shell.delegate("removeSimulatorPart", this.pinsSimulator);
}
//@line 58
var read = exports.read = function() {
	return this.pinsSimulator.delegate("getValue");
}
//@line 63
exports.pins = {
			x: { type: "A2D" },
			y: { type: "A2D" },
			z: { type: "A2D" }
		};