import "./App.css";
import { Button } from "./components/ui/button";



function App() {
  return (
    // <div className="h-full w-full bg-slate-500 flex items-center justify-center">
    //   <p className="font-light text-5xl text-slate-200">
    //      Welcome to Vite + React + Tailwind !!!
    //   </p>
    // </div>
    <div className="flex items-center justify-center bg-background h-full w-full">
      <Button className="relative text-foreground w-32 h-12">Click</Button>
    </div>
  );
}

export default App;
