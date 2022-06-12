function GetSum(pr) {

    var sum = 0
    for (var i = 0; i <= pr; i++) {
        
        sum += i
    }
    return (sum)
}

function suma(tpo) {
   
    
      var mony = (tpo * 1.17 * 5) - (tpo * 5)
    return(mony)
}

 function trimString(a, b, c) {
    var strik = ''
    a.lenght - b
for (var i = 0; i <= a.lenght; i++) {
    strik = strik + a[i > c]
}
return(strik)
}



function fooboo(a, foo, boo)  {
    foo = function() {
        console.log('Foo')
    }
    boo = function() {
        console.log('boo')
    }

    if( a === true) {foo()} else
    {boo()}
}
