var countBits = function(num) {
    let ans = [num+1];
        for(let i=0;i<=num;i++){
            let count=0;
            let n = i;
            while(n >0){   
                n = n & (n-1);      //bitmask
                count++;
            }
            ans[i] = count;
        }
        return ans;
    }



/*
Runtime: 96 ms, faster than 80.97% of JavaScript online submissions for Counting Bits.
Memory Usage: 44.9 MB, less than 72.27% of JavaScript online submissions for Counting Bits.
/*
