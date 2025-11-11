// if we give 523 - need to show as the five hundred twenty three
public class NumToWord {
    public static void main(String[] args) {
        int number = 523;
        System.out.println(convertNumberToWords(number));
    }

    private static String convertNumberToWords(int number) {
        if (number == 0) {
            return "zero";
        }

        String[] unitsArray = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
        String[] tensArray = { "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };

        String words = "";

        if (number >= 100) {
            words += unitsArray[number / 100] + " hundred ";
            number %= 100;
        }

        if (number >= 20) {
            words += tensArray[number / 10] + " ";
            number %= 10;
        }

        if (number > 0) {
            words += unitsArray[number] + " ";
        }

        return words.trim();
    }
    
}