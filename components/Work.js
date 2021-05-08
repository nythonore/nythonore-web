import { Container, Row, Col, Image } from 'react-bootstrap';

const works = [
	{
		title: 'Space design system',
		description:
			'Sprink is united customer experience management platform for entripse',
		link: 'https://google.com',
		image: 'https://awesomity.rw/images/work/move.png',
		css: 'work-box bg-box-1',
	},

	{
		title: 'Microsoft budget planning',
		description: "Reimagining Microsoft's market planning & execution system",
		link: 'https://google.com',
		image: 'https://awesomity.rw/images/work/govux.png',
		css: 'work-box bg-box-2',
	},

	{
		title: 'Microsoft budget planning',
		description: "Reimagining Microsoft's market planning & execution system",
		link: 'https://google.com',
		image: 'https://awesomity.rw/images/work/wastezon.png',
		css: 'work-box bg-box-2',
	},

	{
		title: 'Space design system',
		description:
			'Sprink is united customer experience management platform for entripse',
		link: 'https://google.com',
		image: 'https://awesomity.rw/images/work/baginnovation.png',
		css: 'work-box bg-box-1',
	},
];

export default function Work() {
	return (
		<div>
			<div className='work-section mb-5'>
				<Container>
					<Row>
						<Col lg={12}>
							<h4>My Work</h4>
						</Col>
					</Row>

					<Row className='mt-3'>
						{works.map(data => (
							<Col lg={6} md={6} sm={12} xs={12} className='mb-5'>
								<div className={data.css}>
									<h2 className='text-capitalize text-bold'>{data.title}</h2>

									<p className='mt-3 pr-5 mr-5 text-capitalize'>
										{data.description}
									</p>

									<a href={data.link} target='_blank'>
										Visit site →
									</a>

									<div className='work-img-box'>
										<Image
											src={data.image}
											alt={data.title}
											className='img-fluid'
										/>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
}
