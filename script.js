const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let left=0
    let sum=arr[left]
    let subArray=[]
    for(let i=1;i<arr.length;i++){
        sum+=arr[i]
        if(sum>=n){
            subArray.push(arr.slice(left,i))
             left=i
            sum=arr[i]
        }
    }
    if(left<arr.length){
        subArray.push(arr.slice(left))
    }
    return subArray
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
