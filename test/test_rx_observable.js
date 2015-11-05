'use strict'

var Rx = require("rx")

class TestClass {
    constructor(val) {
        this.val = val
    }
}

describe("rx observalble", function() {
    it('amb', function(done) {
        let source = Rx.Observable.amb(
            Rx.Observable.timer(1).select(function () { return 'foo'; }),
            Rx.Observable.timer(2).select(function () { return 'bar'; })
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
    /*
    * argument
    * selector (Function): The function which extracts the value for to test in a case statement.
    * sources (Object): A object which has keys which correspond to the case statement labels.
    * [elseSource|scheduler] (Observable | Scheduler): The observable sequence that will be run
    * if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
    * selector에서의 리턴값이 sources의 오브젝트를 결정 한다 
    * 값이 없다면 next는 실행 하지 않고, 3번째 인자를 실행한다 없다면 컴플릿
    */
    it('case', function(done) {
        let val1 = new TestClass(1)
        let val2 = new TestClass(2)
        let val3 = new TestClass(3)
        
        let caseSources = {
            'foo': Rx.Observable.return(val1),
            'bar': Rx.Observable.return(val2),
            'coo': Rx.Observable.return(val3)
        }
        var emptySource = Rx.Observable.empty()
        let source = Rx.Observable.case(
            function() { return 'coo' },
            caseSources,
            emptySource
        )
        
        let sub = source.subscribe(
            (x) => { console.log('next :' + x.val) },
            (err) => {
                console.log('error :' + err)
                done()
            },
            () => {
                console.log('completed')
                done()
            } )
    })
    /*
    * argument
    * selector (Function): The function which extracts the value for to test in a case statement.
    * sources (Object): A object which has keys which correspond to the case statement labels.
    * [elseSource|scheduler] (Observable | Scheduler): The observable sequence that will be run
    * if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
    * selector에서의 리턴값이 sources의 오브젝트를 결정 한다 
    * 값이 없다면 next는 실행 하지 않고, 3번째 인자를 실행한다 없다면 컴플릿
    */
    it('catch', function(done) {
        let val1 = new TestClass(1)
        let val2 = new TestClass(2)
        let val3 = new TestClass(3)
        
        let caseSources = {
            'foo': Rx.Observable.return(val1),
            'bar': Rx.Observable.return(val2),
            'coo': Rx.Observable.return(val3)
        }
        var emptySource = Rx.Observable.empty()
        let source = Rx.Observable.case(
            function() { return 'coo' },
            caseSources,
            emptySource
        )
        
        let sub = source.subscribe(
            (x) => { console.log('next :' + x.val) },
            (err) => {
                console.log('error :' + err)
                done()
            },
            () => {
                console.log('completed')
                done()
            } )
    })
    
    it("timeInterval", function(done) {
        console.log("test") 
        let source = Rx.Observable.timer(0, 10).timeInterval().map(
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