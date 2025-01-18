import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultValues = {
    id: "0001",
    password: "admin12345",
  };
  const { register, handleSubmit } = useForm({
    defaultValues,
  });
  const onSubmit = async (data : FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: {user}, token: res.data.accessToken }));
      console.log(res);
      
      toast.success("Login successful", { id: toastId, duration:2000 },);
      console.log(user);
      navigate(`/admin/dashboard`);
    }
    catch (error) {
      console.log(error);
    }
  };
  const [login] = useLoginMutation();

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
