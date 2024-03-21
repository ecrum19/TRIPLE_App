import { saveFileInContainer, WithResourceInfo, getPodUrlAll, WebId } from '@inrupt/solid-client';
import { Session, fetch } from "@inrupt/solid-client-authn-browser";

// Returns a list of URLs
// const user_pods = await getPodUrlAll(webID, { fetch: fetch });

async function uploadFile(file: File): Promise<void> {
    // Replace 'https://your-pod.solidcommunity.net/public/' with the URL of your container
    const savedFile = await saveFileInContainer('http://localhost:3000/.data', file, { fetch: window.fetch }) as File & WithResourceInfo;
    console.log(`Saved ${savedFile}`);
}

async function checkFilesInPod() {
    // Use the Solid JavaScript Client to fetch the files
    
}

export { uploadFile }