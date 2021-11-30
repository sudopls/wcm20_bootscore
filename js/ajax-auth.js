jQuery(document).ready(function($) {
    // Show login popup on click
    $('#show_login, #show_signup').on('click', function(e) {
        $('body').prepend('<div class="login_overlay"></div>');
        if($(this).attr('id') == 'show_login') {
            $('form#login').fadeIn(500);
            $('form#register').fadeOut(500);
        } else {
            $('form#register').fadeIn(500);
            $('form#login').fadeOut(500);
        }
        e.preventDefault();
    });

    // Close login popup
    $(document).on('click', '.login_overlay, .close', function () {
        $('form#login, form#register').fadeOut(500, function () {
            $('.login_overlay').fadeOut(500);
        });
        return false;
    })

    // Prepare AJAX on form submit
    $('form#login, form#register').on('submit', function (e) {
        if (!$(this).valid()) return false;
        $('p.status', this).show().text(ajax_auth_object.loadingmessage);
        action = 'ajaxlogin',
        username = $('form#login #username').val();
        password = $('form#login #password').val();
        email = '';
        security = $('form#login #security').val();
        if ($(this).attr('id') == 'register') {
            action = 'ajaxregister',
            username = $('form#register #signonname').val();
            password = $('form#register #signonpassword').val();
            email = $('form#register #email').val();
            security = $('#signonsecurity').val();
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': action, //calls wp_ajax_nopriv_ajaxlogin
                'username': username,
                'password': password,
                'email': email,
                'security': security
            },
            success: function(data) {
                $('p.status').show().text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_auth_object.redirecturl;
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // console.log(xhr.status);
                // console.log(thrownError.message);
                console.log(thrownError);
                console.log(xhr);
                console.log("error");

                $('p.status', this).show().text(xhr.message);
            },
        });
        e.preventDefault();
    });

    // Frontend validering med jQuery validate
    if ($('#register').length)
        $('#register').validate(
            {
                rules: {
                    password2: { equalTo: '#signonpassword'}
                }
            }
        )
    // $("form#login").validate({
    //     rules: {
    //         username: "required",
    //         password: "required"
    //     },
    //     messages: {
    //         username: "Pls type your username here",
    //         password: "<h1>Password is REQUIRED!!!!!!</h1>"
    //     },
    //     submitHandler: function(form) {
    //         form.submit();
    //     }
    // });
});