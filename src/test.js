import { regexValidate } from "./regexValidate";

import { MapOfRegExpValidate } from "./MapOfRegExpValidate";

const isValid = regexValidate({
    stringToValidate: "test@test.test",
    regExp: MapOfRegExpValidate.email,
});

console.log({ isValid });