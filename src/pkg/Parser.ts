export function ParseOpenQuestion(userAnswer:string, correctAnswer:string): number {
    let total = 0
    const ua  = userAnswer.toLowerCase().split(" ")
    const ca = correctAnswer.toLocaleLowerCase().split(" ");

    for (let i = 0; i < ua.length; i++) {
        if (ca.includes(ua[i])) total += 3
    }

    return total
}