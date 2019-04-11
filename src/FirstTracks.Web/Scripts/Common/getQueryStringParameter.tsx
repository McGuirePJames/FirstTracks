export function getQueryStringParameter(location: Location, paramKey: string): string | null {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(paramKey);
}