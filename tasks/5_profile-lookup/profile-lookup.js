const array=[
    {firstname: "Kristian", lastName: "Vos"},
    {firstname: "Sherlock", likes: ["Intriguing Cases", "Violin"]},
    {firstname: "Akira"},
    {firstname: "Harry", likes: ["Intriguing Cases", "Violin"]},

]

export function lookupProfile(firstname, prop){
    var filtered = array.filter(contact => (contact.firstname===firstname))

    if(filtered.length===0){
        return 'No such contact';
    }

    filtered = filtered.filter(contact => (contact.hasOwnProperty(prop)));

    if(filtered.length===0){
        return 'No such property';
    }

    return (filtered[0])[prop];
}



