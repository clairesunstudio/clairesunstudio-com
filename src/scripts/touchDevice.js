import $ from 'jquery'
import Modernizr from './modernizr'
import classie from 'classie'

const touchDevice = (window) => {
  // check for touch
  console.log(!Modernizr.touch)
  $('.gridItem').click(function(e) {
  console.log(e)
});
      // if (Modernizr.touch) {
      //     // // run the forEach on each figure element
      //     // [].slice.call(document.querySelectorAll("figure")).forEach(function(el,i){
      //     //
      //     //     // check if the user moves a finger
      //     //     var fingerMove = false;
      //     //     el.addEventListener("touchmove",function(e){
      //     //         e.stopPropagation();
      //     //         fingerMove = true;
      //     //     });
      //     //
      //     //     // always reset fingerMove to false on touch start
      //     //     el.addEventListener("touchstart",function(e){
      //     //         e.stopPropagation();
      //     //         fingerMove = false;
      //     //     });
      //     //
      //     //     // add hover class if figure touchend and fingerMove is false
      //     //     el.addEventListener("touchend",function(e){
      //     //         e.stopPropagation();
      //     //         if (fingerMove == false) {
      //     //             classie.toggle(el,"hover");
      //     //         }
      //     //     });
      //     //
      //     // });
      //
      // }
}

export default touchDevice;
