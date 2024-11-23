import AppHeader from '@components/Header/AppHeader'
import Promotions from '@components/Promotions/Promotions'

function App() {
  return (
    <>
      <AppHeader />
      
      <main className="mx-auto max-w-6xl p-6 space-y-12">
        <section aria-labelledby='promotions'>
          <Promotions/>
        </section>
      </main>
    </>
  )
}

export default App
