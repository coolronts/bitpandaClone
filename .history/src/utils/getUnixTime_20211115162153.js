export default function getUnixTime() {
    return Math.round(new Date().getTime() / 1000);
}