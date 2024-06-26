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
        if (response.data.response === 'authenticated') {
          setUser('authenticated');
        } else {
          setUser(null);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router, locale]);

  useEffect(() => {
    if (!loading) {
      if (error) {
        router.push(`/${locale}/admin`);
      } else if (user && path === `/${locale}/admin`) {
        router.push(`/${locale}/admin/applications`);
      }
    }
  }, [loading, error, user, path, router, locale]);

  const value = { user, error, loading };

  if (loading) {
    return <LoadingPage />;
  }

  if (user || path === `/${locale}/admin`) {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  return <LoadingPage />;
};
