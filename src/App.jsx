import Layout from "./components/Layout"
import Path from "./routes/Path"

const App = () => {
  return (
    <>
    <div className="w-full max-h-screen text-white bg-violet-950 relative">
    <Layout>
      <Path/>
    </Layout>
    </div>
    </>
  )
}

export default App