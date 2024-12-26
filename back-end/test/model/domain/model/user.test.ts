import { User } from '../../../../model/user';
import { Role } from '../../../../types';

test('given: valid values for user, when: creating new user, then user is created with those values', () => {
    const validUser = new User({
        id: 1,
        username: "frankysmith",
        firstname: "frank",
        lastname: "smith",
        email: "franky@gmail.com",
        age: 25,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    });

    expect(validUser.getId()).toBe(1);
    expect(validUser.getFirstname()).toBe("frank");
    expect(validUser.getLastname()).toBe("smith");
    expect(validUser.getEmail()).toBe("franky@gmail.com");
    expect(validUser.getAge()).toBe(25);
    expect(validUser.getPassword()).toBe("password123");
    expect(validUser.getRole()).toBe(Role.User);
    expect(validUser.getAlreadycustomer()).toBe(true);
});

test('given no input for firstname, when creating new user, then user is not created', () => {
    const invalidUserInput = {
        id: 1,
        username: "frankysmith",
        firstname: "",
        lastname: "smith",
        email: "franky@gmail.com",
        age: 25,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    };

    expect(() => new User(invalidUserInput)).toThrowError('Firstname is required but was not given.');
});

test('given no input for lastname, when creating new user, then user is not created', () => {
    const invalidUserInput = {
        id: 1,
        username: "frankysmith",
        firstname: "Frank",
        lastname: "",
        email: "franky@gmail.com",
        age: 25,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    };

    expect(() => new User(invalidUserInput)).toThrowError('Lastname is required but was not given.');
});

test ('given invalid email address, when creating new user, then user is not created', () => {
    const invalidUserInput = {
        id: 1,
        username: "frankysmith",
        firstname: "Frank",
        lastname: "Smith",
        email: "frankygmail.com",
        age: 25,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    };

    expect(() => new User(invalidUserInput)).toThrowError('Invalid email address.');
});

test ('given negative age, when creating new user, then user is not created', () => {
    const invalidUserInput = {
        id: 1,
        username: "frankysmith",
        firstname: "Frank",
        lastname: "Smith",
        email: "franky@gmail.com",
        age: -1,
        password: "password123",
        role: Role.User,
        alreadycustomer: true,
    };

    expect(() => new User(invalidUserInput)).toThrowError('Age must be a positive number.');
});

test ('given password with less than 8 characters, when creating new user, then user is not created', () => {
    const invalidUserInput = {
        id: 1,
        username: "frankysmith",
        firstname: "Frank",
        lastname: "Smith",
        email: "franky@gmail.com",
        age: 50,
        password: "pass",
        role: Role.User,
        alreadycustomer: true,
    };

    expect(() => new User(invalidUserInput)).toThrowError('Password needs to be at least 8 characters long.');
});