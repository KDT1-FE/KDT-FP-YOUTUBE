import styled from 'styled-components'

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	z-index: 999;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 56px;
	padding: 0 16px;
	.icon {
		width: 24px;
	}
	.centerAlign {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}
`

export const HeaderIconBox = styled.div`
	.toggleIcon {
		margin-right: 30px;
		&:hover {
			cursor: pointer;
		}
	}
	img {
		height: 20px;
	}
`
export const SearchBox = styled.div`
	padding: 0 20px;
	.searchBar {
		width: 650px;
		input {
			width: 100%;
			height: 40px;
			padding: 0 20px;
			border-radius: 40px 0 0 40px;
			border: 1px solid rgba(0, 0, 0, 0.3);
			font-size: 1.05rem;
			&:focus {
				outline: none;
				border: 1px solid rgba(0, 0, 0, 1);
				box-shadow: inset 1px 2px rgba(0, 0, 0, 0.1);
			}
		}
		.searchBtn {
			height: 40px;
			padding: 0 20px;
			background-color: rgba(0, 0, 0, 0.1);
			border-radius: 0 40px 40px 0;
			border: 1px solid rgba(0, 0, 0, 0.3);
			border-left: none;
			&:hover {
				cursor: pointer;
				background-color: rgba(0, 0, 0, 0.3);
			}
		}
	}
`

export const LoginBox = styled.div`
	.loginBtn {
		width: 100px;
		height: 34px;
		background-color: transparent;
		color: rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(0, 0, 0, 0.3);
		cursor: pointer;
		box-sizing: border-box;
		border-radius: 34px;
		justify-content: space-between;
		padding: 0 15px 0 10px;
		margin-left: 30px;
		&:hover {
			border: none;
			background-color: rgba(0, 0, 0, 0.3);
			color: #fff;
			.loginIcon {
				fill: #fff;
			}
		}
		.loginIcon {
			fill: rgba(0, 0, 0, 0.5);
		}
	}
`
