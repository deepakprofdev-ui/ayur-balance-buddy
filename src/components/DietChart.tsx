import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PatientData } from './AyurvedicForm';

interface MealRecommendation {
  meal: string;
  foods: {
    name: string;
    calories: number;
    ayurvedicProperty: string;
    rasa: string[];
    doshaBalance: string;
    nutritionalNote: string;
    ayurvedicExplanation: string;
  }[];
}

interface Recipe {
  name: string;
  ingredients: string[];
  steps: string[];
  nutritionNotes: string;
  ayurvedicNotes: string;
}

interface DietPlan {
  meals: MealRecommendation[];
  recipes: Recipe[];
  dos: string[];
  donts: string[];
  lifestyleAdvice: string[];
}

interface DietChartProps {
  patientData: PatientData;
  onBack: () => void;
}

export const DietChart: React.FC<DietChartProps> = ({ patientData, onBack }) => {
  // Generate personalized diet plan based on patient data
  const generateDietPlan = (data: PatientData): DietPlan => {
    const isPittaImbalance = data.healthConditions.includes('Acidity') || data.healthConditions.includes('Hypertension');
    const isVataImbalance = data.healthConditions.includes('Anxiety/Stress') || data.healthConditions.includes('Insomnia');
    const isKaphaImbalance = data.healthConditions.includes('Obesity') || data.healthConditions.includes('Diabetes');

    // Base meal structure with Ayurvedic principles
    const meals: MealRecommendation[] = [
      {
        meal: 'Breakfast (7-8 AM)',
        foods: isPittaImbalance ? [
          {
            name: 'Moong Dal Khichdi with Ghee',
            calories: 220,
            ayurvedicProperty: 'Cooling, Light, Easy to digest',
            rasa: ['Sweet', 'Astringent'],
            doshaBalance: 'Balances Pitta, Calms Vata',
            nutritionalNote: 'High protein (8g), Complex carbs, B-vitamins',
            ayurvedicExplanation: 'Cooling nature reduces acidity and inflammation. Easy digestibility calms aggravated Pitta dosha.'
          },
          {
            name: 'Coconut Water with Soaked Almonds (5)',
            calories: 80,
            ayurvedicProperty: 'Cooling, Light',
            rasa: ['Sweet'],
            doshaBalance: 'Excellent for Pitta',
            nutritionalNote: 'Electrolytes, Vitamin E, Healthy fats',
            ayurvedicExplanation: 'Natural coolant that neutralizes excess heat and acidity in the body.'
          }
        ] : isVataImbalance ? [
          {
            name: 'Warm Oats with Dates and Ghee',
            calories: 280,
            ayurvedicProperty: 'Warming, Nourishing, Heavy',
            rasa: ['Sweet'],
            doshaBalance: 'Grounds Vata, Provides stability',
            nutritionalNote: 'Fiber (4g), Iron, Magnesium',
            ayurvedicExplanation: 'Warm, moist, and heavy qualities calm anxious Vata energy and provide grounding.'
          },
          {
            name: 'Warm Milk with Turmeric',
            calories: 120,
            ayurvedicProperty: 'Warming, Nourishing',
            rasa: ['Sweet', 'Bitter'],
            doshaBalance: 'Calms Vata, Reduces inflammation',
            nutritionalNote: 'Calcium, Curcumin, Protein',
            ayurvedicExplanation: 'Warm milk nourishes nervous system; turmeric reduces inflammation and calms the mind.'
          }
        ] : [
          {
            name: 'Vegetable Upma with Curry Leaves',
            calories: 200,
            ayurvedicProperty: 'Light, Warming, Stimulating',
            rasa: ['Sweet', 'Pungent'],
            doshaBalance: 'Reduces Kapha, Stimulates metabolism',
            nutritionalNote: 'Complex carbs, Fiber, B-vitamins',
            ayurvedicExplanation: 'Light and dry qualities reduce heavy Kapha. Spices stimulate digestive fire (Agni).'
          },
          {
            name: 'Green Tea with Ginger',
            calories: 15,
            ayurvedicProperty: 'Warming, Light, Stimulating',
            rasa: ['Pungent', 'Bitter'],
            doshaBalance: 'Excellent for Kapha reduction',
            nutritionalNote: 'Antioxidants, Metabolism booster',
            ayurvedicExplanation: 'Ginger kindles digestive fire; green tea stimulates metabolism and reduces excess Kapha.'
          }
        ]
      },
      {
        meal: 'Lunch (12-1 PM)',
        foods: isPittaImbalance ? [
          {
            name: 'Basmati Rice with Bottle Gourd Curry',
            calories: 300,
            ayurvedicProperty: 'Cooling, Easily digestible',
            rasa: ['Sweet'],
            doshaBalance: 'Perfect for Pitta pacification',
            nutritionalNote: 'Complex carbs, Vitamin C, Potassium',
            ayurvedicExplanation: 'Cooling vegetables like bottle gourd reduce internal heat and support healthy digestion.'
          },
          {
            name: 'Fresh Buttermilk with Mint',
            calories: 60,
            ayurvedicProperty: 'Cooling, Digestive',
            rasa: ['Sour', 'Sweet'],
            doshaBalance: 'Cools Pitta, Aids digestion',
            nutritionalNote: 'Probiotics, Calcium, Electrolytes',
            ayurvedicExplanation: 'Cooling buttermilk with mint naturally reduces acidity and supports digestive health.'
          }
        ] : isVataImbalance ? [
          {
            name: 'Quinoa Khichdi with Seasonal Vegetables',
            calories: 350,
            ayurvedicProperty: 'Nourishing, Grounding, Warm',
            rasa: ['Sweet'],
            doshaBalance: 'Deeply nourishing for Vata',
            nutritionalNote: 'Complete protein, Fiber, Iron',
            ayurvedicExplanation: 'One-pot meals with healthy fats ground scattered Vata energy and provide sustained nourishment.'
          },
          {
            name: 'Warm Vegetable Soup',
            calories: 120,
            ayurvedicProperty: 'Warming, Nourishing, Light',
            rasa: ['Sweet'],
            doshaBalance: 'Calms and nourishes Vata',
            nutritionalNote: 'Vitamins, Minerals, Hydration',
            ayurvedicExplanation: 'Warm liquids are essential for Vata types to maintain proper hydration and nervous system health.'
          }
        ] : [
          {
            name: 'Barley Salad with Roasted Vegetables',
            calories: 280,
            ayurvedicProperty: 'Light, Dry, Cooling',
            rasa: ['Sweet', 'Astringent'],
            doshaBalance: 'Excellent for Kapha reduction',
            nutritionalNote: 'High fiber, Low glycemic, Minerals',
            ayurvedicExplanation: 'Barley is specifically mentioned in Ayurveda for weight management and diabetes control.'
          },
          {
            name: 'Turmeric Tea',
            calories: 20,
            ayurvedicProperty: 'Warming, Light, Detoxifying',
            rasa: ['Bitter', 'Pungent'],
            doshaBalance: 'Reduces Kapha, Improves metabolism',
            nutritionalNote: 'Anti-inflammatory compounds',
            ayurvedicExplanation: 'Turmeric enhances metabolism and helps process accumulated toxins (Ama) in Kapha types.'
          }
        ]
      },
      {
        meal: 'Dinner (7-8 PM)',
        foods: isPittaImbalance ? [
          {
            name: 'Steamed Vegetables with Basmati Rice',
            calories: 250,
            ayurvedicProperty: 'Light, Cooling, Easily digestible',
            rasa: ['Sweet'],
            doshaBalance: 'Gentle for evening Pitta time',
            nutritionalNote: 'Fiber, Vitamins, Minerals',
            ayurvedicExplanation: 'Light dinner prevents nighttime acidity. Steaming preserves cooling properties of vegetables.'
          }
        ] : isVataImbalance ? [
          {
            name: 'Mung Bean Soup with Whole Wheat Chapati',
            calories: 320,
            ayurvedicProperty: 'Nourishing, Warm, Grounding',
            rasa: ['Sweet'],
            doshaBalance: 'Provides evening nourishment for Vata',
            nutritionalNote: 'Protein, Complex carbs, B-vitamins',
            ayurvedicExplanation: 'Warm, cooked foods in evening help Vata types maintain stable energy and peaceful sleep.'
          }
        ] : [
          {
            name: 'Vegetable Clear Soup with Quinoa',
            calories: 180,
            ayurvedicProperty: 'Light, Warming, Low-calorie',
            rasa: ['Sweet', 'Astringent'],
            doshaBalance: 'Perfect light dinner for Kapha',
            nutritionalNote: 'Low calories, High nutrition density',
            ayurvedicExplanation: 'Light evening meals prevent Kapha accumulation and support healthy weight management.'
          }
        ]
      }
    ];

    const recipes: Recipe[] = [
      {
        name: isPittaImbalance ? 'Cooling Bottle Gourd Curry' : isVataImbalance ? 'Nourishing Mung Bean Soup' : 'Metabolism-Boosting Vegetable Upma',
        ingredients: isPittaImbalance ? [
          '1 cup bottle gourd (diced)',
          '1 tsp ghee',
          '1/2 tsp cumin seeds',
          '1/4 tsp turmeric',
          'Fresh coriander leaves',
          'Salt to taste'
        ] : isVataImbalance ? [
          '1/2 cup yellow mung dal',
          '1 tsp ghee',
          '1/4 tsp ginger paste',
          '1/4 tsp cumin powder',
          'Pinch of hing (asafoetida)',
          'Salt to taste'
        ] : [
          '1 cup semolina (rava)',
          '2 tbsp oil',
          '1 tsp mustard seeds',
          '10-12 curry leaves',
          '1/4 cup mixed vegetables',
          '1/4 tsp turmeric powder'
        ],
        steps: isPittaImbalance ? [
          'Heat ghee in pan, add cumin seeds',
          'Add diced bottle gourd, cook until tender',
          'Add turmeric and salt',
          'Garnish with fresh coriander'
        ] : isVataImbalance ? [
          'Wash and cook mung dal until soft',
          'Heat ghee, add ginger and spices',
          'Mix with cooked dal',
          'Simmer for 5 minutes'
        ] : [
          'Dry roast semolina until fragrant',
          'Heat oil, add mustard seeds and curry leaves',
          'Add vegetables, cook briefly',
          'Add semolina and hot water gradually'
        ],
        nutritionNotes: isPittaImbalance ? 'Low in calories (80 per serving), high water content, rich in potassium' : 
                       isVataImbalance ? 'High protein (12g), easy to digest, rich in folate and magnesium' :
                       'Moderate calories (200), high fiber, B-complex vitamins',
        ayurvedicNotes: isPittaImbalance ? 'Bottle gourd has cooling properties (Sheeta Virya) and reduces Pitta heat naturally' :
                       isVataImbalance ? 'Mung dal is tridoshic but especially good for Vata with ghee and warm spices' :
                       'Curry leaves and mustard seeds specifically kindle digestive fire (Agni) essential for Kapha types'
      }
    ];

    const dos = isPittaImbalance ? [
      'Eat cooling foods like cucumber, mint, coconut water',
      'Have meals at regular times, especially lunch between 12-1 PM',
      'Drink room temperature or slightly warm water',
      'Practice calming activities like meditation',
      'Sleep by 10 PM to avoid late-night Pitta aggravation'
    ] : isVataImbalance ? [
      'Eat warm, cooked, and well-spiced foods',
      'Maintain regular meal times to ground Vata',
      'Include healthy fats like ghee, nuts, and avocados',
      'Practice grounding exercises like yoga and walking',
      'Create a peaceful, routine-based lifestyle'
    ] : [
      'Eat light, dry, and warm foods',
      'Include plenty of vegetables and whole grains',
      'Use warming spices like ginger, black pepper, turmeric',
      'Exercise regularly to stimulate metabolism',
      'Avoid heavy, oily, and cold foods'
    ];

    const donts = isPittaImbalance ? [
      'Avoid spicy, fried, and fermented foods',
      'Limit citrus fruits and tomatoes',
      'Avoid eating when stressed or angry',
      'Don\'t skip meals, especially lunch',
      'Avoid excessive sun exposure and heat'
    ] : isVataImbalance ? [
      'Avoid cold, dry, and raw foods',
      'Don\'t eat irregularly or skip meals',
      'Limit caffeine and stimulants',
      'Avoid excessive travel and overstimulation',
      'Don\'t eat while distracted or in a hurry'
    ] : [
      'Avoid heavy, oily, and sweet foods',
      'Limit dairy products and cold foods',
      'Don\'t overeat or eat late dinners',
      'Avoid sedentary lifestyle',
      'Limit afternoon naps and sleeping late'
    ];

    const lifestyleAdvice = isPittaImbalance ? [
      'Practice cooling pranayama (Sheetali, Sheetkari) to reduce internal heat',
      'Maintain work-life balance and avoid overexertion during midday',
      'Stay hydrated with cooling drinks like mint water and fresh fruit juices'
    ] : isVataImbalance ? [
      'Establish consistent daily routines for meals, sleep, and activities',
      'Practice grounding activities like oil massage (Abhyanga) with warm sesame oil',
      'Include meditation and gentle yoga to calm the nervous system'
    ] : [
      'Engage in regular vigorous exercise to stimulate metabolism and reduce lethargy',
      'Wake up early (before 6 AM) and avoid daytime sleeping',
      'Practice energizing pranayama (Bhastrika, Kapalabhati) to boost energy levels'
    ];

    return { meals, recipes, dos, donts, lifestyleAdvice };
  };

  const dietPlan = generateDietPlan(patientData);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Patient Summary */}
      <Card className="shadow-[var(--shadow-wellness)]">
        <CardHeader className="bg-gradient-to-r from-wellness-sage to-wellness-mint rounded-t-lg">
          <CardTitle className="text-xl">Patient Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div><strong>Age:</strong> {patientData.age} years</div>
            <div><strong>Gender:</strong> {patientData.gender}</div>
            <div><strong>Diet Type:</strong> {patientData.lifestyle.dietType}</div>
          </div>
          <div className="mt-3">
            <strong>Health Conditions:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {patientData.healthConditions.map((condition) => (
                <Badge key={condition} variant="secondary">{condition}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Diet Chart */}
      <Card className="shadow-[var(--shadow-wellness)]">
        <CardHeader className="bg-gradient-to-r from-primary to-wellness-saffron text-primary-foreground rounded-t-lg">
          <CardTitle className="text-2xl">Personalized Ayurvedic Diet Chart</CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Tailored recommendations based on your constitution and health needs
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {dietPlan.meals.map((mealPlan, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-primary mb-4">{mealPlan.meal}</h3>
                <div className="grid gap-4">
                  {mealPlan.foods.map((food, foodIndex) => (
                    <Card key={foodIndex} className="border-l-4 border-l-primary/30">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-foreground">{food.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{food.nutritionalNote}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline">{food.calories} cal</Badge>
                              <Badge variant="secondary">{food.ayurvedicProperty}</Badge>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div><strong>Rasa (Taste):</strong> {food.rasa.join(', ')}</div>
                            <div><strong>Dosha Balance:</strong> {food.doshaBalance}</div>
                            <div className="text-wellness-earth italic">{food.ayurvedicExplanation}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {index < dietPlan.meals.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recipes */}
      <Card className="shadow-[var(--shadow-wellness)]">
        <CardHeader className="bg-gradient-to-r from-wellness-warm to-wellness-earth rounded-t-lg">
          <CardTitle className="text-xl text-primary-foreground">Recommended Recipes</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {dietPlan.recipes.map((recipe, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{recipe.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Method:</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    {recipe.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-accent rounded-lg">
                <div>
                  <h5 className="font-semibold text-sm">Nutritional Benefits:</h5>
                  <p className="text-sm text-muted-foreground">{recipe.nutritionNotes}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sm">Ayurvedic Wisdom:</h5>
                  <p className="text-sm text-wellness-earth">{recipe.ayurvedicNotes}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Do's and Don'ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-[var(--shadow-wellness)]">
          <CardHeader className="bg-wellness-sage rounded-t-lg">
            <CardTitle className="text-lg text-accent-foreground">✓ Do's</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2 text-sm">
              {dietPlan.dos.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-wellness)]">
          <CardHeader className="bg-destructive/10 rounded-t-lg">
            <CardTitle className="text-lg text-destructive">✗ Don'ts</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2 text-sm">
              {dietPlan.donts.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Lifestyle Advice */}
      <Card className="shadow-[var(--shadow-wellness)]">
        <CardHeader className="bg-gradient-to-r from-wellness-mint to-wellness-sage rounded-t-lg">
          <CardTitle className="text-xl text-accent-foreground">Lifestyle Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            {dietPlan.lifestyleAdvice.map((advice, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-sm">{advice}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center">
        <Button onClick={onBack} variant="outline" size="lg">
          Create New Assessment
        </Button>
      </div>
    </div>
  );
};