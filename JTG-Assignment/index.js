var cycle_slideshow = $("#cycle_slideshow");
var cycle_slideshow_container = $("#cycle_slideshow_container");
var overlay = $("#overlay");

// function imageClicked(param){
//     cycle_slideshow_container.lightbox_me({});
//     overlay.css("display","block");
//     switch(param){
//         case '1': cycle_slideshow.cycle('goto',0);
//                   break;
//                   case '2': cycle_slideshow.cycle('goto',1);
//                   break;
//                   case '3': cycle_slideshow.cycle('goto',2);
//                   break;
//                   case '4': cycle_slideshow.cycle('goto',3);
//                   break;
//     }
// }

function closeImageSlideshow(){
    cycle_slideshow_container.css("display","none");
    overlay.css("display","none");
}