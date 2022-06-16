var obj = {
    name: 'Tasck',
    id: 1,
    Boolean: false,
    empty: undefined,
    count: null,
    listTasck: [1, 2, 3, 4],
    info: {
        coorect: null,
        listinfo: [null, { id: 2 }]
    }
}

var objJ = {}

for (var key in obj) {
    if (typeof (obj[key]) !== "object" || obj[key] === null) { objJ[key] = obj[key] }
    else if (typeof(obj[key]) === "object" && obj[key] !== {}) {
         for (var i = 0; i < this.key.length; i++)
        {objJ[key] = obj[key] }

}}