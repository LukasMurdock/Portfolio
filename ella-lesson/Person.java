public class Person {
    // fields: variables that describe the class
    String name;
    int age;
    String hobby;
    

    String dsafs = "dafd";
    public Person(String n, int a, String h) {
        name = n;
        age = a;
        hobby = h;
    }

    public void introduce() {
        System.out.println("Hello, my name is " + name);
    }

    public int getAge() {
        return age;
    }

    public void rename(String n) {
        name = n;
    }

    public int getAgeAfter10Years() {
        int newAge = age + 10;
        return newAge;
    }
}