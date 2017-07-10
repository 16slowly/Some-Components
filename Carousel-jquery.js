/**
 *
 */

function Carousel(images, showDots, showArrows, delays, isLock) {
  this.images = images;
  this.showDots = showDots && true;
  this.showArrows = showArrows;
  this.delays = delays || 1000;
<<<<<<< HEAD
  this.isLock = false || isLock;
=======
>>>>>>> 960364c5f73ad752858fd63ef3281ba66196ce25
  this.lock = false;
  this.mark = 0;
  this.picWidth = null;
  this.picsLength = images.length;
<<<<<<< HEAD
  this.$carousel = $(document).find('#carousel');
  this.$imagesUl = $('<ul></ul>');
  this.$dots = $('<ul></ul>');
=======
  this.$carousel = $(document).find("#carousel");
  this.$imagesUl = $("<ul></ul>");
  this.$dots = $("<ul></ul>");
>>>>>>> 960364c5f73ad752858fd63ef3281ba66196ce25

  this.init();
  this.autoPlay();
}

Carousel.prototype = {
  // 初始化
  init: function() {
    var _this = this;

    // 生成图片列表
<<<<<<< HEAD
    this.images.forEach(function(image, index) {
=======
    this.images.forEach(image => {
>>>>>>> 960364c5f73ad752858fd63ef3281ba66196ce25
      // 给li添加外部样式来定义他的宽，父级ul将获取不到他的宽
      // 加载代码时，并未进行绘制，参阅 http://taligarsiel.com/Projects/howbrowserswork1.htm
      // 缺点1：写成行内样式

      var $imageLi = $(
        "<li style='width: 500px; height:300px'><a href=" +
          image.url +
          '>' +
          "<img class='carousel-img' src=" +
          image.cover +
          '/></a></li>',
      );

      $imageLi.addClass('carousel-li');
      _this.$imagesUl.append($imageLi);

      // 生成 dots
      if (_this.showDots) {
<<<<<<< HEAD
        var $dotLi = $('<li></li>');
        $dotLi.attr('title', '图片' + (index + 1));
=======
        var $dotLi = $("<li></li>");
>>>>>>> 960364c5f73ad752858fd63ef3281ba66196ce25
        _this.$dots.append($dotLi);
      }
    });

<<<<<<< HEAD
    this.$dots.children().eq(0).addClass('active');
    this.$dots.addClass('carousel-dot-ul');
=======
    this.$dots.children().eq(0).addClass("active");
>>>>>>> 960364c5f73ad752858fd63ef3281ba66196ce25
    this.$carousel.append(this.$dots);

    // 生成左右箭头
    if (_this.showArrows) {
      this.$prevArrow = $(
        "<a style='left: 30px' class='carousel-btn'>&lt;</a>",
      );
      this.$nextArrow = $(
        "<a style='right: 30px' class='carousel-btn'>&gt;</a>",
      );

      this.$carousel.append(this.$prevArrow);
      this.$carousel.append(this.$nextArrow);
    }

    // 复制列表头部及尾部，保证衔接顺滑
    // 缺点2：需要维护多余节点
    var $picFirst = this.$imagesUl.children().eq(0).clone();
    var $picLast = this.$imagesUl.children().eq(this.picsLength - 1).clone();

    this.$imagesUl.prepend($picLast);
    this.$imagesUl.append($picFirst);

    this.picWidth = this.$imagesUl.children().width();
    // 为前后元素预留空间
    this.totalWith = this.picWidth * (this.picsLength + 2);
    this.$imagesUl.width(this.totalWith);

    this.bind();

    this.$imagesUl.addClass('carousel-ul');
    this.$carousel.append(this.$imagesUl);
  },

  // 注册事件
  bind: function() {
    var _this = this;

    this.$carousel.on('mouseover', function() {
      _this.isLock = true;
    });

    this.$carousel.on('mouseout', function() {
      _this.isLock = false;
    });

    this.$prevArrow.on('click', function() {
      console.log('prevArrow');
      _this.playPrev();
    });

    this.$nextArrow.on('click', function() {
      console.log('nextArrow');
      _this.playNext();
    });

    this.$dots.children().each(function(index) {
      $(this).on('click', function() {
        _this.mark = index;
        _this.showDot(_this.mark);
        _this.$imagesUl.animate({
          left: -(_this.mark + 1) * _this.picWidth,
        });
      });
    });
  },

  // 下一页
  playNext: function() {
    var _this = this;
    // 防止自动播放和 button 事件冲突
    if (_this.lock) {
      return;
    } else {
      this.lock = true;
      this.$imagesUl.animate(
        {
          left: '-=' + this.picWidth,
        },
        function() {
          console.log('befor mark', _this.mark);
          _this.mark++;
          console.log('mark', _this.mark);
          if (_this.mark === _this.picsLength) {
            _this.$imagesUl.css('left', -_this.picWidth);
            _this.mark = 0;
          }
          _this.lock = false;
          _this.showDot(_this.mark);
        },
      );
    }
  },

  // 上一页
  playPrev: function() {
    var _this = this;
    // 防止自动播放和 button 事件冲突
    if (_this.lock) {
      return;
    } else {
      _this.lock = true;
      this.$imagesUl.animate(
        {
          left: '+=' + this.picWidth,
        },
        function() {
          _this.mark--;
          console.log('mark', _this.mark);
          if (_this.mark < 0) {
            // 回到列表首个
            _this.$imagesUl.css('left', -_this.totalWith + 1000);
            _this.mark = _this.picsLength - 1;
          }
          _this.lock = false;
          _this.showDot(_this.mark);
        },
      );
    }
  },

  // 显示Dot
  showDot: function(mark) {
    var _this = this;
    _this.$dots.children().removeClass('active');
    _this.$dots.children().eq(mark).addClass('active');
  },

  // 自动播放
  autoPlay: function() {
    var _this = this;
    setInterval(
      function() {
        if (!_this.isLock) {
          _this.playNext();
        }
      },
      _this.delays,
    );
  },
};
