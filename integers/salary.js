// Given a starting salary and an annual raise, how many years would it take to reach desired new salary.

const findYears = () => {
    let currentSalary = 75000
    let desiredSalary = 100000

    // years will start w/ 1 given you need to have worked a year before receiving a raise
    let years = 1
    
    while( currentSalary <= desiredSalary ){
        let bonus = .015 * currentSalary
        currentSalary += bonus;
        years++
    }

    return years
}