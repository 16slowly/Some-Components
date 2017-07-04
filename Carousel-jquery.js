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
  this.$imagesUl = $("<ul class='carousel-ul'></ul>");
  this.$dots = $("<ul class='dot-ul'></ul>");

  this.init();
  this.autoPlay();
}

Carousel.prototype = {
  init: function() {
    var _this = this;

    // 生成图片列表
    this.images.forEach(image => {
      var $imageLi = $(
        "<li class='carousel-li'><a href=" + image.url + "><img src=" + image.cover + "/></a></li>",
      );
      _this.$imagesUl.append($imageLi);

      // 生成dots
      if (_this.showDots) {
        var $dotLi = $('<li></li>');
        _this.$dots.append($dotLi);
      }
    });

    this.$dots.children().eq(0).addClass('active');
    this.$imagesUl.append(this.$dots);

    // 生成左右箭头
    if (_this.showArrows) {
      this.$prevArrow = $("<a class='prevBtn'>&lt;</a>");
      this.$nextArrow = $("<a class='nextBtn'>&gt;</a>");
    }

    this.$imagesUl.append(this.$prevArrow);
    this.$imagesUl.append(this.$nextArrow);

    this.SpicWidth = this.$imagesUl.children().width();
    this.totalWith = this.SpicWidth * this.SpicLength;
    this.$imagesUl.width(this.totalWith);

    this.bind();

    $(document).find('#carousel').append(this.$imagesUl);
  },
  bind: function() {
    var _this = this;

    this.$prevArrow.on('click', function() {
      console.log('prevArrow')
      _this.playPrev();
    });

    this.$nextArrow.on('click', function() {
      console.log('nextArrow')
      _this.playNext();
    });

    this.$dots.on('click', function() {
      _this.mark = _this.$dots.children().index($(this));
      _this.showDot();
      _this.$imagesUl.animate({
        left: -(_this.mark + 1) * _this.SpicWidth,
      });
    });
  },
  playNext: function() {
    var _this = this;
    this.$imagesUl.animate(
      {
        left: '-=' + this.SpicWidth,
      },
      function() {
        _this.mark++;
        if (_this.mark === this.SpicLength) {
          _this.$imagesUl.css('left', -_this.SpicWidth);
          _this.mark = 0;
        }

        _this.showDot(_this.mark);
      },
    );
  },
  playPrev: function() {
    var _this = this;
    this.$imagesUl.animate(
      {
        left: '+=' + this.SpicWidth,
      },
      function() {
        _this.mark--;
        if (_this.mark < 0) {
          _this.$imagesUl.css('left', -_this.totalWith);
          _this.mark = _this.SpicLength - 1;
        }

        _this.showDot(_this.mark);
      },
    );
  },
  showDot: function(mark) {
    var _this = this;
    _this.$dots.children().removeClass('active');
    _this.$dots.children().eq(mark).addClass('active');
  },
  autoPlay: function() {
    var _this = this;
    setInterval(
      function() {
        _this.playNext();
      },
      _this.delays,
    );
  },
};
