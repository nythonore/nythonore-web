import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
	return (
		<div>
			<div className='about-section mb-5'>
				<Container>
					<Row className='mt-3'>
						<Col lg={8} md={8} sm={12} xs={12} className='mb-3'>
							<h4>About Me</h4>

							<div className='about-me-content mt-4 pr-5'>
								<p className='text-justify'>
									I have experiences in development & design work. I prefer to
									keep learning, continue challenging myself, and do interesting
									things that matter. My abundant energy fuels me in the pursuit
									of many interests, hobbies, areas of study and artistic
									endeavors. I’m a fast learner, able to pick up new skills and
									juggle different projects and roles with relative ease.
								</p>

								<p className='text-justify'>
									I’m a people-person with deep emotions and empathy, a natural
									storyteller. I’m able to inspire and am at my best when I’m
									sharing my creative expressions with others.
								</p>
							</div>
						</Col>

						<Col lg={4} md={4} sm={12} xs={12}>
							<h4>Skills</h4>

							<div className='ml-3 skill-content mt-3'>
								<ul>
									<li>HTML & CSS | Bootstrap</li>
									<li>Javascript (React JS & React Native)</li>
									<li>Python (Fast API & Django)</li>
									<li>Devops (Git & Docker)</li>
									<li>Github | Vscode</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}
