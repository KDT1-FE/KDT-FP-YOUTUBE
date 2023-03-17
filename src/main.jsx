import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<RecoilRoot>
			<ScrollToTop />
			<App />
		</RecoilRoot>
	</BrowserRouter>
)
