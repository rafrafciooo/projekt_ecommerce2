import { CircleLoader } from "react-spinners";
const LoadingPage = () => {
	return (
		<div className='flex-center h-screen'>
			<CircleLoader
				size={500}
				color='#26a14f'
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	);
};

export default LoadingPage;
