class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++;

      if(printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let stringNum = value.toString()
    if(stringNum.length === 1) {
      return '0'+ stringNum;
    } else {
      return stringNum;
    }
  }

  stop() {
      clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minNum = this.getMinutes().toString()
    let secNum = this.getSeconds().toString()

    let minNumTwoDigits = this.computeTwoDigitNumber(minNum)
    let secNumTwoDigits = this.computeTwoDigitNumber(secNum)

    let obtainingTheSplitTime = minNumTwoDigits + ':' + secNumTwoDigits;
  
    return obtainingTheSplitTime
  }
}
