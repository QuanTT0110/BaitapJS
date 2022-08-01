function weeklySalary(arr){
    let salary =0 ;
    for(let i =0;i<arr.length;i++){
        if(i>=0 && i<=4 ){
            if(arr[i]>0 && arr[i]<=8){
                salary = salary + arr[i]*10
            }else 
            if(arr[i]>=8){
                salary = salary + 80 + ((arr[i]-8)*15)
            }
        }else
        if(i>4){
            if( arr[i]>0 && arr[i]<=8){
                salary = salary + (arr[i]*20);
            }else 
            if( arr[i]>=8){
                console.log(salary);
                salary = salary + 160 + ((arr[i]-8)*30);
            }
        }
    }
    return salary;
}



console.log(weeklySalary(([8, 4, 3, 8, 10, 0, 0])));