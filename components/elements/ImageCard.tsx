import clsx from 'clsx';
import Image from 'next/image';

type ImageCardProps = {
	alt: string;
	src: string;
	cardStyles?: string;
	imgStyles?: string;
};

export const ImageCard = (props: ImageCardProps) => {
	const { alt, src, cardStyles = '', imgStyles = '' } = props;

	return (
		<div className='h-80'>
			<div
				className={clsx(
					'w-[85%] md:w-full mx-auto h-full rounded-lg rotate-6',
					cardStyles
				)}
			></div>

			<div className='w-[85%] md:w-full mx-auto h-full relative top-[-320px]'>
				<Image
					alt={alt}
					src={src}
					layout='fill'
					className={clsx('object-cover rounded-lg', imgStyles)}
				/>
			</div>
		</div>
	);
};
