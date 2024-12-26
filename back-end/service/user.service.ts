import bcrypt from 'bcrypt';
import { AuthenticationResponse, UserJWTInput, UserInput } from '../types';
import { generateJwtToken } from '../util/jwt';
import { User } from '../model/user';
import userDb from '../repository/user.db';

const getAllUsers = async (): Promise<User[]> => {
    return await userDb.getAllUsers();
};

const getUserById = async ({ id }: { id: number }): Promise<User> => {
    const user = await userDb.getUserById({ id });
    if (!user) {
        throw new Error(`User with id: ${id} does not exist.`);
    }
    return user;
};

const getUserByUsername = async ({ username }: { username: string }): Promise<User> => {
    const user = await userDb.getUserByUsername({ username });
    if (!user) {
        throw new Error(`User with username: ${username} does not exist.`);
    }
    return user;
};

const getUserByEmail = async ({ email }: { email: string }): Promise<User> => {
    const user = await userDb.getUserByEmail({ email });
    if (!user) {
        throw new Error(`User with email: ${email} does not exist.`);
    }
    return user;
}

const authenticate = async ({ username, password }: UserJWTInput): Promise<AuthenticationResponse> => {
    if (!username || !password) {
        throw new Error('Username and password are required.');
    }
    const user = await getUserByUsername({ username });
    const isValidPassword = await bcrypt.compare(password, user.getPassword());

    if (!isValidPassword) {
        throw new Error('Incorrect username or password.');
    }
    return {
        token: generateJwtToken({ username, role: user.getRole() }),
        username: username,
        role: user.getRole(),
    };
};

const createUser = async ({ username, firstname, lastname, password, email, age, role, alreadycustomer }: UserInput): Promise<User> => {
    
    const existingUser = await userDb.getUserByEmail({ email });
    if (existingUser) {
        throw new Error(`User with username ${email} is already registered.`);
    }

    const newIncrementedId = await userDb.getNewIncrementedId();

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({id: newIncrementedId, username, firstname, lastname, password: hashedPassword, email, age, role, alreadycustomer });

    return await userDb.createUser(user);
};

export default { getAllUsers, getUserByUsername, authenticate, getUserById, createUser, getUserByEmail };