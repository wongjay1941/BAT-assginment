function readDB(){
    var csv = "/database.csv";

    $.ajax({
        url: csv,
        async: false,
        success: function (csvd) {
            data = $.csv.toArrays(csvd, {headers: true});
        },
        dataType: "text",
        complete: function () {
            console.log(data);
            return data;
        }
    });
}