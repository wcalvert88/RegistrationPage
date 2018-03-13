exports.index = function(req, res) {
    res.send('HOME Page')
}

exports.regs = function(req, res) {
    res.send('REGISTRATION Page')
}

exports.signup = function(req, res) {
    console.log('Signed Up')
    res.send('Signed Up')
}