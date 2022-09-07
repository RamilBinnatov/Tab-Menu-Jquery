let contents = document.querySelectorAll(".tab-menu .tab-body div");

$(document).ready(function () {

    let header = $(`.tab-menu .tab-header div`);
    $(header).on("click", function () {

        let activeElem = $(`.active`);
        $(activeElem).removeClass("active");
        $(this).addClass("active");

        contents.forEach(content => {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).removeClass("d-none")
            } else {
                $(content).addClass("d-none")
            }
        });
    })
}) 