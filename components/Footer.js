import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer className='footer-section py-5'>
			<Container className='mt-5 mb-5'>
				<Row>
					<Col lg={6} md={6} sm={12} xs={12}>
						<Row>
							<div className='content'>
								<h2>
									Feel free to reach out for collaborations or just a friendly
									hello 👋{' '}
									<a href='mailto:niyitegekah@gmail.com'>
										niyitegekah@gmail.com
									</a>
								</h2>
							</div>
						</Row>

						<Row className='mt-5'>
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
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
