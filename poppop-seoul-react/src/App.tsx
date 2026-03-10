import { FadeInSection } from './components/FadeInSection'
import heroBottom from './assets/img_main_bottom.png'
import heroLogo from './assets/img_main_pop.png'
import onboarding0 from './assets/img_onboarding_0.png'
import onboarding1 from './assets/img_onboarding_1.png'
import onboarding2 from './assets/img_onboarding_2.png'
import HeroInfoSection from './components/HeroInfoSection'
import { useState } from 'react'
import DownloadPopup from './components/DownloadPopup'
import { AppStoreUrl } from './utils/config'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIos, setIsIos] = useState(false);

  const openDownloadPopup = () => setIsOpen(true);
  const closeDownloadPopup = () => setIsOpen(false);
  const handleDownloadButtonClick = (isMobile: boolean, isIos: boolean) => {
    setIsIos(isIos)

    if (isMobile) {
      // Mobile
      if (isIos) {
        window.open(AppStoreUrl, "_blank", "noopener,noreferrer");
      } else {
        downloadApkByTempAnchor()
      }
    } else {
      // PC
      openDownloadPopup()
    }
  }

  return (
    <>
      <div className="flex min-h-screen w-full bg-white flex-col">
        {/* Header */}
        <header className='h-10 bg-[#005EFE]'>
          <h1 className='text-4xl font-bold text-white'>

          </h1>
        </header>

        {/* Main */}
        <main className='bg-slate-50'>
          {/* Hero Section */}
          <section className='relative min-h-screen bg-[#005EFE]'>
            <img src={heroBottom} alt='Main Bottom' className='absolute left-0 bottom-0 w-[530px] h-auto opacity-80' />
            <div className='absolute inset-0 flex flex-col items-center justify-center pt-6'>
              {/* Logo */}
              <img src={heroLogo} alt='Main Logo' className='flex w-[250px] md:w-[400px] h-auto' />
              {/* Info */}
              <HeroInfoSection className='flex flex-col items-center justify-center pt-6 px-12 gap-20'
                onDownloadClick={handleDownloadButtonClick} />
            </div>

          </section>

          {/* */}
          <section className='flex flex-col bg-[#E4E5EB] gap-6 pt-6 pb-20'>
            {/* */}
            <div className='flex flex-row items-center px-6'>
              <div className='flex flex-col h-full flex-1 items-center gap-10'>
                <FadeInSection className='flex flex-col gap-5'>
                  <h2 className='text-2xl lg:text-3xl font-bold text-slate-900'>
                    하고 싶은 챌린지를
                    <br />
                    '찜'해 보세요!
                  </h2>
                  <p className='text-xl lg:text-xl text-slate-900'>
                    나만의 챌린지를
                    <br />
                    기록하고 다시 찾아보세요.
                  </p>
                </FadeInSection>
              </div>

              <div className='flex flex-col flex-1 items-center'>
                <FadeInSection >
                  <img src={onboarding0} className='w-[225px] h-[273px] md:w-[325px] md:h-[373px] lg:w-[525px] lg:h-[573px]' />
                </FadeInSection>
              </div>

            </div>

            {/* */}
            <div className='flex flex-row items-center'>
              <div className='flex flex-col flex-1 items-center'>
                <FadeInSection>
                  <img src={onboarding1} className='w-[225px] h-[273px] md:w-[325px] md:h-[373px] lg:w-[525px] lg:h-[573px]' />
                </FadeInSection>
              </div>

              <div className='flex flex-col h-full flex-1 items-center gap-10'>
                <FadeInSection className='flex flex-col gap-5 px-6'>
                  <h2 className='text-2xl lg:text-3xl font-bold text-slate-900'>
                    관광지를 방문하고
                    <br />
                    스탬프를 찍어보세요!
                  </h2>
                  <p className='text-xl lg:text-xl text-slate-900'>
                    50m 이내로 가까워지면
                    <br />
                    스탬프를 직접 찍을 수 있어요.
                  </p>
                </FadeInSection>
              </div>

            </div>

            {/* */}
            <div className='flex flex-row items-center'>
              <div className='flex flex-col h-full flex-1 items-center gap-10'>
                <FadeInSection className='flex flex-col gap-5 px-6'>
                  <h2 className='text-2xl lg:text-3xl font-bold text-slate-900'>
                    한국 감성 가득한 배지,
                    <br />
                    다 모아볼까요?
                  </h2>
                  <p className='text-xl lg:text-xl text-slate-900'>
                    하나의 챌린지를 완성하면
                    <br />
                    배지를 얻을 수 있어요.
                  </p>
                </FadeInSection>
              </div>

              <div className='flex flex-col flex-1 items-center'>
                <FadeInSection>
                  <img src={onboarding2} className='w-[225px] h-[273px] md:w-[325px] md:h-[373px] lg:w-[525px] lg:h-[573px]' />
                </FadeInSection>
              </div>

            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className='h-20 bg-[#E4E5EB]'>
          <h1 className='text-4xl font-bold text-white'>

          </h1>
        </footer>
      </div>

      {/* 다운로드 팝업 */}
      {isOpen && (<DownloadPopup isIos={isIos} onCloseClick={closeDownloadPopup} />)}
    </>

  )
}

function downloadApkByTempAnchor() {
  const apkUrl = `${import.meta.env.BASE_URL}popop_seoul.apk`;
  const a = document.createElement("a");
  a.href = apkUrl;
  a.download = "popop_seoul.apk";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
}


export default App
