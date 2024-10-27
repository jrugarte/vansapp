import React, { useState, useEffect } from "react";
import { Loader2, Lock, CheckCircle2, XCircle } from "lucide-react";

const LoginLoader = ({
  status = "loading", // loading, success, error
  message = "Loading...",
  showSpinner = true,
  theme = "dark", // light, dark, or system
  variant = "default", // default, minimal, or elaborate
}) => {
  const [dots, setDots] = useState("");
  const [progressWidth, setProgressWidth] = useState(0);

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (status === "loading") {
      const interval = setInterval(() => {
        setProgressWidth((prev) => (prev < 90 ? prev + 10 : prev));
      }, 500);
      return () => clearInterval(interval);
    } else if (status === "success") {
      setProgressWidth(100);
    }
  }, [status]);

  const baseClasses = `
    fixed inset-0 
    flex flex-col items-center justify-center
    ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
    transition-all duration-500
  `;

  const getStatusIcon = () => {
    switch (status) {
      case "success":
        return (
          <CheckCircle2 className="w-12 h-12 text-green-500 animate-bounce" />
        );
      case "error":
        return <XCircle className="w-12 h-12 text-red-500 animate-shake" />;
      default:
        return (
          showSpinner && (
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          )
        );
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case "success":
        return "Successfully logged in!";
      case "error":
        return "Login failed. Please try again.";
      default:
        return `${message}${dots}`;
    }
  };

  const renderProgressBar = () => (
    <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
      <div
        className="h-full bg-blue-500 transition-all duration-500 ease-out"
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  );

  const renderElaborateVariant = () => (
    <div className={baseClasses}>
      <div
        className={`
        p-8 rounded-lg shadow-2xl w-full
        ${theme === "dark" ? "bg-gray-900" : "bg-white"}
        transform transition-all duration-500
        ${status === "success" ? "scale-110" : "scale-100"}
      `}
      >
        <div className="relative">
          <Lock
            className={`
            absolute -top-16 left-1/2 transform -translate-x-1/2
            w-8 h-8 
            ${theme === "dark" ? "text-blue-400" : "text-blue-500"}
            ${status === "loading" ? "animate-bounce" : ""}
          `}
          />
        </div>

        <div className="mt-8 flex flex-col items-center">
          {getStatusIcon()}
          <h2
            className={`
            mt-4 text-xl font-semibold
            ${theme === "dark" ? "text-white" : "text-gray-900"}
          `}
          >
            {getStatusMessage()}
          </h2>
          {/* {status === "loading" && renderProgressBar()} */}
        </div>
      </div>
    </div>
  );

  const renderMinimalVariant = () => (
    <div className={baseClasses}>
      <div className="flex w-full items-center space-x-3">
        {getStatusIcon()}
        <span className="text-lg">{getStatusMessage()}</span>
      </div>
    </div>
  );

  const renderDefaultVariant = () => (
    <div className={baseClasses}>
      <div
        className={`
        p-6 rounded-lg w-screen h-screen
        ${theme === "dark" ? "bg-gray-900" : "bg-white"}
        shadow-lg flex flex-col items-center justify-center
      `}
      >
        {getStatusIcon()}
        <h2 className="mt-4 text-lg font-medium">{getStatusMessage()}</h2>
        {/* {status === "loading" && renderProgressBar()} */}
      </div>
    </div>
  );

  switch (variant) {
    case "minimal":
      return renderMinimalVariant();
    case "elaborate":
      return renderElaborateVariant();
    default:
      return renderDefaultVariant();
  }
};

export default LoginLoader;
