import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/features/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;

function MainLayout() {
  const dispatch = useAppDispatch();
  const handleLogout = () =>{
    dispatch(logout());
  }
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{display:'flex', alignItems:'center', justifyContent:"end"}} ><Button onClick={handleLogout}>Logout</Button></Header>
          <Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
