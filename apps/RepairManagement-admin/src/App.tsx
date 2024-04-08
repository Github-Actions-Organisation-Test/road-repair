import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RepairList } from "./repair/RepairList";
import { RepairCreate } from "./repair/RepairCreate";
import { RepairEdit } from "./repair/RepairEdit";
import { RepairShow } from "./repair/RepairShow";
import { RepairScheduleList } from "./repairSchedule/RepairScheduleList";
import { RepairScheduleCreate } from "./repairSchedule/RepairScheduleCreate";
import { RepairScheduleEdit } from "./repairSchedule/RepairScheduleEdit";
import { RepairScheduleShow } from "./repairSchedule/RepairScheduleShow";
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
        title={"RepairManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Repair"
          list={RepairList}
          edit={RepairEdit}
          create={RepairCreate}
          show={RepairShow}
        />
        <Resource
          name="RepairSchedule"
          list={RepairScheduleList}
          edit={RepairScheduleEdit}
          create={RepairScheduleCreate}
          show={RepairScheduleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
