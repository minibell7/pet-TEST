import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Mic, Activity, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';
import { DOG_BEHAVIORS, CAT_BEHAVIORS, BehaviorCategory, BehaviorItem } from '@/data/pet-behavior';
import { AdBanner } from '@/components/ad-banner';

export default function PetTranslator() {
    const [, setLocation] = useLocation();
    const { language, t } = useI18n();
    const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
    const [isRecording, setIsRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<BehaviorItem | null>(null);

    const behaviors = species === 'dog' ? DOG_BEHAVIORS : CAT_BEHAVIORS;

    const startTranslation = () => {
        setResult(null);
        setIsRecording(true);

        // Fake recording duration
        setTimeout(() => {
            setIsRecording(false);
            setIsAnalyzing(true);

            // Fake analysis duration
            setTimeout(() => {
                setIsAnalyzing(false);
                // Randomly select a behavior for demo purposes, or in a real app, based on audio input
                // For this fun app, we'll pick a random one from the list to simulate "translation"
                const randomBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];
                setResult(randomBehavior);
            }, 2000);
        }, 3000);
    };

    return (
        <div className="min-h-screen px-4 py-8 md:py-12">
            <div className="max-w-md w-full mx-auto space-y-8">
                <div className="flex items-center justify-between mb-4">
                    <Link href="/">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <LanguageToggle />
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-foreground">
                        {t('petTranslator.title')}
                    </h1>
                    <p className="text-muted-foreground">
                        {t('petTranslator.subtitle')}
                    </p>
                </div>

                <Tabs defaultValue="dog" onValueChange={(v) => { setSpecies(v as 'dog' | 'cat'); setResult(null); }} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary/50 p-1 rounded-xl">
                        <TabsTrigger value="dog" className="rounded-lg text-lg py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">🐶 {t('petTranslator.dog')}</TabsTrigger>
                        <TabsTrigger value="cat" className="rounded-lg text-lg py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">🐱 {t('petTranslator.cat')}</TabsTrigger>
                    </TabsList>

                    <div className="relative min-h-[400px] flex flex-col items-center justify-center">
                        {/* Main Interaction Area */}
                        {!isRecording && !isAnalyzing && !result && (
                            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                                <div className="relative group cursor-pointer" onClick={startTranslation}>
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all" />
                                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                                        <Mic className="w-20 h-20 text-white" />
                                    </div>
                                    <p className="mt-6 text-lg font-medium text-muted-foreground animate-pulse">
                                        Tap to Translate
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Recording State */}
                        {isRecording && (
                            <div className="text-center space-y-8">
                                <div className="relative w-48 h-48 rounded-full bg-red-500/10 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border-4 border-red-500/30 animate-ping" />
                                    <div className="w-32 h-32 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/50">
                                        <div className="flex gap-1 items-end h-12">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <div key={i} className="w-2 bg-white rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: `${i * 0.1}s`, height: '100%' }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-red-500">Listening...</p>
                            </div>
                        )}

                        {/* Analyzing State */}
                        {isAnalyzing && (
                            <div className="text-center space-y-8">
                                <div className="relative w-48 h-48 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <Activity className="w-24 h-24 text-blue-500 animate-spin" />
                                </div>
                                <p className="text-xl font-bold text-blue-500">Analyzing...</p>
                            </div>
                        )}

                        {/* Result State */}
                        {result && (
                            <Card className="w-full animate-in zoom-in-95 duration-500 border-primary/20 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
                                <CardHeader className="text-center pb-2">
                                    <div className="text-8xl mb-4 animate-bounce filter drop-shadow-lg">{result.emoji}</div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                        "{language === 'ko' ? result.meaning : result.meaningEn}"
                                    </h3>
                                </CardHeader>
                                <CardContent className="text-center space-y-6">
                                    <div className="bg-primary/5 p-4 rounded-xl text-left">
                                        <p className="text-foreground leading-relaxed">
                                            {language === 'ko' ? result.tip : result.tipEn}
                                        </p>
                                    </div>
                                    <Button onClick={() => setResult(null)} size="lg" className="w-full rounded-xl">
                                        Translate Again
                                    </Button>
                                </CardContent>
                            </Card>
                        )}

                        {result && <AdBanner className="max-w-md mx-auto mt-6" />}
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
