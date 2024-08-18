import { useCallback, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const CardLoadAnimation = () => {
	return (
		<div className='border border-blue-300 rounded-xl px-4 py-3 w-[22rem] mx-auto bg-gray-50'>
			<div className='animate-pulse flex space-x-4'>
				<div className='flex-1 space-y-8 py-1'>
					<div className='h-2 bg-slate-700 rounded w-[30%] '></div>
					<div className='space-y-5 items-center flex w-full flex-col'>
						<div className='h-2 bg-slate-700 rounded w-full'></div>
						<div className='h-2 bg-slate-700 rounded w-full'></div>
						<div className='h-2 bg-slate-700 rounded w-full'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

const FaqCard = ({ title, description, link }) => {
	const handleClick = useCallback(() => {
		if (link) {
			window.location.href = link;
		}
	}, [link]);

	return (
		<Card
			bg={'light'}
			key={'light'}
			text={'black'}
			style={{ width: '22rem', borderRadius: '12px' }}
			className='mb-2 h-full cursor-pointer'
			onClick={handleClick}
		>
			<Card.Header className='font-semibold text-lg leading-tight'>{title}</Card.Header>
			<Card.Body>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const HeroBlock = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [Faqs, setFaqs] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredFaqs, setFilteredFaqs] = useState(Faqs || []);

	useEffect(() => {
		getFaqs();
	}, []);

	const fadeAnimation = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 0.5 }
	};

	useEffect(() => {
		if (Faqs?.length) {
			setIsLoading(false);
			setFilteredFaqs(Faqs);
		}
	}, [Faqs]);

	// Filter faqs
	const filterFaqs = () => {
		if (searchTerm.trim() === '') {
			setFilteredFaqs(Faqs);
		} else {
			const filtered = Faqs.filter(
				faq =>
					faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					faq.description.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredFaqs(filtered);
		}
	};

	// call function 'filterFaqs' when search term or faqs list changes
	useEffect(() => {
		filterFaqs();
	}, [searchTerm, Faqs]);

	useEffect(() => {
		console.log(filteredFaqs);
	}, [filteredFaqs]);

	const getFaqs = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/cards`);

			if (response.status === 200) {
				setFaqs(response.data);
			}
		} catch (error) {
			console.log('Something went wrong');
		}
	};

	return (
		<div className='w-full '>
			<div className='h-[40vh]'>
				<div className='bg-[#e3e5ff] text-black flex flex-col gap-y-5 justify-center items-center h-full'>
					<p className='text-4xl md:mx-0 px-2 md:text-7xl text-nowrap '>How can we help?</p>
					<div className='flex justify-center w-full'>
						<div className='relative w-[80%] xl:w-[50%]'>
							<input
								type='text'
								value={searchTerm}
								onChange={e => setSearchTerm(e.target.value)}
								placeholder='Search'
								className='w-full text-xl p-3 pr-10 border-[1px] border-black rounded'
							/>
							<div
								className='absolute top-1/2 right-3 transform -translate-y-1/2'
								onClick={filterFaqs}
							>
								<FaArrowRight />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-center my-28'>
				<div className='grid mx-3 grid-cols-1 md:grid-cols-2 gap-16'>
					{isLoading ? (
						[...Array(4)].map((_, index) => <CardLoadAnimation key={index} />)
					) : (
						<AnimatePresence>
							{filteredFaqs.map((faq, index) => (
								<motion.div key={index} {...fadeAnimation}>
									<FaqCard title={faq.title} description={faq.description} link={faq.link} />
								</motion.div>
							))}
						</AnimatePresence>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeroBlock;

