import { completeTask } from "./global";

// const baseUrl = "http://localhost:3000";
const baseUrl =
    "https://script.google.com/macros/s/AKfycby8dZA-lOWCxKbtJIkp20Tkks-25brIWxpi0e4CweWt_UqwlKNHHR66pxGkUFlImTweXw/exec";

const NotifyExplosionCompletionParams = {
    id: "id",
} as const;

export type NotifyExplosionCompletionParams =
    typeof NotifyExplosionCompletionParams[keyof typeof NotifyExplosionCompletionParams];

export const notifyExplosionCompletion = async (params: {
    [key in NotifyExplosionCompletionParams]: string;
}): Promise<void | Response> => {
    const url = new URL(baseUrl);
    url.searchParams.set("id", params.id);

    await fetch(url, {
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then(() => {
            console.log("send!!");
            completeTask();
        })
        .catch(() => {
            console.error("server does not work");
        });
};
