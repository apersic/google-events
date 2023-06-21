import { MainLayout, PageTitle } from "./HomePage.styles";
import { Button } from "../../shared/components/Button/Button";
import { useSelector } from "react-redux";
import { useGoogleService } from "../../services/useGoogleService";
import { StoreState } from "../../store/types";

export const HomePage = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const { login, logout } = useGoogleService();

  return (
    <MainLayout>
      <PageTitle>Events</PageTitle>
      {user ? (
        <div>
          <img src={user.picture} alt="user image" />
          <p>Name: {user.name}</p>
          <p>Email Address: {user.email}</p>
          <Button onClick={logout} label="Log out" />
        </div>
      ) : (
        <Button onClick={login} label="Sign in with Google" />
      )}
    </MainLayout>
  );
};
