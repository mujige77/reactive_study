'use strict'

var Rx = require("rx")
var mocha = require("mocha")

describe("rx observalble", function() {
    it('amb', function(done) {
        let source = Rx.Observable.amb(
            Rx.Observable.timer(500).select(function () { return 'foo'; }),
            Rx.Observable.timer(200).select(function () { return 'bar'; }),
            Rx.Observable.timer(100).select(function () { return 'foo2'; }),
            Rx.Observable.timer(10).select(function () { return 'bar2'; })
        )
        let sub = source.subscribe(
            (x) => {
                console.log('next: ' + x)
            },
            function(err) {
                console.log(err)
                done()
            },
            function() {
                console.log('completed')
                done()
            }
        )
    })
    
    it("timeInterval", function(done) {
        console.log("test") 
        let source = Rx.Observable.timer(0, 1000).timeInterval().map(
            function(x) {
                return x.value + ':' + x.interval;
            }).take(5)
            
        var sub = source.subscribe(
            function(x) {
                console.log('next:  ' + x)
            },
            function(err) {
                console.log(err)
                done()
            },
            function() {
                console.log('completed')
                done()
            }
        )
    })
})