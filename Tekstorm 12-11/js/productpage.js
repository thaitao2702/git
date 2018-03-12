//thay doi css menu
$(function(){
    //image gallery start
    var gallery = $('.info-gallery');
    var thumbnails = $('.thumbnail');
    var thumbs = $('.thumb');
    var move_thumb = $('.thumb-move');
    var move_thumb_w = thumbs[0].getBoundingClientRect().width;
    var move_thumb_h = thumbs[0].getBoundingClientRect().height;
    var original_top = 0;
    var return_able = false;
    var front_img = $('.front.big-image');
    var back_img =$('.back.big-image');
    move_thumb.css({
        'width': move_thumb_w +'px',
        'height': move_thumb_h +'px'
    });
    var current_idx =0;    
    var current_src=front_img.attr('src');

        thumbs.each(function(i){     
            var thumb = $(this);       
            thumb.on('mouseover',function(){ 
                var src= $(this).attr('src'); 
                setTimeout(function(){
                    front_img.attr('src',src);
                },200);
                                
                move_thumb.stop().animate({
                    top : move_thumb_h*i
                    
                },250)
            })
            thumb.on('click',function(){
                current_src = $(this).attr('src'); 
                current_idx = i;
            })
            thumbnails.on('mouseleave',function(){                          
                move_thumb.stop().animate({
                    top : current_idx*move_thumb_h
                    
                },200).css('background','rgba(171, 171, 171, 0.28)');
                setTimeout(function(){
                    front_img.attr('src',current_src);
                },200)
            })
        })


    //image gallery end


    //Search function
    var search_bar = $('.search_bar');
    var search_input = search_bar.find('.search_input');
    var bodyFn = function( ev ) {
        search_bar.removeClass('search_open');
        this.removeEventListener( 'click', bodyFn );        
    };       
    search_bar.on('click',function(){
        var self = $(this);
        if (self.hasClass('search_open')){
            self.removeClass('search_open');            
        } else {
            self.addClass('search_open');
            search_input.focus();
            document.addEventListener( 'click', bodyFn ); 
        }    
    })
    search_input.on('click', function( ev ) { ev.stopPropagation(); });
    search_bar.on('click', function( ev ) { ev.stopPropagation(); })
    


    // hien thi menu chinh
    var $menu = $('.menu-sp>li');
    $menu.each(function(i){
        var $self = $(this),  companylist,
        companycontainer = $self.find('.company-list');
        companylist = $self.find('.company-list>li');
        if (9-i<companylist.length){
            var x = (companylist.length-1)*61;
            companycontainer.css('top', -x +'px');    
          
        }

        if(companylist.length>=4){
            var menuheight= companylist.length*61-1;
            var padding = (menuheight-200)/2; 
            menuheight = menuheight+'px';                
            padding= padding +'px';
            var pad='padding-top'      
            var chieucao='height'
            $self.find('.menu-product-show').each(function(){
                $(this).css({
                    'left':'360px',
                    'top':'0',
                    'width':'360px'                   
                }); 
               
                $(this).css(chieucao,menuheight);
                $(this).find('img').css(pad,padding);
            })
        } else  if (i>=4){
            var top = companylist.length*61;
            $self.find('.menu-product-show').css({
                    'top':'-244px'
            })
        }        
    });
    var brands = $('.company-list li');
    brands.each(function(){
        var self = $(this);
        var hw_type = self.parents('.company-list').attr('hw-type').toLowerCase();
        var brand = self.text().trim().toLowerCase();
        var product_img = self.parents('.company-list').find('.menu-product-show img');
        self.on('mouseover',function(){
            product_img.attr('src', 'images/logo/' +hw_type+'-'+brand+'.gif');
        }) 
    })
    // End menu chinh

    //gio hang
    var cartWrapper = $('.cart-content .wrapper');
    //product id - you don't need a counter in your real project but you can use your real product id
    var productId = 0;
    var product_content = $(this).find('.product-content'),
        product_info = $(this).find('.product-info');
    var products =$('.product');                  
                                    
        if( cartWrapper.length > 0 ) {                    
            //store jQuery objects
           
            var cartBody = cartWrapper.find('.body')
            var cartList = cartBody.find('ul').eq(0);
            var cartTotal = cartWrapper.find('.footer').find('.sum');
            var cartTrigger = $('.cart');
            var cartCount = cartTrigger.children('.count')
            var addToCartBtn = products.find('.buy-btn');
            var undo = cartWrapper.find('.undo');
            var undoTimeoutId;
            var added = [];
            
    
            //add product to cart
            addToCartBtn.on('click', function(event){
                event.preventDefault();
                addToCart($(this));            

            });
    
            //open/close cart
            cartTrigger.on('click', function(event){
                event.preventDefault();
                toggleCart();                        
            });
    
            //close cart when clicking on the .cd-cart-container::before (bg layer)
            $('.cart-content').on('click', function(event){
                if( $(event.target).is($(this)) ) toggleCart(true);
            });
    
            //delete an item from the cart
            cartList.on('click', '.delete-item', function(event){
                event.preventDefault();
                removeProduct($(event.target).parents('.cart-product'));                       
            });
    
            //update item quantity
            cartList.on('change', 'select', function(event){
                quickUpdateCart();
            });            
            
        }
    
        function toggleCart(bool) {
            var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
            
            if( cartIsOpen ) {
                $('.cart-content').removeClass('cart-open');
                cartWrapper.removeClass('cart-open');          
               
               
            } else {
                $('.cart-content').addClass('cart-open');                        
                cartWrapper.addClass('cart-open');                
            }
        }
    
        function addToCart(trigger) {
            var cartIsEmpty = cartWrapper.hasClass('empty');
            //update cart product list
            addProduct(trigger);
            //update number of items 
            updateCartCount(cartIsEmpty);
            //update total price
            updateCartTotal(trigger.parents('.product-content').find('.price').text().replace('đ', '').replace(/\./g,''), true);
            //show cart
            cartWrapper.removeClass('empty');
        }
    
        function addProduct(trigger) {
            var product = trigger.parents('.product-content'),
            ten_sp = product.find('.product-name').html(),
            anh_sp = product.find('img').attr('src'),
            gia_sp = product.find('.price').html();            
            var cart = $('header .icon-cart');
            added.indexOf(ten_sp)     
                                                                            
                                                             
                function init_clone(){
                    cart_offset = cart[0].getBoundingClientRect(),
                    cart_y = cart_offset.bottom - cart_offset.height/2,
                    cart_x = cart_offset.left+(cart_offset.width/2),
                    img = product.find('img'),
                    img_w = img.width(),
                    img_offset = img[0].getBoundingClientRect(),                        
                    img_y = img_offset.bottom - (img_offset.height/2),
                    img_x = img_offset.left+ (img_offset.width/2),               
                    x=cart_x-img_x,
                    y=cart_y-img_y;    
                    img.clone()
                        .addClass('imgclone')
                        .appendTo($('.navbar_wrapper'))
                        .css({
                            'transform':'scale(1.4)',
                            'top': img_offset.top + 'px',
                            'left': img_offset.left +'px',
                            'width': img_w+'px',                                
                        })
                        .animate({
                            opacity: 0.1,
                            left: cart_offset.left + 'px',
                            top: cart_offset.top + 'px',
                            width: '40px'
                        },200)                                           
                    setTimeout(function(){
                        $('.imgclone').remove();
                    },800)    
                }    
                            
                                
                init_clone ();     
                
            //this is just a product placeholder
            //you should insert an item with the selected product info
            //replace productId, productName, price and url with your real product info 
            if (!(added.indexOf(ten_sp)==-1)){ 
                var item_idx = cartList.find('li').length-1-added.indexOf(ten_sp);                           
                var old_quantity = Number(cartList.find('li').eq(item_idx).find('.sl').text());
                var new_quantity = old_quantity+1;                
                var new_totalPrice = (new_quantity*gia_sp.replace('đ', '').replace(/\./g,'')).toLocaleString()+' đ';
                
                cartList.find('li').eq(item_idx).find('.sl').text(new_quantity);
                cartList.find('li').eq(item_idx).find('.price').text(new_totalPrice);
                
            }
            else {
                var productAdded = $("<li class='cart-product'><div class='cart-product-img'><a href='#'><img src ="+anh_sp+"></a></div><div class='cart-product-detail'><a href='#'><h3>"+ten_sp+"</h3></a><span class='price'>"+gia_sp+"</span><div class='action'><a class='delete-item' href='#0'>Xóa</a><div class= 'quantity'><label for='asus_maximus'>Số lượng: <span class='sl'> 1 </span></label><label class='add'>+</label><label class='reduce'>-</label></div></div></div></li>");
                cartList.prepend(productAdded);   
                added.push(ten_sp);
            }         
            
        }
    
        function removeProduct(product) {
            clearInterval(undoTimeoutId);
            cartList.find('.deleted').remove();
            
            var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
                productQuantity = Number(product.find('.quantity').find('.sl').text()),
                productTotPrice = Number(product.find('.price').text().replace('đ', '').replace(/\./g,'')) * productQuantity;
                
            product.css('top', topPosition+'px').addClass('deleted');
    
            //update items count + total price
            updateCartTotal(productTotPrice, false);
            updateCartCount(true, -productQuantity);
            undo.addClass('visible');
    
            //wait 8sec before completely remove the item
            undoTimeoutId = setTimeout(function(){
                undo.removeClass('visible');
                cartList.find('.deleted').remove();
            }, 8000);
        }
    
        function quickUpdateCart() {
            var quantity = 0;
            var price = 0;
            
            cartList.children('li:not(.deleted)').each(function(){
                var singleQuantity = Number($(this).find('select').val());
                quantity = quantity + singleQuantity;
                price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
            });
    
            cartTotal.text(price.toFixed(2));
            cartCount.find('li').eq(0).text(quantity);
            cartCount.find('li').eq(1).text(quantity+1);
        }
    
        function updateCartCount(emptyCart, quantity) {
            if( typeof quantity === 'undefined' ) {
                var actual = Number(cartCount.find('li').eq(0).text()) + 1;
                var next = actual + 1;
                
                if( emptyCart ) {
                    cartCount.find('li').eq(0).text(actual);
                    cartCount.find('li').eq(1).text(next);
                } else {
                    cartCount.addClass('update-count');
    
                    setTimeout(function() {
                        cartCount.find('li').eq(0).text(actual);
                    }, 150);
    
                    setTimeout(function() {
                        cartCount.removeClass('update-count');
                    }, 200);
    
                    setTimeout(function() {
                        cartCount.find('li').eq(1).text(next);
                    }, 230);
                }
            } else {
                var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
                var next = actual + 1;
                
                cartCount.find('li').eq(0).text(actual);
                cartCount.find('li').eq(1).text(next);
            }
        }
    
        function updateCartTotal(price, bool) {            
            bool ? cartTotal.text( (Number(cartTotal.text().replace('đ', '').replace(/\./g,'')) + Number(price)).toLocaleString()+' đ')  : cartTotal.text( (Number(cartTotal.text().replace('đ', '').replace(/\./g,'')) - Number(price)).toLocaleString()+' đ');
        }   
    
    //navigation bar
    var detail_navbar = $('.detail-navbar');
    var detail_navbar_button = detail_navbar.find('ul li');

    var	scrolling = false;
	var contentSections = $('.light-section'),
		verticalNavigation = $('.navigation-wrapper'),
		navigationItems = detail_navbar_button.find('a'),
		navTrigger = $('.cd-nav-trigger'),
        scrollArrow = $('.cd-scroll-down'),
        lightSections = $('.light-section');

	$(window).on('scroll', checkScroll);

	//smooth scroll to the selected section
	detail_navbar_button.on('click', 'a', function(event){        
        event.preventDefault();
        smoothScroll($(this.hash));
        navigationItems.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
    	event.preventDefault();
        smoothScroll(this.hash);
    });

	// open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
    	event.preventDefault();
    	verticalNavigation.toggleClass('open');
    });

	function checkScroll() {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
		}
	}

	function updateSections() {
       
        
		var halfWindowHeight = $(window).height()/2,
			scrollTop = $(window).scrollTop();
		contentSections.each(function(){
			var section = $(this),
                sectionId = section.attr('id'),
                offset_section = section[0].getBoundingClientRect();
                navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]'),
                otherItem = navigationItems.not(navigationItem);
			if((offset_section.top <= 100 ) && ( offset_section.bottom>=100) ){
              
                var sectionColor = section.attr('color');
                navigationItem.parents('li').addClass('active'); 
                otherItem.parents('li').removeClass('active');              
                (sectionColor == 'white')
				? detail_navbar_button.addClass('white').removeClass('black')
				: detail_navbar_button.addClass('black').removeClass('white');
            }    
            else {
                
                             
            }
            
               
        });      
        if($(window).scrollTop() == 0) navigationItems.parents().removeClass('active').removeClass('black').removeClass('white');   
        
		scrolling = false;
	}

	function smoothScroll(target) {                      
        var scroll = $(target).attr('id') == "section1"? 50:99;
        $('body,html').animate(
        	{'scrollTop':$(target).offset().top-scroll},
        	500
        );
	}




    //galery
    $.fn.slide= function(setting){
        var defaults = {
                time : 5000,
                direction : 1,
                animtime: 300
        };
        var settings = $.extend(defaults, setting);
        var slidewrapper = $(this),
            slide = slidewrapper.find('ul'),
            items = slide.find('li'),
            current = 1,
            first   = items.filter(':first'),
            last    = items.filter(':last'),
            len     = items.length,                        
            triggers = slidewrapper.find('.btn');
            total_elems = items.length+2;
            w_w				= $(window).innerWidth();
            
        var setWidths		= function(){
                                      
					/*
					the width of the slider is the windows width
					times the total number of elements in the slider
					 */
                    var allitems = slide.find('li');
					var slide_w	= w_w * total_elems;
					slide.width(slide_w + 'px');
					//each element will have a width = windows width
                    allitems.width(w_w + 'px');
                    var slide_height = slide.find('img').height();
                    
                    slidewrapper.height(slide_height+'px');  
                    
					
        }
        
            

        var show_slide = function(direction,w_w){           
            slide.animate({ left: "+=" + (-w_w * direction)+'px' },settings.animtime, function() {
                var previous = current-1;
                current += direction;                  
                
                /**
                 * we're cycling the slider when the the value of "current"
                 * variable (after increment/decrement) is 0 or when it exceeds
                 * the initial gallery length
                 */
                cycle = !!(current === 0 || current > len);

                if (cycle) {
                    /* we switched from image 1 to 4-cloned or
                     from image 4 to 1-cloned */
                    current = (current === 0)? len : 1;
                    slide.css({left:  -w_w * current });
                    
                }
                
                //animate cho effect                
                items.eq(current-1).find('.effect-df').removeClass('effect');                
                items.eq(previous).find('.effect-df').addClass('effect');                
            });
        };
        var picTimer = setInterval(function() {
                    show_slide(settings.direction,w_w);
                },
                settings.time*10);
        return this.each(function(){ 
            slide.css({'left':-w_w}); 
            setWidths();          
            
            /* 1. Cloning first and last item */
            first.before(last.clone(true));            
            last.after(first.clone(true));
            /* thay doi width khi window resize */
            $(window).resize(function(){
                w_w	= $(window).innerWidth();                
                setWidths();
                slide.css('left', -current*w_w+'px');
            });


            /* 2. Set button handlers */
            triggers.on('click', function() {
                if (slide.is(':not(:animated)')) {

                    var cycle = false;
                    settings.direction = ($(this).hasClass('prev'))? -1 : 1;
                    /* in the example buttons have id "prev" or "next" */
                    show_slide(settings.direction,w_w);
                }
                clearInterval(picTimer);
                picTimer = setInterval(function() {
                            show_slide(settings.direction,w_w);
                        },
                        settings.time*10);
            });

           
            /* hover show arrows*/
           

            slidewrapper.hover(function() {
                $(this).find(".btn").css("opacity", 0.0).stop(true, false).animate({
                            "opacity": "1"
                        },
                        300);
            },function(){
                $(this).find(".btn").css("opacity", 1).stop(true, false).animate({
                            "opacity": "0"
                        },
                        300);
            });
        });
    };
    
    $('.slide-wrapper').slide();
    

    var scrolltrue = [true,true],
        scroll1 = [];  
    //bat dau scroll
    
    $(document).on('scroll',function(){
        //detail navbar
        var self = $(this);
        var detail_navbar = $('.detail-navbar');
        var offset_nav = detail_navbar[0].getBoundingClientRect();
        var offset_main = $('.main')[0].getBoundingClientRect();
        if (offset_nav.top<=50 && !detail_navbar.hasClass('fixed-navbar')){
            detail_navbar.addClass('fixed-navbar');            
        }
        if(offset_main.bottom >=0 && detail_navbar.hasClass('fixed-navbar') )
        {detail_navbar.removeClass('fixed-navbar');}
        
        //lightsaber
        var ls = $('.light-saber');
        ls.each(function(i){
            var offset_ls = $(this)[0].getBoundingClientRect();
            if (offset_ls.top<= $(window).innerHeight()*0.75){
                $(this).addClass('ls-active');
                if (i%2==0) ls.eq(i+1).addClass('ls-active');
            }
        })


        //navbar
        var navbar = $('.navbar_wrapper'),
            holder = $('.navbar_holder'),
            navbar2 = navbar.find('.navbar_sub2')
            scroll = $(window).scrollTop(),
            cart = navbar.find('.cart');
        if(scroll>0){    
            navbar.addClass('scrolled');  
            holder.addClass('scrolled');            
        }
        else {
            navbar.removeClass('scrolled');
            holder.removeClass('scrolled');  
        }
       

        //prl 
        var scroll = $(window).scrollTop(),    
             prl = $('.prl-container');
        prl.each(function(i){
            var bcg = $(this).find('.bcg'),
                prl_img_height = bcg.height(),
                prl_display_percent = 0.6,
                prl_display_pixel = ((1-prl_display_percent))*prl_img_height,                       
                offset1 = $(this)[0].getBoundingClientRect(),
                w_height = $(window).innerHeight(),
                total_scroll = w_height+offset1.height,
                ratio_scroll = (prl_display_pixel)/total_scroll;             
                $(this).height(prl_display_percent*prl_img_height); 
                $(window).resize(function(){
                    $(this).height(prl_display_percent*prl_img_height);
                })          
            if (offset1.top <= w_height){
                if (scrolltrue[i]){
                    scrolltrue[i] = false;
                    scroll1[i] = $(window).scrollTop();                            
                }            
                
                bcg.css('transform','translateY('+($(window).scrollTop()-scroll1[i])*ratio_scroll+'px)');
                $('.prlh2').css({                
                    'transform':'translateY('+-($(this).scrollTop()-scroll1[i])*ratio_scroll+'px)',
                    'opacity': 1/w_height*($(this).scrollTop()-offset1.top)/2
                });
            }
        })
            
       
      })//ket thuc scroll
    
    //Hien thong tin san pham khi hover       
        
   
        var products_line = $('.product-line');      

        products_line.each(function(){
            var products = $(this).find('.product'),
                product_w = products.width();
                products.each(function(){
                    var item = $(this),            
                        item_idx = item.index(),
                        others = products.not(item),
                        item_w = item.width(),
                        info = item.find('.product-info');
                    item.on('mouseover',function(){
                    item.css({
                        'z-index':'100',
                        'transform':'scale(1.4)',
                        'transition':'all 0.3s ease'
                        
                    });            
                    others.each(function(){
                        var other_idx = $(this).index(),
                            translate = other_idx>item_idx? item_w*0.2: -item_w*0.2;
                        $(this).css({
                            'transform':'translate3d('+translate+'px,0,0)',
                            'transition':'all 0.3s ease'
                            
                        });    
                    })
                });

            item.on('mouseout',function(){
                item.css({
                    'z-index':'1',
                    'transform':'scale(1)',
                    'transition':'all 0.3s ease'                
                });            
                others.each(function(){          
                    $(this).css({
                        'transform':'translate3d(0,0,0)',
                        'transition':'all 0.3s ease'                    
                    });    
                })
            });
        // gio hang
            
            }) 

        })
        
    
        
    
    
    
                  
 


 

     
    
    
    //smooth scroll
    var $window = $(window);		//Window object
	
	var scrollTime = 0.5;			//Scroll time
	var scrollDistance = 400;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
    $window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
    });
});   
    
    


