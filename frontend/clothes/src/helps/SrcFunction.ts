const constantsUrl = "https://productclothes.s3.amazonaws.com/foto/";

export function getUrlName(path: string | null) {
  return `${constantsUrl}${path}`;
}
