export const validate = element => {
    let error = [true, ""];

    if (element.validation.email) {
        const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid = regular.test(element.value);
        const message = `${!valid ? "Must be a valid e-mail" : ""}`;
        error = !valid ? [valid, message] : error;
    }
    if (element.validation.required) {
        const valid = element.value.trim() !== "";
        const message = `${!valid ? "This field is required" : ""}`;
        error = !valid ? [valid, message] : error;
    }
    return error;
};