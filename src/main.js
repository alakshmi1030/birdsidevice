// device main.js file
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
`
var xc = 0;
var yc = 0;
var zc = 0;

deviceURL = "";

Handler.bind("/discover", Behavior({
	onInvoke: function(handler, message){
	    trace("discovering");
		deviceURL = JSON.parse(message.requestText).url;
		if (deviceURL != "") {
			mainContainer.droneStatus.string = "Drone Connectivity: Good";
			mainContainer.currStatus.string = "Current Status: Manual";
		}
	},
	onComplete: function(content, message, json){
		trace("got it");
	}
}));

Handler.bind("/forget", Behavior({
	onInvoke: function(handler, message){
		deviceURL = "";
	}
}));

var mainContainer = new Container({
  left:0, right:0, top:0, bottom:0,
  skin: whiteS,
  contents:[
    new Label({left:0, right:0, top: 5, string: "Drone Connectivity: Offline",name: "droneStatus", style: textStyle}),
    new Picture({left: 10, right: 10, top: 20, bottom: 20, name: "cameraFeed", url: "china/ccenter.png" }),
    new Label({left:0, right:0, bottom: 5, string: "Current Status: Off",name: "currStatus", style: textStyle})
  ]
});

var view="center";

Handler.bind("/forward", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "back") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cforward.png");
			view = "forward";
		}
	}
}));

Handler.bind("/back", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "forward") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cback.png");
			view = "back";
		}
	}
}));

Handler.bind("/left", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "right") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cleft.png");
			view = "left";
		}
	}
}));

Handler.bind("/right", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "left") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cright.png");
			view = "right";
		}
	}
}));

Handler.bind("/ascend", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "descend") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cup.png");
			view = "ascend";
		}
	}
}));

Handler.bind("/descend", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { response: "Movement received!" } );
		message.status = 200;
		mainContainer.currStatus.string = "Current Status: Manual";
		if (view == "ascend") {
			mainContainer.cameraFeed.load("china/ccenter.png");
			view = "center";
		} else {
			mainContainer.cameraFeed.load("china/cdown.png");
			view = "descend";
		}
	}
}));

Handler.bind("/connect", Behavior({
	onInvoke: function(handler, message){
		message.responseText = "Successfully connected!";
		message.status = 200;	
		mainContainer.droneStatus.string = "Drone Connectivity: Good";
	}
}));

Handler.bind("/startPath", Behavior({
	onInvoke: function(handler, message){
		mainContainer.currStatus.string = "Current Status: Autopilot";
		mainContainer.cameraFeed.load("china/ccenter.png");
	}
}));

Handler.bind("/stopPath", Behavior({
	onInvoke: function(handler, message){
		mainContainer.currStatus.string = "Current Status: Manual";
		mainContainer.cameraFeed.load("china/ccenter.png");
	}
}));

/*BEGIN ACCELEROMETER STUFF*/

Handler.bind("/potResult", Object.create(Behavior.prototype, {
	onInvoke: { value: function( handler, message ){
				application.distribute( "receiveReading", message.requestObject );
			}}
}));
Handler.bind("/accelResult", Object.create(Behavior.prototype, {
	onInvoke: { value: function( handler, message ){
				application.distribute( "receiveAccelReading", message.requestObject );
			}}
}));

Handler.bind("/getData", Behavior({
	onInvoke: function(handler, message){
		message.responseText = JSON.stringify( { x:xc, y:yc, z:zc} );
		message.status = 200;
	}
}));

var MainContainer = Container.template(function($) { return { left: 0, right: 0, top: 0, bottom: 0, }});
var MainCanvas = Canvas.template(function($) { return { left: 10, right: 10, top: 10, bottom: 10, behavior: Object.create((MainCanvas.behaviors[0]).prototype), }});
MainCanvas.behaviors = new Array(1);
MainCanvas.behaviors[0] = Behavior.template({
	onDisplaying: function(content) {
		this.canvas = content;
            	this.newPoint = true;
            	this.lastX = false;
				application.invoke( new MessageWithObject( "pins:/accelerometer/read?repeat=on&callback=/accelResult&interval=70" ) );
                this.clear();
	},
	clear: function(content) {
		var ctx = this.canvas.getContext( "2d" );
				var w = this.canvas.width;
                var h = this.canvas.height;
      	        ctx.fillStyle = "black";
				ctx.fillRect( 0,0,w,h );
				this.newPoint = true;
	},
	receiveReading: function(params, data) {
		if ( this.newPoint ){
                	this.startLine( { x: data.xPos, y: data.yPos } );
                }
                else {
                	this.lineTo( { x: data.xPos, y: 1 - data.yPos } );
                }
	},
	receiveAccelReading: function(params, data) {
		xc = data.x;
	    yc = data.y;
	    zc = data.z;
	    if (zc > 300) {
	        mainContainer.droneStatus.string = "Drone Connectivity: Poor";
	    } else {
	    	if (deviceURL != "") {
	        	mainContainer.droneStatus.string = "Drone Connectivity: Good";
	        }
	    }
		if (deviceURL != "") {
		    params.invoke(new Message(deviceURL + "updateCurr"), Message.JSON);
	    }
	    
	},
})

var mainCanvas = new MainCanvas();
        application.add( mainCanvas );
        
		application.invoke( new MessageWithObject( "pins:configure", {
            accelerometer: {
                require: "accelerometer",
                pins: {
                    x: { pin: 48 }, 
					y: { pin: 47 }, 
					z: { pin: 43 } 
                }
            }
}));

var ApplicationBehavior = Behavior.template({
	onLaunch: function(application) {
		application.shared = true;
	},
	onDisplayed: function(application) {
		application.discover("prototypephone");
	},
	onQuit: function(application) {
		application.forget("prototypephone");
		application.shared = false;
	},
})

application.behavior = new ApplicationBehavior();
application.add(mainContainer);
