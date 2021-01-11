const argv = process.argv.slice(2)


 const timer = (alarms) => {
   if (typeof alarms === "string") {
     return null;
  } 
  
  let alarmTimer = 0
  const sortedAlarms = alarms.map((number) => {
    return parseInt(number, 10);
  }).sort((a,b) => {
    return a-b
  })
  

  console.log(sortedAlarms);
  for (let alarm of sortedAlarms) {
    if (alarm > 0 && typeof alarm === "number"){ 
      alarmTimer += parseInt(alarm, 10);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (alarmTimer * 100))
    }
  }
  
}

timer(argv);