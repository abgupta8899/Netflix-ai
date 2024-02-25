const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[15%] px-10">
            <h1 className=" text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-4 px-8 text-l  rounded-lg">
                    play
                </button>
                <button className=" mx-2 bg-gray-600  text-white p-4 px-12  text-l  rounded-lg"> More Info
                </button>


            </div>
        </div>
    )
};
export default VideoTitle; 