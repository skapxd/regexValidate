export class MapOfRegexValidate extends RegExp {
    static email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+/;
    static number = /[0-9]+/;
}