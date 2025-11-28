import { useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { storage } from '@/lib/storage';
import { getCompatibility } from '@/data/compatibilityData';
import { dogTypes, catTypes, ownerTypes } from '@/data/typeInfo';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';

export default function CompatibilityDetail() {
    const [, setLocation] = useLocation();
    const { t, language } = useI18n();
    const { theme } = useTheme();

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            if (theme === 'system') {
                setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
            } else {
                setIsDark(theme === 'dark');
            }
        };

        checkTheme();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') checkTheme();
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const petResult = storage.getState().petResult;
    const ownerResult = storage.getState().ownerResult;
    const petSpecies = storage.getState().petSpecies;

    useEffect(() => {
        if (!petResult || !ownerResult) {
            setLocation('/');
        }
    }, [petResult, ownerResult, setLocation]);

    if (!petResult || !ownerResult) return null;

    const compatibility = getCompatibility(petResult, ownerResult);
    if (!compatibility || !compatibility.detailReport) return null;

    const petTypeInfo = petSpecies === 'dog' ? dogTypes[petResult] : catTypes[petResult];
    const ownerTypeInfo = ownerTypes[ownerResult];

    // Radar Chart Data
    const data = [
        {
            subject: language === 'ko' ? '에너지' : 'Energy',
            A: petTypeInfo.stats?.energy || 0,
            B: ownerTypeInfo.stats?.energy || 0,
            fullMark: 10,
        },
        {
            subject: language === 'ko' ? '애정도' : 'Affection',
            A: petTypeInfo.stats?.affection || 0,
            B: ownerTypeInfo.stats?.affection || 0,
            fullMark: 10,
        },
        {
            subject: language === 'ko' ? '독립성' : 'Independence',
            A: petTypeInfo.stats?.independence || 0,
            B: ownerTypeInfo.stats?.independence || 0,
            fullMark: 10,
        },
        {
            subject: language === 'ko' ? '호기심' : 'Curiosity',
            A: petTypeInfo.stats?.curiosity || 0,
            B: ownerTypeInfo.stats?.curiosity || 0,
            fullMark: 10,
        },
        {
            subject: language === 'ko' ? '차분함' : 'Calmness',
            A: petTypeInfo.stats?.calmness || 0,
            B: ownerTypeInfo.stats?.calmness || 0,
            fullMark: 10,
        },
    ];

    const { detailReport } = compatibility;

    // Chart colors based on theme
    const gridColor = isDark ? "#4b5563" : "#e5e7eb";
    const textColor = isDark ? "#9ca3af" : "#6b7280";
    const petColor = "#FF6B6B";
    const ownerColor = "#4ECDC4";

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-primary/5 p-4 sticky top-0 z-10 backdrop-blur-sm bg-white/30 dark:bg-black/30 border-b border-border/10">
                <div className="max-w-2xl mx-auto flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={() => setLocation('/final-result')}
                        className="text-muted-foreground hover:text-primary"
                    >
                        ← {t('common.back')}
                    </Button>
                    <h1 className="font-bold text-lg text-primary">
                        {language === 'ko' ? '상세 궁합 리포트' : 'Detailed Report'}
                    </h1>
                    <div className="w-10" /> {/* Spacer */}
                </div>
            </header>

            <main className="max-w-2xl mx-auto p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                {/* Title Section */}
                <div className="text-center space-y-2 mt-4">
                    <div className="text-6xl mb-4 animate-bounce">{compatibility.emoji}</div>
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        {language === 'ko' ? compatibility.title : compatibility.titleEn}
                    </h2>
                    <p className="text-muted-foreground">
                        {language === 'ko' ? compatibility.subtitle : compatibility.subtitleEn}
                    </p>
                </div>

                {/* Radar Chart Section */}
                <Card className="border-none shadow-lg bg-white/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-lg">
                            {language === 'ko' ? '성향 분석 그래프' : 'Personality Radar Chart'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid stroke={gridColor} />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: textColor, fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                <Radar
                                    name={language === 'ko' ? '반려동물' : 'Pet'}
                                    dataKey="A"
                                    stroke={petColor}
                                    fill={petColor}
                                    fillOpacity={0.4}
                                />
                                <Radar
                                    name={language === 'ko' ? '보호자' : 'Owner'}
                                    dataKey="B"
                                    stroke={ownerColor}
                                    fill={ownerColor}
                                    fillOpacity={0.4}
                                />
                                <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-center text-muted-foreground mt-2">
                            * {language === 'ko' ? '넓을수록 해당 성향이 강함을 의미합니다.' : 'Wider area means stronger trait.'}
                        </p>
                    </CardContent>
                </Card>

                {/* Deep Dive Analysis */}
                <div className="space-y-6">
                    <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            🔍 {language === 'ko' ? '심층 분석' : 'Deep Dive Analysis'}
                        </h3>
                        <p className="leading-relaxed text-foreground/90">
                            {language === 'ko' ? detailReport.analysis : detailReport.analysisEn}
                        </p>
                    </div>

                    {/* Recommended Missions */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-lg px-2">
                            ✨ {language === 'ko' ? '추천 미션' : 'Recommended Missions'}
                        </h3>
                        <div className="grid gap-3">
                            {(language === 'ko' ? detailReport.missions : detailReport.missionsEn).map((mission, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white dark:bg-card p-4 rounded-xl shadow-sm border border-border/40">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                                        {idx + 1}
                                    </span>
                                    <span>{mission}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Letters Section */}
                    <div className="space-y-6 pt-4">
                        <h3 className="font-bold text-lg px-2 text-center">
                            💌 {language === 'ko' ? '서로에게 보내는 편지' : 'Letters to Each Other'}
                        </h3>

                        {/* Letter from Pet */}
                        <div className="relative bg-[#FFF9C4] dark:bg-yellow-900/40 p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md ml-4 mr-8 transform -rotate-1 border border-yellow-200/50 dark:border-yellow-700/30">
                            <div className="absolute -top-3 -left-3 text-4xl">🐾</div>
                            <p className="font-handwriting text-lg leading-relaxed text-slate-800 dark:text-slate-200">
                                "{language === 'ko' ? detailReport.letterToOwner : detailReport.letterToOwnerEn}"
                            </p>
                            <p className="text-right text-sm text-slate-500 dark:text-slate-400 mt-2 font-bold">
                                - {language === 'ko' ? '반려동물이' : 'From Pet'} -
                            </p>
                        </div>

                        {/* Letter from Owner */}
                        <div className="relative bg-[#E3F2FD] dark:bg-blue-900/40 p-6 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md ml-8 mr-4 transform rotate-1 border border-blue-200/50 dark:border-blue-700/30">
                            <div className="absolute -top-3 -right-3 text-4xl">🧑‍🤝‍🧑</div>
                            <p className="font-handwriting text-lg leading-relaxed text-slate-800 dark:text-slate-200">
                                "{language === 'ko' ? detailReport.letterToPet : detailReport.letterToPetEn}"
                            </p>
                            <p className="text-right text-sm text-slate-500 dark:text-slate-400 mt-2 font-bold">
                                - {language === 'ko' ? '보호자가' : 'From Owner'} -
                            </p>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}
