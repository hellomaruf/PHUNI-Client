import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../router/router.admin";
import { facultyPaths } from "../../router/router.faculty";
import { studentPaths } from "../../router/router.student";

const {  Sider } = Layout;

function Sidebar() {
    const userRole = {
        ADMIN : 'admin',
        FACULTY : 'faculty',
        STUDENT : 'student'
    }
    const role = 'admin'
    let sidebarItems;
    switch (role) {
        case userRole.ADMIN :
            sidebarItems = sidebarItemGenerator(adminPaths, 'admin')
            break;
        case userRole.FACULTY :
            sidebarItems = sidebarItemGenerator(facultyPaths, 'faculty')
            break;
        case userRole.STUDENT :
            sidebarItems = sidebarItemGenerator(studentPaths, 'student')
            break;
    
        default:
            break;
    }
  return (
    <div>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
         style={{height:'100vh'}}
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
            items={sidebarItems}
          />
        </Sider>
    </div>
  )
}

export default Sidebar
