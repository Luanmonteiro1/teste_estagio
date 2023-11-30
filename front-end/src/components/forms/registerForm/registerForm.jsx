import { useForm } from "react-hook-form";
import { Input } from "../../input/input"
import { registerFormSchema } from "./formSchemaRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss"

export const RegisterForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(registerFormSchema),
    })
    return (
        <form className= {styles.form} onSubmit={handleSubmit}>
        <div>
          <h1 className="title titleForm ">Crie sua conta</h1>
          <span className="title textSpan">
            Rapido e grátis, vamos nessa
          </span>
        </div>
        <Input
          label="Nome"
          type="text"
          {...register("name")}
          error={errors.name}
          placeholder="Digite aqui seu nome"
        //   disabled={loading}
        />

        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
          placeholder="Digite aqui seu email"
        //   disabled={loading}
        />

        <Input
          label="Senha"
          type="password"
          {...register("password")}
          error={errors.password}
          placeholder="Digite aqui sua senha"
        //   disabled={loading}
        />

        <Input
          label = "Confirmar senha"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          placeholder="Digite novamente sua senha"
        //   disabled={loading}
        />
        <div>
          <button className="btn cadaster" >
            {/* {loading ? "Cadastrando..." : "Cadastrar"} */}
            <p>Cadastrar</p>
          </button>
        </div>
      </form>
    )
}