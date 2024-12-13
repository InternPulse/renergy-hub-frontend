// src/contexts/UserContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface UserContextType {
  userId: string | null;
  formData: { firstName: string; lastName: string };
  setUserId: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [userId, setUserId] = useState<string | null>(
    location.state?.userId || null
  );
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    // Update userId whenever location changes, if available
    if (location.state?.userId) {
      setUserId(location.state.userId);
    }
  }, [location]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      try {
        const response = await fetch(
          `https://renergy-hub-express-backend.onrender.com/api/v1/users/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setFormData({
            firstName: data.data.firstName || "",
            lastName: data.data.lastName || "",
          });
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, formData, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
