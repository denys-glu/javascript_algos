function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1 // -1 because we dont want to check previous middle, we already checked it
        } else {
            start = middle + 1 // same here
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return arr[middle] === val ? middle : -1
}