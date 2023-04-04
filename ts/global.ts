export const indexKeyList = [...Array(7)].map((_, index) => index);

let counter = 0;

const explosionNum = 7;

export const incrementCounter = () => {
    navigator.locks.request("counter", async (_lock) => {
        ++counter;
        if (counter == explosionNum) {
            alert("done");
        }
    });
};

export const getRandom = (size = 4) => (Math.random() * 2 - 1) * size;

export const redirectTo404 = () => {
    window.location.href = "./html/404.html";
};
