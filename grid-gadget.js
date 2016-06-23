/* grid-gadget.js v1.0.0

*/
$(document).ready(function(){
    /* Loads up the preview screen. */
    var srcContent = $('#testRow').html();//gadget.
    
    /* Button functions. */
    $('#rowAdd').on('click', function() {
        /* Displays the row generator. */
        $('#rowGenerator .column.medium-4').toggle(1000);
        $('[name=cols').val(1);
        $('#previewNew').html('<div class="column small-12 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>');
    });
    
    $('#rowEdit').on('click', function() {
        alert("Moving rows!");
    });
    
    $('#rowDelete').on('click', function() {
        alert("Deleting rows!");
    });
    
    $('#rowConfirm').on('click', function() {
        alert("Done editing rows!");
    });
    
    $('#rowInsert').on('click', function() {
        /* Inserts the new row into the preview. */
        var content = $('#previewNew').html();
        content = content.replace(/small/g, "medium");//.replace(/ gg-col/g, "");
        content = '<div class="row">' + content + '</div>';
        $('#preview').append(content);
        $('#rowGenerator .column.medium-4').toggle(1000);
    });
    
    /* Changes the number of columns in the preview new row display. */
    $('#rowGenerator').on('change', '[name=cols]', function(){
        var selection = $('[name=cols] option:selected').val();
        var column;
        
        /* Gets the correct number of columns. */
        if(selection == 1) {
            /* Creates a row that has 1 small-12 column. */
            column = '<div class="column small-12 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 2) {
            /* Creates a row that has 2 small-6 columns. */
            column = '<div class="column small-6 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 3) {
            /* Creates a row that has 3 small-4 columns. */
            column = '<div class="column small-4 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 4) {
            /* Creates a row that has 4 small-3 columns. */
            column = '<div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        
        /* Specialized 2-column subsets. */
        else if(selection == 25) {
            /* Creates a row with a 25%-75% ratio. */
            column = '<div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-9 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 33) {
            /* Creates a row with a 33%-66% ratio. */
            column = '<div class="column small-4 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-8 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 66) {
            /* Creates a row with a 66%-33% ratio. */
            column = '<div class="column small-8 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-4 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 75) {
            /* Creates a row with a 75%-25% ratio. */
            column = '<div class="column small-9 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        
        /* Specialized 3-column subsets. */
        else if(selection == 2525) {
            /* Creates a row with a 25%-25%-50% ratio. */
            column = '<div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-6 gg-col"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 2550) {
            /* Creates a row with a 25%-50%-25% ratio. */
            column = '<div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-6 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        else if(selection == 5025) {
            /* Creates a row with a 50%-25%-25% ratio. */
            column = '<div class="column small-6 gg-col"><!-- com.omniupdate.div label="contentcol1" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol2" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div><div class="column small-3 gg-col"><!-- com.omniupdate.div label="contentcol3" group="Everyone" button="707" --><!-- ouc:editor csspath="/z-omniupdate/css/style.css" cssmenu="/z-omniupdate/css/style.txt" width="484"/ --><!-- /com.omniupdate.div --></div>';
        }
        
        /* Adds in the number of columns into the preview. */
        var stringHTML = column;
        /* If the columns are evenly distributed then insert add in the number of colums. */
        if(selection < 5) {
            for(i = 2; i <= selection; ++i) {
                var colI = "col" + i;
                stringHTML += column.replace(/col1/g, colI);
            }
        }
        $('#previewNew').html(stringHTML);
    });
});
