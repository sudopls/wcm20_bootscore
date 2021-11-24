<?php
function ajax_auth_init() {
    wp_register_script('ajax-auth-script', get_template_directory_uri() . '/js/ajax-auth.js', array('jquery') );

    wp_enqueue_script('ajax-auth-script');

    wp_localize_script('ajax-auth-script', 'ajax_auth_object', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'redirecturl' => home_url(),
        'loadingmessage' => _e('Logging in, pls wait...')
    ));

    add_action( 'wp_ajax_nopriv_ajaxlogin', 'ajax_login');

}

if (!is_user_logged_in()) {
    add_action('init', 'ajax_auth_init');
}

function ajax_login() {
    echo "hello";
    check_ajax_referer( 'ajax-login-nonce', 'security');

    // auth_user_login($_POST['username'], $_POST['password'], 'login');

    $data = array();
    $data['user_login'] = $_POST['username'];
    $data['user_password'] = $_POST['password'];
    $data['remember'] = true;

    $user_signon = wp_signon( $data, false );
    if (!is_wp_error($user_signon) ) {
        wp_set_current_user($user_signon->ID);
        wp_set_auth_cookie($user_signon->ID);
        echo json_encode(array('loggedin'=>true, 'message'=>_e('Login successful')));
    }

    die();
}

function auth_user_login($user_login, $password, $login) {
    $data = array();
    $data['user_login'] = $user_login;
    $data['user_password'] = $password;
    $data['remember'] = true;


    $user_signon = wp_signon( $data, '');
    if ( is_wp_error($user_signon) ) {
        echo json_encode(array('loggedin'=>false, 'message'=>_e('Something went wrong')));
    }  else {
        wp_set_current_user($user_signon->ID);
        echo json_encode(array('loggedin'=>true, 'message'=>_e($login.' successful, redirecting')));
    }
    die();
}