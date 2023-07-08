import Header from 'components/Header/Header'
import { FC, ReactElement } from 'react'

import Card from 'components/Card/Card';
import CTA from 'components/CTA/CTA';

const App: FC = (): ReactElement => {
	return (
		<div className='flex items-center justify-center flex-col w-full min-h-screen bg-[#F9FBFC] text-[#191C1F]'>
			<Header />
			<Card />
			<CTA />
		</div>
	)
}

export default App
