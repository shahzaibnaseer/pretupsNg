/*!

 =========================================================
 * Paper Dashboard 2 - v2.0.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-dashboard-2
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

(function () {
  isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    var ps = new PerfectScrollbar(".sidebar");
    var ps1 = new PerfectScrollbar(".sidebar-wrapper");
    var ps2 = new PerfectScrollbar(".main-panel");
    $("html").addClass("perfect-scrollbar-on");
  } else {
    $("html").addClass("perfect-scrollbar-off");
  }
})();

transparent = true;
transparentDemo = true;
fixedTop = false;

navbar_initialized = false;
backgroundOrange = false;
sidebar_mini_active = false;
toggle_initialized = false;

(seq = 0), (delays = 80), (durations = 500);
(seq2 = 0), (delays2 = 80), (durations2 = 500);

$(document).ready(function () {
  if ($(".full-screen-map").length == 0 && $(".bd-docs").length == 0) {
    // On click navbar-collapse the menu will be white not transparent
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this)
          .closest(".navbar")
          .removeClass("navbar-transparent")
          .addClass("bg-white");
      })
      .on("hide.bs.collapse", function () {
        $(this)
          .closest(".navbar")
          .addClass("navbar-transparent")
          .removeClass("bg-white");
      });
  }

  paperDashboard.initMinimizeSidebar();

  $navbar = $(".navbar[color-on-scroll]");
  scroll_distance = $navbar.attr("color-on-scroll") || 500;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
  if ($(".navbar[color-on-scroll]").length != 0) {
    paperDashboard.checkScrollForTransparentNavbar();
    $(window).on("scroll", paperDashboard.checkScrollForTransparentNavbar);
  }

  $(".form-control")
    .on("focus", function () {
      $(this).parent(".input-group").addClass("input-group-focus");
    })
    .on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    });

  // Activate bootstrapSwitch
  $(".bootstrap-switch").each(function () {
    $this = $(this);
    data_on_label = $this.data("on-label") || "";
    data_off_label = $this.data("off-label") || "";

    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label,
    });
  });
});

$(document).on("click", ".navbar-toggle", function () {
  $toggle = $(this);

  if (paperDashboard.misc.navbar_menu_visible == 1) {
    $("html").removeClass("nav-open");
    paperDashboard.misc.navbar_menu_visible = 0;
    setTimeout(function () {
      $toggle.removeClass("toggled");
      $("#bodyClick").remove();
    }, 550);
  } else {
    setTimeout(function () {
      $toggle.addClass("toggled");
    }, 580);

    div = '<div id="bodyClick"></div>';
    $(div)
      .appendTo("body")
      .click(function () {
        $("html").removeClass("nav-open");
        paperDashboard.misc.navbar_menu_visible = 0;
        setTimeout(function () {
          $toggle.removeClass("toggled");
          $("#bodyClick").remove();
        }, 550);
      });

    $("html").addClass("nav-open");
    paperDashboard.misc.navbar_menu_visible = 1;
  }
});

$(window).resize(function () {
  // reset the seq for charts drawing animations
  seq = seq2 = 0;

  if ($(".full-screen-map").length == 0 && $(".bd-docs").length == 0) {
    $navbar = $(".navbar");
    isExpanded = $(".navbar")
      .find('[data-toggle="collapse"]')
      .attr("aria-expanded");
    if ($navbar.hasClass("bg-white") && $(window).width() > 991) {
      $navbar.removeClass("bg-white").addClass("navbar-transparent");
    } else if (
      $navbar.hasClass("navbar-transparent") &&
      $(window).width() < 991 &&
      isExpanded != "false"
    ) {
      $navbar.addClass("bg-white").removeClass("navbar-transparent");
    }
  }
});

paperDashboard = {
  misc: {
    navbar_menu_visible: 0,
  },

  initMinimizeSidebar: function () {
    if ($(".sidebar-mini").length != 0) {
      sidebar_mini_active = true;
    }

    $("#minimizeSidebar").click(function () {
      var $btn = $(this);

      if (sidebar_mini_active == true) {
        $("body").addClass("sidebar-mini");
        sidebar_mini_active = true;
        paperDashboard.showSidebarMessage("Sidebar mini activated...");
      } else {
        $("body").removeClass("sidebar-mini");
        sidebar_mini_active = false;
        paperDashboard.showSidebarMessage("Sidebar mini deactivated...");
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      var simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event("resize"));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },

  showSidebarMessage: function (message) {
    try {
      $.notify(
        {
          icon: "now-ui-icons ui-1_bell-53",
          message: message,
        },
        {
          type: "info",
          timer: 4000,
          placement: {
            from: "top",
            align: "right",
          },
        }
      );
    } catch (e) {
      console.log(
        "Notify library is missing, please make sure you have the notifications library added."
      );
    }
  },
};

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// Select Drop Down

var backdrop = ".dropdown-backdrop";
var toggle = '[data-toggle="dropdown"]';
var Dropdown = function (element) {
  $(element).on("click.bs.dropdown", this.toggle);
};

Dropdown.VERSION = "3.4.1";

function getParent($this) {
  var selector = $this.attr("data-target");

  if (!selector) {
    selector = $this.attr("href");
    selector =
      selector &&
      /#[A-Za-z]/.test(selector) &&
      selector.replace(/.*(?=#[^\s]*$)/, ""); // strip for ie7
  }

  var $parent = selector !== "#" ? $(document).find(selector) : null;

  return $parent && $parent.length ? $parent : $this.parent();
}

function clearMenus(e) {
  if (e && e.which === 3) return;
  $(backdrop).remove();
  $(toggle).each(function () {
    var $this = $(this);
    var $parent = getParent($this);
    var relatedTarget = { relatedTarget: this };

    if (!$parent.hasClass("open")) return;

    if (
      e &&
      e.type == "click" &&
      /input|textarea/i.test(e.target.tagName) &&
      $.contains($parent[0], e.target)
    )
      return;

    $parent.trigger((e = $.Event("hide.bs.dropdown", relatedTarget)));

    if (e.isDefaultPrevented()) return;

    $this.attr("aria-expanded", "false");
    $parent
      .removeClass("open")
      .trigger($.Event("hidden.bs.dropdown", relatedTarget));
  });
}

Dropdown.prototype.toggle = function (e) {
  var $this = $(this);

  if ($this.is(".disabled, :disabled")) return;

  var $parent = getParent($this);
  var isActive = $parent.hasClass("open");

  clearMenus();

  if (!isActive) {
    if (
      "ontouchstart" in document.documentElement &&
      !$parent.closest(".navbar-nav").length
    ) {
      // if mobile we use a backdrop because click events don't delegate
      $(document.createElement("div"))
        .addClass("dropdown-backdrop")
        .insertAfter($(this))
        .on("click", clearMenus);
    }

    var relatedTarget = { relatedTarget: this };
    $parent.trigger((e = $.Event("show.bs.dropdown", relatedTarget)));

    if (e.isDefaultPrevented()) return;

    $this.trigger("focus").attr("aria-expanded", "true");

    $parent
      .toggleClass("open")
      .trigger($.Event("shown.bs.dropdown", relatedTarget));
  }

  return false;
};

Dropdown.prototype.keydown = function (e) {
  if (
    !/(38|40|27|32)/.test(e.which) ||
    /input|textarea/i.test(e.target.tagName)
  )
    return;

  var $this = $(this);

  e.preventDefault();
  e.stopPropagation();

  if ($this.is(".disabled, :disabled")) return;

  var $parent = getParent($this);
  var isActive = $parent.hasClass("open");

  if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
    if (e.which == 27) $parent.find(toggle).trigger("focus");
    return $this.trigger("click");
  }

  var desc = " li:not(.disabled):visible a";
  var $items = $parent.find(".dropdown-menu" + desc);

  if (!$items.length) return;

  var index = $items.index(e.target);

  if (e.which == 38 && index > 0) index--; // up
  if (e.which == 40 && index < $items.length - 1) index++; // down
  if (!~index) index = 0;

  $items.eq(index).trigger("focus");
};

// DROPDOWN PLUGIN DEFINITION
// ==========================

function Plugin(option) {
  return this.each(function () {
    var $this = $(this);
    var data = $this.data("bs.dropdown");

    if (!data) $this.data("bs.dropdown", (data = new Dropdown(this)));
    if (typeof option == "string") data[option].call($this);
  });
}

var old = $.fn.dropdown;

$.fn.dropdown = Plugin;
$.fn.dropdown.Constructor = Dropdown;

// DROPDOWN NO CONFLICT
// ====================

$.fn.dropdown.noConflict = function () {
  $.fn.dropdown = old;
  return this;
};

// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================

$(document)
  .on("click.bs.dropdown.data-api", clearMenus)
  .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  })
  .on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle)
  .on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown)
  .on(
    "keydown.bs.dropdown.data-api",
    ".dropdown-menu",
    Dropdown.prototype.keydown
  );

$(function () {
  $(".selectpicker").selectpicker();
});

// Upload File
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
