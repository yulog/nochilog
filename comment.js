/*! © 2015 imaoki | MIT License | https://github.com/imaoki */
;(function() {
  window.blogger = window.blogger || {};

//  function generateShareButtonList() {
//    var shareElement = document.getElementById('share');
//    if (shareElement && blogger.post) {
//      var snippet = encodeURIComponent(blogger.post.snippet);
//      var thumbnailUrl = encodeURIComponent(blogger.post.thumbnailUrl);
//      var title = encodeURIComponent(blogger.post.title + '@' + blogger.blog.title);
//      var url = encodeURIComponent(blogger.post.url);
//      var hrefs = {
//        'blogger': 'https://www.blogger.com/blog-this.g?' + 'u=' + url + '&n=' + title + '&t=' + snippet,
//        /*'facebook': 'https://www.facebook.com/sharer/sharer.php?' + 'url=' + url,*/
//        'google-plus': 'https://plus.google.com/share?' + 'url=' + url,
//        /*'hatebu': 'http://b.hatena.ne.jp/entry/' + url,*/
//        /*'line': 'http://line.me/R/msg/text/?' + url,*/
//        /*'linkedin': 'http://www.linkedin.com/shareArticle?mini=true' + '&url=' + url + '&title=' + title,*/
//        'pinterest': 'https://www.pinterest.com/pin/create/button/?' + 'url=' + url + '&description=' + title + '&media=' + thumbnailUrl,
//        'pocket': 'http://getpocket.com/edit?' + 'url=' + url,
//        'tumblr': 'http://www.tumblr.com/share/link?' + '&url=' + url + '&name=' + title + '&description=' + snippet,
//        'twitter': 'https://twitter.com/share?' + 'url=' + url + '&text=' + title
//      };
//      for (var prop in hrefs) {
//        var aElement = document.createElement('a');
//        aElement.setAttribute('href', hrefs[prop]);
//        aElement.setAttribute('class', 'icon-' + prop);
//        aElement.setAttribute('target', '_blank');
//        var liElement = document.createElement('li');
//        liElement.appendChild(aElement);
//        shareElement.appendChild(liElement);
//      }
//    }
//  }

  function generateIFrameSrc(parentId) {
    /*
    var param = {
      'backgroundColor': 'rgb(0, 255, 0)',
      'color': 'rgb(255, 0, 0)',
      'fontFamily': 'monospace, monospace',
      'unvisitedLinkColor': 'rgb(0, 0, 255)'
    }
    */
    if (blogger.blog && blogger.post) {
      return (
        blogger.blog.bloggerUrl + '/comment-iframe.g?blogID=' + blogger.blog.blogId + '&postID=' + blogger.post.id +
        (parentId ? '&parentID=' + parentId : '') +
        '&skin=essential'/* +
        '#' + (encodeURIComponent(JSON.stringify(param)))*/
      );
    }
    else {
      return false;
    }
  }

  function replyTo(id) {
    var titleElement = document.getElementById('comment-form-title');
    titleElement.innerHTML = id ? '返信' : '新規コメント';

    var formElement = document.getElementById('comment-form');
    if (id) {
      var referenceElement = document.querySelector('#c' + id + ' > .footer > ul');
      var parentElement = referenceElement.parentNode;
      parentElement.insertBefore(formElement, referenceElement);
    }
    else {
      var parentElement = document.getElementById('comments');
      parentElement.insertBefore(formElement, null);
    }

    var frameElement = document.getElementById('comment-frame');
    var iframeSrc = blogger.generateIFrameSrc(id);
    frameElement.src = iframeSrc;
  }

  //blogger.generateShareButtonList = generateShareButtonList;
  blogger.generateIFrameSrc = generateIFrameSrc;
  blogger.replyTo = replyTo;

  //$('.remove').remove();

/*
  var tocElement = document.getElementById('toc');
  if (tocElement) {
    var headingArray = TOC.createHeadingArray(
      document.querySelector('.content > .body > h4'), 4, 6
    );
    if (headingArray) {
      TOC.addRelationShip(headingArray);
      var tocInner = TOC.toTocUi(headingArray);
      tocElement.appendChild(tocInner);
    }
    var nav = document.getElementById('nav');
    if (nav) {
      nav.insertBefore(tocElement, null);
    }
  }
*/

/*
  $('#pagetop').hide();
  $('#pagetop').click(function() {
    $('html, body').animate({scrollTop: 0});
    return false;
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('#blog').offset().top) {
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });
*/

/*
  $('.content > .body .reversefootnote').text('');
  $('.content > .body a:has(img)').addClass('img-anchor');
*/

  /*if (hljs) {
    hljs.configure({languages: []});
    hljs.initHighlighting();
  }*/

  //blogger.generateShareButtonList();

  var frameElement = document.getElementById('comment-frame');
  if (frameElement) {
    var iframeSrc = blogger.generateIFrameSrc();
    if (iframeSrc) {
      frameElement.src = iframeSrc;
    }
  }

//  $(document).ready(function() {
//    $('.iframe-class').cbIframeSize();
//
//    $('pre:has(code)').each(function(index, element){
//      var classValue = $($(element).children('code')[0]).attr('class');
//      var re = /.*\blanguage-(\w+)\b.*/;
//      var dataType = classValue.match(re) ? classValue.replace(re, '$1') : 'text';
//      $(element).attr('data-type', dataType);
//    });
//  });

  $('.js').removeClass('hidden');
})();
