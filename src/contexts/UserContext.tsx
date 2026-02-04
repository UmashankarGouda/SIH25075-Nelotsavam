'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserData {
  name: string;
  phone: string;
  email: string;
  district: string;
  farmSize: string;
  experience: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserDataState] = useState<UserData | null>(null);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserDataState(JSON.parse(savedUserData));
    }
  }, []);

  const setUserData = (data: UserData) => {
    setUserDataState(data);
    // Save to localStorage for persistence
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const clearUserData = () => {
    setUserDataState(null);
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}