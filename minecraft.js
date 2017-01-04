var main = $(".container");
var rowArray = [];


for (var i = 0; i < 20; i++) {
    var row = $("<div class='row'></div>");
    rowArray[i]=Array(20);
    main.append(row);
    for (var j = 0; j < 20; j++) {
        var box = rowArray[i][j]= $("<div class='box'></div>");
        box.data("row", i);
        box.data("column", j);
        row.append(box);
    }
}

console.log(rowArray);