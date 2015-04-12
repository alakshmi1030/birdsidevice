// KPR Script file
var THEME = require('themes/sample/theme');
var BUTTONS = require('controls/buttons');
var CONTROL = require('mobile/control');
var KEYBOARD = require('mobile/keyboard');

var deviceURL = "";

var nameInputSkin = new Skin({ borders: { left:2, right:2, top:2, bottom:2 }, stroke: 'gray',});
var fieldStyle = new Style({ color: 'black', font: 'bold 24px', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5, });
var fieldHintStyle = new Style({ color: '#aaa', font: '24px', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5, });
var whiteS = new Skin({fill:"white"});
var typeStyle = new Style({ color: 'white', font: 'bold 24px', horizontal: 'center', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5, });
var smallTypeStyle = new Style({ color: 'white', font: '18px', horizontal: 'center', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5, });
var whiteS = new Skin({fill:"white"});
var blackS = new Skin({fill:"black"});
var redS = new Skin({fill:"#ea9999"});
var yellowS = new Skin({fill: "#fbdd8d"});
var greenS = new Skin({fill:"#b6d7a7"});
var blueS = new Skin({fill:"#99B6BC"});
var purpleS = new Skin({fill:"#ae5dae"});
var borderS = new Skin({ borders: {left: 2, right: 2, top: 2, bottom: 2}, stroke: "white"})
var smLabelStyle = new Style( { font: "30px", color:"black" } );
var labelStyle = new Style( { font: "bold 40px", color:"black" } );
var textStyle = new Style( {font: "bold 20px", color: "black" } );

var iconWidth = 50;
var iconHeight = 50;
var pictureWidth = 325;
var pictureHeight = 325;

var mainContainer = new Container({
  left:0, right:0, top:0, bottom:0,
  skin: whiteS,
  contents:[
    new Label({left:0, right:0, top: 20, string: "Drone Connectivity: Disconnected",name: "droneStatus", style: textStyle}),
    new Label({left:0, right:0, string: "Current Status: Stationary",name: "flightPath", style: textStyle})
  ]
});

Handler.bind("/connect", Behavior({
	onInvoke: function(handler, message){
		message.responseText = "Successfully connected!";
		message.status = 200;	
		mainContainer.droneStatus.string = "Drone Connectivity: Connected";
	}
}));

Handler.bind("/startPath", Behavior({
	onInvoke: function(handler, message){
		mainContainer.flightPath.string = "Current Status: Active";
	}
}));

Handler.bind("/stopPath", Behavior({
	onInvoke: function(handler, message){
		mainContainer.flightPath.string = "Current Status: Stationary";
	}
}));

var ApplicationBehavior = Behavior.template({
	onLaunch: function(application) {
		application.shared = true;
	},
	onQuit: function(application) {
		application.shared = false;
	},
})

application.behavior = new ApplicationBehavior();
application.add(mainContainer);