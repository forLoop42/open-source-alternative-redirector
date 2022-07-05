// ==UserScript==
// @name Open-Source Alternative Redirector
// @name:ar معيد التوجيه البديل مفتوح المصدر
// @name:bg Алтернативно пренасочване с отворен код
// @name:cs Open-Source alternativní přesměrovač
// @name:da Open Source Alternativ Redirector
// @name:de Open-Source-alternativer Redirector
// @name:es Redirector alternativo de código abierto
// @name:fi Open-Source Alternative Redirector
// @name:fr Redirecteur alternatif open source
// @name:he מפנה אלטרנטיבי בקוד פתוח
// @name:it Reindirizzamento alternativo open source
// @name:ja オープンソースの代替リダイレクター
// @name:ko 오픈 소스 대체 리디렉터
// @name:nl Alternatieve Open Source-redirector
// @name:pl Alternatywny readresator typu open source
// @name:ro Redirector alternativ cu sursă deschisă
// @name:ru Альтернативный перенаправитель с открытым исходным кодом
// @name:tr Açık Kaynak Alternatif Yönlendirici
// @name:uk Альтернативний перенаправник з відкритим вихідним кодом
// @name:zh-CN 开源替代重定向器
// @name:zh-TW 開源替代重定向器
// @namespace -
// @version 9.0.0
// @description Redirects you from proprietary web-services to ethical alternatives(front-end).
// @description:ar يعيد توجيهك من خدمات الويب المسجلة الملكية إلى البدائل الأخلاقية (الواجهة الأمامية).
// @description:bg Пренасочва ви от собствени уеб-услуги към етични алтернативи (front-end).
// @description:cs Přesměruje vás z proprietárních webových služeb na etické alternativy (front-end).
// @description:da Omdirigerer dig fra proprietære web-tjenester til etiske alternativer (front-end).
// @description:de Leitet Sie von proprietären Webdiensten zu ethischen Alternativen (Front-End) weiter.
// @description:es Lo redirige de servicios web propietarios a alternativas éticas (front-end).
// @description:fi Ohjaa sinut patentoiduista verkkopalveluista eettisiin vaihtoehtoihin (käyttöliittymä).
// @description:fr Vous redirige des services Web propriétaires vers des alternatives éthiques (front-end).
// @description:he מפנה אותך משירותי אינטרנט קנייניים לחלופות אתיות (חזית).
// @description:it Ti reindirizza da servizi web proprietari ad alternative etiche (front-end).
// @description:ja 独自のWebサービスから倫理的な代替手段（フロントエンド）にリダイレクトします。
// @description:ko 독점 웹 서비스에서 윤리적 대안(프론트 엔드)으로 리디렉션합니다.
// @description:nl Leidt u om van propriëtaire webservices naar ethische alternatieven (front-end).
// @description:pl Przekierowuje Cię z zastrzeżonych usług internetowych do etycznych alternatyw (front-end).
// @description:ro Vă redirecționează de la servicii web proprietare la alternative etice (front-end).
// @description:ru Перенаправляет вас с проприетарных веб-сервисов на этические альтернативы (интерфейс).
// @description:tr Sizi tescilli web hizmetlerinden etik alternatiflere (ön uç) yönlendirir.
// @description:uk Перенаправляє вас із власних веб-сервісів до етичних альтернатив (фронт-енд).
// @description:zh-CN 将您从专有网络服务重定向到道德替代品（前端）。
// @description:zh-TW 將您從專有網絡服務重定向到道德替代品（前端）。
// @author NotYou
// @include *youtube.com/*
// @include *google.*
// @include *yahoo.com/*
// @include *bing.com/*
// @include *reddit.com/*
// @include *twitter.com/*
// @include *instagram.com/*
// @include *wikipedia.org/*
// @include *medium.com/*
// @include *i.imgur.com/*
// @include *i.stack.imgur.com/*
// @include *odysee.com/*
// @include *tiktok.com/*
// @run-at document-start
// @license GPL-3.0-or-later
// @icon https://icons.iconarchive.com/icons/itweek/knob-toolbar/32/Knob-Shuffle-Off-icon.png
// @grant none
// ==/UserScript==

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
    //} else if(location.href.match(/(www\.)?google\.com(\/search)?(?!\/\w)/)) {
    } else if(location.host.match(/www.google.+/) && location.href.match(/.*google(\..*)?(\/search)?(?!\/\w)/)) {
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
