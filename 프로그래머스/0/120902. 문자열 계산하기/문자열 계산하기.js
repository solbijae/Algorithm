function solution(my_string) {
    const arr = my_string.split(' ');
    let answer = parseInt(arr[0]);
    
    for (i=1; i<arr.length; i++) {
        let num = arr[i+1];
        if (arr[i] == "+") answer += parseInt(num);
        if (arr[i] == "-") answer -= parseInt(num);
    }
    
    return answer;
}