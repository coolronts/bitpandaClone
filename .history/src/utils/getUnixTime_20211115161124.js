export default function UnixTimeNow() {
    return Math.round(new Date().getTime() / 1000);
}