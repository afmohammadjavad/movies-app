import { ReactElement } from "react";
import { Layout, ConfigProvider } from "antd";
import { Content } from "antd/lib/layout/layout";
import faIR from "antd/lib/locale-provider/fa_IR";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//? Interface
interface IProps {
  children: ReactElement;
}

//* Target Component
function PublicLayout({ children }: IProps): ReactElement {
  return (
    <ConfigProvider direction="ltr" locale={faIR}>
      <Layout hasSider={false} style={{minHeight: '100vh'}}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default PublicLayout;
