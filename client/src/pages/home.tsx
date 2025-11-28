import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useI18n } from '@/lib/i18n';
import { Heart, Sparkles, Cake, Calculator, MessageCircle } from 'lucide-react';

export default function Home() {
    const { t } = useI18n();

    const menuItems = [
        {
            href: '/pet-bti',
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: t('home.menu.petBti'),
            desc: t('home.menu.petBtiDesc'),
            color: 'bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-800',
        },
        {
            href: '/daily-fortune',
            icon: <Sparkles className="w-8 h-8 text-purple-500" />,
            title: t('home.menu.dailyFortune'),
            desc: t('home.menu.dailyFortuneDesc'),
            color: 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
        },
        {
            href: '/age-calculator',
            icon: <Cake className="w-8 h-8 text-blue-500" />,
            title: t('home.menu.ageCalculator'),
            desc: t('home.menu.ageCalculatorDesc'),
            color: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
        },
        {
            href: '/feed-calculator',
            icon: <Calculator className="w-8 h-8 text-green-500" />,
            title: t('home.menu.feedCalculator'),
            desc: t('home.menu.feedCalculatorDesc'),
            color: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800',
        },
        {
            href: '/pet-translator',
            icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
            title: t('home.menu.petTranslator'),
            desc: t('home.menu.petTranslatorDesc'),
            color: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800',
        },
    ];

    return (
        <div className="min-h-screen bg-background px-4 py-8 md:py-12 relative">
            <div className="absolute top-4 right-4 flex gap-2">
                <LanguageToggle />
                <ThemeToggle />
            </div>

            <div className="max-w-2xl w-full mx-auto space-y-8">
                <div className="text-center space-y-4 pt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        {t('home.title')}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {t('home.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <Card className={`p-6 hover-elevate cursor-pointer transition-all flex items-center gap-4 ${item.color}`}>
                                <div className="p-3 bg-white/50 dark:bg-black/20 rounded-full">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-card-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
