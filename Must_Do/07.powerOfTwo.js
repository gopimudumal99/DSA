// Given a positive integer N. Check if it is a power of two or not.
// input: N = 4;
//O(log(N)), where N is the positive integer.
function powerTwo(n) { 
	let count = 0;
		while(n > 0){
            if (n % 2 == 1) {
                count++;
            }
            n = parseInt(n / 2);
    }
		return count == 1 ;
}
console.log(powerTwo(1));