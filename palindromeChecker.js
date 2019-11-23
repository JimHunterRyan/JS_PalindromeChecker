function palindrome(str) {
    let mystr = str;
    let alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
    let len = mystr.length;
    mystr = mystr.toLowerCase();
    mystr = mystr.replace(/[^\w_ ]/g, "");
    for (var i = 0; i < len; i++) {
        var chara = mystr.charAt(i);
        if (alpha.indexOf(chara) == -1) {
            mystr = mystr.slice(0, i) + mystr.slice(i + 1);
        }
    }
    let revStr = "";
    for (var i = mystr.length - 1; i >= 0; i--) {
        revStr += mystr.charAt(i);
    }

    if (revStr === mystr) {
        return true;
    }
    return false;
}
palindrome("0_0 (: /-\ :) 0-0")