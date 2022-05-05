/*

﹀ Change Log ﹀

0.9 Version:
- Shorter code
- Better Instances format

0.8 Version:
- Added Scribe(Medium)
- Added Rimgo(i.imgur)
- Added Librarian(Odysee)
- Added ProxiTok(TikTok)

0.7 Version:
- Removed duckduckgo
- Better instagram redirect
- Added google translate

0.6 Version:
- Redirect from yahoo
- Redirect from bing
- Redirect from duckduckgo

0.5 Version:
- Support for other languages for wikiless/wikipedia
- Better Instances format

*/

var url = new URL(location.href),

// INSTANCES //
invidious = 'yewtu.be',
searx = 'search.mdosch.de',
libreddit = 'reddit.invak.id',
nitter = 'nitter.snopyta.org',
bibliogram = 'bibliogram.pussthecat.org',
wikiless = 'wikiless.org',
lingva = 'lingva.ml',
scribe = 'scribe.rip',
rimgo = 'rimgo.pussthecat.org',
librarian = 'librarian.pussthecat.org',
proxitok = 'proxitok.herokuapp.com'

// YouTube | Invidious //
if(location.host.indexOf('youtube.com') != -1){
    location.replace('https://' + invidious + location.pathname + location.search)
}

if(location.host.includes('google.')){
    // Google Translate | Lingva Translate //
    if(location.hostname.match(/translate.google.+/)){
        if(location.search === '') {
            location.replace('https://' + lingva)
        } else {
            let
                base = location.search.split('&'),
                lang1 = base[0].split('=')[1],
                lang2 = base[1].split('=')[1],
                text = base[2].split('=')[1]
            location.replace('https://' + lingva + '/' + lang1 + '/' + lang2 + '/' + text)
        }
    // Google | SearX //
    } else if(location.host.match(/www.google.+/)) {
        location.replace('https://' + searx + location.pathname + location.search)
    }
}

// Yahoo | SearX //
if(location.host.indexOf('yahoo.com') != -1){
    let search = location.search.replace('?p', '?q')
    location.replace('https://' + searx + location.pathname + search)
}

// Bing | SearX //
if(location.host.indexOf('bing.com') != -1){
    location.replace('https://' + searx + location.pathname + location.search)
}

// Reddit | Libreddit //
if(location.host.indexOf('reddit.com') != -1){
    location.replace('https://' + libreddit + location.pathname + location.search)
}

// Twitter | Nitter //
if(location.host.indexOf('twitter.com') != -1){
    location.replace('https://' + nitter + location.pathname + location.search)
}

// Instagram | Bibliogram //
if(location.host.indexOf('instagram.com') != -1){
    if(location.pathname === '/accounts/login/') {
        let path = '/u' + location.search.split('?next=').at(1)
        location.replace('https://' + bibliogram + path)
    } else {
        location.replace('https://' + bibliogram + location.pathname + location.search)
    }
}

// Wikipedia | Wikiless //
if(location.host.indexOf('wikipedia.org') != -1){
    location.replace('https://' + wikiless + location.pathname + '?lang=' + url.hostname.split('.')[0])
}

// Medium | Scribe //
if(location.host.indexOf('medium.com') != -1){
    location.replace('https://' + scribe + location.pathname + location.search)
}

// i.Imgur | Rimgo //
if(location.host.indexOf('i.imgur.com') != -1){
    location.replace('https://' + rimgo + location.pathname + location.search)
}

// Odysee | Librarinan //
if(location.host.indexOf('odysee.com') != -1){
    location.replace('https://' + librarian + location.pathname + location.search)
}

// TikTok | ProxiTok //
if(location.host.indexOf('tiktok.com') != -1||location.host.indexOf('www.tiktok.com') != -1){
    location.replace('https://' + proxitok + location.pathname + location.search)
}