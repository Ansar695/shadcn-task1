import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"

function App() {

  return (
    <div className="p-5">
      <h1 className="text-5xl">Shadcn Integrated with React JS Vite.</h1>
      <Button variant="secondary" className="bg-dark">Click Me</Button>
      <Badge variant="outline">Badge</Badge>
    </div>
  )
}

export default App
