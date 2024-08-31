import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PersonList } from "./person/PersonList";
import { PersonCreate } from "./person/PersonCreate";
import { PersonEdit } from "./person/PersonEdit";
import { PersonShow } from "./person/PersonShow";
import { HealthRecordList } from "./healthRecord/HealthRecordList";
import { HealthRecordCreate } from "./healthRecord/HealthRecordCreate";
import { HealthRecordEdit } from "./healthRecord/HealthRecordEdit";
import { HealthRecordShow } from "./healthRecord/HealthRecordShow";
import { BirthDetailsList } from "./birthDetails/BirthDetailsList";
import { BirthDetailsCreate } from "./birthDetails/BirthDetailsCreate";
import { BirthDetailsEdit } from "./birthDetails/BirthDetailsEdit";
import { BirthDetailsShow } from "./birthDetails/BirthDetailsShow";
import { EducationRecordList } from "./educationRecord/EducationRecordList";
import { EducationRecordCreate } from "./educationRecord/EducationRecordCreate";
import { EducationRecordEdit } from "./educationRecord/EducationRecordEdit";
import { EducationRecordShow } from "./educationRecord/EducationRecordShow";
import { ChildList } from "./child/ChildList";
import { ChildCreate } from "./child/ChildCreate";
import { ChildEdit } from "./child/ChildEdit";
import { ChildShow } from "./child/ChildShow";
import { BankDetailList } from "./bankDetail/BankDetailList";
import { BankDetailCreate } from "./bankDetail/BankDetailCreate";
import { BankDetailEdit } from "./bankDetail/BankDetailEdit";
import { BankDetailShow } from "./bankDetail/BankDetailShow";
import { SpouseList } from "./spouse/SpouseList";
import { SpouseCreate } from "./spouse/SpouseCreate";
import { SpouseEdit } from "./spouse/SpouseEdit";
import { SpouseShow } from "./spouse/SpouseShow";
import { PassportDetailList } from "./passportDetail/PassportDetailList";
import { PassportDetailCreate } from "./passportDetail/PassportDetailCreate";
import { PassportDetailEdit } from "./passportDetail/PassportDetailEdit";
import { PassportDetailShow } from "./passportDetail/PassportDetailShow";
import { TravelDetailList } from "./travelDetail/TravelDetailList";
import { TravelDetailCreate } from "./travelDetail/TravelDetailCreate";
import { TravelDetailEdit } from "./travelDetail/TravelDetailEdit";
import { TravelDetailShow } from "./travelDetail/TravelDetailShow";
import { MarriageCertificateList } from "./marriageCertificate/MarriageCertificateList";
import { MarriageCertificateCreate } from "./marriageCertificate/MarriageCertificateCreate";
import { MarriageCertificateEdit } from "./marriageCertificate/MarriageCertificateEdit";
import { MarriageCertificateShow } from "./marriageCertificate/MarriageCertificateShow";
import { OtpList } from "./otp/OtpList";
import { OtpCreate } from "./otp/OtpCreate";
import { OtpEdit } from "./otp/OtpEdit";
import { OtpShow } from "./otp/OtpShow";
import { FamilyMemberList } from "./familyMember/FamilyMemberList";
import { FamilyMemberCreate } from "./familyMember/FamilyMemberCreate";
import { FamilyMemberEdit } from "./familyMember/FamilyMemberEdit";
import { FamilyMemberShow } from "./familyMember/FamilyMemberShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { AuthenticationRecordList } from "./authenticationRecord/AuthenticationRecordList";
import { AuthenticationRecordCreate } from "./authenticationRecord/AuthenticationRecordCreate";
import { AuthenticationRecordEdit } from "./authenticationRecord/AuthenticationRecordEdit";
import { AuthenticationRecordShow } from "./authenticationRecord/AuthenticationRecordShow";
import { SsnList } from "./ssn/SsnList";
import { SsnCreate } from "./ssn/SsnCreate";
import { SsnEdit } from "./ssn/SsnEdit";
import { SsnShow } from "./ssn/SsnShow";
import { GuestList } from "./guest/GuestList";
import { GuestCreate } from "./guest/GuestCreate";
import { GuestEdit } from "./guest/GuestEdit";
import { GuestShow } from "./guest/GuestShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
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
        title={"SSN Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Person"
          list={PersonList}
          edit={PersonEdit}
          create={PersonCreate}
          show={PersonShow}
        />
        <Resource
          name="HealthRecord"
          list={HealthRecordList}
          edit={HealthRecordEdit}
          create={HealthRecordCreate}
          show={HealthRecordShow}
        />
        <Resource
          name="BirthDetails"
          list={BirthDetailsList}
          edit={BirthDetailsEdit}
          create={BirthDetailsCreate}
          show={BirthDetailsShow}
        />
        <Resource
          name="EducationRecord"
          list={EducationRecordList}
          edit={EducationRecordEdit}
          create={EducationRecordCreate}
          show={EducationRecordShow}
        />
        <Resource
          name="Child"
          list={ChildList}
          edit={ChildEdit}
          create={ChildCreate}
          show={ChildShow}
        />
        <Resource
          name="BankDetail"
          list={BankDetailList}
          edit={BankDetailEdit}
          create={BankDetailCreate}
          show={BankDetailShow}
        />
        <Resource
          name="Spouse"
          list={SpouseList}
          edit={SpouseEdit}
          create={SpouseCreate}
          show={SpouseShow}
        />
        <Resource
          name="PassportDetail"
          list={PassportDetailList}
          edit={PassportDetailEdit}
          create={PassportDetailCreate}
          show={PassportDetailShow}
        />
        <Resource
          name="TravelDetail"
          list={TravelDetailList}
          edit={TravelDetailEdit}
          create={TravelDetailCreate}
          show={TravelDetailShow}
        />
        <Resource
          name="MarriageCertificate"
          list={MarriageCertificateList}
          edit={MarriageCertificateEdit}
          create={MarriageCertificateCreate}
          show={MarriageCertificateShow}
        />
        <Resource
          name="Otp"
          list={OtpList}
          edit={OtpEdit}
          create={OtpCreate}
          show={OtpShow}
        />
        <Resource
          name="FamilyMember"
          list={FamilyMemberList}
          edit={FamilyMemberEdit}
          create={FamilyMemberCreate}
          show={FamilyMemberShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="AuthenticationRecord"
          list={AuthenticationRecordList}
          edit={AuthenticationRecordEdit}
          create={AuthenticationRecordCreate}
          show={AuthenticationRecordShow}
        />
        <Resource
          name="Ssn"
          list={SsnList}
          edit={SsnEdit}
          create={SsnCreate}
          show={SsnShow}
        />
        <Resource
          name="Guest"
          list={GuestList}
          edit={GuestEdit}
          create={GuestCreate}
          show={GuestShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
      </Admin>
    </div>
  );
};

export default App;
