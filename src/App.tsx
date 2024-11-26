import Promotions from '@components/Promotions'
import SearchBar from '@components/SearchBar/SearchBar'
import AppHeader from '@components/AppHeader'

function App() {
  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-6xl p-6 space-y-12">
        <section aria-labelledby="search-bar">
          <SearchBar />
        </section>
        <section aria-labelledby="promotions">
          <Promotions />
        </section>
      </main>
    </>
  )
}

export default App
