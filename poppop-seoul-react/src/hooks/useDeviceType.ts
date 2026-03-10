import { useEffect, useState } from "react";

export type DeviceType = "mobile" | "desktop"
export type MobileOsType = "Android" | "IOS" | undefined

const detectDeviceTypeFromUA = (userAgent: string): DeviceType => {
    const ua = userAgent.toLowerCase();

    const isAndroid = ua.includes("android");
    const isIOS =
        ua.includes("iphone") ||
        ua.includes("ipad") ||
        ua.includes("ipod");

    const isMobileByKeyword =
        ua.includes("mobile") ||
        ua.includes("iphone") ||
        ua.includes("ipod") ||
        ua.includes("android") ||
        ua.includes("iemobile") ||
        ua.includes("windows phone") ||
        ua.includes("blackberry");

    if (isAndroid || isIOS || isMobileByKeyword) {
        return "mobile";
    }

    return "desktop"
}

const detectMobileOsTypeFromUA = (userAgent: string): MobileOsType => {
    const ua = userAgent.toLowerCase();

    const isAndroid = ua.includes("android");
    const isIOS =
        ua.includes("iphone") ||
        ua.includes("ipad") ||
        ua.includes("ipod");

    if (isIOS) {
        return "IOS";
    } else if (isAndroid) {
        return "Android"
    }

    return undefined
}

const useDeviceType = (): DeviceType => {
    const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ua =
            navigator.userAgent ||
            (navigator as any).vendor ||
            (window as any).opera ||
            "";

        const detected = detectDeviceTypeFromUA(ua);
        setDeviceType(detected)
    }, []);

    return deviceType
}

const useMobileOsType = (): MobileOsType => {
    const [mobileOsType, setMobileOsType] = useState<MobileOsType>(undefined);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ua =
            navigator.userAgent ||
            (navigator as any).vendor ||
            (window as any).opera ||
            "";

        const detected = detectMobileOsTypeFromUA(ua);
        setMobileOsType(detected)
    }, []);

    return mobileOsType
}

export { useDeviceType, useMobileOsType }
