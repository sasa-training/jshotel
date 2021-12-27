export default class spMenu {
  constructor(root, options = {}) {
    const defaultOptions = {
      root: document.querySelector(root),
      nav: document.querySelectorAll(".gNavi'"),
      base: "base",
      elementOpen: "open_toggle",
      $windowWidth: $(window).width(),
      $breakpoints: 1018,
      maxWidth: "(max-width: 1018px)",
    };
    this.o = Object.assign(defaultOptions, options);
    this.root = this.o.root;
    this.nav = this.o.nav;
    this.elementOpen = this.o.elementOpen;
    this.base = this.o.base;
    this.$windowWidth = this.o.$windowWidth;
    this.$breakpoints = this.o.$breakpoints;
    this.maxWidth = this.o.maxWidth;
  }
  spMenu() {
    this.root.addEventListener("click", () => {
      this.root.classList.toggle(this.elementOpen);
      this.nav.classList.toggle(this.elementOpen);
      this.base.classList.toggle(this.elementOpen);
      // リロード時
      // ウィンドウサイズ1018px以下の場合、クラスを削除
      if (window.matchMedia("(max-width: 1018px)").matches) {
        $(function () {
          this.nav.removeClass(this.elementOpen);
          this.base.removeClass(this.elementOpen);
          $(this.root).removeClass(this.elementOpen);
        });
      };
      // リサイズ時
      $(window).resize(function () {
        if (this.$windowWidth > this.$breakpoints) {
          this.base.removeClass(this.elementOpen);
          this.nav.removeClass(this.elementOpen);
          $(this.root).removeClass(this.elementOpen);
        }
      });
    });
  }
  init() {
    this.spMenu();
  }
}