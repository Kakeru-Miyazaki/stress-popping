const indexKeyList = [...Array(7)].map((_, index) => index);

const playVideoOnClick = (index: number) => {
    const explosionVideo = document.getElementById(
        `v-${index}`
    ) as HTMLVideoElement | null;

    const container = document.getElementById(`c-${index}`);

    if (!explosionVideo || !container) {
        console.error(`cannot get elements with index ${index}`);
        return;
    }

    container.addEventListener("click", () => {
        const videoLength = 4000;

        container.style.opacity = "1";
        explosionVideo.play();
        setTimeout(() => {
            // hide explosion video
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
        { x: 25 + xMargin, y: 16.5 + yMargin },
        { x: 75 - xMargin, y: 16.5 + yMargin },

        { x: 16.5, y: 50 },
        { x: 50, y: 50 },
        { x: 83.5, y: 50 },

        { x: 25 + xMargin, y: 83.5 - yMargin },
        { x: 75 - xMargin, y: 83.5 - yMargin },
    ];

    indexKeyList.map((index) => {
        const element = document.getElementById(`c-${index}`);

        if (!element) return;

        element.style.left = positionList[index].x + "vw";
        element.style.top = positionList[index].y + "vh";
    });
};

const main = () => {
    setPositionOfVideos();
    indexKeyList.map((index) => playVideoOnClick(index));
};

window.addEventListener("load", (event) => {
    main();
});
