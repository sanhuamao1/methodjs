import getFilename from './getFilename'
import { DownloadMediaProps } from './types'

const downloadMedia = ({ url, fileName }: DownloadMediaProps) => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            const aElement = document.createElement('a');
            aElement.style.display = 'none';
            aElement.href = blobUrl;
            aElement.download = fileName || getFilename(url);
            document.body.appendChild(aElement);
            aElement.click();
            document.body.removeChild(aElement);
        });
};

export { downloadMedia }