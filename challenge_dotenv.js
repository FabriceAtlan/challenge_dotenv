import "dotenv/config";

const { MY_NAME=Fabrice, MY_CITY=Camoël, MY_LANGUAGE=Français } = process.env;

console.log(`I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}.`);
