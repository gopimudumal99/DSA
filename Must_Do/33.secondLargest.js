function secondLargest(arr, n) { 
    let largest = second = third = -Infinity

    for (var i = 0; i < n; i++) { 
        if (arr[i] > largest) {
            third = second;
            second = largest;
            largest = arr[i];
        }
        // else if (arr[i] != largest && arr[i] > second) {
        else if (arr[i] != largest && arr[i] > second) {
          third = second;
          second = arr[i];
        } else if (arr[i] > third && arr[i] != second && arr[i] != largest) {
          third = arr[i];
        }
    }
    console.log(third)
}

secondLargest([1, 2, 3, 4, 5], 5)


function secondMinu(arr, n) { 
    let first_min = second_min = Infinity;
    for (var i = 0; i < n; i++) { 
        if (arr[i] < first_min) {
            second_min = first_min
            first_min = arr[i]
        }
        else if (arr[i] < second_min && arr[i] != first_min) { 
            second_min = arr[i]
        }
    }
    console.log(second_min)
}

secondMinu([1, 2, 3, 4, 5], 5);