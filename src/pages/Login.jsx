import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // prevent page reload
        navigate("/home"); // ✅ redirect to Home
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-orange-400">
            <div className="bg-white p-6 rounded-xl shadow-md w-80">
                <form 
                    onSubmit={handleLogin} 
                >
                <h1 className="text-2xl font-bold mb-4 text-center">Dating-UI</h1>
                <Input
                    type="email"
                    placeholder="Email"
                    className="mb-3"    
                />

                <Input
                    type="password"
                    placeholder="Password"
                    className="mb-4"
                />

                <Button 
                    type="submit"
                    className="w-full py-4 px-6"
                >
                        Login
                </Button>
            </form>
            </div>
        </div>
    );
}
