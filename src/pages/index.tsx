import { Navigate, Route, Router, Routes } from "@solidjs/router";
import { SpacesOverview } from "./Spaces/SpacesOverview";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/spaces" element={<SpacesOverview />} />
      <Route path="/" element={<Navigate href="/spaces" />} />
    </Routes>
  );
};
