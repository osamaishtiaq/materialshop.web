export const isFalsy = (obj) => {
    if (typeof obj === 'undefined' || obj === null || obj === '' || obj == false) {
        return true;
    }
    return false;
}