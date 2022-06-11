var obj = {
    name: 'vasya',
    age: 20,
    isFlay: false,
    inObject: { show: 'text' },
    inArray: [1, 2, 3, [45, 50]]
}

for (var key in obj) {
    if (typeof (key) === 'string') { console.log(obj[key]) }
    else if (typeof (key) === 'object') { for (var inkey in key)
        {console.log(obj[key][inkey])}} }
