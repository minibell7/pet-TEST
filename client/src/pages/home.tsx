import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useI18n } from '@/lib/i18n';
import { Heart, Sparkles, Cake, Calculator, MessageCircle } from 'lucide-react';
import { AdBanner } from '@/components/ad-banner';

export default function Home() {
    const { t } = useI18n();

    const menuItems = [
        {
            href: '/pet-bti',
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: t('home.menu.petBti'),
            desc: t('home.menu.petBtiDesc'),
            color: 'hover:bg-pink-500/10 hover:border-pink-500/30',
        },
        {
            href: '/daily-fortune',
            icon: <Sparkles className="w-8 h-8 text-purple-500" />,
            title: t('home.menu.dailyFortune'),
            desc: t('home.menu.dailyFortuneDesc'),
            color: 'hover:bg-purple-500/10 hover:border-purple-500/30',
        },
        {
            href: '/pet-translator',
            icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
            title: t('home.menu.petTranslator'),
            desc: t('home.menu.petTranslatorDesc'),
            color: 'hover:bg-orange-500/10 hover:border-orange-500/30',
        },
        {
            href: '/age-calculator',
            icon: <Cake className="w-8 h-8 text-blue-500" />,
            title: t('home.menu.ageCalculator'),
            desc: t('home.menu.ageCalculatorDesc'),
            color: 'hover:bg-blue-500/10 hover:border-blue-500/30',
        },
        {
            href: '/feed-calculator',
            icon: <Calculator className="w-8 h-8 text-green-500" />,
            title: t('home.menu.feedCalculator'),
            desc: t('home.menu.feedCalculatorDesc'),
            color: 'hover:bg-green-500/10 hover:border-green-500/30',
        },
    ];

    return (
        <div className="min-h-screen px-4 pb-12 relative overflow-hidden">
            {/* Header */}
            <div className="absolute top-4 right-4 flex gap-2 z-50">
                <LanguageToggle />
                <ThemeToggle />
            </div>

            <div className="max-w-4xl w-full mx-auto space-y-12 pt-20">
                {/* Hero Section */}
                <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 animate-bounce">
                        <span className="text-4xl">🐾</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                        <span className="text-gradient">Pet-BTI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {t('home.subtitle')}
                    </p>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <Card className={`p-6 h-full cursor-pointer hover-elevate group ${item.color} flex flex-col items-center text-center gap-4 animate-in fade-in slide-in-from-bottom-4`} style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="p-4 bg-background/50 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Ad Banner */}
                <AdBanner className="mt-8" />

                {/* Footer Message */}
                <div className="text-center pt-12 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
                    <p>Made with 💜 for our lovely pets</p>
                </div>
            </div>
        </div>
    );
}
