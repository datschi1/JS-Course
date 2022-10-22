function loggedSubscribed(log,subscribe){
    if (log === "logged_in" && subscribe === "Subscribed"){
        return true
    }
}

console.log(loggedSubscribed("logged_in","Subscribed"))