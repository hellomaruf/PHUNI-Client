import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
// import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

function MainLayout() {
  const items: MenuProps["items"] = [
    {
      key: 4,
      label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
    },
    {
      key: 2,
      label: "Profile",
    },
    {
      key: 3,
      label: "User management",
      children: [
        {
          key: 5,
          label: <NavLink to={"/admin/createAdmin"}>Create Admin</NavLink>,
        },
        {
          key: 6,
          label: <NavLink to={"/admin/createFaculty"}>Create Faculty</NavLink>,
        },
        {
          key: 7,
          label: <NavLink to={"/admin/createStudent"}>Create Student</NavLink>,
        },
      ],
    },
  ];
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60px",
            }}
          >
            <h2 style={{ color: "white" }}>PH UNI</h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
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
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
