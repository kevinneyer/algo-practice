// Given a starting salary and an annual raise, how many years would it take to reach desired new salary.

const findYears = () => {
    let currentSalary = 75000
    let desiredSalary = 100000

    // Declare your counter.
    let years = 0
    // State condition that needs to be true in order for loop to run.
    while( currentSalary <= desiredSalary ){
        // Calculate the raise.
        let raise = .015 * currentSalary
        // Update current salary to reflect raise.
        currentSalary += raise;
        // Add one year to the running total.
        years++
    }

    return years
}


