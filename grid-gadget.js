/* grid-gadget.js v1.0.0

*/
$(document).ready(function(){
    /* Changes the number of columns in the preview display. */
    $("#cols").change(function(){
        var selection = $("#cols option:selected").val();
        var column;
        
        /* Gets the correct number of columns. */
        if(selection == 1) {
            /* Creates a row that has 1 medium-12 column. */
            column = '<div class="column medium-12 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 2) {
            /* Creates a row that has 2 medium-6 columns. */
            column = '<div class="column small-6 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 3) {
            /* Creates a row that has 3 medium-4 columns. */
            column = '<div class="column medium-4 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 4) {
            /* Creates a row that has 4 medium-3 columns. */
            column = '<div class="column medium-3 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div>';
        }
        
        /* Specialized 2-column subsets. */
        else if(selection == 25) {
            /* Creates a row with a 25%-75% ratio. */
            column = '<div class="column medium-3 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-9 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 33) {
            /* Creates a row with a 33%-66% ratio. */
            column = '<div class="column medium-4 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-8 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 66) {
            /* Creates a row with a 66%-33% ratio. */
            column = '<div class="column medium-8 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-4 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 75) {
            /* Creates a row with a 75%-25% ratio. */
            column = '<div class="column medium-9 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-3 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div>';
        }
        
        /* Specialized 3-column subsets. */
        else if(selection == 2525) {
            /* Creates a row with a 25%-25%-50% ratio. */
            column = '<div class="column medium-3 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-3 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div><div class="column medium-6 gg-col gg-col3"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col3<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 2550) {
            /* Creates a row with a 25%-50%-25% ratio. */
            column = '<div class="column medium-3 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-6 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div><div class="column medium-3 gg-col gg-col3"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col3<!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 5025) {
            /* Creates a row with a 50%-25%-25% ratio. */
            column = '<div class="column medium-6 gg-col gg-col1"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col1<!-- /com.omniupdate.div --></div><div class="column medium-3 gg-col gg-col2"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col2<!-- /com.omniupdate.div --></div><div class="column medium-3 gg-col gg-col3"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ -->col3<!-- /com.omniupdate.div --></div>';
        }
        
        /* Adds in the number of columns into the preview. */
        var stringHTML = column;
        /* If the columns are evenly distributed then insert add in the number of colums. */
        if(selection < 5) {
            for(i = 2; i <= selection; ++i) {
                var stringColA = column.split("col1")[0];
                var stringColB = column.split("col1")[1];
                var stringColC = column.split("col1")[2];
                var stringColD = column.split("col1")[3];
                var colI = "col" + i;
                stringHTML += stringColA + colI + stringColB + colI + stringColC + colI + stringColD;
            }
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
