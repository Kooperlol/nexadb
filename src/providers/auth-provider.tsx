"use client";
import {
  ReactNode,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import LoadingPage from "../app/[locale]/loading";
import { useLocale } from "next-intl";

interface UserResponse {
  user: string | null;
  error: Error | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps extends UserResponse {
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const locale = useLocale();
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/me");
        setUser(response.data);
      } catch (error) {
        setError(error as Error);
        router.push(`/${locale}/admin`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const value = { user, error, loading };

  if (loading) return <LoadingPage />;

  if (path === `/${locale}/admin` && user) {
    router.push(`/${locale}/admin/applications`);
    return null;
  }

  if (user || path === `/${locale}/admin`) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  } else {
    return <LoadingPage />;
  }
};
