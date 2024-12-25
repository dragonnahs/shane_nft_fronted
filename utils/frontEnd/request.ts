

export const request = async ({url, method = "GET", body = {}, params = {}}: {url: string, method?: string, body?: object, params?: object}) => {
    let urlStr = process.env.NEXT_PUBLIC_API_URL + url;
    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: method.toUpperCase() === "GET" ? undefined : JSON.stringify(body)
    }
    if (Object.keys(params).length > 0) {
        // Convert params to URL parameters
        urlStr += "?" + Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
            .join("&");
    }
    const response = await fetch(urlStr, config);
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};
