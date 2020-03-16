$(function(){

    let curent_li = "";

    $('#portofolio img').click(function () {
        let data = $(this).attr('src');
        curent_li = $(this).parent();
        $('#main').attr('src',data);
        $('#frame').fadeIn(1000);
        $('#overlay').fadeIn(1000);
    })

    $('#overlay').click(function () {
        $(this).fadeOut(1000);
        $('#frame').fadeOut(1000);
    })
    
    $('#right').click(function () {

        if (curent_li.is(':last-child')) {
            var next_li = $('#portofolio li').first();
        }else{
            var next_li = curent_li.next();
        }

        let next_src = next_li.children('img').attr('src');
        $('#main').attr('src', next_src);
        curent_li = next_li;
    })

    $('#left').click(function () {

        if (curent_li.is(':first-child')) {
            var prev_li = $('#portofolio li').last();
        }else{
            var prev_li = curent_li.prev();
        }
        
        let prev_src = prev_li.children('img').attr('src');
        $('#main').attr('src', prev_src);
        curent_li = prev_li;
    })
});