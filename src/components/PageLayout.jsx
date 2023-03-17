import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import styled from 'styled-components'
import Header from './Header'
import { useRecoilValue } from 'recoil'
import { navToggleState } from '../atom'

function PageLayout() {
	const open = useRecoilValue(navToggleState)

	return (
		<LayoutContainer>
			<Header />
			<main className={open ? 'open' : ''}>
				<SideBar />
				<Outlet />
			</main>
		</LayoutContainer>
	)
}

export default PageLayout

const LayoutContainer = styled.div`
	main {
		width: calc(100%-240px);
		margin-top: 56px;
		&.open {
			margin-left: 240px;
		}
	}
`
