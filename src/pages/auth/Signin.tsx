import { FormEvent } from "react";
import { AuthService } from "../../services/auth";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Signin = () => {
  const { setIsLogin, setToken } = useAuthStore();
  const navigate = useNavigate();
  const login = async (body) => {
    try {
      const token = await AuthService.signin(body);
      setIsLogin(true);
      setToken(token);
      navigate("/home");
      toast.success("Sesión iniciada");
    } catch (error) {
      toast("Credenciales invalidas");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const emailInput = elements.namedItem("email") as HTMLInputElement;
    const passwordInput = elements.namedItem("password") as HTMLInputElement;

    const authData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    login(authData);
  };

  return (
    <div className="grid place-content-center h-screen bg-zinc-900">
      <div className="flex flex-col bg-zinc-950 p-2 w-[500px] h-[500px]">
        <h1 className="text-center text-3xl">Iniciar sesión</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 h-full justify-center items-center"
        >
          <label className="flex flex-col">
            Correo electronico
            <input
              className="p-2 bg-zinc-900 border border-gray-400 outline-none rounded-sm"
              placeholder="Correo electrónico"
              type="text"
              name="email"
            />
          </label>
          <label className="flex flex-col">
            Contraseña
            <input
              className="p-2 bg-zinc-900 border border-gray-400 outline-none rounded-sm"
              placeholder="Contraseña"
              type="password"
              name="password"
            />
          </label>
          <button className="font-bold text-sm p-3 rounded-3xl w-64 text-black bg-green-500 hover:bg-green-400 hover:scale-105">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
