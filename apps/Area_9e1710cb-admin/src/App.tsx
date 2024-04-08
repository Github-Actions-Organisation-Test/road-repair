import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { SupervisorList } from "./supervisor/SupervisorList";
import { SupervisorCreate } from "./supervisor/SupervisorCreate";
import { SupervisorEdit } from "./supervisor/SupervisorEdit";
import { SupervisorShow } from "./supervisor/SupervisorShow";
import { RepairList } from "./repair/RepairList";
import { RepairCreate } from "./repair/RepairCreate";
import { RepairEdit } from "./repair/RepairEdit";
import { RepairShow } from "./repair/RepairShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Area_9e1710cb"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Supervisor"
          list={SupervisorList}
          edit={SupervisorEdit}
          create={SupervisorCreate}
          show={SupervisorShow}
        />
        <Resource
          name="Repair"
          list={RepairList}
          edit={RepairEdit}
          create={RepairCreate}
          show={RepairShow}
        />
      </Admin>
    </div>
  );
};

export default App;
