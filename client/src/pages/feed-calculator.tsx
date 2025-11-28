import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, Calculator, Info } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';

export default function FeedCalculator() {
    const [, setLocation] = useLocation();
    const { t } = useI18n();

    const [weight, setWeight] = useState<number>(5);
    const [ageGroup, setAgeGroup] = useState<'puppy' | 'adult' | 'senior'>('adult');
    const [activity, setActivity] = useState<'low' | 'normal' | 'high'>('normal');
    const [feedKcal, setFeedKcal] = useState<number>(3500); // Default 3500 kcal/kg
    const [result, setResult] = useState<{ dailyKcal: number; dailyAmount: number } | null>(null);

    const calculate = () => {
        const rer = 70 * Math.pow(weight, 0.75);
        let factor = 1.6;

        if (ageGroup === 'puppy') {
            factor = 3.0;
        } else if (ageGroup === 'senior') {
            factor = 1.2;
        } else {
            // Adult
            switch (activity) {
                case 'low': factor = 1.4; break;
                case 'normal': factor = 1.6; break;
                case 'high': factor = 2.0; break;
            }
        }

        const dailyKcal = Math.round(rer * factor);
        const dailyAmount = Math.round((dailyKcal * 1000) / feedKcal);

        setResult({ dailyKcal, dailyAmount });
    };

    return (
        <div className="min-h-screen bg-background px-4 py-8 md:py-12">
            <div className="max-w-2xl w-full mx-auto space-y-8">
                <div className="flex items-center justify-between mb-4">
                    <Link href="/">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <LanguageToggle />
                </div>

                <div className="text-center space-y-4">
                    <div className="text-6xl md:text-8xl">🥣</div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('feedCalculator.title')}
                    </h1>
                    <p className="text-muted-foreground">
                        {t('feedCalculator.subtitle')}
                    </p>
                </div>

                <Card>
                    <CardContent className="space-y-8 pt-6">
                        {/* Weight */}
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Label className="text-lg font-semibold">{t('feedCalculator.weight')}</Label>
                                <span className="text-xl font-bold text-primary">{weight} kg</span>
                            </div>
                            <Slider
                                value={[weight]}
                                onValueChange={(vals) => setWeight(vals[0])}
                                min={1}
                                max={50}
                                step={0.5}
                                className="py-4"
                            />
                        </div>

                        {/* Age Group */}
                        <div className="space-y-4">
                            <Label className="text-lg font-semibold">{t('feedCalculator.age')}</Label>
                            <RadioGroup value={ageGroup} onValueChange={(v) => setAgeGroup(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                    <RadioGroupItem value="puppy" id="puppy" />
                                    <Label htmlFor="puppy" className="cursor-pointer">{t('feedCalculator.puppy')}</Label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                    <RadioGroupItem value="adult" id="adult" />
                                    <Label htmlFor="adult" className="cursor-pointer">{t('feedCalculator.adult')}</Label>
                                </div>
                                <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                    <RadioGroupItem value="senior" id="senior" />
                                    <Label htmlFor="senior" className="cursor-pointer">{t('feedCalculator.senior')}</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* Activity (Only for Adult) */}
                        {ageGroup === 'adult' && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
                                <Label className="text-lg font-semibold">{t('feedCalculator.activity')}</Label>
                                <RadioGroup value={activity} onValueChange={(v) => setActivity(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="low" id="low" />
                                        <Label htmlFor="low" className="cursor-pointer">{t('feedCalculator.lowActivity')}</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="normal" id="normal" />
                                        <Label htmlFor="normal" className="cursor-pointer">{t('feedCalculator.normalActivity')}</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-accent">
                                        <RadioGroupItem value="high" id="high" />
                                        <Label htmlFor="high" className="cursor-pointer">{t('feedCalculator.highActivity')}</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        )}

                        {/* Feed Kcal */}
                        <div className="space-y-4">
                            <Label className="text-lg font-semibold">{t('feedCalculator.calorie')}</Label>
                            <div className="flex items-center gap-4">
                                <Input
                                    type="number"
                                    value={feedKcal}
                                    onChange={(e) => setFeedKcal(Number(e.target.value))}
                                    className="text-lg"
                                />
                                <span className="text-muted-foreground whitespace-nowrap">kcal/kg</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                * {t('feedCalculator.calorie')}는 사료 포장지 뒷면에서 확인할 수 있습니다.
                            </p>
                        </div>

                        <Button size="lg" className="w-full text-xl h-14" onClick={calculate}>
                            <Calculator className="mr-2 w-6 h-6" />
                            {t('feedCalculator.calculate')}
                        </Button>
                    </CardContent>
                </Card>

                {result && (
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800 animate-in zoom-in-95 duration-300">
                        <CardHeader>
                            <h3 className="text-xl font-bold text-center text-green-800 dark:text-green-300">
                                {t('feedCalculator.result')}
                            </h3>
                        </CardHeader>
                        <CardContent className="text-center space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                                    <p className="text-sm text-muted-foreground mb-1">{t('feedCalculator.dailyCalorie')}</p>
                                    <p className="text-2xl font-bold text-foreground">{result.dailyKcal} kcal</p>
                                </div>
                                <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl border-2 border-green-500/20">
                                    <p className="text-sm text-muted-foreground mb-1">{t('feedCalculator.dailyAmount')}</p>
                                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{result.dailyAmount} g</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-green-100/50 dark:bg-green-900/20 p-3 rounded-lg">
                                <Info className="w-4 h-4" />
                                <span>
                                    {t('feedCalculator.cup')} {(result.dailyAmount / 80).toFixed(1)} {t('feedCalculator.cupUnit')}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
