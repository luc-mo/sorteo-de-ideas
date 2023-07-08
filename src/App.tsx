import Header from 'components/Header/Header'
import { FC, ReactElement } from 'react'

const App: FC = (): ReactElement => {
	return (
		<div className='flex items-center justify-center w-full min-h-screen bg-[#F9FBFC] text-[#191C1F]'>
			<Header />
		</div>
	)
}

export default App
