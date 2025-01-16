import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";

function Login() {
  const dispatch = useDispatch();
  const defaultValues = {
    id: "0001",
    password: "admin12345",
  };
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    dispatch(setUser({ user: {}, token: res.data.accessToken }));
    console.log(res.data.accessToken);
    const user = verifyToken(res.data.accessToken);
    console.log(user);
  };
  const [login, { data, error }] = useLoginMutation();
  console.log("data", data);
  console.log("error", error);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div className="">
          <label htmlFor="id">Password</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;