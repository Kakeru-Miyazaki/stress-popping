import { notifyExplosionCompletion } from "./api";

export const indexKeyList = [...Array(7)].map((_, index) => index);

const explosionNum = 7;

export const counter = {
    value: 0,
    incrementCounter: () => {
        navigator.locks.request("counter", async (_lock) => {
            ++counter.value;
            if (counter.value == explosionNum) {
                console.log("all movie was clicked");
                notifyExplosionCompletion({ id: imageId.value });
            }
        });
    },
};

export const completeTask = () => {
    window.location.href = "./html/finish.html";
};

export const imageId = {
    value: "",
    set: (id: string) => {
        imageId.value = id;
    },
};

export const getRandom = (size = 4) => (Math.random() * 2 - 1) * size;

export const redirectTo404 = () => {
    window.location.href = "./html/404.html";
};
