/**
 * Mouse move parallax effect
 * @requires https://github.com/wagerfield/parallax
 */


import Parallax from 'parallax-js';

import { jarallax, jarallaxVideo } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

export default (() => {
    const element = document.querySelectorAll('.parallax')

    /* eslint-disable no-unused-vars, no-undef */
    for (let i = 0; i < element.length; i++) {
        const parallaxInstance = new Parallax(element[i])
    }

    jarallaxVideo()
    jarallax(document.querySelectorAll('[data-jarallax]'))

    /* eslint-enable no-unused-vars, no-undef */
})()
