import logo from '../assets/images/logo.png';

const Footer = () => {
	return (
		<div className='py-5 w-full bg-black text-white flex justify-center'>
			<div className='grid md:grid-rows-1 grid-rows-5 grid-flow-col md:grid-cols-5 justify-between w-[80%]'>
				<div className='flex flex-col gap-y-3'>
					<p className='font-semibold text-xl'>Abstract</p>
					<div>
						<p>Branches</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-3'>
					<p className='font-semibold text-xl'>Resources</p>
					<div>
						<p>Blog</p>
						<p>Help Center</p>
						<p>Release Notes</p>
						<p>Status</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-3'>
					<p className='font-semibold text-xl'>Community</p>
					<div>
						<p>Twitter</p>
						<p>LinkedIn</p>
						<p>Facebook</p>
						<p>Dribbble</p>
						<p>Podcast</p>
					</div>
				</div>
				<div className='flex flex-col gap-y-4 w-full col-span-2'>
					<p className='font-semibold text-xl'>Company</p>
					<div>
						<p>About Us</p>
						<p>Careers</p>
						<p>Legal</p>
					</div>
					<div className='mt-3 flex flex-row gap-x-12 w-full justify-between '>
						<div>
							<p className='font-semibold'>Contact Us</p>
							<a href='mailto:info@abstract.com'>info@abstract.com</a>
						</div>
						<div className='flex flex-col gap-y-4'>
							<img src={logo} alt='' width={42} />
							<div>
								<p>&copy; Copyright 2022</p>
								<p>Abstract Studio Design, Inc.</p>
								<p>All rights reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

