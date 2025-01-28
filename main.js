// Checkpoint Decision Making & Recursive Algorithms:
//! I - Decision Making: 
// 1.Leap Year Checker:
const leap = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return `${year} is a leap year.`;
    }

    else {return `${year} is not a leap year.`;
    }

}

//2.Ticket Pricing: 
const ticketPrice = (age) => {
    switch (true) {
        case (age <= 12): return `The ticket price is 10$`;   

        case (age <= 17): return `The ticket price is 15$`; 

        default: return `The ticket price is 20$`; 

    }
}

//3.Clothes Picker: 
const clothes = (temp, rain) => {
    if (temp < 12 && rain) {

        return `You should wear a coat and an umbrella.`;
    }
        else if (temp < 12 && !rain) {

            return `You should wear a coat.`;
    }
        else if (temp >= 12 && rain) {
            
            return `You should wear a t-shirt and an umbrella.`;
    }
        else `You should wear a t-shirt.`;
}

// ****************************************************************************************************************************************
//! II - Recursive Algorithms:
//1.Fibonacci Sequence:
const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}


//2.Palindrome Checker: 
const palindrome = (word) => {
    if (word.length <= 1) {
        return `${word} is a palindrome.`;
    }
    if (word[0] === word[word.length - 1]) {
        return palindrome(word.slice(1, word.length - 1));
    }
    return `${word} is not a palindrome.`;
}


//3.Power Calculator:
const power = (base, exponent) => {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}