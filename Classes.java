class student {
    int roll;
    String name;
    student(int r, String n) {
        roll = r;
        name = n;
    }
    void display() {
        System.out.println(roll+" "+name);
    }
}

class Classes {
    public static void main(String[] args) {
        student s1;
        s1=new student(1,"India");
        s1.display();
    }
}
