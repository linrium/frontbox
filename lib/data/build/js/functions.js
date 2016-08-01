(function() {
    $(window).ready(() => {
        var x = $('.icon__alarm');
        var y = $('.alarm__center');
        x.append(y);
        exeDebounce();
        fixedMenu();
    });

    //debounce function
    var debounce = (func, wait) => {
        let timeout;
        return () => {
            let context = this;
            let args = arguments;
            let exeFunc = () => {
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(exeFunc, wait);
        };
    };

    var exeDebounce = debounce(() => {
        showSearch();
    }, 500);

    //show search
    var showSearch = () => {
        let search = $('.icon__search .svg-use');
        let searchfull = $('.search--full');
        let input = $('.icon__search input');
        let path = $('.icon__search .svg-use path');


        search.click(() => {
            if ($(window).width() > 768) {
                if (input.css('width') === '2px') {
                    input.css('width', '200px');
                    input.focus();
                    path.css('fill', 'rgba(0,0,0,.8)');
                } else {
                    checkValue();
                }
                return false;
            } else {
                if (searchfull.hasClass('is-rotate-hide')) {
                    searchfull.addClass('is-rotate-show');
                    searchfull.removeClass('is-rotate-hide');
                    $('.search--full input').focus();
                } else {
                    searchfull.removeClass('is-rotate-show');
                    searchfull.addClass('is-rotate-hide');
                }
                return false;
            }
        });
        input.click(e => {
            e.stopPropagation();
            return false;
        });
        $(document).click(() => {
            checkValue();
        });
    };

    var checkValue = () => {
        let input = $('.icon__search input');
        let path = $('.icon__search .svg-use path');
        if (input.val() === '') {
            input.css('width', '0');
            path.css('fill', 'rgba(0,0,0,.44)');
            return false;
        }
    };

    //fixed menu
    var fixedMenu = () => {
        let header = $('header');
        let content = $('.header__content');
        $(window).scroll(() => {
            if ($(this).scrollTop() > 57) {
                header.addClass('is-top-fixed');
                content.hide();
            } else {
                header.removeClass('is-top-fixed');
                content.show();
            }
        });
    };
})();
