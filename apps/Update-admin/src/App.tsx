import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UpdateList } from "./update/UpdateList";
import { UpdateCreate } from "./update/UpdateCreate";
import { UpdateEdit } from "./update/UpdateEdit";
import { UpdateShow } from "./update/UpdateShow";
import { ResidentList } from "./resident/ResidentList";
import { ResidentCreate } from "./resident/ResidentCreate";
import { ResidentEdit } from "./resident/ResidentEdit";
import { ResidentShow } from "./resident/ResidentShow";
import { ComplaintList } from "./complaint/ComplaintList";
import { ComplaintCreate } from "./complaint/ComplaintCreate";
import { ComplaintEdit } from "./complaint/ComplaintEdit";
import { ComplaintShow } from "./complaint/ComplaintShow";
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
        title={"Update"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Update"
          list={UpdateList}
          edit={UpdateEdit}
          create={UpdateCreate}
          show={UpdateShow}
        />
        <Resource
          name="Resident"
          list={ResidentList}
          edit={ResidentEdit}
          create={ResidentCreate}
          show={ResidentShow}
        />
        <Resource
          name="Complaint"
          list={ComplaintList}
          edit={ComplaintEdit}
          create={ComplaintCreate}
          show={ComplaintShow}
        />
      </Admin>
    </div>
  );
};

export default App;
