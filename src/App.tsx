
import './App.css'
import SecurityDocuments from './components/SecurityDocuments'
import Sidebar from './components/Sidebar'



function App() {

  return (
    <section className='flex'>
      <Sidebar/>
      <SecurityDocuments/>
    </section>
  )
}

export default App
