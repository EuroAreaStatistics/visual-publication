$(function ($) {
    
    $(".facebook").click(function () {
        title = "";
        text = "";
        imageUrl = "";

        u = window.location.href;
        t = _("title");

        var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t);
        var popup = window.open(url + "?redirect=facebook", "sharer", "toolbar=0,status=0,width=626,height=436");
    });
    
    $(".twitter").click(function () {
        
        u = window.location.href;
        t = _("title");
     
        var url = encodeURI(window.location.href);
        
        var url_share_twitter = "https://twitter.com/intent/tweet?original_referer=" + url + "&ref_src=twsrc%5Etfw&text=" + encodeURI(t) + "&tw_p=tweetbutton&url=" + url;
        
        window.open(url_share_twitter, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        
        return false;

    });


    $("a[data-open]").click(function () {
        var dataOpen = $(this).attr("data-open");
        var openerTmp = $('#' + dataOpen);
        var frame = $("iframe", openerTmp)[0];
        if (frame) {
            //if (frame.src.indexOf("svg") !== -1 && window.chrome) {                           
            frame.src = frame.src;
            setTimeout(function () {
                frame.style.opacity = 1;
            }, 500);

            //}
        }
    })
    $(".close-button").click(function () {
        var frame = $("iframe", $(this).parent())[0];
        if (frame) frame.style.opacity = 0;
    })
});


              $(document).ready(function () {

            $('.animsition-overlay').animsition({
                    inClass: 'overlay-slide-in-right',
                    outClass: 'overlay-slide-out-right',
                    overlay: true,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body'
                })
                .one('animsition.inStart', function () {
                    $('.wide-section').css('visibility', 'visible');
                    $('body').removeClass('bg-init');

                    $(this)
                        .find('.item')
                        .append('<h2 class="target">Callback: Start</h2>');

                })
                .one('animsition.inEnd', function () {
                    $('.target', this).html('Callback: End');

                });
      

 
            
        });
