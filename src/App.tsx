
import './App.css'
import SecurityDocuments from './components/SecurityDocuments'
import Sidebar from './components/Sidebar'



function App() {

  return (
    <section className='flex bg-[#E6E6E6] h-screen'>
      <Sidebar/>
      <SecurityDocuments/>
    </section>
  )
}

export default App
