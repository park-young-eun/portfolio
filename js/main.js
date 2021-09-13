$(function(){
    $('#fullpage').fullpage({
        // 메뉴이름지정
        menu:'#menu',
        anchors:['MAIN','WEB DESIGN','ART&DESIGN','INFO'],
        // fullpage의 동그란 메뉴 사용
        navigation:true,
        // fullpage의 동그란 메뉴위치를 화면 왼쪽으로 설정
        navigationPosition:'left',
        // fullpage의 동그란 메뉴에 각각 이름 설정
        // navigationTooltips:['MAIN','WEB DESIGN','ART&DESIGN','INFO'],
        // fullpage의 동그란 메뉴의 이름을 사용
        showActiveTooltip:true,
        afterLoad:function(anchorLink, index, direction){
            if(index==1){
                $('.wave_blue').addClass('active');
                $('.wave_light').addClass('active');
                $('.wave_shadow').addClass('active');
                $('.textOutput span').removeClass('active');
                $('.wave_txt .wave_font').addClass('active');
                $('.textAnimation .animate').addClass('active');
            }else{
                $('.wave_blue').removeClass('active');
                $('.wave_light').removeClass('active');
                $('.wave_shadow').removeClass('active');
                $('.textOutput span').addClass('active');
                $('.wave_txt .wave_font').removeClass('active');
                $('.textAnimation .animate').removeClass('active');
            }
        }
    });

    var sw=0;
    $('.menu').hide();
    $('.menu_btn').click(function(){
        if(sw==0){
            sw=1;
            $('.menu').show();
        }else{
            sw=0;
            $('.menu').hide();
        }
    });


    
    //popup gallery
    var imgBtn=$('#s3 .gallery .gall_area ul li a');
    var gallTotal=$('#s3 .gallery .gall_area ul li').length;
    var popup=$('.popup');
    var container=$('.popup .popup-container');
    var gallNum=0;
    var img3_child='<div class="edit-img3-child"><ul><li><img src="img/gallGif_01.gif" alt="gallGif_01"></li><li><img src="img/gallGif_02.gif" alt="gallGif_02"></li><li><img src="img/gallGif_03.gif" alt="gallGif_03"></li><li><img src="img/gallGif_04.gif" alt="gallGif_04"></li></ul></div>';
    imgBtn.click(function(e){
        e.preventDefault();
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        var attr=$(this).attr('href');
        console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴 
        container.append('<img src="'+attr+'">');
        popup.css('display','block');
        //클릭한 a태그의 조상객체 중 li의 인덱스 번호를 가져와서 변수에 저장
        gallNum=$(this).parents('li').index()+1;
        if(gallNum==5){
            container.append(img3_child);
        }
    });
    
    //popup gallery next btn
    $('.popup .next').click(function(){
        gallNum++;
        if(gallNum > gallTotal) { gallNum=1;}
        container.empty();
        container.append('<img src="img/gall_0'+gallNum+'_pop.png">');    
        if(gallNum==5){
            container.append(img3_child);
        }    
    });
    
    //popup gallery prev btn
    $('.popup .prev').click(function(){
        gallNum--;
        if(gallNum < 1 ) { gallNum=gallTotal;}
        container.empty();
        container.append('<img src="img/gall_0'+gallNum+'_pop.png">');       
        if(gallNum==5){
            container.append(img3_child);
        } 
    });

    //popup gallery close btn
    $('.close').click(function(){
        popup.css('display','none');
        //container안의 내용 비움
        container.empty();
    });


    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });

    

   
});
