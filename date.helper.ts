/**
 * Change seconds to date
 * @param seconds seconds to change
 * @return date
 */
export const toDateTimeFromSeconds = (seconds: number) => {
    const T = new Date(Date.UTC(1970, 0, 1)); // Epoch
    T.setUTCSeconds(seconds);
    return T;
};

/**
 * Generate random chain
 * @returns 18-digit random ID chain
 */
export const getUidBasedOnDateNow = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
