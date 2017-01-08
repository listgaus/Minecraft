var Minecraft = {};

Minecraft.selectedTool = "";  //tool that has been selected
Minecraft.selectedDiv = "";
Minecraft.divPaste = ""; //this will be used as a memory slot for the copy/pasting of a class/brick

Minecraft.init = function () {
    $(document).ready(function () {
        Minecraft.start();
    });
};

Minecraft.init();

Minecraft.start = function () {
    var main = $(".container");
    var tool = $(".toolBox");


//creating tool box divs
    var axe = $("<div id='axe' class='tool'></div>");
    axe.click(Minecraft.clickedTool);

    var shovel = $("<div id='shovel' class='tool'></div>");
    shovel.click(Minecraft.clickedTool);

    var pickaxe = $("<div id='pickaxe' class='tool'></div>");
    pickaxe.click(Minecraft.clickedTool);

    var selectedBrick = $("<div id='selectedBrick'></div>");
    selectedBrick.click(Minecraft.copyPaste);

    tool.append(pickaxe);
    tool.append(shovel);
    tool.append(axe);
    tool.append(selectedBrick);
    var rowArray = [];

    //creating the grid


    // console.log(rowArray);

// creating the world in matrix gilads example
    var world = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],

        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 3, 0, 0, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],

        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    ]

    var blocks = ["sky", "cloud", "leaf", "tree", "rock", "grass", "dirt"];

    for (var i = 0; i < 20; i++) {
        var row = $("<div class='row'></div>");
        rowArray[i] = Array(20);
        main.append(row);
        for (var j = 0; j < 20; j++) {
            var box = rowArray[i][j] = $("<div class='box'></div>");
            box.data("row", i);
            box.data("column", j);
            box.attr("id", i + "-" + j); //gives each on at id
            box.click(Minecraft.pickedDiv);
            box.addClass(blocks[world[i][j]]);
            row.append(box);
        }
    }


//now wana use the selected brick, make selected brick a namespace?

// Minecraft.copyPaste = function(e){

// //want to select the tool with the id of the string, not just the string, previously wrapped it with a dollar sign, so it is already a jquery object 
// Minecraft.selectedTool.css("background-color","black");
// Minecraft.selectedTool = "";

// }

// $(."selected").removeClass("selected");
// $(this).addClass("selected");


}


// this function is the tool selector and updator
Minecraft.clickedTool = function () {
    if (Minecraft.selectedTool === "") {
        Minecraft.selectedTool = $(this);
        // console.log(Minecraft.selectedTool);
        $(this).addClass("clicked");
        console.log(this);
    }
    else if (Minecraft.selectedTool !== "") {
        Minecraft.selectedTool.removeClass("clicked");
        Minecraft.selectedTool = $(this);
        // console.log(Minecraft.selectedTool);
        $(this).addClass("clicked");
    }
}


Minecraft.pickedDiv = function () {

    if ((Minecraft.selectedTool === "") && (Minecraft.divPaste !== "") && $(this).has("background-color", "skyblue")) {
        Minecraft.selectedDiv = $(this);
//this if term is for the paste parts, checking that -i have a selected tool,the background image is empty and paste memory isnt.
        if (Minecraft.selectedDiv.is(".cloud") || Minecraft.selectedDiv.is(".leaf") || Minecraft.selectedDiv.is(".rock") || Minecraft.selectedDiv.is(".tree") || Minecraft.selectedDiv.is(".dirt") || Minecraft.selectedDiv.is(".grass")) {
            return;
        }
        else {
            var paste = $("#selectedBrick").attr('class');
            console.log(paste);
            var hello = $(this);
            console.log(hello);
            $(this).addClass(paste);

            $("#selectedBrick").removeClass(paste);
            $("#selectedBrick").removeClass("clicked");
            Minecraft.divPaste = "";

        }
    }
    else if ((Minecraft.selectedTool !== "") && (Minecraft.divPaste == "")) {

        Minecraft.selectedDiv = $(this);

        if (Minecraft.selectedDiv.is(".tree") && Minecraft.selectedTool.is("#axe")) {
            Minecraft.selectedDiv.removeClass("tree");
            Minecraft.selectedDiv.addClass("sky");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("tree");

        }

        if (Minecraft.selectedDiv.is(".leaf") && Minecraft.selectedTool.is("#axe")) {

            Minecraft.selectedDiv.removeClass("leaf");
            Minecraft.selectedDiv.addClass("sky");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("leaf");
        }

        if (Minecraft.selectedDiv.is(".rock") && Minecraft.selectedTool.is("#pickaxe")) {

            Minecraft.selectedDiv.removeClass("rock");
            Minecraft.selectedDiv.addClass("sky");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("rock");

        }

        if (Minecraft.selectedDiv.is(".dirt") && Minecraft.selectedTool.is("#shovel")) {

            Minecraft.selectedDiv.removeClass("dirt");
            Minecraft.selectedDiv.addClass("sky");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("dirt");
        }

        if (Minecraft.selectedDiv.is(".grass") && Minecraft.selectedTool.is("#shovel")) {

            Minecraft.selectedDiv.removeClass("grass");
            Minecraft.selectedDiv.addClass("sky");
            $("#selectedBrick").removeClass();
            $("#selectedBrick").addClass("grass");
        }
        //
        // else  {
        //
        //     Minecraft.selectedTool.addClass("wrong");
        //     setTimeout(function () {
        //         Minecraft.selectedTool.removeClass("wrong");
        //         // Minecraft.selectedTool.addClass("clicked");
        //     }, 200);
        //
        // }

    }
}


Minecraft.copyPaste = function () {
    if (Minecraft.divPaste === "") {
        $(".clicked").removeClass("clicked");
        Minecraft.selectedTool = "";
        $("#selectedBrick").addClass("clicked");
        console.log(Minecraft.selectedTool);
        console.log(this);
        Minecraft.divPaste = this;

        // console.log(Minecraft.divPaste);
    }
    else {

        return;
    }
}







