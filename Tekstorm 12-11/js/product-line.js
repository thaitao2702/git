//thay doi css menu
$(function(){


    var DB = {
        1:{
            newproduct:1,
            type:"intel",
            price:5949000,
            brand:"MSI",
            name:"Z370 GAMING",
            chipset:"Intel® Z370",
            socket:"Intel LGA 1151 (Version 2)",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 4400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:3,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:1,
                dvi:0
            },
            sli:1
        },
        2:{
            newproduct:1,
            type:"intel",
            price:3649000,
            brand:"MSI",
            name:"B250 GAMING M3",
            chipset:"Intel® B250",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:2,
                pcix1:4
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        3:{
            newproduct:0,
            type:"intel",
            price:5799000,
            brand:"MSI",
            name:"X99A SLI ",
            chipset:"Intel® X99",
            socket:"Intel LGA2011-3",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:8,
                type:"DDR4",
                maxspeed: 3333,
                maxcapacity: 128
            },
            expansion:{
                sata:10,
                m2:1,
                pcix16:3,
                pcix1:2
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:0
            },
            sli:1
        },
        4:{
            newproduct:0,
            type:"intel",
            price:2399000,
            brand:"MSI",
            name:"E3M WORKSTATION V5",
            chipset:"Intel® C232",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC887 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 2133,
                maxcapacity: 32
            },
            expansion:{
                sata:6,
                m2:0,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:0
            },
            sli:0
        },
        5:{
            newproduct:0,
            type:"intel",
            price:2799000,
            brand:"MSI",
            name:"B250I Gaming Pro AC",
            chipset:"Intel® B250",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC887 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:1,
                pcix16:1,
                pcix1:1
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
        },
        6:{
            newproduct:0,
            type:"intel",
            price:3649000,
            brand:"MSI",
            name:"Z370 A PRO",
            chipset:"Intel® Z370",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 4000,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:1,
                pcix16:2,
                pcix1:1
            },
            connection:{
                hdmi:0,
                displayport:1,
                dvi:1
            },
            sli:1
            
        },
        7:{ 
            newproduct:1,
            type:"intel",
            price:2289000,
            brand:"MSI",
            name:"B250 BAZOOKA",
            chipset:"Intel® B250",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:1,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
            
        },
        8:{
            newproduct:0,
            type:"intel",
            price:1649000,
            brand:"MSI",
            name:"H110M PRO-VD Plus",
            chipset:"Intel® H110",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 2133,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:0,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:1
            },
            sli:0            
        },
        9:{
            newproduct:0,
            type:"intel",
            price:7099999,
            brand:"MSI",
            name:"X299 SLI PLUS",
            chipset:"Intel® X299",
            socket:"Intel LGA2066",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:8,
                type:"DDR4",
                maxspeed: 4133,
                maxcapacity: 128
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:4,
                pcix1:2
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:0
            },
            sli:1
            
        },
        10:{
            newproduct:0,
            type:"intel",
            price:2649000,
            brand:"MSI",
            name:"B250M MORTAR",
            chipset:"Intel® H110",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:1,
                pcix16:2,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:1,
                dvi:1
            },
            sli:1
            
        },
        11:{
            newproduct:0,
            type:"intel",
            price:2459000,
            brand:"MSI",
            name:"250M Gaming Pro",
            chipset:"Intel® B250",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC887 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:1,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
            
        },
        12:{
            newproduct:0,
            type:"intel",
            price:3699000,
            brand:"MSI",
            name:"H270 Tomahawk Arctic",
            chipset:"Intel® H270 ",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:3,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        13:{
            newproduct:0,
            type:"intel",
            price:12899000,
            brand:"MSI",
            name:"X99A GAMING PRO CARBON",
            chipset:"Intel® X99",
            socket:"Intel LGA2011-3",           
            sound:'Realtek® ALC1150 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:8,
                type:"DDR4",
                maxspeed: 3466,
                maxcapacity: 128
            },
            expansion:{
                sata:10,
                m2:1,
                pcix16:4,
                pcix1:2
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:0
            },
            sli:1
        },
        14:{
            newproduct:0,
            type:"amd",
            price:3349000,
            brand:"MSI",
            name:"B350 TOMAHAWK PLUS",
            chipset:"AMD® B350 ",
            socket:"AMD AM4",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 3200,
                maxcapacity: 64
            },
            expansion:{
                sata:4,
                m2:1,
                pcix16:1,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
        },
        15:{
            newproduct:0,
            type:"intel",
            price:13999000,
            brand:"MSI",
            name:"X299 XPOWER GAMING AC",
            chipset:"Intel® X299",
            socket:"Intel LGA2066",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "E-ATX",
            memory:{
                slot:8,
                type:"DDR4",
                maxspeed: 4133,
                maxcapacity: 128
            },
            expansion:{
                sata:10,
                m2:3,
                pcix16:4,
                pcix1:1
            },
            connection:{
                hdmi:0,
                displayport:0,
                dvi:0
            },
            sli:1
        },
        16:{
            newproduct:0,
            type:"intel",
            price:3199000,
            brand:"MSI",
            name:"B250 KRAIT Gaming",
            chipset:"Intel® B250",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 2400,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:3,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        17:{
            newproduct:0,
            type:"intel",
            price:4249000,
            brand:"MSI",
            name:"Z370 GAMING PLUS",
            chipset:"Intel® Z370",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 4000,
                maxcapacity: 64
            },
            expansion:{
                sata:4,
                m2:2,
                pcix16:2,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        18:{
            newproduct:0,
            type:"intel",
            price:2290000,
            brand:"MSI",
            name:"H110i PRO AC (ITX)",
            chipset:"Intel® H110",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "mini ATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 2133,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:1,
                pcix16:1,
                pcix1:0
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
        },
        19:{
            newproduct:0,
            type:"intel",
            price:4449000,
            brand:"MSI",
            name:"Z370 TOMAHAWK",
            chipset:"Intel® Z370",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 4000,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:3,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        20:{
            newproduct:0,
            type:"intel",
            price:4849000,
            brand:"MSI",
            name:"Z370 KRAIT GAMING",
            chipset:"Intel® Z370",
            socket:"Intel LGA1151",           
            sound:'Realtek® ALC1220 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 4000 ,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:3,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:1
        },
        21:{
            newproduct:0,
            type:"amd",
            price:3349000,
            brand:"MSI",
            name:"B350 TOMAHAWK",
            chipset:"AMD® B350",
            socket:"AMD® AM4",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 3200,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:1,
                pcix16:1,
                pcix1:3
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
        },
        22:{
            newproduct:0,
            type:"amd",
            price:2289000,
            brand:"MSI",
            name:"A320M PRO VH PLUS",
            chipset:"AMD® A320",
            socket:"AMD® AM4",           
            sound:'Realtek® ALC887 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 3200,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:0,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:0
            },
            sli:0
        },
        23:{
            newproduct:0,
            type:"amd",
            price:2369000,
            brand:"MSI",
            name:"B350M GAMING PRO",
            chipset:"AMD® A350",
            socket:"AMD® AM4",           
            sound:'Realtek® ALC887 Codec 7.1',            
            size: "mATX",
            memory:{
                slot:2,
                type:"DDR4",
                maxspeed: 3200,
                maxcapacity: 32
            },
            expansion:{
                sata:4,
                m2:1,
                pcix16:1,
                pcix1:2
            },
            connection:{
                hdmi:1,
                displayport:0,
                dvi:1
            },
            sli:0
        },
        24:{
            newproduct:0,
            type:"amd",
            price:8699000,
            brand:"MSI",
            name:"X370 XPOWER GAMING TITANIUM",
            chipset:"AMD® X370",
            socket:"AMD® AM4",           
            sound:'Realtek® ALC892 Codec 7.1',            
            size: "ATX",
            memory:{
                slot:4,
                type:"DDR4",
                maxspeed: 3200,
                maxcapacity: 64
            },
            expansion:{
                sata:6,
                m2:2,
                pcix16:2,
                pcix1:3
            },
            connection:{
                hdmi:0,
                displayport:1,
                dvi:1
            },
            sli:1
        }

    }


    //hien thi toan bo product
    var db_len = Object.keys(DB).length;
    var product_html = '';
    var html = '';
    for (var x = 1; x<= db_len; x++){
        var newproduct = DB[x]['newproduct']==1? '<img src="images/new.png" class="newproduct-logo">':'';
        html+= '<div class="product"><div class="product-content"><img src="images/product/msi/'+x+'.gif"><h3 class="product-name"><a href="asus_maximus.html">'+DB[x]["name"]+'</a><div class="product-info"><span>Mô tả tóm tắt</span><p>Chipset: <span>'+DB[x]["chipset"]+'</span><br>Socket: <span>'+DB[x]["socket"]+' </span><br>Ram: <span>'+DB[x]["memory"]["slot"]+' khe cắm, Tối đa '+DB[x]["memory"]["maxcapacity"]+'GB, DDR4 </span> <br>khe cắm mở rộng: <span> '+DB[x]["expansion"]["pcix16"]+' x PCIe 3.0 x16, '+DB[x]["expansion"]["pcix1"]+' x PCIe 3.0 x3  </span><br>Kích cỡ: <span>   '+DB[x]["size"]+'</span><br></p></div></h3><h2 class="price">'+DB[x]["price"].toLocaleString()+' đ</h2>'+ newproduct +'<div class="buy-btn"><span class="icon-cart"></span></div></div></div>'
    }

    $('.product-list').html(html);

    //hien thi toan bo product end

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
        companylist = $self.find('.company-list li');
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
    var product_content = $(this).find('.product-content'),
        product_info = $(this).find('.product-info');
    var products =$('.product');                  
                                    
        if( cartWrapper.length > 0 ) {                
            var cartBody = cartWrapper.find('.body')
            var cartList = cartBody.find('ul').eq(0);
            var cartTotal = cartWrapper.find('.footer').find('.sum');
            var cartTrigger = $('.cart');
            var cartCount = cartTrigger.children('.count')
            var addToCartBtn = products.find('.buy-btn');
            var undo = cartWrapper.find('.undo');
            var undoTimeoutId;
            var added = [];
            var cart_add = cartList.find('.add');
            var cart_reduce = cartList.find('.reduce');
            var checkoutBtn = cartWrapper.find('.footer');
                
            //thêm sp
            addToCartBtn.on('click', function(event){
                event.preventDefault();
                addToCart($(this));            

            });
    
            //đóng mở giỏ hàng
            cartTrigger.on('click', function(event){
                event.preventDefault();
                toggleCart();                        
            });
    
            //đóng giỏ hàng khi click ra ngoài
            $('.cart-content').on('click', function(event){
                if( $(event.target).is($(this)) ) toggleCart(true);
            });
    
            //xóa item khỏi giỏ hàng
            cartList.on('click', '.delete-item', function(event){
                event.preventDefault();
                removeProduct($(event.target).parents('.cart-product'));                       
            });
    
            //update số lượng item
            cartList.on('change', 'select', function(event){
                quickUpdateCart();
            }); 
            
            //hiện checkout button
            
            
            //thêm bớt số lượng sản phẩm khi nhấn nút +/-
            cartList.on('click', '.add', function(event){
                event.preventDefault();
                updateCartCount(false);                
                var this_item = $(event.target).parents('.cart-product'); 
                var gia_sp = this_item.find('.gia-sp').html();                                                           
                var old_quantity = +(this_item.find('.sl').text());
                var new_quantity = old_quantity+1;                
                var new_totalPrice = (new_quantity*gia_sp.replace('đ', '').replace(/\./g,''));
                
                this_item.find('.sl').text(new_quantity);                
                this_item.find('.sl1').text(new_quantity);                 
                this_item.find('.price').animateNumber(
                  {
                    number: new_totalPrice,
                    numberStep: $.animateNumber.numberStepFactories.separator('.', 3, ' đ')
                  }
                );
                this_item.find('.price').append(' đ');  
                //update giá tổng
                
                var cartTotal_new = Number(cartTotal.text().replace('đ', '').replace(/\./g,'')) + Number(gia_sp.replace('đ', '').replace(/\./g,''));
                cartTotal.animateNumber(
                    {
                        number: cartTotal_new,
                        numberStep: $.animateNumber.numberStepFactories.separator('.', 3, ' đ')
                    }
                )
            });
            cartList.on('click', '.reduce', function(event){
                event.preventDefault();                             
                var this_item = $(event.target).parents('.cart-product'); 
                var gia_sp = this_item.find('.gia-sp').html();                                                           
                var old_quantity = +(this_item.find('.sl').text());
                var new_quantity = old_quantity-1;                
                var new_totalPrice = (new_quantity*gia_sp.replace('đ', '').replace(/\./g,''));
                if (new_quantity==0) removeProduct($(event.target).parents('.cart-product'));
                else{
                    updateCartCount(true,-1);   
                    this_item.find('.sl').text(new_quantity);                
                    this_item.find('.sl1').text(new_quantity);                 
                    this_item.find('.price').animateNumber(
                    {
                        number: new_totalPrice,
                        numberStep: $.animateNumber.numberStepFactories.separator('.', 3, ' đ')
                    }
                    );
                    this_item.find('.price').append(' đ');  
                    //update giá tổng
                    
                    var cartTotal_new = Number(cartTotal.text().replace('đ', '').replace(/\./g,'')) - Number(gia_sp.replace('đ', '').replace(/\./g,''));
                    cartTotal.animateNumber(
                        {
                            number: cartTotal_new,
                            numberStep: $.animateNumber.numberStepFactories.separator('.', 3, ' đ')
                        }
                    )
                }
            });
        }
    
        function toggleCart(bool) {
            var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
            
            if( cartIsOpen ) {
                $('.cart').removeClass('cart-open');
                $('.cart-content').removeClass('cart-open');
                cartWrapper.removeClass('cart-open');          
               
               
            } else {
                $('.cart').addClass('cart-open'); 
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
            ten_sp = product.find('.product-name a').text(),
            anh_sp = product.find('img').attr('src'),
            gia_sp = product.find('.price').html();            
            var cart = $('header .icon-cart');
            added.indexOf(ten_sp)     
                                                                            
                                                             
                function init_clone(){
                    cart_offset = cart[0].getBoundingClientRect(),
                    cart_y = cart_offset.bottom - cart_offset.height/2,
                    cart_x = cart_offset.left+(cart_offset.width/2),
                    img = product.find('img:first'),
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
                    },500)    
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
                cartList.find('li').eq(item_idx).find('.sl1').text(new_quantity);
                
            }
            else {
                var productAdded = $("<li class='cart-product'><div class='cart-product-img'><a href='#'><img src ="+anh_sp+"></a></div><div class='cart-product-detail'><a href='#'><h3>"+ten_sp+"</h3></a><span class='price'>"+gia_sp+"</span><span class='price-detail'><span class='sl1'>1</span>"+"x<span class='gia-sp'>"+gia_sp+"</span></span><div class='action'><a class='delete-item' href='#'>Xóa</a><div class= 'quantity'><label for='asus_maximus'>Số lượng: <span class='sl'> 1 </span></label><label class='add'>+</label><label class='reduce'>-</label></div></div></div></li>");
                cartList.prepend(productAdded);   
                added.push(ten_sp);
            }         
            
        }
    
        function removeProduct(product) {            
            cartList.find('.deleted').remove();            
            var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
                productQuantity = Number(product.find('.quantity').find('.sl').text()),
                productTotPrice = Number(product.find('.price').text().replace('đ', '').replace(/\./g,'')) ;
            var ten_sp = product.find('.product-name a').text();
            var remove_idx = added.indexOf(ten_sp);
            //xoa san pham khoi list san pham da them vao gio hang
            added.splice(remove_idx);
            product.addClass('deleted');
            setTimeout(function(){
                product.remove();
            },300)
    
            //update items count + total price
            updateCartTotal(productTotPrice, false);
            updateCartCount(true, -productQuantity);                                      
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

    var	scrolling = false;
	var contentSections = $('.section'),
		verticalNavigation = $('.navigation-wrapper'),
		navigationItems = verticalNavigation.find('a'),
		navTrigger = $('.cd-nav-trigger'),
        scrollArrow = $('.cd-scroll-down'),
        lightSections = $('.light-section');

	$(window).on('scroll', checkScroll);

	//smooth scroll to the selected section
	verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
    	event.preventDefault();
        smoothScroll($(this.hash));
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
                
				navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
			if((section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) ){
                var sectionColor = section.attr('color');
                navigationItem.addClass('active');               
                (sectionColor == 'dark')
				? verticalNavigation.addClass('nav_light').removeClass('nav_dark')
				: verticalNavigation.addClass('nav_dark').removeClass('nav_light');
            }    
            else {
                navigationItem.removeClass('active');
                sectionColor = section.attr('color');
                
            }
               
        });

        lightSections.each(function(){
			var section = $(this);                              
				
			if((section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) ){
                var sectionColor = section.attr('color');                           
                (sectionColor == 'dark')
				? verticalNavigation.addClass('nav_light').removeClass('nav_dark')
				: verticalNavigation.addClass('nav_dark').removeClass('nav_light');
            }    
           
               
        });
        
		scrolling = false;
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top-50},
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
        var self = $(this);
        
        
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
    var products= $('.product');
    var w_w = $(window).innerWidth();
    var product_list_w = $('.product-list').width();
    var product_w = products.width();
    var product_line_number = Math.floor(product_list_w/product_w);
    products.each(function(i){
        var product = $(this);
        product.on('mouseover',function(){
            var img = product.find('img:first');
            var h3 = product.find('h3');
            var img_h = img.height();
            var product_pos = (i+1)%product_line_number;
            if (product_pos == 0) product_pos = 4;
            for (var x=1; x<=4; x++){
                var translate = x<product_pos? -0.1*product_w: 0.1*product_w;
                if (x==product_pos) translate = 0;
                var product_idx = i-product_pos+x;
                products.eq(product_idx).css({                    
                    'transform':'translate3d('+translate+'px,0,0)',
                    'transition':'all 0.3s ease'                 
                });  
            }
            product.css({
                'z-index':'100',
                'transform':'scale(1.2)',
                'transition':'all 0.3s ease'
            });
            img.css({
                'transform':'translateY(-30%)',
                'transition':'all 0.3s ease'
            });
            h3.css({
                'transform':'translateY('+-0.6*img_h+'px)',
                'transition':'all 0.3s ease'
            });      
        });
        product.on('mouseout',function(){
            var img = product.find('img:first');
            var h3 = product.find('h3');
            var img_h = img.height();
            var product_pos = (i+1)%product_line_number;
            if (product_pos == 0) product_pos = 4;
            for (var x=1; x<=4; x++){
                var translate = x<product_pos? -0.1*product_w: 0.1*product_w;
                if (x==product_pos) translate = 0;
                var product_idx = i-product_pos+x;
                products.eq(product_idx).css({                    
                    'transform':'translate3d(0,0,0)',
                    'transition':'all 0.3s ease'                 
                });  
            }
            product.css({                
                'transform':'scale(1)',
                'transition':'all 0.3s ease'
            });
            img.css({
                'transform':'translateY(0)',
                'transition':'all 0.3s ease'
            });
            h3.css({
                'transform':'translateY(0)',
                'transition':'all 0.3s ease'
            });      
        })
        

    })     
        
   
        
    // gio hang
            
         
        
    
        
    
    
    
                  
 


 

     
    
    
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
    
    


