class student {
  constructor(r, n) {
    this.roll = r;
    this.name = n;
  }
  display() {
    console.log(this.roll + " " + this.name);
  }
}

let s1=new student(1,"india")
s1.display()

