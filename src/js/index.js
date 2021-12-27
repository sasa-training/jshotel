import ScrollToTop from "./module/scrollToTop.js";
import spMenu from "./module/spMenu.js";


// トップに戻る
const scrollToTopDo = new ScrollToTop("#page-top", 400);
scrollToTopDo.init();
// トグル・スマホメニュー・ドロップダウンメニュー
const spMenuDo = new spMenu(".toggle-btn");
spMenuDo.init();


let mySwiper = new Swiper(".swiper", {
    centeredSlides: true,
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
    allowTouchMove: false, //マウスでのスワイプを禁止
    pagination: { // 丸のページネーションを使うなら書く
        el: ".swiper-pagination",
        clickable: true //クリックを有効化する
    }
});

let $win = $(window),
    $header = $('header');
$break = $('.message').offset().top;
showClass = 'is-show';

$win.on('load scroll', function () {
    let value = $(this).scrollTop();
    if (value > 766) {
        $header.addClass(showClass);
    } else {
        $header.removeClass(showClass);
    }
});