function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[min] + " " + arr[j] + " what we are comapring")
            if (arr[j] < arr[min]) {
                // console.log("changind min to: " + arr[j])
                min = j;
            }
        }
        if (i !== min) {
            // console.log("swapping " + arr[i] + " with " + arr[min])
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
        // console.log(arr[min] + " " + arr[i] + " new iteration-----------") 
    }
    return arr;
}


console.log(selectionSort([0, 4, 10, 12, -88, 15, 66, 5, 3, 2, 1]))