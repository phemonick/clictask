(function(_0xa1aax1) {
    'use strict';
    _0xa1aax7();
    _0xa1aax6();
    window['sr'] = new scrollReveal();
    if (_0xa1aax1('.menu-trigger')['length']) {
        _0xa1aax1('.menu-trigger')['on']('click', function() {
            _0xa1aax1(this)['toggleClass']('active');
            _0xa1aax1('.header-area .nav')['slideToggle'](200)
        })
    };
    _0xa1aax1('a[href*=\#]:not([href=\#])')['on']('click', function() {
        if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') && location['hostname'] == this['hostname']) {
            var _0xa1aax4 = _0xa1aax1(this['hash']);
            _0xa1aax4 = _0xa1aax4['length'] ? _0xa1aax4 : _0xa1aax1('[name=' + this['hash']['slice'](1) + ']');
            if (_0xa1aax4['length']) {
                var _0xa1aax5 = _0xa1aax1(window)['width']();
                if (_0xa1aax5 < 991) {
                    _0xa1aax1('.menu-trigger')['removeClass']('active');
                    _0xa1aax1('.header-area .nav')['slideUp'](200)
                };
                _0xa1aax1('html,body')['animate']({
                    scrollTop: (_0xa1aax4['offset']()['top']) - 30
                }, 700);
                return false
            }
        }
    });
    if (_0xa1aax1('.count-item')['length']) {
        _0xa1aax1('.count-item strong')['counterUp']({
            delay: 10,
            time: 1000
        })
    };
    if (_0xa1aax1('.blog-post-thumb')['length']) {
        _0xa1aax1('.blog-post-thumb .img')['imgfix']()
    };
    if (_0xa1aax1('.page-gallery')['length'] && _0xa1aax1('.page-gallery-wrapper')['length']) {
        _0xa1aax1('.page-gallery')['imgfix']({
            scale: 1.1
        });
        _0xa1aax1('.page-gallery')['magnificPopup']({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
        })
    };
    _0xa1aax1(window)['on']('load', function() {
        _0xa1aax1('.loader-wrapper')['animate']({
            "opacity": '0'
        }, 600, function() {
            setTimeout(function() {
                if (_0xa1aax1('#download')['length']) {
                    _0xa1aax1('#download')['parallax']({
                        imageSrc: 'assets/images/photos/parallax.jpg',
                        zIndex: '1'
                    })
                };
                if (_0xa1aax1('#subscribe')['length']) {
                    _0xa1aax1('#subscribe')['parallax']({
                        imageSrc: 'assets/images/photos/parallax-subscribe.jpg',
                        zIndex: '1'
                    })
                };
                _0xa1aax1('.loader-wrapper')['css']('visibility', 'hidden')['fadeOut']()
            }, 300)
        })
    });
    _0xa1aax1(window)['on']('scroll', function() {
        _0xa1aax7()
    });
    _0xa1aax1(window)['on']('resize', function() {
        _0xa1aax6()
    });

    function _0xa1aax6() {
        var _0xa1aax5 = _0xa1aax1(window)['width']();
        _0xa1aax1('.submenu')['on']('click', function() {
            if (_0xa1aax5 < 992) {
                _0xa1aax1('.submenu ul')['removeClass']('active');
                _0xa1aax1(this)['find']('ul')['toggleClass']('active')
            }
        })
    }

    function _0xa1aax7() {
        var _0xa1aax5 = _0xa1aax1(window)['width']();
        if (_0xa1aax5 > 991) {
            var _0xa1aax8 = _0xa1aax1(window)['scrollTop']();
            if (_0xa1aax8 >= 30) {
                _0xa1aax1('.header-area')['addClass']('header-sticky')
            } else {
                _0xa1aax1('.header-area')['removeClass']('header-sticky')
            }
        }
    }
})(window['jQuery'])