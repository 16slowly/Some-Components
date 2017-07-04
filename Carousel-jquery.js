/**
 *
 */

function Carousel(images, showDots, showArrows, delays, isLock) {
  this.images = images;
  this.showDots = showDots && true;
  this.showArrows = showArrows;
  this.delays = delays || 1000;
  this.lock = isLock && true;
  this.SpicWidth = null;
  this.SpicLength = images.length;
  this.$imagesUl = $("<ul></ul>");
  this.$dots = $("<ul></ul>");

  this.init();
  this.autoPlay();
}

Carousel.prototype = {
  init: function() {
    var _this = this;

    // 生成图片列表
    this.images.forEach(image => {
      var $imageLi = $("<li></li>");
      _this.$imagesUl.append($limageLi);

      // 生成dots
      if (showDots) {
        var $dotLi = $("<li></li>");
        _this.$dots.append($dotLi);
      }
    });

    this.$dots.children().eq(0).addClass("active");

    // 生成左右箭头
    if (showArrows) {
      this.$leftArrow = $("<a></a>");
      this.$rightArrow = $("<a></a>");

      var $leftArrowIcon = $("<img />");
      var $rightArrowIcon = $("<img />");

      this.$leftArrow.append($leftArrowIcon);
      this.$rightArrow.append($rightArrowIcon);
    }

    this.SpicWidth = this.$imagesUl.children().width;
    this.imagesUl.width(this.SpicWidth * this.SpicLength);

    this.bind();
  },
  playNext: function() {
    var _this = this;
    this.$imagesUl.animate({
      left: "-=" + this.SpicWidth
    });
  },
  autoPlay: function() {
    var _this = this;
    setInterval(function() {
      _this.playNext();
    }, _this.delays);
  }
};
