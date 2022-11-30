const formatCountdownTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  return `${minutes < 10 ? "0": ""}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
export default formatCountdownTime
