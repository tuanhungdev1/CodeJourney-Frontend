import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
