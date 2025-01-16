import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/protectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
