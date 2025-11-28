import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { LanguageToggle } from '@/components/language-toggle';
import { DOG_BEHAVIORS, CAT_BEHAVIORS, BehaviorCategory, BehaviorItem } from '@/data/pet-behavior';

export default function PetTranslator() {
    const [, setLocation] = useLocation();
    const { language, t } = useI18n();
    const [species, setSpecies] = useState<'dog' | 'cat'>('dog');
    const [category, setCategory] = useState<BehaviorCategory>('tail');
    const [selectedBehavior, setSelectedBehavior] = useState<BehaviorItem | null>(null);

    const behaviors = species === 'dog' ? DOG_BEHAVIORS : CAT_BEHAVIORS;
    const filteredBehaviors = behaviors.filter(b => b.category === category);

    const handleBehaviorSelect = (behaviorId: string) => {
        const behavior = behaviors.find(b => b.id === behaviorId);
        setSelectedBehavior(behavior || null);
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
                    <div className="text-6xl md:text-8xl">🗣️</div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t('petTranslator.title')}
                    </h1>
                    <p className="text-muted-foreground">
                        {t('petTranslator.subtitle')}
                    </p>
                </div>

                <Tabs defaultValue="dog" onValueChange={(v) => { setSpecies(v as 'dog' | 'cat'); setSelectedBehavior(null); }} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="dog" className="text-lg py-3">🐶 {t('petTranslator.dog')}</TabsTrigger>
                        <TabsTrigger value="cat" className="text-lg py-3">🐱 {t('petTranslator.cat')}</TabsTrigger>
                    </TabsList>

                    <Card>
                        <CardContent className="space-y-6 pt-6">
                            {/* Category Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('petTranslator.category')}</label>
                                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    {(['tail', 'ears', 'sound'] as BehaviorCategory[]).map((cat) => (
                                        <Button
                                            key={cat}
                                            variant={category === cat ? 'default' : 'outline'}
                                            onClick={() => { setCategory(cat); setSelectedBehavior(null); }}
                                            className="whitespace-nowrap"
                                        >
                                            {t(`petTranslator.categories.${cat}`)}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Behavior Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('petTranslator.action')}</label>
                                <Select onValueChange={handleBehaviorSelect} value={selectedBehavior?.id || ''}>
                                    <SelectTrigger className="h-12 text-lg">
                                        <SelectValue placeholder={t('petTranslator.selectAction')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {filteredBehaviors.map((b) => (
                                            <SelectItem key={b.id} value={b.id}>
                                                {language === 'ko' ? b.action : b.actionEn}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </Tabs>

                {selectedBehavior && (
                    <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800 animate-in zoom-in-95 duration-300">
                        <CardHeader className="text-center pb-2">
                            <div className="text-6xl mb-4 animate-bounce">{selectedBehavior.emoji}</div>
                            <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300">
                                "{language === 'ko' ? selectedBehavior.meaning : selectedBehavior.meaningEn}"
                            </h3>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-xl flex items-start gap-3 text-left">
                                <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-sm text-yellow-700 dark:text-yellow-500 mb-1">
                                        {t('petTranslator.tip')}
                                    </p>
                                    <p className="text-foreground">
                                        {language === 'ko' ? selectedBehavior.tip : selectedBehavior.tipEn}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
