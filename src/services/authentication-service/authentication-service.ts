export class AuthenticationService {
    public login = (loginDetails: any) => {
        return new Promise((resolve) => {
            localStorage.setItem('auth', JSON.stringify(loginDetails))
            resolve(loginDetails);
        });
    }

    public logOut = () => {
        return new Promise((resolve) => {
            localStorage.clear();
            resolve();
        });
    }
}

