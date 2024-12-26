import { User as Userprisma } from '@prisma/client';
import { Role } from '../types';

export class User {
    private id: number;
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private age: number;
    private password: string;
    private role: Role;
    private alreadycustomer: boolean;

    constructor(user: { id: number; username: string; firstname: string; lastname: string; email: string; age: number; password: string; role: Role; alreadycustomer: boolean; }) {
        this.validate(user);

        this.id = user.id;
        this.username = user.username;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.age = user.age;
        this.password = user.password;
        this.role = user.role;
        this.alreadycustomer = user.alreadycustomer;
    }

    validate(user: { id: number; username: string; firstname: string; lastname: string; email: string; age: number; password: string; role: Role; alreadycustomer: boolean;}) {
        if (!user.username?.trim()) {
            throw new Error('Username is required but was not given.');
        }
        if (!user.firstname?.trim()) {
            throw new Error('Firstname is required but was not given.');
        }
        if (!user.lastname?.trim()) {
            throw new Error('Lastname is required but was not given.');
        }
        if (!user.email.includes('@')) {
            throw new Error('Invalid email address.');
        }
        if (user.age <= 0) {
            throw new Error('Age must be a positive number.');
        }
        if (user.password.length < 8) {
            throw new Error('Password needs to be at least 8 characters long.');
        }
    }

    equals(user: User) {
        return (
            this.id === user.getId() &&
            this.username === user.getUsername() &&
            this.firstname === user.getFirstname() &&
            this.lastname === user.getLastname() &&
            this.email === user.getEmail() &&
            this.age === user.getAge() &&
            this.password === user.getPassword() &&
            this.role === user.getRole() &&
            this.alreadycustomer === user.getAlreadycustomer()
        );
    }

    static from({ id, username, firstname, lastname, email, age, password, role, alreadycustomer }: Userprisma) {
        return new User({ 
            id, 
            username,
            firstname, 
            lastname, 
            email, 
            age, 
            password, 
            role: role as Role,
            alreadycustomer
        });
    }

    // SETTERS
    setId(id: number) {
        this.id = id;
    }
    setUsername(username: string) {
        this.username = username;
    }
    setFirstname(firstname: string) {
        this.firstname = firstname;
    }
    setLastname(lastname: string) {
        this.lastname = lastname;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setAge(age: number) {
        this.age = age;
    }
    setPassword(password: string) {
        this.password = password;
    }
    setRole(role: Role) {
        this.role = role;
    }
    setAlreadycustomer(alreadycustomer: boolean) {
        this.alreadycustomer = alreadycustomer;
    }

    // GETTERS
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getFirstname() {
        return this.firstname;
    }
    getLastname() {
        return this.lastname;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    getAlreadycustomer() {
        return this.alreadycustomer;
    }
}
