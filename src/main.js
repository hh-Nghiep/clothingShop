import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

/* Menu page */
$(document).on('click', '.header_2 .container a', function () {
    $(this).attr('href', $(this).attr('href').replace('#', '') + ".html");
});
$(document).on('click', '.header_1 .container .logo img', function () {
    window.location.replace("index.html");
});

/* Menu mobbile */
$(document).on('click', '.header_1 .container .empty img', function () {
    $('.header_1 .nav').addClass('active');
});
$(document).on('click', "header .nav ul li a", function (e) {
    $(this).attr('href', $(this).attr('href').replace('#', '') + ".html");
    e.stopPropagation();
});
$(document).on('click', "header .nav", function (e) {
    $('.header_1 .nav').removeClass('active');
});

/* Tag */
$(document).on('click', '.tag', function () {
    $('.post').removeClass('active');
    $('.tag').removeClass('active');
    $(this).addClass('active');
    $('.post_' + $(this).text()).addClass('active');
    console.log('.post_' + $(this).text());
})

/* Work hover */
$(document).on("mouseover", '.tags .container .post__item', function () {
    $(this).css("background-color", "#525355");
});
$(document).on("mouseleave", '.tags .container .post__item', function () {
    $(this).css("background-color", "#f4f4f4");
});

/* Studio hover */
$(document).on("mouseover", '.studios .container .studio-item', function () {
    $(this).addClass('active');
});
$(document).on("mouseleave", '.studios .container .studio-item', function () {
    $(this).removeClass('active');
});
/* Studio Click */
$(document).on("click", '.studios .container .studio-item', function () {
    window.location.replace("studio-details.html");
});

/* Project Click */
$(document).on('click', '.tags .container .post__item-img img', function () {
    window.location.replace("project-details.html");
});
$(document).on('click', '.tags .container .post__item-title a', function () {
    $(this).attr('href', "project-details.html");
});


/* Book Now */
$(document).on('click', '.container .box .box-btn a', function () {
    $(this).attr('href', "rental.html");
});

/* Gallery */
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        //gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};
initPhotoSwipeFromDOM('.carousel-img');

/* Back To Top */
$(document).on('click', ".backtotop", function () {
    console.log("ok");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



/* Rental */
$(document).on('click', ".rental .container .details .booking-studio .items .item", function () {
    $(".rental .container .details .booking-studio .items .item").removeClass('active');
    $(this).addClass('active')
});


$(document).on('click', 'footer .container .below .below__top .contact .contact-send', function () {
    alert("Send ok");
});

$(document).on('click', ".rental .container .details .box .box-btn", function () {
    alert("Book ok");
});