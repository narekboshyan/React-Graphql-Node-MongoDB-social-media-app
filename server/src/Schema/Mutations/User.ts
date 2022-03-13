import { GraphQLList, GraphQLString, GraphQLID } from "graphql";
import { UserType } from "../TypeDefs//User";
import { Users } from "../../Entities/Users";
import { MessagesType } from "../TypeDefs/Messages";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any): Promise<any> {
        const { name, username, password } = args;
        await Users.insert({ name, username, password });
        return args;
    },
};

export const UPDATE_PASSWORD = {
    type: MessagesType,
    args: {
        username: {
            type: GraphQLString,
        },
        oldPassword: {
            type: GraphQLString,
        },
        newPassword: {
            type: GraphQLString,
        },
    },
    async resolve(parent: any, args: any): Promise<any> {
        const { username, oldPassword, newPassword } = args;
        const user = await Users.findOne({ username });
        if (!user) {
            throw new Error("Username doesn't exist");
        }
        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            await Users.update({ username }, { password: newPassword });
            return {
                successful: true,
                message: "Password Updated",
            };
        } else {
            throw new Error("Passwords do not match");
        }
    },
};

export const DELETE_USER = {
    type: MessagesType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    async resolve(parent: any, args: any): Promise<any> {
        await Users.delete(args.id);

        return {
            successful: true,
            message: "successfully deleted",
        };
    },
};
