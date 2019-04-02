export interface RequestParameters {
    url: string;
    type: "POST" | "GET";
    data: object[] | null;
    headers: object[] | null;
}

export interface RequestResponse {
    response: string;
    status: number;
}

export function getCompleteUrl(url: string, data: object[]) {
    const newUrl: URL = new URL(url);

    data.forEach((keyValue: object) => {
        newUrl.searchParams.append(Object.keys(keyValue)[0], keyValue[Object.keys(keyValue)[0]]);
    });

    return newUrl.href;
}   

export function request(requestParameters: RequestParameters):Promise<RequestResponse> {
    return new Promise<RequestResponse>((resolve, reject) => {  
        const request: XMLHttpRequest = new XMLHttpRequest();
        request.open(requestParameters.type, requestParameters.data !== null ? getCompleteUrl(requestParameters.url, requestParameters.data) : requestParameters.url, true);

        if (requestParameters.headers) {
            Object.keys(requestParameters.headers).forEach((key: string) => {
                request.setRequestHeader(key, requestParameters.headers![key]);
            });
        }

        request.onload = () => {
            if (request.status >= 200 && request.status <= 300) {
                resolve({
                    status: request.status,
                    response: request.response
                });
            }
            else {
                reject({
                    status: request.status,
                    response: request.response
                });
            }

        };

        if (requestParameters.type === 'POST') {
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        request.send();
    });
}