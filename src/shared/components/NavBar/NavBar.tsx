import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store/types";
import * as S from "./NavBar.styles";
import { Submenu } from "../Submenu/Submenu";
import { setIsSubmenuOpened } from "../../../store/reducers/coreReducer";

export const NavBar = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const isSubmenuOpened = useSelector((state: StoreState) => state.coreReducer.isSubmenuOpened);
  const dispatch = useDispatch();

  return (
    <S.NavBar>
      <S.AppName>Events</S.AppName>

      {user && (
        <S.UserOptions onClick={() => dispatch(setIsSubmenuOpened(!isSubmenuOpened))}>
          <S.UserDetails>
            <S.UserName>{user.name}</S.UserName>
            <S.Email>{user.email}</S.Email>
          </S.UserDetails>
          <S.ProfilePicture src={user.picture} alt="user image" />
        </S.UserOptions>
      )}

      <Submenu />
    </S.NavBar>
  );
};
