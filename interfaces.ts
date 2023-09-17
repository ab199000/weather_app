export interface IUser{
    cell: string,
    dob: {
        age: number,
        date: string
    },
    gender: string,
    id: {
        name: string,
        value: string
    },
    name:{
        first: string,
        last: string,
        title: string
    },
    picture:{
        large: string,
        medium: string,
        thumbnail: string
    }
}