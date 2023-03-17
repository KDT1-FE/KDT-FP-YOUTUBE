import GlobalStyle from './style/global'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './components/PageLayout'
// PAGES
import Main from './pages/Main'
import Search from './pages/Search'
import Video from './pages/Video'
import NotFound from './pages/NotFound'

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route index element={<Main />} />
					<Route path="search" element={<Search />} />
					<Route path="video/:id" element={<Video />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
