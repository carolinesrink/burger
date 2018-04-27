$(document).ready(function () {
    $(".devburger_name").on("click", function (event) {
        var id = $(this).data("burger_nameid");
        $.ajax("/burger/" + id, {
            type: "PUT"
        }).then(function () {
            console.log("devoured id " + id);
            location.reload();
        });
    });


    $("#addburger_name").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#input_text").val().trim()
        };

        $.ajax("/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });
});