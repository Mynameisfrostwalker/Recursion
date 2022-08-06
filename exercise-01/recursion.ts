const fibs = (num: number) => {
    const arr: number[] = [1, 1];
    for (let i = 3; i <= num; i += 1) {
      arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr;
  };
  
  const fibsRec = (num: number): number[] => {
    if (num === 2) {
      return [1, 1];
    }
  
    const arr = fibsRec(num - 1);
  
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  
    return arr;
  };
  
  console.log(fibsRec(8));