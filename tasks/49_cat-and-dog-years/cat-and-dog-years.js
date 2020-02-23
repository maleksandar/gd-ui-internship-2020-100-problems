export function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for (let i = humanYears; i > 0; i--) {
        switch (i) {
            case 1:
                catYears += 15;
                dogYears += 15;
                break;

            case 2:
                catYears += 9;
                dogYears += 9;
                break;

            default:
                catYears += 4;
                dogYears += 5;
        }
    }

    return [humanYears, catYears, dogYears];
}