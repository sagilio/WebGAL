//切换自动播放状态
import {runtime_gamePlay} from "../../runtime/gamePlay";

export const switchFast = () => {
    //现在正在快进
    if (runtime_gamePlay.isFast) {
        runtime_gamePlay.isFast = false;
        if (runtime_gamePlay.fastInterval !== null) {
            clearInterval(runtime_gamePlay.fastInterval);
            runtime_gamePlay.fastInterval = null;
        }
    } else { //当前不在快进
        runtime_gamePlay.isFast = true;
        runtime_gamePlay.fastInterval = setInterval(() => {
            const event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            const textBox = document.getElementById('textBoxMain');
            if (textBox !== null) {
                textBox.dispatchEvent(event);
            }
        }, 100);
    }
}