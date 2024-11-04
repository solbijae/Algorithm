function solution(arr) {
    let end = [...arr];
    let count = 0;

    while (true) {
        let allTrue = true;

        for (let idx = 0; idx < end.length; idx++) {
            if (end[idx] !== true) {
                let val = end[idx];
                
                if (val >= 50 && val % 2 === 0) {
                    end[idx] = val / 2;
                } else if (val < 50 && val % 2 === 1) {
                    end[idx] = val * 2 + 1;
                }
                
                if (end[idx] === val) {
                    end[idx] = true;
                } else {
                    allTrue = false;
                }
            }
        }
        
        if (allTrue) break;
        count += 1;
    }
    
    return count;
}
