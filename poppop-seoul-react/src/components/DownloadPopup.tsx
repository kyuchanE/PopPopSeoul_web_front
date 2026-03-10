import icClose from '../assets/ic_close.png'

type DownloadPopupProps = {
    isIos: boolean
    onCloseClick: () => void
}

const AndroidContents: React.FC = () => {

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className="flex-1 text-lg font-semibold text-slate-900 mb-2">
                GooglePlay Store 심사/배포 준비중입니다.
                <br />
                APK 파일을 다운로드하여 서비스 이용이 가능합니다.
                <br />
                Chrome '출처를 알 수 없는 앱 설치' 설정 허용 이후 다운로드 부탁드립니다.
                <br />
            </h2>
            <a href={`${import.meta.env.BASE_URL}popop_seoul.apk`} download>
                APK 다운로드
            </a>
        </div>
    )
}

const IosContents: React.FC = () => {

    return (
        <div>
            <img src="/qr.png" className='w-[220px] h-[220px]' />
        </div>
    )
}

const DownloadPopup: React.FC<DownloadPopupProps> = ({
    isIos,
    onCloseClick
}: DownloadPopupProps) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/40 p-15'
            onClick={() => onCloseClick()}>
            <div className='flex flex-col w-full max-w-sm mx-4 rounded-2xl bg-white shadow-lg items-center px-5 pb-10 pt-5'>
                {/* Header */}
                <div className='flex flex-row w-full items-center'>
                    <h2 className="flex-1 text-lg font-semibold text-slate-900 mb-2">
                        앱 다운로드
                    </h2>
                    <div className="flex items-end">
                        <button
                            className="cursor-pointer"
                            type='button'
                            onClick={() => onCloseClick()}>
                            <img src={icClose} className='w-[55px] h-[55px]' />
                        </button>
                    </div>
                </div>

                {isIos && (<IosContents />)}
                {!isIos && (<AndroidContents />)}

            </div>
        </div>
    )
}

export default DownloadPopup