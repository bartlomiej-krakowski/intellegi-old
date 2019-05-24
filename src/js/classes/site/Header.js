import getCurrentScroll from '../../vendors/helpers/currentScroll.js';

export default class Header {

   constructor() {

     if (!this.setVars())
       return

     this.setEvents()

   }

   setVars() {
     this.element = document.querySelector('.header');
     this.scrollPosition = getCurrentScroll();

     if (!this.element)
       return

     this.classes = {
       notify  : 'header__notify--active',
       sticky  : 'header--sticky'
     }

     return true

   }

   setEvents() {

     document.addEventListener('click', (e) => { this.closeAll() })
     window.addEventListener('load',   () => { this.headerSticky() })
     window.addEventListener('scroll', () => { this.headerSticky() })

   }

   closeAll() {
     this.notifyWrapper.removeClass(this.classes.notify)
   }

   headerSticky() {
alert('test')
     this.scrollDirection = getCurrentScroll() - this.scrollPosition;

     if (this.scrollDirection <= 0) {
       this.element.addClass(this.classes.sticky);
     }
     else {
       this.element.removeClass(this.classes.sticky)
     }
     this.scrollPosition = getCurrentScroll();
   }
 }
