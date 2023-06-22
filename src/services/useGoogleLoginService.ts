import { TokenResponse, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../store/reducers/userReducer";
import { showToast } from "../shared/hooks/useToast";

export const useGoogleLoginService = () => {
  const dispatch = useDispatch();

  const getUser = async (accessToken: string) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );

      dispatch(setUser(response.data));
    } catch (error) {
      showToast("There was an error while fetching your information.");
    }
  };

  const onLoginSucces = (
    tokenResponse: Omit<TokenResponse, "error" | "error_description" | "error_uri">
  ) => {
    dispatch(setAccessToken(tokenResponse.access_token));
    getUser(tokenResponse.access_token);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse: Omit<TokenResponse, "error" | "error_description" | "error_uri">) =>
      onLoginSucces(tokenResponse),
    onError: () => {
      showToast("There was an error while trying to log in.");
    },
  });

  const logout = () => {
    googleLogout();
    dispatch(setUser(null));
  };

  return {
    login,
    logout,
  };
};
