export function humanizeFormat(broj) {
    
    if (arguments.length === 0) {
        return '';
    }

    switch (broj % 10) {
        case 1:
            return broj + "st";
            break;
        case 2:
            return broj + "nd";
            break;
        case 3:
            return broj + "rd";
            break;
    }

    return broj + "th";
}