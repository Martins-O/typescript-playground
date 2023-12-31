type strNum = string|number
type objWithName = {name: string, uid: strNum}

const logDetails = (uid: string | number, item : string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetings = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}