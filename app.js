for (let i=1;i<=20;i++){
    if (i%3 == 0 && i%5==0) {
        console.log("Frontend Simplified")

    }
    else if(i%5==0) {
        console.log('Simplified')
    }
    else if(i%3==0) {
        console.log("Frontend")
    } 
    else if (i%3 != 0 && i%5 != 0) {
        console.log(i)
    }
}