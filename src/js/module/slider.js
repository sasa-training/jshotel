// スライダー
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