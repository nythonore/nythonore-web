import { Container, Row, Col, Image } from 'react-bootstrap';
import TextLoop from 'react-text-loop';

export default function Intro() {
	const handleDownloadResume = () => {
		const link = document.createElement('a');

		link.href = `http://www.africau.edu/images/default/sample.pdf`;
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
	};

	return (
		<div className='intro-section py-5'>
			<Container>
				<div className='top-bar py-2'>
					<Row>
						<Col lg={8} md={8} sm={8} xs={8}>
							<div className='social'>
								<a
									href='https://www.linkedin.com/in/nythonore/'
									target='_blank'
								>
									Linkedin
								</a>
								<a href='https://twitter.com/nythonore' target='_blank'>
									Twitter
								</a>
								<a href='https://www.instagram.com/nythonore/' target='_blank'>
									Instagram
								</a>
								<a href='https://github.com/nythonore' target='_blank'>
									Github
								</a>
								<a href='https://codepen.io/nythonore' target='_blank'>
									Codepen
								</a>
							</div>
						</Col>

						<Col lg={4} md={4} sm={4} xs={4}>
							<div className='tag text-right'>
								<span
									className='img cursor-pointer'
									onClick={handleDownloadResume}
								>
									Resume
								</span>
							</div>
						</Col>
					</Row>
				</div>

				<div className='content py-5'>
					<Row>
						<Col lg={7} md={7} sm={12} xs={12}>
							<div className='intro-text'>
								<h2>
									Hello, I'm Honore <br />
									<span className='highlight'>I help companies</span>{' '}
									<TextLoop children={['design', 'develop', 'launch']} />
									<br />
									<span>world class digital products</span>
								</h2>

								<p className='mt-4 tags'>
									<span>
										Full Stack Developer{' '}
										<a href='https://africa.xyz' target='_blank'>
											@africaxyz
										</a>
									</span>
								</p>
							</div>
						</Col>

						<Col lg={5} md={5} sm={12} xs={12}>
							<Image
								src='/nythonore.jpg'
								alt='Honore Niyitegeka'
								className='img-fluid'
								width='100%'
							/>
						</Col>
					</Row>
				</div>

				<div className='inspire py-5'>
					<Row className='justify-content-center'>
						<Col lg={9} className='text-center'>
							<p className='text'>
								“The first step toward success is taken when you refuse to be a
								captive of the environment in which you first find yourself.”
							</p>

							<p className='mt-4 owner mb-0'>
								<span>– Mark Caine</span>
							</p>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}
