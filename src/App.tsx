import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
  AntdLayout,
  Sider,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine-antd/dist/styles.min.css";
import { PostList } from "list";
import { CustomSider } from "sider";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      Layout={({ children, Footer, OffLayoutArea }) => (
        <AntdLayout>
          <AntdLayout.Header>
            <CustomSider />
          </AntdLayout.Header>
          <Sider />

          <AntdLayout.Content>
            <AntdLayout.Content>
              <div style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </AntdLayout.Content>
            {Footer && <Footer />}
          </AntdLayout.Content>
          {OffLayoutArea && <OffLayoutArea />}
        </AntdLayout>
      )}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      resources={
        [
          {
            name: "posts",
            options: {
              label: '邮寄'
            },
            list: PostList
          },
          {
            name: "test",
            options: {
              label: '测试'
            },
            list: PostList
          },
          {
            name: "test2",
            options: {
              label: '测试2'
            },
            list: PostList
          }
        ]
      }

    />
  );
};

export default App;