export interface Authentication {
    UserId: number,
    FirstName: number,
    LastName: string,
    Email: string,
    Password: string,
    ConfirmPassword: string,
    Token: string,
    IsAdmin: boolean,
    RememberMe: boolean,
    Role: string
}