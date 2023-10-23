class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime ++

      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000) 
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    let getTime = value.toString();

   if (getTime.length === 1) {
      return '0' + getTime
    }else {
      return getTime;
    }
  }

  stop() {
      clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minNum = this.getMinutes().toString();
    let secNum = this.getSeconds().toString();
    let centNum = this.getCentiseconds().toString();

    let min = this.computeTwoDigitNumber(minNum);
    let sec = this.computeTwoDigitNumber(secNum);
    let cent = this.computeTwoDigitNumber(centNum);

    let obtainingTheSplitTime = min + ':' + sec + '.' +  cent;
  
    return obtainingTheSplitTime
  }
}
