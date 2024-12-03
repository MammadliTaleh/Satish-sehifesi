"use client";  // Only needed for client-side code like `useSelector` and `useDispatch`

import { Provider } from "react-redux";
import store from "./store";  // Ensure the correct store is imported
import "./globals.css";  // Your global styles

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
