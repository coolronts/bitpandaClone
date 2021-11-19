var date = new Date();

export function getUnixTime() {
    return Math.round(date.getTime() / 1000);
}

export function priorSevenUnix() {
    return Math.round(date.setDate(date.getDate() - 7) / 1000);
}