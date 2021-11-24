<form id="login" action="login" method="post">
    <h3>Need account? <a id="pop_signup" href="">Create an Account</a></h3>
    <h2>Login</h2>
    <p class="status"></p>
    <?php wp_nonce_field('ajax-login-nonce', 'security'); ?>
    <label for="username">Username</label>
    <input type="text" id="username" class="required" name="username">
    <label for="password">Password</label>
    <input type="password" id="password" class="required" name="password">

    <input type="submit" value="LOGIN">

    <a class="close" href="">Close</a>
</form>