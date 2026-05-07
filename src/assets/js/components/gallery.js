/**
 * Gallery like styled lightbox component for presenting various types of media
 * @requires https://github.com/sachinchoolur/lightGallery
 */


// Core
import lightGallery from 'lightgallery';

// Plugins (optional)
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

// LightGallery  CSS (optional)
import 'lightgallery/css/lightgallery-bundle.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';


export default (() => {
    const gallery = document.querySelectorAll('.gallery')

    if (gallery.length) {
        for (let i = 0; i < gallery.length; i++) {
            /* eslint-disable no-undef */
            const thumbnails = gallery[i].dataset.thumbnails ? true : false,
                video = gallery[i].dataset.video ? true : false,
                defaultPlugins = [lgZoom, lgFullscreen],
                videoPlugin = video ? [lgVideo] : [],
                thumbnailPlugin = thumbnails ? [lgThumbnail] : [],
                plugins = [...defaultPlugins, ...videoPlugin, ...thumbnailPlugin]

            lightGallery(gallery[i], {
                selector: '.gallery-item',
                plugins: plugins,
                licenseKey: 'D4194FDD-48924833-A54AECA3-D6F8E646',
                download: false,
                autoplayVideoOnSlide: true,
                zoomFromOrigin: false,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: '6366f1',
                },
            })
            /* eslint-enable no-undef */
        }
    }

    const button = document.querySelectorAll('[data-bs-toggle="video"]')
    if (button.length) {
        for (let i = 0; i < button.length; i++) {
            /* eslint-disable no-undef */
            lightGallery(button[i], {
                selector: 'this',
                plugins: [lgVideo],
                licenseKey: 'D4194FDD-48924833-A54AECA3-D6F8E646',
                download: false,
                youtubePlayerParams: {
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                },
                vimeoPlayerParams: {
                    byline: 0,
                    portrait: 0,
                    color: '6366f1',
                },
            })
            /* eslint-enable no-undef */
        }
    }
})()
