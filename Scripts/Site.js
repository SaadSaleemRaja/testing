$("#select_user").change(
    function () {
        $('.hiddenid').each(function () {
            $(this).val($("#select_user").val());
        });
    });