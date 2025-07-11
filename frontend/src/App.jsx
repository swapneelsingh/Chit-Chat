import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingsPage from "./pages/Settings";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth,  onlineUsers  } = useAuthStore();

  const {theme} = useThemeStore();
  
  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

//   useEffect(() => {
//   useAuthStore.getState().checkAuth(); // ✅ directly get stable reference
// }, []);


  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Toaster position="top-center" /> 
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to ="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to ="/" />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to ="/" /> } />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to ="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
