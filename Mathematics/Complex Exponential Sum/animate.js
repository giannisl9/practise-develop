var canvas = document.getElementById('myCanvas')
var canvas2 = document.getElementById('myCanvas2')
var ctx = canvas.getContext('2d')
var ctx2 = canvas2.getContext('2d')
var X = canvas.width / 2
var Y = canvas.height / 2
var angle = 0
var myVar = setInterval(draw, 50)

function canvas2Fun(){
	for( var i = 0; i <= 10000; i += 1 ){
		ctx2.beginPath()
		ctx2.arc(i*canvas2.width/10000, Y - Math.abs(canvas2.height/4 * Math.cos(i*2*Math.PI/10000)), 1, 0, 2 * Math.PI, false)
		ctx2.fillStyle = 'black'
		ctx2.fill()
		
	}
}

function drawDot(angle){
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.beginPath()
	ctx2.moveTo(0, Y)
	ctx2.lineTo(2 * X, Y)
	ctx2.stroke()
	canvas2Fun()
	ctx2.beginPath()
	ctx2.arc(angle*canvas.width/(4*Math.PI) % (canvas.width) , Y - Math.abs(canvas.height/4 * Math.cos(angle/2)), 5, 0, 2 * Math.PI, false)
	ctx2.fillStyle = 'green'
	ctx2.fill()
}

function drawCircle(){
	var R = canvas.width / 4

	ctx.beginPath()
	ctx.arc(X, Y, R, 0, 2 * Math.PI, false)

	ctx.lineWidth= 3
	ctx.strokeStyle='black'
	ctx.stroke()
}

function drawAxis(){
	ctx.beginPath()
	ctx.moveTo(X, 0)
	ctx.lineTo(X, 2 * Y)
	ctx.stroke()
	
	ctx.beginPath()
	ctx.moveTo(0, Y)
	ctx.lineTo(2 * X, Y)
	ctx.stroke()
}

function drawVector(m, n, k, l, col){
	ctx.beginPath()
	ctx.moveTo(m, n)
	ctx.lineTo(m + k, n - l)
	ctx.strokeStyle = col
	ctx.stroke()
}

function drawLine(k, l, m, n){
	ctx.beginPath()
	ctx.moveTo(k, l)
	ctx.lineTo(m, n)
	ctx.strokeStyle = 'black'
	ctx.stroke()
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCircle()
	drawAxis()
	
	k1 = Math.cos(angle) * canvas.width / 4
	l1 = Math.sin(angle) * canvas.width / 4
	k2 = Math.cos(2*angle) * canvas.width / 4
	l2 = Math.sin(2*angle) * canvas.width / 4
	
	drawVector(X, Y, k1, l1, 'red')
	drawVector(X, Y, k2, l2, 'blue')
	drawVector(X + k1, Y - l1, k2, l2, 'black')
	drawVector(X + k2, Y - l2, k1, l1, 'black')
	drawVector(X, Y, k1 + k2, l1 + l2, 'green')
	drawDot(angle)
	angle = angle + Math.PI / 100
}