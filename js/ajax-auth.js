jQuery(document).ready(function($) {
    $('form#login').on('submit', function (e) {
        // action = 'ajaxlogin',
        // username = $('form#login #username').val();
        // password = $('form#login #password').val();
        // email = '';
        // security = $('form#login #security').val();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #username').val(),
                'password': $('form#login #password').val(),
                'security': $('form#login #security').val()
            },
            success: function(data) {
                console.log("we has success");
                if (data.loggedin == true){
                    document.location.href = ajax_auth_object.redirecturl;
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError.message);
              }
        });
        e.preventDefault();
    });

});