
var eql = require('fs-equals/assert')
var resolve = require('path').resolve
var fixtures = __dirname + '/fixtures/'
var tmp = __dirname + '/../tmp/'
var assert = require('better-assert')
var copy = require('..')
var fs = require('fs')

it('should recur into directories', function(done){
  copy(__dirname, tmp).then(function(){
    return eql(__dirname, tmp)
  }).node(done)
})

it('should transfer modes', function(done){
  copy(fixtures, tmp).then(function(){
    return eql(fixtures, tmp)
  }).then(function(){
    var stat = fs.lstatSync(tmp + 'executable.sh')
    assert(stat.mode == 33261)
  }).node(done)
})

it('should respect symlinks', function(done){
  copy(fixtures, tmp).then(function(){
    var ref = fs.readlinkSync(tmp + 'symlink')
    assert(ref == './executable.sh')
  }).node(done)
})
