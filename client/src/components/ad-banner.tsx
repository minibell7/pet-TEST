import { useEffect, useRef } from 'react';

interface AdBannerProps {
    className?: string;
    slotId?: string; // Google AdSense Slot ID (Optional for now)
    format?: 'auto' | 'fluid' | 'rectangle';
}

export function AdBanner({ className, slotId = "1234567890", format = 'auto' }: AdBannerProps) {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // In production, this would initialize the ad
        // For now, we just ensure the container is ready
        try {
            // @ts-ignore
            if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    // Development placeholder
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className={`w-full bg-gray-100/50 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center p-4 text-sm text-muted-foreground ${className}`} style={{ minHeight: '100px' }}>
                <div className="text-center">
                    <p className="font-bold">AdSense Banner Space</p>
                    <p className="text-xs opacity-70">Slot ID: {slotId}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full overflow-hidden my-4 ${className}`} ref={adRef}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2875879574828967"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
