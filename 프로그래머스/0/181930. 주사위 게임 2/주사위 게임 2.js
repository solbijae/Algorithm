function solution(a, b, c) {
    const term1 = a + b + c;
    const term2 = a**2 + b**2 + c**2;
    const term3 = a**3 + b**3 + c**3;
    
    if (a != b && b != c && a != c) {
        return term1;
    } else if (a == b && b == c) {
        return term1 * term2 * term3;
    } else {        
        return term1 * term2;
    }
}