var imgNum = 1;
var num = 0;
var clickX = 0;
var imgTotal = 38;
var gap = 15;
$("#view").on("mousedown",function(e){
    clickX = e.clientX;
    $("#view").on("mousemove",function(e){
        if(e.clientX-clickX > gap){
            num++;
            if(num > imgTotal - 1) {
                num = 0;
            }
            clickX = e.clientX;
        } else if(e.clientX - clickX < -gap) {
            num--;
            if(num < 0) {
                num = imgTotal - 1;
            }
            clickX = e.clientX;
        }
        imgNum = num+1;
        if(imgNum<10) {
            imgNum = "0"+imgNum
        }
        $("#view .car").attr({src:"../images/"+imgNum+".jpg"});
        
        //38:num = 720:x
        gsap.set("#drag .knob",{
            x:Math.floor(num*720/imgTotal)
        });
    });
});
$("#view").on("mouseup",function(e){
    $("#view").off("mousemove");
});


Draggable.create("#drag .knob", {
	type:"x",
	bounds: "#drag .bg",
    throwProps:true,
    edgeResistance:1,
	onClick:function() {
		console.log("clicked");
    },
    onDrag:function() {
        console.log(this.x);
        //0~720
        //720:38=num:x
        //38*num = 72*x;
        //38*num/72
        num = Math.floor(this.x*imgTotal/720);
        imgNum = num%imgTotal+1;
        if(imgNum<10) {
            imgNum = "0"+imgNum
        }
        $("#view .car").attr({src:"../images/"+imgNum+".jpg"});
    },
	onDragEnd:function() {
		console.log("drag ended");
    },
    onThrowUpdate:function() {
        num = Math.floor(this.x*imgTotal/720);
        imgNum = num%imgTotal+1;
        if(imgNum<10) {
            imgNum = "0"+imgNum
        }
        $("#view .car").attr({src:"../images/"+imgNum+".jpg"});
    }
});