import { TokenResponse, googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../store/reducers/userReducer";
import useToast from "../shared/hooks/useToast";

export const useGoogleService = () => {
  const dispatch = useDispatch();
  const toast = useToast();

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
    } catch (err) {
      toast.show({
        message: "There was an error while fetching your infromation.",
        severity: "error",
        wait: 3000,
      });
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
    onError: () =>
      toast.show({
        message: "There was an error while trying to log in.",
        severity: "error",
        wait: 3000,
      }),
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
