/*!
    * Start Bootstrap - Grayscale v6.0.1 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// --------------------------------------------------- no


// how to use the funciton on line 94
// for questions email felix@demont.is

var images19 = [
  "https://images.radiopaedia.org/images/6091552/38c51920dfab2057b870c5ee2689c9_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091553/91c716c0c38dee3f2c1299648e17ff_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091554/fdd2e6bd22926135edbae1f47ee62d_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091555/40a6630c52e542d378b7d6621791ef_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091556/963708f468367cd32905a3ef289263_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091557/72292049d3b51ba15af25962879c99_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091558/ef94fefacc815edbb5c086fc3691d1_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091559/e568409a22741b3d3983e625d95a10_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091561/ee73f0cefdd736d2b4940f5a389ff9_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091565/c02ccd57fd02831bfa3472aeef4e0c_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091568/cae7092adaa917139063f0291fcaad_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091572/ccb6978aa0baa899526495f07f150f_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091576/ee787458bcfb114437d68ad6ba2ae3_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091580/ff03eba1c144526874ae896251416e_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091583/b18ef9bf5879611361a6a8cf29489b_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091588/b94502ffb3955747c0f2b9babaf23e_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091592/c15f92466c23383ee3f7cc03076935_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091597/d56754396cd97889fd80a1136b1ad0_big_gallery.jpg",
  "https://images.radiopaedia.org/images/6091598/f5e11de5c85fcb3ccb0f01e2aa2c47_big_gallery.jpg"
];

var images31 = [
  "https://images.radiopaedia.org/images/2717396/529a4d892c5f86bd3cb9fbb33ed0e7_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717397/b9f4a6304baea6954d2792e9f35162_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717400/b768b3740731912062918ff7b34b18_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717402/a085cde4b4ee6b6eb911c683380465_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717404/747d9502c9b52f0dc4e4e831c65471_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717406/e7464fca91e444f1252cee093189fd_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717410/9faad1974773491659e7c0f121d457_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717412/27f29e1f5db35988f7ed466ad78589_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717414/b99a089408301accc497c8424cffd6_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717417/2b244629396b01d1b853f4d4b5813a_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717421/0197c59bab05f359989ac11ddb314a_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717424/2ad755af008647de156a3ff498f871_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717426/01794e95f1083c426b4cecb26be62d_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717427/616b5cdbc8a515b02710018086b7d5_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717431/4f82c64debaa83c2f88ae989f2a729_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717433/f4ab9a900303cb45b25ae669fd604f_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717435/85483c51f4c46d6931e7250173f286_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717437/310d6d4ede7af21318f026befaceb1_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717442/01a7267f466f39e8138d6d428dc1da_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717444/d32310b53e258c4296eb7215056092_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717446/5350c0aab59d3bdff329e9ac8ffcba_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717448/6e9b5716a40efb60ec3a4ae11ee86d_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717452/73b825345c49e19a325a98b43b628c_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717454/9ff151eb6c89f38cd19064ec7dbb93_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717456/61703699a6e8dc619d204e5d8d4d4c_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717458/e45e0d8a96a78d0c414d8a0023bfca_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717462/288fd52899f56ad9bf6fd15088da63_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717465/c19c59d3bef5d92136f4f3dfccea46_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717467/e7e71f7429288d5236611a3826a203_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717469/a4fb4c7ae11c206a57759c8f042729_big_gallery.jpg",
  "https://images.radiopaedia.org/images/2717473/2064ff162a283de5891104202d2790_big_gallery.jpg"
];


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 4,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "../assets/img/particle.png",
          "width": 100,
          "height": 100,
          "opacity": 0.5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 100,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);







function ImageStack (options) {
  
  var self = this;
    
  self.img_array = options.images;
  
  self.stack = document.createElement('div');
  self.stack.style.overflow = 'auto';
  self.stack.style.maxWidth = '100%';
  self.stack.style.height = options.height;
  self.stack.style.width = options.width;
  self.stack.style.backgroundSize = 'cover'
  self.stack.style.position = 'relative';
  
  var typeRegex = /(\D+)/
  var sizeType = options.height.match(typeRegex)[0]
  
  var numberRegex = /(\d+)/
  self.height_number = Number( options.height.match(numberRegex)[0] )
    
  self.wrapper = document.createElement('div');
  
  for (var i = 0; i < self.img_array.length; i++) {
    
    var image = document.createElement('img');
    image.src = self.img_array[i];
    
    image.style.display = 'none';
    image.style.position = 'absolute';
    image.style.width = options.width;
    image.style.height = options.height;
    image.style.top = 0;
    image.style.left = 0;
    image.dataset.iid = i;
    
    self.wrapper.appendChild(image);
    
  }
    
  self.image_elements = self.wrapper.querySelectorAll('img');
  
  self.scrollobject = document.createElement('div');
  self.scrollobject.style.width = '100%';
  self.scrollobject.style.position = 'absolute';
  self.scrollobject.style.zIndex = '2';
  self.img_count = (self.img_array.length > 15) ? self.img_array.length : 15;
  self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );
  
  self.scrollobject.style.height = self.scrollobject_height + sizeType;
  
  self.scrollUpdate = function (e) {
    
    self.height_number = self.stack.getBoundingClientRect().height
    self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );
    
    var sT = self.stack.scrollTop
    var hn05 = self.img_array.length - 1
    var hh = (self.scrollobject_height - self.height_number) / hn05
    scrollval = Math.floor(sT / (hh))
    
    self.currentimg = self.image_elements[scrollval].src
    
    self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';
    
  }
  
  self.stack.addEventListener('scroll', self.scrollUpdate);
  
  self.currentimg = self.image_elements[0].src
  self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';
  
  
  self.stack.appendChild(self.wrapper);
  self.stack.appendChild(self.scrollobject);
  
  return self.stack;
  
}

/*

The function ImageStack returns a Element Node, which can be appended to an already existing element or modified, however someone wants to change it.

The parameters should have to be a height of the element, the width of the elment, and a list (Array) to all the images.

*/



var stack1 = new ImageStack({
  images: images19,
  height: '30rem',
  width: '30rem'
});

var stack2 = new ImageStack({
  images: images31,
  height: '30rem',
  width: '30rem'
});

// append the stack to the .example element

// document.querySelector('.mri-example').appendChild(stack1);
// document.querySelector('.mri-example').appendChild(stack2);


