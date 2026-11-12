import { HomePage } from "../pages/home";

// ()=> string is a type function that return string
const routes: Record<string, () => string> = {
  "/": HomePage,
};

export function router() {
  const path = window.location.pathname;

  const page = routes[path] || HomePage;

  document.querySelector("#app")!.innerHTML = page();
}
