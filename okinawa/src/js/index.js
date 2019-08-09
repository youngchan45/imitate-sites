// $(document).ready(function () {
// $(".pagetop").click(
//     function(){
//         $(document.body).animation({scrollTop:0},1800);
//     }
// )

// $(".pagetop").click(function(){
//     if ($('html').scrollTop()) {
//         $('html').animate({ scrollTop: 0 }, 100);//动画效果
//         return false;
//     }
//     $('body').animate({ scrollTop: 0 }, 100);
//     return false;
// });

// $(function() {
//     $(".pagetop").click(function() {
//         $("html, body").animate({
//             scrollTop: $($(this).attr("href")).offset().top + "px"
//         }, {
//             duration: 1500,
//             easing: "swing"
//         });
//         return false;
//     });
// });
// $(document).ready(function () {
//     $(".pagetop").click(function (e) { 
//         e.alert("1");           
//     });  
// });
window.onload = function () {
    var top = document.getElementById('pagetop');
    var timer = null;
    var istop = true;

    window.onscroll = function(){
        if(!istop){
            clearInterval(timer);
        }
        istop = false;
    }
    
    top.onclick = function () {
        timer = setInterval(function () {
            var ostop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(ostop / 10);
            istop = true;
            document.documentElement.scrollTop = ostop-ispeed;
            
            if(ostop == 0){
                clearInterval(timer);
            }
        }, 20)

    }
}



// });

