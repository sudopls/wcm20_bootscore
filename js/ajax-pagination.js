jQuery(function($) {
    function find_page_number(element) {
        element.find('span').remove();
        return parseInt( element.html() );
    }

    function updateResultCount() {
        postCount = $('#showPosts').children().length;

        $('.woocommerce-result-count').append("Visar " + postCount + " av något");
    }

    $(document).on( "click", ".page-item a", function(event) {
        event.preventDefault();
        page = find_page_number( $(this) );

        console.log(page);
        $.ajax({
            url: ajaxpagination.ajaxurl,
            type: 'post',
            data: {
                action: 'ajax_pagination',
                page: page,
            },
            success: function(html) {
                $('#showPosts').children().remove();
                $('#showPosts').append( html );
                updateResultCount();
            }
        })
    })
});