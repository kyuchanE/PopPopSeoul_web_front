import { FadeInSection } from "./FadeInSection";
import stamp from '../assets/img_stamp.png'
import iconPlaystore from '../assets/badge_googleplay.svg'
import iconAppstore from '../assets/badge_appstore.svg'
import { useDeviceType } from "../hooks/useDeviceType";

type HeroInfoProps = {
    className?: string;
    onDownloadClick: (isMobile: boolean, isIos: boolean) => void;
};

const HeroInfoSection: React.FC<HeroInfoProps> = ({
    className,
    onDownloadClick
}: HeroInfoProps) => {
    const deviceType = useDeviceType();

    const handleDownloadButtonClick = (isIos: boolean) => {
        onDownloadClick(deviceType === "mobile", isIos);
    }

    return (
        <div className={`${className}`}>
            <div className='flex flex-col items-center justify-center'>
                <FadeInSection className="rounded-xl bg-white/10 py-10 px-5">
                    <h1 className='hidden md:flex md:text-3xl font-bold text-white [-webkit-text-stroke:0.5px_#000]'>
                        서울 여행, 이젠 게임처럼 즐기자!
                        <br />
                        단순한 관광 가이드는이제 그만.
                    </h1>
                    <p className='text-3xl md:hidden font-bold text-white'>
                        서울 여행,
                        <br />
                        이젠 게임처럼 즐기자!
                        <br />
                        단순한 관광
                        <br />
                        가이드는이제 그만.
                    </p>
                    <div className='flex flex-row items-center justify-center mt-5 gap-5'>
                        <p className='mt-4 text-lg sm:text-xl md:text-2xl text-white'>
                            서울을 여행하며 스탬프 챌린지 완주하기!
                        </p>
                        <img src={stamp} alt='Main Logo' className='w-[40px] h-[40px]' />
                    </div>
                </FadeInSection>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-9 pb-35'>
                {/* AppStore Button */}
                <FadeInSection>
                    <button className='group relative flex flex-row w-fit cursor-pointer bg-transparent rounded-2xl px-4 py-2 text-white items-center justify-center gap-3'
                        type='button'
                        onClick={() => handleDownloadButtonClick(true)}>
                        <img src={iconAppstore} className='w-[228px] md:w-[328px] h-auto' />
                        <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-md bg-white/90 px-2 py-1 text-xs text-black opacity-0 translate-y-1 transition-all group-hover:opacity-100 transition-opacity duration-200">
                            앱 다운로드
                        </span>
                    </button>
                </FadeInSection>
                {/* GooglePlayStore Button */}
                <FadeInSection>
                    <button className='group relative flex flex-row w-fit cursor-pointer bg-transparent rounded-2xl px-4 py-2 text-white items-center justify-center gap-3'
                        type='button'
                        onClick={() => handleDownloadButtonClick(false)}>
                        <img src={iconPlaystore} className='w-[228px] md:w-[328px] h-auto' />
                        <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-md bg-white/90 px-2 py-1 text-xs text-black opacity-0 translate-y-1 transition-all group-hover:opacity-100 transition-opacity duration-200">
                            앱 다운로드
                        </span>
                    </button>
                </FadeInSection>
            </div>

        </div>
    )
}

export default HeroInfoSection