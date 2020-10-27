var spawn = require('child_process').spawn
var exec = require('child_process').exec
var cmd = process.platform === "win32" ? 'npx.cmd' : 'npx'
let dev_server = spawn(cmd, ['yarn', 'dev'])
let cypress = spawn(cmd, ['cypress', 'open'], {stdio: 'inherit'})

cypress.on('exit') do 
	if process.platform === 'win32'
		exec('taskkill /pid ' + dev_server.pid + ' /T /F')
	else
		dev_server.kill('SIGHUP')
