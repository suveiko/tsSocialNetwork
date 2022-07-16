const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder='Login'/>
            </div>
            <div>
                <input placeholder='password'/>
            </div>
            <div>
                <input type='checkbox'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


export default LoginForm