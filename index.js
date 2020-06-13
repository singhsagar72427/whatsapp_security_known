



let isonline = function()
{
	let status
	try {
		status = $('._3sgkv span').textContent
	}
	catch(e)
	{
		status = "offline"
	}
	if(status=="online")
	{
		return true
	}
	return false
}

let timestats = []

let checktime = function(){
	let d = new Date()
	if(isonline())
	{
		let time = d.getHours()+d.getMinutes()+d.getSeconds()
		timestats.push(time)
		console.log("time has been entered")
		console.log(time)

	}
	console.log(isonline())
	setTimeout(checktime,3000)
}