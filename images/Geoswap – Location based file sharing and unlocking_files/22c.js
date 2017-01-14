function imprace() {

    var account = '22c';
    var timestamp = new Date().getTime();
    var location_hostname = document.location.href.toLowerCase().split('/');
    window.seektime = 0;
    setInterval('window.seektime++', 1000);

    setTimeout(function(){

        var DOMDocument = document, e = window, a = 'inner';
        var DOMDocumentLength = Math.max(
            Math.max(DOMDocument.body.scrollHeight,DOMDocument.documentElement.scrollHeight),
            Math.max(DOMDocument.body.offsetHeight,DOMDocument.documentElement.offsetHeight),
            Math.max(DOMDocument.body.clientHeight,DOMDocument.documentElement.clientHeight)
        );

        if (!('innerWidth' in window)){ a = 'client'; e = DOMDocument.documentElement || DOMDocument.body; }
        var DOMViewportLength = e[a+'Height'];
        var DOMViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        var session = is_cookie(account, timestamp, location_hostname) || is_hello(account, timestamp, location_hostname, DOMDocumentLength, DOMViewportLength, DOMViewportWidth);

    }, 2000);

}

function is_hello(account, timestamp, location_hostname, DOMDocumentLength, DOMViewportLength, DOMViewportWidth) {

    var cookie_expire = new Date(timestamp + 31449600000);

    if (location_hostname[2] == document.referrer.toLowerCase().split('/')[2]) {

        var session = d2h(timestamp - 1411751352093) + ':' + Math.random().toString(36).slice(2) + ':0';
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

    } else {

        var session = d2h(timestamp - 1411751352093) + ':' + Math.random().toString(36).slice(2) + ':1';
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        switch (true) {
            case DOMViewportWidth <= 480:
                var ScreenSize = 'xs';
                break;
            case DOMViewportWidth > 480 && DOMViewportWidth <= 768:
                var ScreenSize = 'sm';
                break;
            case DOMViewportWidth > 768 && DOMViewportWidth <= 992:
                var ScreenSize = 'md';
                break;
            default:
                var ScreenSize = 'lg';
        }

        var beacon = {
            'account'           : account,
            'host'              : location_hostname[2],
            'session'           : session,
            'status'            : 'is_hello',
            'location'          : is_location(),
            'DOMDocumentLength' : DOMDocumentLength,
            'DOMViewportLength' : DOMViewportLength,
            'ScreenSize'        : ScreenSize,
            'seektime'          : window.seektime
        };

        var request_init = new Image();
        request_init.async = true;
        request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);

        var timer_unbounce = setTimeout(is_unbounce, 3000, account, location_hostname, timestamp);
        window.onscroll = function() { clearTimeout(timer_unbounce); is_scroll(account, location_hostname, timestamp, DOMDocumentLength, DOMViewportLength); }
        window.seektime = 0;

    }
    return session;
}

function is_unbounce(account, location_hostname, timestamp) {

    var name = 'imprace', matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    var session = matches ? decodeURIComponent(matches[1]) : false;

    var session_array = session.split(':');
    if (session_array[2] < 11) {

        session = session_array[0] + ':' + session_array[1] + ':10';
        var cookie_expire = new Date(timestamp + 31449600000);
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        var request_init = new Image();
        request_init.async = true;

        var beacon = {
            'account'   : account,
            'host'      : location_hostname[2],
            'session'   : session,
            'status'    : 'is_unbounce',
            'seektime'  : window.seektime
        };

        request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);
        window.seektime = 0;

    }

}

function is_cookie(account, timestamp, location_hostname) {
    var name = 'imprace', matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    var session = matches ? decodeURIComponent(matches[1]) : false;

    if (session) {

        var request_init = new Image();
        request_init.async = true;
        var cookie_expire = new Date(timestamp + 31449600000);
        var session_array = session.split(':');
        if (session_array[2] == 0) {

            function is_webmaster() {

                var beacon = {
                    'account': account,
                    'host': location_hostname[2],
                    'url': is_location()
                };

                var impraceWebmaster = document.createElement('script');
                impraceWebmaster.src = '//imprace.com/webmaster/?' + JSON.stringify(beacon);
                document.head.appendChild(impraceWebmaster)

            }

            //setTimeout(is_webmaster, 3600000);
            return 'is_return';
        }

        var timestamp = parseInt((timestamp - 1411751352093 - h2d(session_array[0])) / 1000);

        session_array[2] = 0;
        session = session_array[0] + ':' + session_array[1] + ':0';
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        var beacon = {
            'account'   : account,
            'host'      : location_hostname[2],
            'session'   : session,
            'status'    : 'is_interest'
        };

        request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);

        return session;

    } else return undefined;

}

function is_location() {
    var url = document.location.href;
    url = RemoveParameterFromUrl(url, 'utm_term');
    url = RemoveParameterFromUrl(url, 'utm_campaign');
    url = RemoveParameterFromUrl(url, 'utm_medium');
    url = RemoveParameterFromUrl(url, 'utm_source');
    url = RemoveParameterFromUrl(url, 'utm_content');
    url = RemoveParameterFromUrl(url, 'gclid');
    url = RemoveParameterFromUrl(url, 'yclid');
    url = RemoveParameterFromUrl(url, '_openstat');
    url = RemoveParameterFromUrl(url, 'vk_sid');
    url = RemoveParameterFromUrl(url, 'vk_lead_id');
    url = RemoveParameterFromUrl(url, 'vk_uid');
    url = RemoveParameterFromUrl(url, 'vk_hash');

    return url;
}

function is_scroll(account, location_hostname, timestamp, DOMDocumentLength, DOMViewportLength) {

    var name = 'imprace', matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    var session = matches ? decodeURIComponent(matches[1]) : false;
    var session_array = session.split(':');

    var this_scroll = get_scroll_pos();
    window.imprace_max_scroll = Math.max(window.imprace_max_scroll, this_scroll)||0;

    if ((session_array[2] < 200) && ((this_scroll + DOMViewportLength) >= (DOMDocumentLength - 100))) {

        session = session_array[0] + ':' + session_array[1] + ':200';
        var cookie_expire = new Date(timestamp + 31449600000);
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        var request_init = new Image();
        request_init.async = true;

        var beacon = {
            'account'           : account,
            'host'              : location_hostname[2],
            'session'           : session,
            'status'            : 'is_full',
            'scroll'            : DOMDocumentLength,
            'seektime'          : window.seektime
        };

        request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);

    }

    if ((session_array[2] < 100) && (this_scroll < window.imprace_max_scroll)) {

        session = session_array[0] + ':' + session_array[1] + ':100';
        var cookie_expire = new Date(timestamp + 31449600000);
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        var request_init = new Image();
        request_init.async = true;

        var beacon = {
            'account'   : account,
            'host'      : location_hostname[2],
            'session'   : session,
            'status'    : 'is_up',
            'seektime'  : window.seektime
        };

        request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);

    }

    if (session_array[2] <= 50) {

        session = session_array[0] + ':' + session_array[1] + ':50';
        var cookie_expire = new Date(timestamp + 31449600000);
        document.cookie = 'imprace=' + session + '; path=/; expires=' + cookie_expire;

        var request_init = new Image();
        request_init.async = true;

        function scroll_event(account, location_hostname, DOMViewportLength, DOMDocumentLength) {

            var beacon = {
                'account'  : account,
                'host'     : location_hostname[2],
                'session'  : session,
                'status'   : 'is_scroll',
                'scroll'   : DOMViewportLength + window.imprace_max_scroll,
                'document' : DOMDocumentLength,
                'seektime' : window.seektime
            };

            request_init.src = '//cdn.imprace.com/imprace.gif?' + JSON.stringify(beacon);
            clearTimeout(window.imprace_scroll);
            delete window.imprace_scroll;
            window.seektime = 0;

        }

        if (!window.imprace_scroll) window.imprace_scroll = setTimeout(scroll_event, 1000, account, location_hostname, DOMViewportLength, DOMDocumentLength);

    }

}

function RemoveParameterFromUrl (url, parameter) {
    return url.replace(new RegExp('[?&]' + parameter + '=[^&#]*(#.*)?$'), '$1').replace(new RegExp('([?&])' + parameter + '=[^&]*&'), '$1');
}

function get_scroll_pos() {
    if(typeof(window.pageYOffset) == 'number') { return window.pageYOffset; }
    else if(document.body && document.body.scrollTop) { return document.body.scrollTop; }
    else if(document.documentElement && document.documentElement.scrollTop) { return document.documentElement.scrollTop; }
    return y;
}

function d2h(d){return d.toString(16)}
function h2d(h){return parseInt(h,16)}

document.addEventListener('load', imprace(), false);
//document.addEventListener('load', setTimeout(imprace, 1000), false);