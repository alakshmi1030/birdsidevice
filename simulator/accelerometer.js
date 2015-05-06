// simulator accelerometer.js file
//@module
//@line 17 "/Users/Anand/Documents/UC Berkeley/CS160/device tutorial/tutorial3device/simulator/accelerometer.xml"
/* KPS2JS GENERATED FILE; DO NOT EDIT! */
//@line 19
var PinsSimulators = require('PinsSimulators');
//@line 21

var maxx = 260;
var maxy = 126;
var maxz = 400;

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
						valueLabel : "X Position",
						defaultControl : PinsSimulators.SLIDER,
						valueID : "x",
						speed : 0,
						minValue: 0,
						maxValue: maxx
					}
				),
				new PinsSimulators.AnalogInputAxisDescription(
					{
						valueLabel : "Y Position",
						defaultControl : PinsSimulators.SLIDER,
						valueID : "y",
						speed : 0,
							minValue: 0,
						maxValue: maxy,
					}
				),
				new PinsSimulators.AnalogInputAxisDescription(
					{
						valueLabel : "Z Position",
						defaultControl : PinsSimulators.SLIDER,
						valueID : "z",
						speed : 0,
						minValue: 0,
						maxValue: maxz,
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