$("#button").on("click", function() {

    function isEmpty() {

        $('.form-control').each(function() {

            if ($(this).val() === '') {
                return false;
            }

        });


        return true;
    }


    if (isEmpty() == true) {

        var currentURL = window.location.origin;

        $("#target").submit();



    } else {
        alert("Please enter a burger!")
    }

});