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
export declare function getCompleteUrl(url: string, data: object[]): string;
export declare function request(requestParameters: RequestParameters): Promise<RequestResponse>;
