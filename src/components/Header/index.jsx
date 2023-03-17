import { HeaderContainer, HeaderIconBox, SearchBox, LoginBox } from './style'
import logo from '../../assets/logo.png'
import { useRecoilState } from 'recoil'
import { navToggleState } from '../../atom'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

function Header() {
	const [isOpen, setIsOpen] = useRecoilState(navToggleState) //eslint-disable-line no-unused-vars
	const [keyword, setKeyword] = useState('')
	const location = useLocation().pathname
	const navigate = useNavigate()
	const handleToggle = () => {
		setIsOpen((isOpen) => !isOpen)
	}
	const onChange = (e) => {
		setKeyword(e.target.value)
	}
	const onSearch = (e) => {
		e.preventDefault()
		if (keyword === '') {
			null
		} else {
			navigate(`/search?q=${keyword}`)
			setKeyword('')
		}
	}
	useEffect(() => {
		location.startsWith('/video') ? setIsOpen(false) : setIsOpen(true)
	}, [location])

	return (
		<HeaderContainer>
			<HeaderIconBox className="centerAlign">
				<svg
					viewBox="0 0 24 24"
					className="toggleIcon icon"
					onClick={handleToggle}
				>
					<g>
						<path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
					</g>
				</svg>
				<Link to="/">
					<img src={logo} alt="YouTube" />
				</Link>
			</HeaderIconBox>
			<SearchBox>
				<form onSubmit={onSearch} className="searchBar centerAlign">
					<input
						type="text"
						placeholder="검색"
						onChange={onChange}
						value={keyword}
					/>
					<button className="searchBtn centerAlign">
						<svg viewBox="0 0 24 24" className="searchIcon icon">
							<g>
								<path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
							</g>
						</svg>
					</button>
				</form>
			</SearchBox>
			<LoginBox className="centerAlign">
				<svg viewBox="0 0 24 24" className="icon">
					<g>
						<path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
					</g>
				</svg>
				<button className="loginBtn centerAlign">
					<svg viewBox="0 0 24 24" className="loginIcon icon">
						<g>
							<path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"></path>
						</g>
					</svg>
					로그인
				</button>
			</LoginBox>
		</HeaderContainer>
	)
}

export default Header
