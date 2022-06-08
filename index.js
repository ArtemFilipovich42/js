var array = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]

for (var i = 0; i < array.length; i++) {
    if (typeof (array[i]) === "number") { alert(array[i]) }
    else if (typeof (array[i]) === "object") {
        {
            for (var j = 0; j < 3; j++)
                if (typeof (array[i][j]) === "number") {
                    alert(array[i][j])
                }
                else if (typeof (array[i][j]) === "object") {
                    {
                        for (var k = 0; k < 4; k++)
                            if (typeof (array[i][j][k]) === "number") {
                                alert(array[i][j][k])
                            }
                    }
                }
        }
    }
} 