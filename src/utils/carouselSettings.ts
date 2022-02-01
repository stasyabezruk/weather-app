import { ResolutionType } from "./baseTypes"

const carouselSettings = (resolution: ResolutionType) => ({
    width: '100%',
    slidesToShow: resolution === 'tablet' ? 8 : 3,
    slidesToScroll: resolution === 'tablet' ? 8 : 3,
    initialSlideHeight: 100,
    slideWidth: resolution === 'tablet' ? 1.0 : 0.95,
    speed: 1000,
    easing: 'easeSinInOut',
    defaultControlsConfig: {
        prevButtonStyle: {
            display: 'none',
        },
        nextButtonStyle: {
            display: 'none',
        },
        pagingDotsStyle: {
            fill: '#cfd9df',
            display: 'flex',
            position: 'relative',
            top: '35px',
            margin: '10px 5px',
        },
        pagingDotsContainerClassName: 'carousel-pagination'
    },
})

export default carouselSettings