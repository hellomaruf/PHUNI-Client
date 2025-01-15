import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

function MainLayout() {

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
      <Sidebar />
        <Layout>
          <Header style={{ padding: 0 }} />
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
