export function capitalizeFirst(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
}


export function getAge(dob){
    let dateDifMs = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(dateDifMs.getUTCFullYear() - 1970);
}