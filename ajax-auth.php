<form id="login" action="login" method="post">
    <?php wp_nonce_field('ajax-login-nonce', 'security'); ?>
    <label for="username">Username</label>
    <input type="text" id="username" class="required">
    <label for="password">Password</label>
    <input type="password" id="password" class="required">

    <input type="submit" value="login">
</form>