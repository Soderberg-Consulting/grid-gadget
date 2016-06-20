/* grid-gadget.js v1.0.0

*/
$(document).ready(function(){
    /* Changes the number of columns in the preview display. */
    $("#cols").change(function(){
        var selection = $("#cols option:selected").text();
        var column;
        
        /* Gets the correct number of columns. */
        if(selection == 1) {
            /* Creates a row that has 1 small-12 column. */
            column = '<div class="column small-12 gg-col gg-col1"><input type="text" name="col1" id="col1" value="100.00%"></div>';
        }
        else if(selection == 2) {
            /* Creates a row that has 2 small-6 columns. */
            column = '<div class="column small-6 gg-col gg-col1"><input type="text" name="col1" id="col1" value="50.00%"></div>';
        }
        else if(selection == 3) {
            /* Creates a row that has 3 small-4 columns. */
            column = '<div class="column small-4 gg-col gg-col1"><input type="text" name="col1" id="col1" value="33.33%"></div>';
        }
        
        else if(selection == 4) {
            /* Creates a row that has 4 small-3 columns. */
            column = '<div class="column small-3 gg-col gg-col1"><input type="text" name="col1" id="col1" value="25.00%"></div>';
        }
        else if(selection == 5) {
            /* Creates a row that has 5 small-60 columns. */
            column = '<div class="column small-60 gg-col gg-col1"><input type="text" name="col1" id="col1" value="20.00%"></div>';
        }
        else if(selection == 6) {
            /* Creates a row that has 6 small-2 columns. */
            column = '<div class="column small-2 gg-col gg-col1"><input type="text" name="col1" id="col1" value="16.67%"></div>';
        }
        
        /* Adds in the number of columns into the preview. */
        var stringHTML = column;
        for(i = 2; i <= selection; ++i) {
            var stringColA = column.split("col1")[0];
            var stringColB = column.split("col1")[1];
            var stringColC = column.split("col1")[2];
            var stringColD = column.split("col1")[3];
            var colI = "col" + i;
            stringHTML += stringColA + colI + stringColB + colI + stringColC + colI + stringColD;
        }
        $("#preview").html(stringHTML);
    });
    
    /* Changes the width of the column selected in the preview display. */
    $("#preview").on("change", ".gg-col :input", function(){
        var width = parseFloat($(this).val()) + "%";
        $(this).parent().css("width", width);
        $(this).val(width);
    });
});
