import { useDispatch } from "react-redux";
import { setAuthInfo } from "../store/auth.slice";
import { clearToken } from "../server/auth.actions";
import { useRouter } from "next/navigation";

export default function useLogout() {
    const dispatch = useDispatch();
    const router = useRouter();

    const logout = async () => {
        await clearToken();

        dispatch(setAuthInfo({ isAuthenticated: false, userInfo: null }));

        router.push("/login");

        router.refresh();
    };

    return { logout };
}