"use client";

import { GoShareAndroid } from "react-icons/go";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  title: z.string().min(3, "O título é obrigatório (mínimo 3 caracteres)"),
  email: z.string().email("Digite um e-mail válido"),
  message: z
    .string()
    .min(1, "A mensagem é obrigatória")
    .max(254, "Máximo de 254 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function Footer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const message = watch("message") || "";

  async function onSubmit(data: FormData) {
    try {
      console.log("Dados enviados:", data);

      toast.success("Mensagem enviada com sucesso!", {
        position: "top-center",
        autoClose: 3000,
      });

      reset();
    } catch (err) {
      console.error("Erro ao enviar:", err);
      toast.error("Erro ao enviar a mensagem. Tente novamente.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  return (
    <footer className="flex flex-col items-start justify-center gap-10 px-4 py-10 w-full h-fit md:flex-row bg-neutral-800">

      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="flex flex-col items-center">
          <img
            src="./assets/LemonPopLogo.png"
            alt="LemonPop Logo"
            className="w-[10rem] filter brightness-0 invert"
          />
          <div className="rounded-[50%] overflow-hidden">
            <img src="./assets/LemonPopMascote.png" alt="LemonPop Logo" className="w-[10rem]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:max-w-[400px]">
          <div className="text-white text-center">
            <p>
              “Programar é a minha vibe — e o lofi é o que acalma meus pensamentos. Juntos eles
              constroem um mundo onde tudo faz sentido.”
            </p>
            <br />
            <p>— Ícaro Carvalho</p>
          </div>
          {/* Social */}
          <div className="flex gap-5 text-2xl text-white">
            <GoShareAndroid className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaLinkedin className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaGithub className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
            <FaUser className="cursor-pointer transform transition duration-300 ease-in-out hover:translate-y-[-4px] active:scale-90" />
          </div>
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full gap-4 w-full md:max-w-[400px]">
        {/* Título */}
        <input
          type="text"
          placeholder="Título..."
          maxLength={50}
          {...register("title")}
          className="py-1 px-2 rounded-xl w-full bg-stone-50"
        />
        {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Seu e-mail..."
          {...register("email")}
          className="py-1 px-2 rounded-xl w-full bg-stone-50"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

        {/* Mensagem */}
        <textarea
          placeholder="Deixe uma mensagem para mim..."
          maxLength={254}
          {...register("message")}
          className="py-1 px-2 h-[200px] rounded-xl bg-stone-50"
        ></textarea>
        {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}

        {/* Contador */}
        <div className="flex justify-end w-full text-white">
          <p className={message.length === 254 ? "text-red-400" : ""}>
            {message.length}/254
          </p>
        </div>

        {/* Botão */}
        <div className="flex w-full md:justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center py-2 px-4 w-full text-white border-2 rounded-2xl cursor-pointer md:w-fit hover:bg-white hover:text-neutral-800 transition disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Mandar mensagem"}
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer />
    </footer>
  );
}
