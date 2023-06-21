import { useDispatch, useSelector } from "react-redux";
import { useGoogleLoginService } from "../../../services/useGoogleLoginService";
import * as S from "./Submenu.styles";
import { StoreState } from "../../../store/types";
import { setIsSubmenuOpened } from "../../../store/reducers/coreReducer";

export const Submenu = () => {
  const { logout } = useGoogleLoginService();
  const isSubmenuOpened = useSelector((state: StoreState) => state.coreReducer.isSubmenuOpened);
  const dispatch = useDispatch();

  if (isSubmenuOpened) {
    return (
      <S.Submenu>
        <S.SubmenuWrapper onClick={() => dispatch(setIsSubmenuOpened(false))}>
          <S.List>
            <S.MenuItem onClick={logout}>Log out</S.MenuItem>
          </S.List>
        </S.SubmenuWrapper>
      </S.Submenu>
    );
  }

  return <></>;
};
