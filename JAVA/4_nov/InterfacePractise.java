interface Python{
	void code();
	void command();
}
interface Js{
	void execute();
}

class Language implements Python,Js{
	public void code() {
		System.out.println("python code : \ndef greet:\n printf('Hello World')");
	}
	public void command() {
		System.out.println("python3 fileName");
	}
	
	public void execute() {
		System.out.println("Javascript command to run is nodemon fileName.js ");
	}
}
public class InterfacePractise {
	public static void main(String[] args) {
		Language l = new Language();
		l.code();
		l.command();
		l.execute();
	}
}
