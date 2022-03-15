function trie(arr) {
    for ( i = 0; i < (arr.length)-1; i++)
    {
        min=i;
        for ( j = i+1; j < arr.length; j++)
        {
            if (arr[j]<=arr[min])
            {
                min=j;
            }
        }
        x=arr[i];
        arr[i]=arr[min];
        arr[min]=x;
        
    }
    
    return arr;
}
var ary = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(trie(ary));

