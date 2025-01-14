import ReactPlayer from 'react-player'
import React, {useState, useEffect} from 'react';

const MainSection = () => {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('./videos.json')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    const handleNext = () => {
        if (currentIndex < videos.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {videos.length > 0 ? (
                <div className="flex items-center space-x-4">
                    <button
                        className="px-4 py-2  text-white rounded "
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"/>
                        </svg>

                    </button>
                    <div className='overflow-hidden rounded-lg shadow-lg  transform-gpu'>
                    <ReactPlayer url={videos[currentIndex].url} controls/>
                    </div>
                    <button
                        className="px-4 py-2  text-white rounded "
                        onClick={handleNext}
                        disabled={currentIndex === videos.length - 1}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
                        </svg>


                    </button>
                </div>

            ) : (
                <p>Loading videos...</p>
            )}
        </div>
    )
}

export default MainSection;