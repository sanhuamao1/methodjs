import { getFileName } from '../utils'
type DownloadFunction = (url: string, fileName?: string) => void;

export const download: DownloadFunction = (url, fileName) => {
    const aElement = document.createElement('a');
    aElement.style.display = 'none';
    aElement.href = url;
    aElement.download = fileName || getFileName(url);
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};


export const downloadMedia:DownloadFunction = (url, fileName) => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            const aElement = document.createElement('a');
            aElement.style.display = 'none';
            aElement.href = blobUrl;
            aElement.download = fileName || getFileName(url);
            document.body.appendChild(aElement);
            aElement.click();
            document.body.removeChild(aElement);
        });
};

/**
 * 播放音频
 * @param url 
 */
 export const playAudio = (url: string, onError?: (err: Error) => void ) => {
    const audio = new Audio(url);
    audio.style.display = 'none';
    document.body.appendChild(audio);
    audio.onended = () => {
        document.body.removeChild(audio);
    };
    var promise = audio.play();
    if (promise !== undefined) {
        promise
            .then((_) => {
                // Autoplay started!
            })
            .catch((err) => {
                onError && onError(err)
            });
    }
};