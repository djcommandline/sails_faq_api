(function() {
  'use strict';
  // this function is strict...
}());

///////////
//  README
//
//  [ ] - check bower.json for js libraries that are used in our project
//  [ ] - pages will have body class names that tie to the route
//  [ ] - js calls are funnel by boody class names
//  [ ] - define the call in SiteJS var
//  [ ] -
//  [ ] -
//



//////////
//// Call functions based on body class name that correlates with route.
//
//
var SiteJS = {
  // All pages
  common: {
    init: function() {
      layout_switch();
    },
    finalize: function() {}
  },
  // Home page
  home: {
    init: function() {
      // JS here
    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  },
  // 404
  page_404: {
    init: function() {
  }
}

};


//////////
//// Logic to fire functions based on body class
//
//
UTIL = {

  fire : function(func,funcname, args){
    var namespace = SiteJS;  // indicate your obj literal namespace here

    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
      namespace[func][funcname](args);
    }
  },
  loadEvents : function(){
    var bodyId = document.body.id;

    // hit up common first.
    UTIL.fire('common');


    $.each(document.body.id.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
      UTIL.fire(classnm);
      UTIL.fire(classnm,bodyId);
    });

    UTIL.fire('common','finalize');
  }
};



// kick it all off here
$(document).ready(UTIL.loadEvents);


////////
//// Helper :: Change a Collection's Layout
//
var layout_switch = function() {
  $('#layout_as').on('click', 'ul > li > a', function(event) {
    var tid = $('#layout_as').attr('target-div-id');
    var layout = $(this).attr('data-layout');

    $('#' + tid).removeAttr('class').addClass(layout);

  });
}


////////
//// Helper :: Link Expansion
//
// Handles the usage of parent elements as a clickable link
// append role='link' as an attribute to desired element
// and it will find a child a.link
var openInnerHref = function() {

  $('section').on('click', '[role~="link"]', function(event) {
    event.stopPropagation();
    window.location=$(this).find('a.link').attr('href');
    return false;
  });

  // $("[role~='link']").click(function(event){
  //      event.stopPropagation();
  //      // insert loading screen
  //      window.location=$(this).find("a.link").attr("href");
  //      return false;
  // });

  // allow child links to still function normally
  $('section').on('click', '[role~="link"] a', function(event) {
    event.stopPropagation();
  });

};
