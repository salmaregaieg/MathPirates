
// $("#map").hover(function(){$(".dot").show()},function(){$(".dot").hide()})

(function() {
    var $imgs = $('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {};
  
    $imgs.each(function() {
      var img = this;
      var tags = $(this).data('tags');
  
      if (tags) {
        tags.split(',').forEach(function(tagName) {
          if (tagged[tagName] == null) {
            tagged[tagName] = [];
          }
          tagged[tagName].push(img);
        })
      }
    })
  
    $('<button/>', {
      text: 'Show All',
      class: 'active',
      click: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $imgs.show();
      }
    }).appendTo($buttons);
  
    $.each(tagged, function(tagName) {
      var $n = $(tagged[tagName]).length;
      $('<button/>', {
        text: tagName + '(' + $n + ')',
        click: function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
          $imgs
            .hide()
            .filter(tagged[tagName])
            .show();
        }
      }).appendTo($buttons);
    });
  }())
  
  (function() {
    var $imgs = $('#gallery img');
    var $search = $('#filter-search');
    var cache = [];
  
    $imgs.each(function() {
      cache.push({
        element: this,
        text: this.alt.trim().toLowerCase()
      })
    })
  
    function filter() {
      var query = this.value.trim().toLowerCase();
      cache.forEach(function(img) {
        var index = 0;
        if (query) {
          index = img.text.indexOf(query);
        }
        img.element.style.display = index === -1 ? 'none' : '';
      })
    }
    if ('oninput' in $search[0]) {
      $search.on('input', filter);
    } else {
      $search.on('keyup', filter);
    }
  }())