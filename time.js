module.exports = class Time { 
  constructor(hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  timeOperator() {
    if (this.seconds >= 60){
      this.minutes++;
      this.seconds = this.seconds % 60;
    } 
    if (this.minutes >= 60){
      this.hours++;
      this.minutes = this.minutes % 60;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }

  scale(seconds) {
    this.seconds = this.seconds + seconds;
    this.timeOperator();
  }

  timeString() {
    this.timeOperator();
    if (this.hours < 10) this.hours = '0' + parseInt(this.hours);
    if (this.minutes < 10) this.minutes = '0' + parseInt(this.minutes);
    if (this.seconds < 10) this.seconds = '0' + parseInt(this.seconds);
    const time = this.hours + ':' + this.minutes + ':' + this.seconds;
    return time;
  }
}

// let t = new Time(1, 30, 20)
// t.timeString()
// t.scale(400)
// t.timeString()

// t = new Time(1, 100, 0)
// t.timeString()