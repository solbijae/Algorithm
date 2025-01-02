function solution(arr, queries) {
//     queries.map((val, idx) => {
//         const range = [];
//         const k = val[2];
        
//         for (let i = val[0]; i <= val[1]; i++ ) {
//             range.push(i);
//         }
        
//         range.map(val => {
//             if (val % k === 0) {
//                 arr[val] += 1;
//             }
//         });
//     });
    
//     return(arr);
    
    for (let [s,e,k] of queries) {
        for (let i=s; i<=e; i++) {
            if (i%k === 0) arr[i]++;
        }
    }
    return arr;
}