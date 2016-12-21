/*
    Insertion Sorting
    This is a simple sorting algorithm, that build final sorting array. 
    This algorithm is based on decrease and conquor strategy
*/

function insertionSort(items){
    var len = items.length,
        i,j,val;
    for(i = 0; i < len; i++){
        val = items[i];
        for(j = i - 1; j > -1 && items[j] > val; j--){
            items[j + 1] = items[j];
        }
        items[j + 1] = val;
    }
    return items;
}

/* Insertion Sorting */