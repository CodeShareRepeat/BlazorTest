function getCookie(cname) {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var arr = ca[i].split('=');
        if (arr[0] == cname) {
            console.info('anti forgery token FOUND!');
            return arr[1]
        }
    }
    console.warn('no anti forgery token found!');
    return "";
}