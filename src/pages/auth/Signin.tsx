import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export const Signin = () => {
  const { register, handleSubmit } = useForm();
  const { signin } = useAuth();

  const handleSignin = handleSubmit((formData) => {
    const authData = {
      email: formData.email,
      password: formData.password,
    };
    signin(authData);
  });

  return (
    <div className="grid place-content-center h-screen bg-zinc-900">
      <div className="flex flex-col bg-zinc-950 p-2 w-[500px] h-[500px]">
        <h1 className="text-center text-3xl">Inicia sesión</h1>
        <form
          onSubmit={handleSignin}
          className="flex flex-col gap-6 h-full justify-center items-center"
        >
          <label className="flex flex-col">
            Correo electronico
            <input
              className="p-2 bg-zinc-900 border border-gray-400 outline-none rounded-sm"
              placeholder="Correo electrónico"
              type="text"
              {...register("email")}
            />
          </label>
          <label className="flex flex-col">
            Contraseña
            <input
              className="p-2 bg-zinc-900 border border-gray-400 outline-none rounded-sm"
              placeholder="Contraseña"
              type="password"
              {...register("password")}
            />
          </label>
          <button className="font-bold text-sm p-3 rounded-3xl w-64 text-black bg-green-500 hover:bg-green-400 hover:scale-105">
            Iniciar sesión
          </button>
          <div className="flex gap-1">
            <p className="text-gray-400">No tienes cuenta?</p>
            <Link to="/signup">Registrate aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
