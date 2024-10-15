function mergeInplace(array, lo, mid, hi) {
    var i = lo;
    var j = mid + 1;

    while ( i <= mid && j <= hi) {
        if (array[i] <= array[j]) {
            i++;
        } else {
            var value = array[j];

            // shift elements by 1
            for (var index = j; index > i; index--) {
                array[index] = array[index - 1];
            }
            array[i] = value;

            // continue merging
            i++;
            mid++;
            j++;
        }
    }
}

function mergesort(array) {

    var n = array.length;
    var size;

    // start with size 1 then increase the size by double each iteration
    for (size = 1; size < n; size *= 2) {
        for (var lo = 0; lo < n - size; lo += 2 * size) {
            var mid = lo + size - 1;
            var hi = Math.min(lo + 2 * size - 1, n - 1);

            // merge the subarrays in-place
            mergeInplace(array, lo, mid, hi);
        }
    }
    return array;
}
