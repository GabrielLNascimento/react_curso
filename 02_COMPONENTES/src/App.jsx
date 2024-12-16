import './App.css'

import PrimeiroComponente from './components/PrimeiroComponente'

import TemplateExpression from './components/TemplateExpression'

import Events from './components/Events'

function App() {
  return (
    <>
      <h1 className="TituloApp">Ola pessoal</h1>

      <PrimeiroComponente />
      <TemplateExpression />
      <Events />
    </>
  )
}

export default App
