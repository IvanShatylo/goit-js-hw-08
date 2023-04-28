import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIMEO_PLAYER = 'videoplayer-current-time';

player.on('timeupdate',  throttle( e => {
    localStorage.setItem(VIMEO_PLAYER, e.seconds);
    }, 1000)
    );

player.setCurrentTime(localStorage.getItem(VIMEO_PLAYER))


