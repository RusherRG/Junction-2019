function login() {
    $('.login-modal').toggleClass('hide');
    $('.login-modal').on('click', function()
    {
        console.log('login clicked');
        $('.login-modal').toggleClass('hide');
        
        signedin(true);
    })
}