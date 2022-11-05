	$('.slider').slick({
	  autoplay: true, //自動的に動き出すか。初期値はfalse。
	  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	  speed: 500, //スライドのスピード。初期値は300。
	  slidesToShow: 3, //スライドを画面に3枚見せる
	  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
	  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
	  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
	  centerMode: true, //要素を中央ぞろえにする
	  variableWidth: true, //幅の違う画像の高さを揃えて表示
	  dots: true, //下部ドットナビゲーションの表示
	});



	$('.slider2').slick({
	  autoplay: true, //自動的に動き出すか。初期値はfalse。
	  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	  speed: 500, //スライドのスピード。初期値は300。
	  slidesToShow: 3, //スライドを画面に3枚見せる
	  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
	  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
	  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
	  centerMode: true, //要素を中央ぞろえにする
	  variableWidth: true, //幅の違う画像の高さを揃えて表示
	  dots: true, //下部ドットナビゲーションの表示
	});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

	$('.slider3').slick({
	  autoplay: true, //自動的に動き出すか。初期値はfalse。
	  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	  speed: 500, //スライドのスピード。初期値は300。
	  slidesToShow: 3, //スライドを画面に3枚見せる
	  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
	  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
	  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
	  centerMode: true, //要素を中央ぞろえにする
	  variableWidth: true, //幅の違う画像の高さを揃えて表示
	  dots: true, //下部ドットナビゲーションの表示
	});

//画像のモーダル
$(".D_gallery").modaal({
  type: 'image',
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});

//画像のモーダル
$(".P_gallery").modaal({
  type: 'image',
  overlay_close: true, //モーダル背景クリック時に閉じるか
  before_open: function() { // モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden'); /*縦スクロールバーを出さない*/
  },
  after_close: function() { // モーダルが閉じた後に行う動作
    $('html').css('overflow-y', 'scroll'); /*縦スクロールバーを出す*/
  }
});

//画像のモーダル
$(".ori").modaal({
  type: 'image',
  overlay_close: true, //モーダル背景クリック時に閉じるか
  before_open: function() { // モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden'); /*縦スクロールバーを出さない*/
  },
  after_close: function() { // モーダルが閉じた後に行う動作
    $('html').css('overflow-y', 'scroll'); /*縦スクロールバーを出す*/
  }
});