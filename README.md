# Form with useReducer

Form coded with using of [useReducer](https://it.reactjs.org/docs/hooks-reference.html#usereducer).

## Labels positioning

The Reducer is used to manage the position of the labels while content is inside the boxes.

## Password fields visibility

You can also switch visibility of the Password field and Confirm Password field, with a click on the icon managed by useState.

## Validation of fields

The form is validating throught these criteria:

- **Name**: if there is a name included in DUMMY_NAMES array, it will return as "already in use";

```
const DUMMY_NAMES = [ "Neo", "Trinity", "Morpheus", "Cypher", "Tank", "Apoc", "Mouse", "Switch", "Dozer" ];
```

- **Email**: if the string doesn't contain the "@", the form will give an error message;

- **Password**: it as to be at least 8 digits;

- **Confirm password**: as obvious, it must be equal to the password field.

## Thanks

Thanks for [Advent of CSS](https://www.adventofcss.com/) and [JAVASCRIPT](https://www.adventofjs.com/) for the graphic template.
