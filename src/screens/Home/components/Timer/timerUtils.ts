export function convertMinutesToMillis(minutes: number): number {
  const millis = Math.floor(minutes * 60000);

  return millis;
}

export function convertMillisToMinutes(millis: number): string {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));

  const minutesString = minutes < 10 ? `0${minutes}` : minutes;
  const secondsString = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutesString}:${secondsString}`;
}

export function convertTimeToProgress(
  time: number,
  overallTime: number,
  progress = 100
): number {
  const calculatedProgress = (
    (time * progress) /
    overallTime /
    progress
  ).toFixed(2);

  // Convert calculatedProgress to start from 0
  const convertedProgress = Math.abs(Number(calculatedProgress) * 100 - 100);

  return convertedProgress;
}
