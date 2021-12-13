/* * * * * * * * * * * * * * * * * * */
/*        Media Card Factory         */
/* * * * * * * * * * * * * * * * * * */

import MediaImage from './MediaImage.js';
import MediaVideo from './MediaVideo.js';

export default function mediaFactory(media) {
    if (media.image) {
        return new MediaImage(media);
    } else if (media.video) {
        return new MediaVideo(media);
    }
}
