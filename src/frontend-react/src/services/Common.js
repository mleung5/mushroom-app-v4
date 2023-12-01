export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
// export const APP_VERSION = 2.0;
export const APP_VERSION = 2.999;   // pretend the code changed here from 2.0 to 2.999

export function epochToJsDate(ts) {
    let dt = new Date(ts)
    return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
}