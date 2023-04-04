import {
    counter,
    getRandom,
    imageId,
    indexKeyList,
    redirectTo404,
} from "./global";

const getPathInGoogleApi = (path: string) =>
    "https://storage.googleapis.com/stress-explosion-images/" + path + ".png";

const checkImageExists = (
    imageUrl: string,
    callback: (arg0: boolean) => void
) => {
    const img = new Image();
    img.onload = () => {
        callback(true);
    };
    img.onerror = () => {
        callback(false);
    };
    img.src = imageUrl;
};

const changeBodyBgImageSrc = (path: string) => {
    const url = getPathInGoogleApi(path);
    const body = document.body;

    checkImageExists(url, (exist) => {
        if (exist) {
            body.style.backgroundImage = `url("${url}")`;
        } else {
            redirectTo404();
        }
    });
};

export const getParams = (paramName: string) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    return params.get(paramName);
};

const playVideoOnClick = (index: number) => {
    const explosionVideo = document.getElementById(
        `v-${index}`
    ) as HTMLVideoElement | null;

    const container = document.getElementById(`c-${index}`);
    const wrapper = document.getElementById(`w-${index}`);

    if (!explosionVideo || !container || !wrapper) {
        console.error(`cannot get elements with index ${index}`);
        return;
    }

    wrapper.addEventListener("click", async () => {
        const videoLength = 4000;

        container.style.opacity = "1";
        explosionVideo.play();

        setTimeout(async () => {
            // hide explosion video
            counter.incrementCounter();
            explosionVideo.style.display = "none";
        }, videoLength);
    });
};

const setPositionOfVideos = () => {
    type Pos = {
        x: number;
        y: number;
    };

    const xMargin = 8;
    const yMargin = 16;

    const positionList: Pos[] = [
        { x: getRandom() + 25 + xMargin, y: getRandom() + 16.5 + yMargin },
        { x: getRandom() + 75 - xMargin, y: getRandom() + 16.5 + yMargin },

        { x: getRandom() + 22.5, y: getRandom() + 45 },
        { x: getRandom() + 50, y: getRandom() + 50 },
        { x: getRandom() + 77.5, y: getRandom() + 45 },

        { x: getRandom() + 25 + xMargin, y: getRandom() + 79.5 - yMargin },
        { x: getRandom() + 75 - xMargin, y: getRandom() + 79.5 - yMargin },
    ];

    indexKeyList.map((index) => {
        const element = document.getElementById(`w-${index}`);

        if (!element) return;

        element.style.left = positionList[index].x + "vw";
        element.style.top = positionList[index].y + "vh";
    });
};

const main = () => {
    // dummy id param
    // "016582cf0d94ec309eb1bfae7446aaa4be62b6fa0fca4ec47cf572b0646cc321/04-03-14-15"
    const id = getParams("id");

    if (!id) {
        redirectTo404();
        return;
    }

    imageId.set(id);
    changeBodyBgImageSrc(imageId.value);
    setPositionOfVideos();
    indexKeyList.map((index) => playVideoOnClick(index));
};

window.addEventListener("load", (event) => {
    main();
});
